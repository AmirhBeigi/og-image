export type FileType = "png" | "jpeg";

export interface ParsedRequest {
  fileType: FileType;
  title: string;
  username: string;
  optionsLength: number;
}
