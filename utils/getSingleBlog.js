import allBlogs from "@/data/blogData.json";

export default async function getSingleBlog(id) {
    const blog = allBlogs.find((blog) => blog.id.toString() === id);
    return blog;
}
