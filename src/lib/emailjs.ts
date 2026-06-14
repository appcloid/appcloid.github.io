import emailjs from '@emailjs/browser';
import { ContactFormData } from '@/types';

export const sendEnquiry = async (data: ContactFormData) => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS environment variables are missing');
  }

  // Map our domain data structure to the template variables defined in EmailJS
  const templateParams = {
    from_name: data.name,
    company_name: data.company,
    reply_to: data.email,
    sector: data.sector,
    message: data.message,
  };

  return emailjs.send(serviceId, templateId, templateParams, {
    publicKey: publicKey,
  });
};
