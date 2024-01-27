import type { CollectionConfig } from 'payload/types'

const Posts: CollectionConfig = {
  slug: 'posts',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
  ],
}
export default Posts
