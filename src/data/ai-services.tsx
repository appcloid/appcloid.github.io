import React from 'react';
import { ServiceCard } from '@/types';
import {
  IconAIAgents,
  IconAIVision,
  IconNlp,
  IconPredictive,
  IconAutomation,
  IconGenerative
} from '@/components/icons';

export const aiServices: ServiceCard[] = [
  {
    id: 'ai-agents',
    title: 'Autonomous AI Agents',
    summary: 'Deploy intelligent agents that handle customer enquiries, scheduling, and support 24/7.',
    detail: 'Our autonomous agents go beyond simple chatbots. They integrate directly with your CRM and booking systems to perform complex workflows, qualify leads, and resolve customer issues in real-time, reducing operational overhead by up to 40%.',
    icon: <IconAIAgents />,
    category: 'ai'
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision Systems',
    summary: 'Automate visual inspection, quality control, and site monitoring with high-accuracy AI.',
    detail: 'We build robust computer vision pipelines that process video and image feeds in real-time. Whether it is detecting defects on a manufacturing line or monitoring health and safety compliance, our vision systems operate with superhuman precision.',
    icon: <IconAIVision />,
    category: 'ai'
  },
  {
    id: 'nlp',
    title: 'Natural Language Processing',
    summary: 'Extract actionable insights from unstructured text, contracts, and customer feedback.',
    detail: 'Turn thousands of documents, emails, and reviews into structured data instantly. Our NLP solutions automate contract analysis, sentiment scoring, and data entry, freeing your staff to focus on high-value strategic work.',
    icon: <IconNlp />,
    category: 'ai'
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Analytics',
    summary: 'Forecast demand, optimise inventory, and anticipate market shifts before they happen.',
    detail: 'Leverage your historical data to predict future outcomes. We engineer machine learning models that forecast sales trends, identify churn risks, and optimise supply chain logistics, giving you a decisive competitive advantage.',
    icon: <IconPredictive />,
    category: 'ai'
  },
  {
    id: 'intelligent-automation',
    title: 'Intelligent Automation',
    summary: 'Streamline complex, multi-step business processes with AI-driven workflow automation.',
    detail: 'We identify manual bottlenecks across your organisation and replace them with intelligent, automated pipelines. From invoice processing to employee onboarding, we ensure your operations run seamlessly and without human error.',
    icon: <IconAutomation />,
    category: 'ai'
  },
  {
    id: 'generative-ai',
    title: 'Generative AI Integration',
    summary: 'Supercharge your content creation, reporting, and coding with bespoke GenAI models.',
    detail: 'Integrate the power of LLMs (like GPT-4 and Claude) securely into your proprietary systems. We build bespoke generative tools that draft reports, generate marketing copy, and assist your team, all while keeping your enterprise data strictly private.',
    icon: <IconGenerative />,
    category: 'ai'
  }
];
