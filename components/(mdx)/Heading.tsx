import React from "react";
import { slugify } from "@/lib/utils";

const createHeading = (level: 1 | 2 | 3 | 4 | 5 | 6) => {
    const Heading = ({ children }: { children: string }) => {
        const slug = slugify(children);

        return React.createElement(`h${level}`,
            { id: slug },
            [
                React.createElement("a", {
                    href: `#${slug}`,
                    key: `link-${slug}`,
                    className: "anchor"
                })
            ],
            children
        )
    }

    return Heading;
}

export default createHeading;