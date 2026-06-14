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
    summary: 'Deploy intelligent agents that autonomously recommend topics, handle queries, and support students.',
    detail: 'We build applications like StudyStride, a web app students use to study their coursework. Its autonomous agent dynamically recommends topics to study, personalising the learning journey and keeping users continuously engaged.',
    icon: <IconAIAgents />,
    category: 'ai'
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision Systems',
    summary: 'Automate visual inspection and assess image content with high-accuracy AI.',
    detail: 'Our vision systems operate with superhuman precision. In StudyStride, our computer vision models have the capability to look at submitted pictures of assignments, assess the handwritten or visual content, and automatically mark the solutions.',
    icon: <IconAIVision />,
    category: 'ai'
  },
  {
    id: 'nlp',
    title: 'Natural Language Processing',
    summary: 'Extract actionable insights and generate complex coursework from natural language instructions.',
    detail: 'Turn unstructured instructions into structured, valuable content. Using NLP, StudyStride can take plain-text instructions and autonomously create entire coursework modules tailored for both teachers and students.',
    icon: <IconNlp />,
    category: 'ai'
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive Analytics',
    summary: 'Forecast outcomes, assess complexity, and rank performance automatically.',
    detail: 'Leverage historical data to predict future outcomes. StudyStride uses predictive analytics to analyse a student\'s coursework, assess the complexity and time required to complete it, rank student performance, and prepare comprehensive final reports.',
    icon: <IconPredictive />,
    category: 'ai'
  },
  {
    id: 'intelligent-automation',
    title: 'Intelligent Automation',
    summary: 'Streamline complex workflows, from delivering lectures to automated parent notifications.',
    detail: 'We replace manual bottlenecks with intelligent pipelines. In StudyStride, teachers can automate workflows where a lecture is delivered autonomously by an agent, which answers student questions in chat, checks progress, and sends automated notifications to parents.',
    icon: <IconAutomation />,
    category: 'ai'
  },
  {
    id: 'generative-ai',
    title: 'Generative AI Integration',
    summary: 'Supercharge content creation with bespoke GenAI models for rich multimedia generation.',
    detail: 'Integrate the power of multimodal LLMs securely into your systems. StudyStride uses Generative AI to create dynamic course content, seamlessly generating text, images, audio, video, PowerPoint presentations, and PDFs on demand.',
    icon: <IconGenerative />,
    category: 'ai'
  }
];
