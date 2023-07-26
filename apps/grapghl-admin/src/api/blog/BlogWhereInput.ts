import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BlogWhereInput = {
  body?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
