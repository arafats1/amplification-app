import { SortOrder } from "../../util/SortOrder";

export type BlogOrderByInput = {
  body?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
