import { Publication as TPublication } from "../api/publication/Publication";

export const PUBLICATION_TITLE_FIELD = "id";

export const PublicationTitle = (record: TPublication): string => {
  return record.id || String(record.id);
};
