import React from 'react';
import { IndustryCard } from '@/types';
import {
  IconHealthcare,
  IconFinance,
  IconRetail,
  IconManufacturing,
  IconLogistics,
  IconRealEstate,
  IconEducation,
  IconLegal,
  IconHospitality
} from '@/components/icons';

export const industries: IndustryCard[] = [
  {
    id: 'healthcare',
    sector: 'Healthcare & Private Clinics',
    icon: <IconHealthcare />,
    useCases: [
      'Automated patient triage and appointment scheduling via AI agents.',
      'Secure, HIPAA/GDPR-compliant patient portal web applications.'
    ],
    accentColor: '#66FCF1'
  },
  {
    id: 'finance',
    sector: 'Financial & Professional Services',
    icon: <IconFinance />,
    useCases: [
      'Predictive analytics for cash flow forecasting and risk assessment.',
      'Secure client document portals with automated compliance checks.'
    ],
    accentColor: '#88BDF2'
  },
  {
    id: 'retail',
    sector: 'Retail & E-Commerce',
    icon: <IconRetail />,
    useCases: [
      'Bespoke, high-conversion e-commerce platforms with intelligent search.',
      'AI-driven inventory forecasting and dynamic pricing engines.'
    ],
    accentColor: '#BB86FC'
  },
  {
    id: 'manufacturing',
    sector: 'Manufacturing & Engineering',
    icon: <IconManufacturing />,
    useCases: [
      'Computer vision for automated quality control on the assembly line.',
      'Predictive maintenance alerts to minimise equipment downtime.'
    ],
    accentColor: '#66FCF1'
  },
  {
    id: 'logistics',
    sector: 'Logistics & Distribution',
    icon: <IconLogistics />,
    useCases: [
      'AI route optimisation to reduce fuel costs and delivery times.',
      'Real-time fleet tracking and automated dispatch web dashboards.'
    ],
    accentColor: '#88BDF2'
  },
  {
    id: 'real-estate',
    sector: 'Real Estate & Property Management',
    icon: <IconRealEstate />,
    useCases: [
      '24/7 AI conversational agents for tenant enquiries and viewing bookings.',
      'Immersive property showcases and automated portfolio management apps.'
    ],
    accentColor: '#BB86FC'
  },
  {
    id: 'education',
    sector: 'Education & EdTech',
    icon: <IconEducation />,
    useCases: [
      'Personalised AI tutoring systems and automated grading pipelines.',
      'Scalable, secure learning management systems (LMS) built from the ground up.'
    ],
    accentColor: '#66FCF1'
  },
  {
    id: 'legal',
    sector: 'Legal Services',
    icon: <IconLegal />,
    useCases: [
      'NLP-driven contract analysis and automated document abstraction.',
      'Secure, encrypted client communication and case management portals.'
    ],
    accentColor: '#88BDF2'
  },
  {
    id: 'hospitality',
    sector: 'Hospitality & Leisure',
    icon: <IconHospitality />,
    useCases: [
      'Intelligent booking engines with dynamic, demand-based pricing.',
      'AI concierges to handle guest requests and local recommendations instantly.'
    ],
    accentColor: '#BB86FC'
  }
];
