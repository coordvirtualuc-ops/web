import {type SchemaTypeDefinition} from 'sanity'

import {author} from './author'
import {blockContent} from './blockContent'
import {category} from './category'
import {post} from './post'
import {seo} from './seo'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [post, category, author, blockContent, seo],
}
