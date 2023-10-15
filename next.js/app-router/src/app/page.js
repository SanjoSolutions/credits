import "@sanjo/credits/styles.css"
import { Credit } from "@sanjo/credits"
import { MDXRemote } from "next-mdx-remote/rsc"
import { mdxOptions } from "../mdxOptions.mjs"

export const metadata = {
  title: "Credits",
}

const credits = [
  {
    name: "Project 1 with a long name",
    author: "Author 1",
    url: "http://example.com",
    license: `The MIT License (MIT)

Copyright (c) \\<year> \\<author>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,
  },
  {
    name: "Project 2",
    author: "Author 2",
    url: "http://example.com",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
  },
  {
    name: "Project 2",
    url: "http://example.com",
    license: `The MIT License (MIT)

Copyright (c) \\<year> \\<author>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`,
  },
]

export default async function Page() {
  return (
    <>
      <h1>Credits</h1>

      {credits.map((credit, index) => (
        <Credit
          key={index}
          {...credit}
          license={
            credit.license && (
              <MDXRemote
                source={credit.license.trim()}
                options={{ mdxOptions }}
              />
            )
          }
          info={
            credit.info && (
              <MDXRemote source={credit.info.trim()} options={{ mdxOptions }} />
            )
          }
        />
      ))}
    </>
  )
}
