import styles from "@/styles/page/post.module.css";
import getAllBlogs from "@/utils/getAllBlogs";
import getSingleBlog from "@/utils/getSingleBlog";

export default async function page({ params }) {
    const blog = await getSingleBlog(params.id);

    return (
        <main className={styles.page}>
            <div className={styles.container}>
                <h1 className={styles.title}>{blog.title}</h1>
            </div>
            <div className={styles.container} style={{ marginTop: "1rem" }}>
                <p>
                    <span className={styles.author}>{blog.author}</span> on{" "}
                    <span className={styles.date}>{blog.date}</span>
                </p>
            </div>
            <div className={styles.container} style={{ marginTop: "2rem" }}>
                <p className={styles.content}>{blog.content}</p>
            </div>
        </main>
    );
}

export async function generateStaticParams() {
    const allBlogs = await getAllBlogs();
    const staticParams = allBlogs.map((blog) => ({
        id: blog.id.toString(),
    }));
    return staticParams;
}
