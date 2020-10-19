import { Format } from "./media";

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  published_at: Date;
  updated_at: Date;
  cover: Format[];
}
