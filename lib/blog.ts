import fs from "fs";
import path from "path";
import frontmatter from "gray-matter";

interface PostMetadata {
    title: string,
    summary: string,
    publish_date: string,
    image?: string
}

const getMDXFiles = (dir: string) => {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

const readMDXFile = (filePath: string) => {
    const content = fs.readFileSync(filePath, "utf-8");
    const matter = frontmatter(content);
    
    return { metadata: matter.data as PostMetadata, content: matter.content }
}

export const getBlogPosts = () => {
    const blogPostsDir = path.join(process.cwd(), "content", "blog");
    const mdxFiles = getMDXFiles(blogPostsDir);
    const posts = mdxFiles.map((file) => {
        const { metadata, content } = readMDXFile(path.join(blogPostsDir, file));
        const slug = path.basename(file, path.extname(file));
        return { slug, metadata, content }
    })

    return posts
}