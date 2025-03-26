import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {remark} from "remark";
import html from "remark-html";

import { PostMeta } from "@/ts/posts";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // 获取文件名
  const fileNames: string[] = fs.readdirSync(postsDirectory);

  const allPostsData: PostMeta[] = fileNames.map((fileName) => {
    // 用文件名当作文件唯一id
    const id = fileName.replace(/\.md$/, "");

    // 读取文件内容
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // 获取元数据
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });
  // 按日期排序
  return allPostsData.sort((a, b) => {
    if (!a.date || !b.date) return 0;
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  console.log('matterResult',matterResult)
  return {
    id,
    ...matterResult.data,
    contentHtml,
  };
}
