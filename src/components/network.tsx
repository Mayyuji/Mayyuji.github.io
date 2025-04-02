"use client"; // 标记为客户端组件（Next.js 13+）

import { useEffect, useRef } from "react";
import { Network, Options, Edge, Node } from "vis-network";
import { DataSet } from "vis-data";

interface NetworkComponentProps {
  nodes: Node[];
  edges: Edge[];
  options?: Options;
}

export default function NetworkComponent({
  nodes,
  edges,
  options,
}: NetworkComponentProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const networkRef = useRef<Network | null>(null);

  const hoverActiveRef = useRef<boolean | null>(null);  // 用于判断鼠标是否悬停在节点上
  const dragActiveRef = useRef<boolean | null>(null);   // 用于判断鼠标是否拖拽节点
  const targetNodeRef = useRef<Node | null>(null);      // 用于存储拖拽目标节点
  const activeNodeRef = useRef<Node | null>(null);      // 用于存储当前激活的菜单节点
  const showMenuRef = useRef<boolean | null>(null);

  useEffect(() => {
    const basicNodes: Node[] = [
      {
        id: 0, label: "",
        opacity: 0,
        widthConstraint: 0, level: 2, physics: true, chosen: false,
        shape: 'text',
      },
      {
        id: 999,
        label: "<b><i>访问</i></b>",
        opacity: 0.7,

        color: {
          border: "#FF6B6B", // 边框颜色
          background: "#ffffff" // 背景色
        },
        font: {
          color: '#FF6B6B',
          multi: true,
        },
        shapeProperties: { borderDashes: [5, 10] },
        borderWidth: 2, widthConstraint: {
          minimum: 130,
        }, fixed: true, x: 1000, y: 0, level: 2, physics: false, chosen: false,
      }
    ]

    const basicEdges = [{
      from: 0, to: 999, length: 400, label: '拖拽放入节点前往', color: '#45B7D1',
      font: {
        size: 20,
        vadjust: -20,
      }, chosen: false, width: 2, physics: true,
      arrows: { to: { enabled: true, scaleFactor: 1, type: 'arrow' } },
      dashes: true,
    },]


    if (!containerRef.current) return;



    // 初始化 DataSet
    const nodesDataset = new DataSet<Node>(nodes);
    const edgesDataset = new DataSet<Edge>(edges);

    nodesDataset.add(basicNodes);
    edgesDataset.add(basicEdges);

    // 创建网络图
    networkRef.current = new Network(
      containerRef.current,
      { nodes: nodesDataset, edges: edgesDataset },
      options || {}
    );

    function showSecondMenu(activeNode: Node) {
      if (activeNodeRef.current?.id) {
        nodesDataset.update({
          id: activeNodeRef.current.id,
          mass: 1,
          widthConstraint: false,
          fixed: false
        })
      }
      activeNodeRef.current = activeNode;
      showMenuRef.current = true;
      nodesDataset.update([
        {
          // 物理节点防越界
          id: 'self-1',
          label: "",
          fixed: true,
          level: 1, physics: true, chosen: false,
          mass: 0.5, x: -415, y: -450,
          shape: 'text',
        },
        {
          // 目标节点
          ...activeNode,
          fixed: true,
          widthConstraint: {
            minimum: 100,
          },
          mass: 0.5,
          x: -510,
          y: -350,
        }, {
          // 关闭引导物理学
          id: 0,
          physics: false,
          x: -720,
          y: -40
        }, {
          ...basicNodes[1],
          label: "<b><i>返回\n<b><i>切换</i></b>",
          physics: false,
          mass: 0,
          x: -500,
          y: 200
        }
      ]);
      edgesDataset.update(Object.assign(basicEdges[0], { label: '拖拽放入节点' }));
    }

    function backHome() {
      nodesDataset.remove('self-1');
      if (activeNodeRef.current && activeNodeRef.current!.id) {
        nodesDataset.remove(activeNodeRef.current!.id);
        activeNodeRef.current = null;
      }
      nodesDataset.update([...nodes, ...basicNodes])
      edgesDataset.update([...edges, ...basicEdges]);
      networkRef.current?.moveNode(1, 310, -60);
      networkRef.current?.moveTo({ position: { x: 200, y: 0 } });
    }

    networkRef.current?.on("doubleClick", (params) => {
      console.log('params', params)
    });


    networkRef.current?.on("dragStart", (params) => {
      const targetNode = nodesDataset.get(params.nodes[0]) as Node;
      if (!Array.isArray(targetNode) && targetNode.id !== 999) {
        targetNodeRef.current = targetNode;
        dragActiveRef.current = true;
      }
    });

    networkRef.current?.on("dragEnd", (params) => {
      const targetNode = nodesDataset.get(params.nodes[0]) as Node;
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
              showSecondMenu(targetNode)
            }
          } else {
            // 显示菜单
            showSecondMenu(targetNode)
          }
        }
      }
    });

    networkRef.current.on("hoverNode", (params) => {
      if (params.node === 999) {
        hoverActiveRef.current = true;
        if (targetNodeRef.current && dragActiveRef.current) {
          nodesDataset.update([{
            id: 999,
            label: targetNodeRef.current.label,
            color: targetNodeRef.current.color,
            font: targetNodeRef.current.font,
            shapeProperties: { borderDashes: false },
            opacity: 1,
          }]);
        }
      }
    });

    networkRef.current.on("blurNode", (params) => {
      if (params.node === 999) {
        hoverActiveRef.current = false;
        if (dragActiveRef.current) {
          nodesDataset.update([{
            id: 999,
            label: showMenuRef.current ? "<b><i>返回\n<b><i>切换</i></b>" : basicNodes[1].label,
            color: basicNodes[1].color,
            font: basicNodes[1].font,
            widthConstraint: basicNodes[1].widthConstraint,
            shapeProperties: basicNodes[1].shapeProperties,
            opacity: 0.7,
          }]);
        } else {
          targetNodeRef.current = null;
        }
      }
    });


    // 销毁实例（组件卸载时）
    return () => {
      if (networkRef.current) {
        networkRef.current.destroy();
      }
    };
  }, [nodes, edges, options]);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
}