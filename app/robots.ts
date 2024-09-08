import type { MetadataRoute } from "next";
import { getHostURL } from "@/lib/misc";

export default function robots(): MetadataRoute.Robots {
    const hostURL = getHostURL();

    return {
        rules: {
            userAgent: "*",
            allow: "/"
        },
        sitemap: `${hostURL}/sitemap.xml`,
        host: hostURL.split("//")[1]
    }
}