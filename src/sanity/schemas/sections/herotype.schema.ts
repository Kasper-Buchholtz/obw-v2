// ./schemas/heroType.ts

import { defineArrayMember, defineField, defineType } from "sanity";
import { HeroIcon } from '@/components/sanity/PageBuilderIcons'
export const heroType = defineType({
  name: "hero",
  type: "object",
  icon: HeroIcon,
  groups: [
    { title: "Media", name: "media" },
    { title: "Design", name: "design" },
    { title: "Content", name: "content" },
    { title: "Indstillinger", name: "settings" },
  ],
  description:
    "Banneret fungerer som et sidehoved, der skaber blikfang fra første øjekast og gør siden overskuelig.",
  title: "Hero 1",
  fields: [
    defineField({
      name: 'content',
      type: 'array',
      title: 'Indhold',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'media',
              type: 'file',
              title: 'Video',
            }),
            defineField({
              name: 'link',
              type: 'link',
              title: 'Link',
            })
          ]
        })
      ],
    })

  ],
  preview: {
    select: {
      title: "link.label",
      tagline: "tagline",
      type: "type",
      media: "image",
    },
    prepare({ title, tagline, media }) {
      return {
        title: title || "Ingen titel",
        type: "Hero",
        subtitle: "Topbanner",
        media,
      };
    },
  },
});
