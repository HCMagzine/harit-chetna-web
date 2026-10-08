import { defineField, defineType } from "sanity";

export const editorialBoard = defineType({
  name: "editorialBoard",
  title: "Editorial Board Member",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      options: {
        list: [
          "Editor-in-Chief",
          "Managing Editor",
          "Associate Editor",
          "Editorial Board Member",
          "Technical Advisor",
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "affiliation", title: "Affiliation", type: "string" }),
    defineField({ name: "photo", title: "Profile Photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "bio", title: "Biography", type: "text", rows: 4 }),
    defineField({ name: "order", title: "Display Order", type: "number", initialValue: 0 }),
  ],
  preview: { select: { title: "name", subtitle: "role", media: "photo" } },
});