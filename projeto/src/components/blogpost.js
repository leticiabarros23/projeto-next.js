// import Image from 'next/image';
import styles from './BlogPost.module.css';

const BlogPost = ({ title, date, image, content }) => {
  return (
    <article className={styles.post}>
      <h2>{title}</h2>
      <p className={styles.date}>Data: {date}</p>
      <Image src={image} alt={title} width={500} height={300} className={styles.image} />
      <p>{content}</p>
    </article>
  );
};

export default BlogPost;
