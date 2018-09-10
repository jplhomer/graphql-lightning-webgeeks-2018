import { swiss } from 'mdx-deck/themes'
import coy from 'react-syntax-highlighter/styles/prism/coy'
import diff from 'react-syntax-highlighter/languages/prism/diff'
import graphql from 'react-syntax-highlighter/languages/prism/graphql'
import json from 'react-syntax-highlighter/languages/prism/json'

export default {
  ...swiss,
  prism: {
    style: coy,
    languages: {
      diff,
      graphql,
      json
    }
  }
}
