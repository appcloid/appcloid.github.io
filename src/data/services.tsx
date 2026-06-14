import React from 'react';
import { ServiceCard } from '@/types';
import {
  IconWebDev,
  IconAppDev,
  IconCloud,
  IconData,
  IconCyber
} from '@/components/icons';

export const traditionalServices: ServiceCard[] = [
  {
    id: 'web-development',
    title: 'Bespoke Web Development',
    summary: 'High-performance, visually stunning web applications built on modern, scalable architectures.',
    detail: 'We do not use generic templates. We engineer bespoke web platforms using React, Next.js, and strict TypeScript. From corporate portals to complex SaaS dashboards, our websites are lightning-fast, fully responsive, and ruthlessly optimised for SEO and accessibility.',
    icon: <IconWebDev />,
    category: 'traditional'
  },
  {
    id: 'app-development',
    title: 'Mobile App Engineering',
    summary: 'Native-quality iOS and Android applications designed for seamless user experiences.',
    detail: 'Engage your customers on the devices they use most. We develop robust, cross-platform mobile applications that offer native performance, offline capabilities, and intuitive interfaces, ensuring your brand is always just a tap away.',
    icon: <IconAppDev />,
    category: 'traditional'
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure & DevOps',
    summary: 'Secure, scalable, and resilient cloud architectures deployed on AWS, GCP, or Azure.',
    detail: 'Future-proof your business with enterprise-grade cloud infrastructure. We handle containerisation, CI/CD pipelines, and serverless architectures, ensuring your applications remain highly available and cost-efficient as your traffic scales.',
    icon: <IconCloud />,
    category: 'traditional'
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering & Pipelines',
    summary: 'Robust data warehouses and ETL pipelines that turn raw data into a strategic asset.',
    detail: 'AI is only as good as the data feeding it. We architect secure, high-throughput data pipelines that aggregate, clean, and store your business data in modern warehouses, setting the foundation for advanced analytics and machine learning.',
    icon: <IconData />,
    category: 'traditional'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Compliance',
    summary: 'Uncompromising security audits, penetration testing, and compliance engineering.',
    detail: 'Protect your reputation and your clients\' data. We bake security into every layer of our software, offering comprehensive vulnerability assessments, secure authentication flows, and adherence to GDPR, ISO 27001, and Cyber Essentials standards.',
    icon: <IconCyber />,
    category: 'traditional'
  }
];
