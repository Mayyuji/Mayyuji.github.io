import styles from './posts.module.css'

export interface ChildRef {
  handle: () => void | unknown;
}

export default function Posts({ ref }: { ref: React.RefObject<ChildRef | null> }) {
  const handle = () => {
    console.log(123132);
  }
  // 将方法挂载到 ref 上
  if (ref) {
    ref.current = { handle };
  }
  return <div className={styles.posts}>123</div>
}


