export interface Course {
  id: string;
  name: string;
  date: Date | string;
  length: number;
  topRated: boolean;
  description: string;
}

export interface CoursesRequestParams {
  start?: number;
  count?: number;
  sort?: string;
  textFragment?: string;
}
