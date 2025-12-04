// Data types for Car News Agent

export interface OriginalArticle {
  title: string;
  summary: string;
  link: string;
  source_name: string;
  published: string;
  brand_name: string;
}

export interface Rewrite {
  title: string;
  content: string;
}

export interface Evaluation {
  score: number;
  grade: string;
  passed: boolean;
  feedback: string[];
}

export interface Article {
  success: boolean;
  article: any;
  original_english: OriginalArticle;
  rewrite: Rewrite;
  rank: any;
  sao: string;
  markdown: string;
  eval: Evaluation;
  usage: any;
  duration: number;
}

export interface Summary {
  total_processed: number;
  total_passed: number;
  cost: number;
  duration: number;
  timestamp: string;
}

export interface DailyDigest {
  summary: Summary;
  passing_articles: Article[];
  date: string;
}
