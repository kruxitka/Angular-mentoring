export interface Course {
  id?: string;
  title?: string;
  creationDate?: Date | string;
  duration: number | string;
  topRated: boolean;
  description?: string;
}
