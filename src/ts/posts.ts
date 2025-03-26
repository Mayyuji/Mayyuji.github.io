export interface PostMeta {
  id: string;
  title?: string;
  date?: string;
  tags?: string[];
}

export interface PostData extends PostMeta {
  contentHtml: string;
}
