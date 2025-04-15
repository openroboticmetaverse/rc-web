
import { Metadata } from 'next';
import ContactPageContent from '@/components/ContactPageContent';


//TODO change image and tags etc..
export const metadata: Metadata = {
  title: 'Contact Us | Robotics Collective',
  description: 'Get in touch with the Robotics Collective team. We\'d love to hear from you about collaborations, questions, or just to say hello.',
  keywords: ['contact', 'robotics', 'collective', 'get in touch', 'feedback', 'collaboration'],
  openGraph: {
    title: 'Contact Us | Robotics Collective',
    description: 'Get in touch with the Robotics Collective team. We\'d love to hear from you about collaborations, questions, or just to say hello.',
    url: 'https://roboticscollective.org/contact',
    images: [
      {
        url: '/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Robotics Collective',
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactPageContent />
    </>
  );
}