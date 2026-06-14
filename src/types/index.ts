import { ReactNode } from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface IndustryCard {
  id: string;
  sector: string;
  icon: ReactNode;
  useCases: string[];
  accentColor: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  summary: string;
  detail: string;
  icon: ReactNode;
  category: 'ai' | 'traditional';
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  sector: string;
  message: string;
}

export interface PageMeta {
  title: string;
  description: string;
}
