import styles from "@/styles/page/blogs.module.css";
import BlogCard from "@/components/BlogCard";
import getAllBlogs from "@/utils/getAllBlogs";

export default async function page() {
    const allBlogs = await getAllBlogs();

    return (
        <main className={styles.page}>
            <div className={styles.container}>
                <h1 className={styles.title}>All Blogs</h1>
            </div>
            <div className={styles.container} style={{ marginTop: "2rem" }}>
                <div className={styles.cardList}>
                    {allBlogs.map((blog) => {
                        return <BlogCard key={blog.id} blog={blog} />;
                    })}
                </div>
            </div>
        </main>
    );
}
