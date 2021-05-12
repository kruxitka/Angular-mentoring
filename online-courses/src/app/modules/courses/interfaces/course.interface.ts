export interface Course {
  id: string;
  name: string;
  date: Date | string;
  length: number;
  topRated: boolean;
  description: string;
}
