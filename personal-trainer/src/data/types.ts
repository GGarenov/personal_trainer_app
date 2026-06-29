export interface DetailFeature {
  title: string;
  body: string;
}

export interface IconFeature {
  icon: string;
  title: string;
  body: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProgramDetail {
  tagline: string;
  rating: number;
  reviews: number;
  badges: string[];
  splits: string[];
  optionLabel?: string;
  includedItems: string[];
  whatsNew: DetailFeature[];
  whatsIncluded?: DetailFeature[];
  highlights?: string[];
  needs?: string;
  youWillGetIntro?: string;
  youWillGet?: IconFeature[];
  faqs: FaqItem[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  features: string[];
  popular?: boolean;
  detail?: ProgramDetail;
}
