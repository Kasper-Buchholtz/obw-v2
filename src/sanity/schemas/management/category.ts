import { Tag } from "@mynaui/icons-react";

export default {
  name: "category",
  title: "Kategori",
  type: "document",
  icon: Tag,
  fields: [
    {
      name: "title",
      title: "Navn",
      description: "Navnet på medarbejder",
      type: "string",
    },
  ],
};
