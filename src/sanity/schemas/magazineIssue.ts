import { defineType, defineField } from "sanity";

export const magazineIssue = defineType({
  name: "magazineIssue",
  title: "Magazine Issue",
  type: "document",
  fields: [
    defineField({
      name: "volumeNumber",
      title: "Volume Number",
      type: "number",
      validation: (Rule) => Rule.required().integer().positive(),
    }),
    defineField({
      name: "issueNumber",
      title: "Issue Number",
      type: "number",
      validation: (Rule) => Rule.required().integer().positive(),
    }),
    defineField({
      name: "monthYear",
      title: "Month/Year",
      type: "date",
      options: {
        dateFormat: "MM-YYYY",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "pdfFile",
      title: "PDF Document",
      type: "file",
      options: {
        accept: "application/pdf",
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
