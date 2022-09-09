export type FileType = 'png' | 'jpeg';

export interface ParsedRequest {
  seed: string;
  fileType: FileType;
  text: string;
  md: boolean;
  fontSize: string;
  images: string[];
  widths: string[];
  heights: string[];
}
