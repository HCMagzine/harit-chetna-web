import { defineField, defineType } from "sanity";

export const submissionType = defineType({
  name: "submission",
  title: "Article Submission",
  type: "document",
  fields: [
    defineField({ name: "authorName", title: "Author Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "authorEmail", title: "Author Email", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "paperTitle", title: "Paper Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "abstractText", title: "Abstract / Message", type: "text" }),
    defineField({ name: "manuscriptFile", title: "Manuscript", type: "file", validation: (Rule) => Rule.required() }),
    defineField({ name: "paymentReceipt", title: "Payment Receipt", type: "file", validation: (Rule) => Rule.required() }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: ["Pending Review", "In Review", "Accepted", "Rejected"] },
      initialValue: "Pending Review",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "submittedAt", title: "Submitted At", type: "datetime", validation: (Rule) => Rule.required() }),
  ],
  preview: { select: { title: "paperTitle", subtitle: "authorName" } },
});