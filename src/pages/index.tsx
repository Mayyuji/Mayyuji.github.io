import Head from "next/head";
import dynamic from "next/dynamic";

import { siteTitle } from "../components/layout";
import { getSortedPostsData } from '../lib/post'

// import { PostMeta } from "@/ts/posts";

const Network = dynamic(
  () => import("@/components/network"),
  { ssr: false, loading: () => <p>Loading...</p> }
);

// export default function Home({ allPostsData }: { allPostsData: PostMeta[] }) {
export default function Home() {
  const nodes = [
    { id: 1, label: "Node 1", color: "#FF6B6B", level: 1 },
    { id: 2, label: "Node 2", color: "#4ECDC4", level: 1 },
    { id: 3, label: "Node 3", color: "#45B7D1", level: 1 },
    { id: 4, label: "Node 4", color: "#4517D1", level: 1 },
    { id: 5, label: "Node 5", color: "#15B7D1", level: 1 },
    { id: 6, label: "Node 6", color: "#49B7D1", level: 1 },
  ];

  const edges = [
    { from: 2, to: 1 },
    { from: 3, to: 1 },
    { from: 4, to: 1 },
    { from: 5, to: 1 },
    { from: 6, to: 1 },
    { from: 7, to: 1 },
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

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Network nodes={nodes} edges={edges} options={options} />
      {/* <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://www.nextjs.cn/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              {title}
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              {date}
            </small>
          </li>
          ))}
        </ul>
      </section> */}
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