import styles from "@/styles/component/blogCard.module.css";
import Link from "next/link";

export default function BlogCard({ blog }) {
    return (
        <article className={styles.card}>
            <Link className={styles.title} href={`/blogs/${blog.id}`}>
                <span>{blog.title}</span>
            </Link>
            <div style={{ marginTop: "0.5rem" }}>
                <div className={styles.date}>{blog.date}</div>
            </div>
        </article>
    );
}
