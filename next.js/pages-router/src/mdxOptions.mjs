import remarkGfm from "remark-gfm"
import remarkHeadingId from "remark-heading-id"
import classNames from "rehype-class-names"
import rehypeExternalLinks from "rehype-external-links"
import rehypeHighlight from "rehype-highlight"

export const mdxOptions = {
  remarkPlugins: [remarkGfm, [remarkHeadingId, { defaults: true }]],
  rehypePlugins: [
    [
      rehypeExternalLinks,
      { target: "_blank", rel: ["noopener", "noreferrer"] },
    ],
    rehypeHighlight,
    [classNames, { blockquote: "blockquote" }],
  ],
}
