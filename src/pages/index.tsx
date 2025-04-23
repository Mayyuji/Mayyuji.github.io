import Head from "next/head";
import dynamic from "next/dynamic";
import { Node, Position } from "vis-network";
import { useRef } from "react";

import { siteTitle } from "../components/layout";
import { getSortedPostsData } from '../lib/post'
import Posts, { ChildRef } from "../components/posts";
import { NetworkChildRef } from "../components/network";

const NetworkLoading = () => (
  <div style={{
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f5f5f5'
  }}>
    <div style={{
      padding: '20px',
      borderRadius: '8px',
      background: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <p style={{ margin: 0 }}>正在加载网络图...</p>
    </div>
  </div>
);

const Network = dynamic(
  () => import("@/components/network"),
  {
    ssr: false,
    loading: NetworkLoading,
  }
);

// export default function Home({ allPostsData }: { allPostsData: PostMeta[] }) {
export default function Home() {
  const nodes = [
    {
      id: 1,
      label: "Home",
      shape: "custom",
      ctxRenderer: ({ ctx, x, y, style }: { ctx: CanvasRenderingContext2D; x: number; y: number; style: { size: number; color?: string; borderWidth?: number; borderColor?: string } }) => {
        const r = style.size;
        const drawNode = () => {
          const width = 2 * r;   // 节点宽度
          const height = 2 * r;  // 节点高度

          // 以 (x, y) 为中心，计算矩形左上角坐标
          const left = x - width / 2;
          const top = y - height / 2;

          // 绘制墙面（矩形）
          ctx.beginPath();
          ctx.fillStyle = "#FFE4B5";
          ctx.strokeStyle = "#8B4513";
          ctx.rect(left, top, width, 40); // 使用基于中心的坐标
          ctx.fill();
          ctx.stroke();

          // 绘制屋顶（三角形）
          ctx.beginPath();
          ctx.fillStyle = "#8B4513";
          ctx.moveTo(left - width * 0.2, top);          // 左顶点
          ctx.lineTo(left + width * 1.2, top);          // 右顶点
          ctx.lineTo(x, top - height * 0.5);            // 顶部顶点（直接使用中心 x）
          ctx.closePath();
          ctx.fill();

          // 绘制门（矩形）
          ctx.fillStyle = "#8B4513";
          ctx.fillRect(
            left + 6,
            top + 15,
            width * 0.4,
            height * 0.5
          );

          // 绘制窗户（方形）
          ctx.beginPath();
          ctx.fillStyle = "#87CEEB";
          ctx.fillRect(
            left + width * 0.6,
            top + height * 0.1,
            width * 0.3,
            height * 0.3
          );
          ctx.fill();
        };
        return {
          drawNode,
          nodeDimensions: { width: 2 * r, height: 2 * r },
        };
      },
    },
    { id: 2, label: "文章", color: "#4ECDC4", level: 1, shape: "diamond" },
    { id: 3, label: "关于本站", color: "#15B7D1", level: 1, shape: "star" },
    { id: 4, label: "标签", color: "#25B7D1", level: 1, shape: "triangleDown" },
  ];

  const edges = [
    { from: 2, to: 1 },
    { from: 3, to: 1 },
    { from: 4, to: 1 },
  ];

  const options = {
    nodes: {
      shape: "circle",
      font: { size: 20 },
      mass: 2,
    },
    edges: {
      arrows: { to: false, },
      length: 100,
      smooth: {
        enabled: true,
        type: "dynamic",
        roundness: 1,
      }
    },
    physics: {
      enabled: true,
    },
    interaction: {
      dragView: true,
      hover: true
    },
  };

  const networkRef = useRef<NetworkChildRef>(null)
  const childRef = useRef<ChildRef>(null)

  const loadNote = (node: Node, position?: Position) => {
    console.log('node',node)
    console.log('position',position)
    // TODO 根据 node.id 加载对应的笔记
  }
  
  // 调用子组件方法
  const getChildData = () => {
    const data = childRef.current?.handle()
    console.log('Received:', data)
  }

  // 更新坐标
  const updateDOM = (position: Position) => {
    console.log('position',position)
  }

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Network ref={networkRef} nodes={nodes} edges={edges} options={options} loadNote={loadNote} updateDOM={updateDOM}/>
      <button onClick={getChildData}>get data from child</button>
      <Posts ref={childRef}/>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}