export interface Course {
  id?: string;
  name: string;
  date: Date | string;
  length: number;
  description: string;
  authors: Authors;
  topRated: boolean;
}

export interface Authors {
  id: number;
  name: string;
}

export interface CoursesRequestParams {
  start?: number;
  count?: number;
  sort?: string;
  textFragment?: string;
}
