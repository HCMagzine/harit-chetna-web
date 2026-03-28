import { defineType, defineField } from "sanity";

export const editorialBoardMember = defineType({
  name: "editorialBoardMember",
  title: "Editorial Board Member",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      options: {
        list: [
          { title: "Editor-in-Chief", value: "Editor-in-Chief" },
          { title: "Managing Editor", value: "Managing Editor" },
          { title: "Associate Editor", value: "Associate Editor" },
          { title: "Editorial Board Member", value: "Editorial Board Member" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "affiliation",
      title: "Affiliation",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "profilePhoto",
      title: "Profile Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
