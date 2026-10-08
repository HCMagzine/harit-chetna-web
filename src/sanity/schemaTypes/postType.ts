import {DocumentTextIcon} from '@sanity/icons/DocumentText'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post / Research Article',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    // 1. Main Article Details
    defineField({
      name: 'title',
      title: 'Article / Paper Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle / Abstract Summary',
      type: 'text',
      rows: 3,
      description: 'A 2-3 sentence summary for previews, SEO meta tags, and academic abstracts.',
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    // 2. Authors & Contributors (Academic Standard)
    defineField({
      name: 'author',
      title: 'Primary Author / Lead Researcher',
      type: 'reference',
      to: {type: 'author'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coAuthors',
      title: 'Co-Authors / Editorial Contributors',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'author'}})],
      description: 'Add multiple contributing researchers or secondary authors.',
    }),

    // 3. Publishing & Volume Metadata (International Journal Standard)
    defineField({
      name: 'publishedAt',
      title: 'Publication Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'volume',
      title: 'Volume Number',
      type: 'string',
      description: 'e.g., Vol. 3',
    }),
    defineField({
      name: 'issue',
      title: 'Issue Number / Edition',
      type: 'string',
      description: 'e.g., Issue 2 (2026)',
    }),
    defineField({
      name: 'doi',
      title: 'DOI / Registration ID (Optional)',
      type: 'string',
      description: 'Digital Object Identifier for peer-reviewed papers.',
    }),
    defineField({
      name: 'isPeerReviewed',
      title: 'Peer-Reviewed Paper',
      type: 'boolean',
      initialValue: false,
    }),

    // 4. Downloadable Media & Multimedia
    defineField({
      name: 'pdfFile',
      title: 'Downloadable PDF Version',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
      description: 'Upload the official PDF file for readers and Google Scholar indexing.',
      fields: [
        defineField({
          name: 'description',
          type: 'string',
          title: 'Button Label',
          initialValue: 'Download Full PDF Paper',
        }),
      ],
    }),
    defineField({
      name: 'videoUrl',
      title: 'Embedded Video Link (YouTube / Vimeo)',
      type: 'url',
      description: 'URL for supplementary video interviews or field demonstrations.',
    }),

    // 5. Featured Image & Media
    defineField({
      name: 'mainImage',
      title: 'Featured Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text (For Accessibility & SEO)',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'caption',
          type: 'string',
          title: 'Image Caption / Photo Credit',
        }),
      ],
    }),

    // 6. Classification & SEO Keywords
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords / Index Terms',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      options: {
        layout: 'tags',
      },
      description: 'Enter search keywords (e.g., Organic Farming, Soil Health, Krishi Patrika).',
    }),

    // 7. Full Article Body
    defineField({
      name: 'body',
      title: 'Article Body Content',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      publishedAt: 'publishedAt',
    },
    prepare(selection) {
      const {title, author, media, publishedAt} = selection
      const date = publishedAt ? new Date(publishedAt).toLocaleDateString() : ''
      return {
        title,
        subtitle: `${author ? `by ${author}` : 'No Author'} ${date ? `| ${date}` : ''}`,
        media,
      }
    },
  },
})