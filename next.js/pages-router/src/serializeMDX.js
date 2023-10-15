import { serialize } from "next-mdx-remote/serialize"
import { mdxOptions } from "./mdxOptions.mjs"

export async function serializeMDX(content) {
  return await serialize(content, {
    mdxOptions,
  })
}
