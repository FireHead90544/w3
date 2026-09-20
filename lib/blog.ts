import fs from "fs";
import path from "path";
import frontmatter from "gray-matter";

interface PostMetadata {
    title: string,
    summary: string,
    publish_date: string,
    reference?: string
}

const getMDXFiles = (dir: string) => {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

const readMDXFile = (filePath: string) => {
    const content = fs.readFileSync(filePath, "utf-8");
    const matter = frontmatter(content);
    const metadata = matter.data as Omit<PostMetadata, "publish_date"> & { publish_date: string | Date };
    
    return {
        metadata: {
            ...metadata,
            publish_date: metadata.publish_date instanceof Date
                ? metadata.publish_date.toISOString().split("T")[0]
                : metadata.publish_date
        },
        content: matter.content
    }
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