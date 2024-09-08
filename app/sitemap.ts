import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";
import { getHostURL } from "@/lib/misc";

export default function sitemap(): MetadataRoute.Sitemap {
    const hostURL = getHostURL();
    const posts = getBlogPosts().map((post) => ({
        url: `${hostURL}/blog/${post.slug}`,
        lastModified: new Date(post.metadata.publish_date).toISOString().split("T")[0],
        priority: 0.9
    }));

    const routes = [
        "/",
        "/work",
        "/blog",
    ].map((route) => ({
        url: `${hostURL}${route}`,
        lastModified: new Date().toISOString().split("T")[0],
        priority: 1.0,
    }))

    return [...routes, ...posts]
}