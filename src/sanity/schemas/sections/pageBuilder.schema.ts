import { defineArrayMember, defineType } from 'sanity'
import PageBuilderInput from '@/components/sanity/PageBuilderInput'

export const pageBuilder = defineType({
  name: 'pageBuilder',
  type: 'array',
  title: 'Indhold',
  components: {
    input: PageBuilderInput,
  },
  options: {
    sortable: true,
  },
  of: [
    defineArrayMember({
      name: 'hero',
      type: 'hero',
    }),
    defineArrayMember({
      name: 'WatchType',
      type: 'WatchType',
    }),
    defineArrayMember({
      name: 'ImagesType',
      type: 'ImagesType',
    })
  ],
})
