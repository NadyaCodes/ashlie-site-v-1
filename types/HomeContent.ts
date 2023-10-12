import { PortableTextBlock } from "sanity";

export type HomeContent = {
  _id: string;
  _createdAt: Date;
  name: string;
  header: string;
  header2: string[];
  homeContent: PortableTextBlock[]
  image: string;
  alt: string;
  copywrite?: string;
  termsContent?: PortableTextBlock[];
  privacyContent?: PortableTextBlock[]
}