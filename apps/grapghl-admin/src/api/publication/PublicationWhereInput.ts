import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PublicationWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
};
