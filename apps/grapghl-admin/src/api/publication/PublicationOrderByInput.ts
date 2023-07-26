import { SortOrder } from "../../util/SortOrder";

export type PublicationOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
