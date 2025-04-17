import styles from './posts.module.css'

interface NoteProps {
  title?: string;
  content?: string;
  onTitleChange?: (title: string) => void;
}

const Note: React.FC<NoteProps> = ({
  title,
  content,
  onTitleChange = () => {},
}) => {
  return (
    <div className={styles.note}>
      <input
        type="text"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
      />
      {content}
    </div>
  );
};

export default Note;
