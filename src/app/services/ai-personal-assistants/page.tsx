import React from 'react';
import ServiceLayout from '../../../components/services/ServiceLayout';
import ServiceContent from '../../../components/services/ServiceContent';

export const metadata = {
  title: 'AI Personal Assistants | OmegaCore',
  description: 'Custom-built AI assistants designed to handle your tasks, manage your schedule, and provide real-time insights to enhance productivity and efficiency.',
}

export default function AIPersonalAssistantsPage() {
  return (
    <ServiceLayout
      title="AI Personal Assistants"
      subtitle="Custom-built AI assistants designed to handle your tasks, manage your schedule, and provide real-time insights to enhance productivity and efficiency."
      icon="personal-assistant"
    >
      <ServiceContent
        overview="OmegaCore's AI Personal Assistants represent the cutting edge of productivity enhancement technology. Combining advanced natural language processing, machine learning, and task automation, our assistants are designed to understand your unique needs and preferences, adapting over time to become an invaluable member of your team. Unlike generic AI tools, our assistants are custom-built for your specific requirements, integrating seamlessly with your existing workflows and systems."
        
        benefits={[
          {
            title: "Time Savings",
            description: "Reclaim up to 30% of your workday by delegating routine tasks to your AI assistant, allowing you to focus on high-value strategic activities."
          },
          {
            title: "Enhanced Productivity",
            description: "Streamline workflows with intelligent automation and proactive assistance that anticipates your needs before you even express them."
          },
          {
            title: "24/7 Availability",
            description: "Access support, information, and task execution around the clock, ensuring your operations continue even outside of traditional business hours."
          },
          {
            title: "Personalized Experience",
            description: "Enjoy interactions tailored to your communication style, preferences, and priorities that improve over time through machine learning."
          }
        ]}
        
        features={[
          {
            title: "Natural Language Interaction",
            description: "Communicate with your assistant through voice or text using everyday language, with support for multiple languages and contextual understanding."
          },
          {
            title: "Intelligent Scheduling",
            description: "Let your assistant manage your calendar, arrange meetings considering participants' availability, and optimize your day for maximum productivity."
          },
          {
            title: "Document Management & Analysis",
            description: "Organize, summarize, and extract insights from documents, emails, and reports, with the ability to draft responses and generate content."
          },
          {
            title: "System Integration",
            description: "Connect with your existing tools including CRM, project management software, communication platforms, and custom enterprise applications."
          },
          {
            title: "Data-Driven Insights",
            description: "Receive proactive recommendations and analytics based on your data patterns, helping you make more informed decisions."
          }
        ]}
        
        process={[
          {
            title: "Needs Assessment",
            description: "We begin with a comprehensive analysis of your workflows, pain points, and objectives to identify where an AI assistant will deliver maximum value."
          },
          {
            title: "Custom Development",
            description: "Our team designs and builds your personalized assistant, incorporating the specific capabilities required for your unique business context."
          },
          {
            title: "System Integration",
            description: "We seamlessly connect your assistant with your existing digital ecosystem, ensuring smooth data flow and functionality across platforms."
          },
          {
            title: "Training & Deployment",
            description: "Your team receives comprehensive training on maximizing the assistant's capabilities, followed by a phased implementation approach."
          },
          {
            title: "Continuous Improvement",
            description: "We regularly refine your assistant based on usage data and feedback, enhancing its capabilities and effectiveness over time."
          }
        ]}
        
        casestudy={{
          title: "Fortune 500 Executive Team Productivity Transformation",
          description: "A leadership team at a multinational corporation implemented OmegaCore AI assistants for their C-suite executives, seeking to reduce administrative burden and improve decision-making processes.",
          results: [
            "Executives saved an average of 14 hours per week on administrative tasks",
            "Meeting preparation time reduced by 60% with automated briefing generation",
            "Email management efficiency improved by 75%",
            "Decision-making accelerated through real-time data analysis and insights",
            "Return on investment achieved within 4 months of implementation"
          ]
        }}
        
        faq={[
          {
            question: "How secure is the data handled by the AI assistant?",
            answer: "Security is our top priority. We implement enterprise-grade encryption, role-based access controls, and secure data handling protocols. All assistant interactions can be hosted within your security perimeter, and we comply with major regulations including GDPR, HIPAA, and SOC2 where applicable."
          },
          {
            question: "Can the assistant learn my personal preferences over time?",
            answer: "Absolutely. Our AI assistants employ advanced machine learning algorithms that continuously adapt to your communication style, preferences, and patterns. The more you interact with your assistant, the more personalized the experience becomes."
          },
          {
            question: "How long does implementation typically take?",
            answer: "Implementation timelines vary based on complexity and integration requirements. Simple deployments can be completed in 2-4 weeks, while comprehensive enterprise solutions may take 2-3 months. We provide a detailed timeline during the initial consultation."
          },
          {
            question: "Can the assistant work with our legacy systems?",
            answer: "Yes. We've designed our AI assistants with flexibility in mind. They can integrate with a wide range of systems, including legacy applications, through custom APIs, middleware solutions, or direct integration methods."
          },
          {
            question: "What kind of ROI can we expect?",
            answer: "Most clients see ROI within 3-6 months. Typical returns come from time savings (20-30% productivity improvement), reduced error rates, faster information retrieval, and improved decision making. We provide ROI tracking tools to measure the impact on your specific business metrics."
          }
        ]}
      />
    </ServiceLayout>
  );
}