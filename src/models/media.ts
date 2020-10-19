export interface Media {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  hash: string;
  ext: string;
  size: number;
  url: string;
  created_at: Date;
  updated_at: Date;
  formats: Format[];
}

interface Format {
  ext: string;
  url: string;
  hash: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
}
