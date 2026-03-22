import { visit } from 'unist-util-visit'
import { toString } from 'mdast-util-to-string'
import GithubSlugger from 'github-slugger'

export default function remarkTocHeadings(options) {
  const slugger = new GithubSlugger()

  return (tree) =>
    visit(tree, 'heading', (node) => {
      const textContent = toString(node)
      options.exportRef.push({
        value: textContent,
        url: '#' + slugger.slug(textContent),
        depth: node.depth,
      })
    })
}
