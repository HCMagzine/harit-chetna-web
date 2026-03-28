import { type SchemaTypeDefinition } from "sanity";
import { blogPost } from "./blogPost";
import { magazineIssue } from "./magazineIssue";
import { editorialBoardMember } from "./editorialBoardMember";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogPost, magazineIssue, editorialBoardMember],
};
