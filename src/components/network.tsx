"use client"; // 标记为客户端组件（Next.js 13+）

import { useEffect, useRef } from "react";
import { Network, Options, Edge, Node } from "vis-network";
import { useRouter } from 'next/router';
import { DataSet } from "vis-data";

enum ChildRefType {
  NODE = 'NODE',
  EDGE = 'EDGE'
}

export interface NetworkChildRef {
  add: (type: ChildRefType, obj: (Node | Node[]) & (Edge | Edge[])) => void | unknown;
  update: (type: ChildRefType, obj: (Node | Node[]) & (Edge | Edge[])) => void | unknown;
  remove: (type: ChildRefType, obj: (Node | Node[]) & (Edge | Edge[])) => void | unknown;
}

interface NetworkComponentProps {
  nodes: Node[];
  edges: Edge[];
  options?: Options;
  loadNote: (node: Node) => void; // 处理节点的函数
  ref: React.RefObject<NetworkChildRef | null>;
}

enum NodeType {
  Home = 1,
  Posts = 2,
  About = 3,
  Tags = 4,
}

export default function NetworkComponent(
  { nodes, edges, options, loadNote, ref }: NetworkComponentProps,
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const networkRef = useRef<Network | null>(null);

  const hoverActiveRef = useRef<boolean | null>(null); // 用于判断鼠标是否悬停在节点上
  const dragActiveRef = useRef<boolean | null>(null); // 用于判断鼠标是否拖拽节点
  const targetNodeRef = useRef<Node | null>(null); // 用于存储拖拽目标节点
  const activeNodeRef = useRef<Node | null>(null); // 用于存储当前激活的菜单节点
  const showMenuRef = useRef<boolean | null>(null); // 菜单ref
  const routerLodingRef = useRef<boolean | null>(null);


  const router = useRouter();
  // 初始化 DataSet
  const nodesDataset = useRef<DataSet<Node>>(null);
  const edgesDataset = useRef<DataSet<Edge>>(null);

  useEffect(() => {
    const basicNodes: Node[] = [
      {
        id: 0,
        label: "",
        opacity: 0,
        widthConstraint: 0,
        level: 2,
        physics: true,
        chosen: false,
        shape: "text",
      },
      {
        id: 999,
        label: "<b><i>访问</i></b>",
        opacity: 0.7,

        color: {
          border: "#FF6B6B", // 边框颜色
          background: "#ffffff", // 背景色
        },
        font: {
          color: "#FF6B6B",
          multi: true,
        },
        shapeProperties: { borderDashes: [5, 10] },
        borderWidth: 2,
        widthConstraint: {
          minimum: 130,
        },
        fixed: true,
        x: 1000,
        y: 0,
        level: 2,
        physics: false,
        chosen: false,
      },
    ];

    const basicEdges = [
      {
        from: 0,
        to: 999,
        length: 400,
        label: "拖拽放入节点前往",
        color: "#45B7D1",
        font: {
          size: 20,
          vadjust: -20,
        },
        chosen: false,
        width: 2,
        physics: true,
        arrows: { to: { enabled: true, scaleFactor: 1, type: "arrow" } },
        dashes: true,
      },
    ];

    nodesDataset.current = new DataSet<Node>(nodes);
    edgesDataset.current = new DataSet<Edge>(edges);

    if (!containerRef.current) return;

    nodesDataset.current.add(basicNodes);
    edgesDataset.current.add(basicEdges);

    // 创建网络图
    networkRef.current = new Network(
      containerRef.current,
      { nodes: nodesDataset.current, edges: edgesDataset.current },
      options || {}
    );

    // 地址参数处理
    function cookType(node: Node) {
      if (node.id === 1) {
        window.history.replaceState({ ...window.history.state, as: window.location.pathname }, '', window.location.pathname);
        return
      }
      if (node.id && node.id in NodeType) {
        const newUrl = `${window.location.pathname}?type=${node.id}`;
        window.history.replaceState({ ...window.history.state, as: newUrl }, '', newUrl);
      }
    }

    function showSecondMenu(activeNode: Node) {
      cookType(activeNode);
      loadNote(activeNode);
      // 节点处理
      if (activeNodeRef.current?.id) {
        nodesDataset.current?.update({
          id: activeNodeRef.current.id,
          mass: 1,
          widthConstraint: false,
          fixed: false,
        });
      }
      activeNodeRef.current = activeNode;
      showMenuRef.current = true;
      nodesDataset.current?.update([
        {
          // 目标节点
          ...activeNode,
          fixed: true,
          widthConstraint: {
            minimum: 100,
          },
          mass: 0.1,
          x: -510,
          y: -350,
        },
        {
          // 关闭引导物理学
          id: 0,
          physics: false,
          x: -720,
          y: -40,
        },
        {
          ...basicNodes[1],
          label: "<b><i>返回\n<b><i>切换</i></b>",
          physics: false,
          mass: 0.1,
          x: -500,
          y: 200,
        },
      ]);
      edgesDataset.current?.update(
        Object.assign(basicEdges[0], { label: "拖拽放入节点" })
      );
      // 防止乱飞
      networkRef.current?.setOptions({
        physics: {
          wind: {
            x: -0.3,
            y: 0.2,
          },
        },
      });
    }

    function backHome() {
      networkRef.current?.setOptions({
        physics: {
          wind: {
            x: 0,
            y: 0,
          },
        },
      });
      if (activeNodeRef.current && activeNodeRef.current!.id) {
        nodesDataset.current?.remove(activeNodeRef.current!.id);
        activeNodeRef.current = null;
      }
      nodesDataset.current?.update([...nodes, ...basicNodes]);
      edgesDataset.current?.update([...edges, ...basicEdges]);
      networkRef.current?.moveNode(1, 310, -60);
      networkRef.current?.moveTo({ position: { x: 200, y: 0 } });
      cookType({ id: 1 });
    }

    networkRef.current?.on("dragStart", (params) => {
      const targetNode = nodesDataset.current?.get(params.nodes[0]) as Node;
      if (!Array.isArray(targetNode) && targetNode.id !== 999) {
        targetNodeRef.current = targetNode;
        dragActiveRef.current = true;
      }
    });

    networkRef.current?.on("dragEnd", (params) => {
      const targetNode = nodesDataset.current?.get(params.nodes[0]) as Node;
      if (!Array.isArray(targetNode) && targetNode.id !== 999) {
        dragActiveRef.current = false;
        if (hoverActiveRef.current) {
          if (showMenuRef.current) {
            showMenuRef.current = false;
            // 已经显示菜单了,处理返回首页还是访问其他
            if (targetNode.id === 1) {
              // networkRef.current?.setData({ nodes: nodes.concat(basicNodes), edges: edges.concat(basicEdges) }); // 没有动画效果
              backHome();
            } else {
              showSecondMenu(targetNode);
            }
          } else {
            // 显示菜单
            if (targetNode.id === 1) {
              // 如果是Home,返回
              backHome();
              return
            }
            showSecondMenu(targetNode);
          }
        }
      }
    });

    networkRef.current.on("hoverNode", (params) => {
      if (params.node === 999) {
        hoverActiveRef.current = true;
        if (targetNodeRef.current && dragActiveRef.current) {
          nodesDataset.current?.update([
            {
              id: 999,
              label: targetNodeRef.current.label,
              color: targetNodeRef.current.color,
              font: targetNodeRef.current.font,
              shapeProperties: { borderDashes: false },
              opacity: 1,
            },
          ]);
        }
      }
    });

    networkRef.current.on("blurNode", (params) => {
      if (params.node === 999) {
        hoverActiveRef.current = false;
        if (dragActiveRef.current) {
          nodesDataset.current?.update([
            {
              id: 999,
              label: showMenuRef.current
                ? "<b><i>返回\n<b><i>切换</i></b>"
                : basicNodes[1].label,
              color: basicNodes[1].color,
              font: basicNodes[1].font,
              widthConstraint: basicNodes[1].widthConstraint,
              shapeProperties: basicNodes[1].shapeProperties,
              opacity: 0.7,
            },
          ]);
        } else {
          targetNodeRef.current = null;
        }
      }
    });

    ref.current = {
      add: (type, obj) => {
        const dataset = type === ChildRefType.NODE ? nodesDataset.current : edgesDataset.current;
        dataset?.add(obj);
      },
      update: (type, obj) => {
        const dataset = type === ChildRefType.NODE ? nodesDataset.current : edgesDataset.current;
        dataset?.update(obj);
      },
      remove: (type, obj) => {
        const dataset = type === ChildRefType.NODE ? nodesDataset.current : edgesDataset.current;
        dataset?.remove(obj);
      }
    }

    if (router.query.type) {
      if (routerLodingRef.current) return
      routerLodingRef.current = true;
      const type = router.query.type as string;
      nodes.filter((node) => {
        if (node.id === Number(type)) {
          routerLodingRef.current = false;
          showSecondMenu(node);
        }
      });
    }

    // 销毁实例（组件卸载时）
    return () => {
      if (networkRef.current) {
        networkRef.current.destroy();
      }
    };
  }, [nodes, edges, options, loadNote, router.query, router.isReady, edgesDataset, nodesDataset, ref]);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />
}
