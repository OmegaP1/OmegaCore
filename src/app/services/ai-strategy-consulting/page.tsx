import React from 'react';
import ServiceLayout from '../../../components/services/ServiceLayout';
import ServiceContent from '../../../components/services/ServiceContent';

export const metadata = {
  title: 'AI Strategy Consulting | OmegaCore',
  description: 'Expert guidance on incorporating AI into your business strategy, identifying opportunities, and planning for long-term AI adoption.',
}

export default function AIStrategyConsultingPage() {
  return (
    <ServiceLayout
      title="AI Strategy Consulting"
      subtitle="Expert guidance on incorporating AI into your business strategy, identifying opportunities, and planning for long-term AI adoption."
      icon="strategy"
    >
      <ServiceContent
        overview="OmegaCore's AI Strategy Consulting service provides executive-level guidance for organizations seeking to leverage artificial intelligence as a strategic advantage. Our consultants combine deep technical expertise with business acumen to help you identify high-value AI opportunities, develop comprehensive adoption roadmaps, and build the organizational capabilities necessary for success. We go beyond theoretical recommendations to create actionable strategies that align with your business objectives, organizational culture, and competitive landscape, setting you on a path to sustainable AI-driven transformation."
        
        benefits={[
          {
            title: "Strategic Clarity and Direction",
            description: "Gain a clear vision of how AI can transform your business with a prioritized roadmap of initiatives aligned with your strategic objectives."
          },
          {
            title: "Optimized Investment Approach",
            description: "Maximize ROI by focusing resources on AI initiatives with the highest potential value and feasibility for your specific business context."
          },
          {
            title: "Accelerated Implementation",
            description: "Avoid common pitfalls and accelerate your AI journey through proven frameworks, methodologies, and implementation approaches."
          },
          {
            title: "Organizational Readiness",
            description: "Develop the necessary capabilities, structures, and culture to successfully adopt and scale AI across your organization."
          }
        ]}
        
        features={[
          {
            title: "AI Opportunity Assessment",
            description: "Comprehensive evaluation of your business to identify and prioritize high-value AI use cases across operations, customer experience, products, and decision-making."
          },
          {
            title: "Strategic Roadmap Development",
            description: "Detailed implementation plan that sequences initiatives based on business impact, technical feasibility, and organizational readiness factors."
          },
          {
            title: "Data Strategy Alignment",
            description: "Assessment of your data readiness and recommendations for building the data foundation necessary to support your AI ambitions."
          },
          {
            title: "Organizational Capability Planning",
            description: "Guidance on building the team, skills, governance structures, and processes needed to execute and scale your AI initiatives."
          },
          {
            title: "Technology Architecture Recommendations",
            description: "Advisory on the optimal technical infrastructure, platforms, and tools to support your specific AI strategy and use cases."
          }
        ]}
        
        process={[
          {
            title: "Discovery and Assessment",
            description: "We conduct a thorough analysis of your business goals, current capabilities, market position, and competitive landscape to establish the strategic context."
          },
          {
            title: "Opportunity Identification",
            description: "Through workshops, interviews, and analysis, we identify and evaluate potential AI applications across your organization, prioritizing based on value and feasibility."
          },
          {
            title: "Strategy Formulation",
            description: "We develop a comprehensive AI strategy aligned with your business objectives, including use case priorities, capability requirements, and implementation approach."
          },
          {
            title: "Roadmap Development",
            description: "We create a detailed implementation roadmap with clear initiatives, timelines, resource requirements, and success metrics to guide your AI journey."
          },
          {
            title: "Activation Planning",
            description: "We help you prepare for execution with specific recommendations for organizational structure, talent acquisition, governance, and change management."
          }
        ]}
        
        casestudy={{
          title: "Healthcare Provider's AI Transformation",
          description: "A large healthcare organization engaged OmegaCore to develop a comprehensive AI strategy to improve patient outcomes, operational efficiency, and competitive position in an increasingly digital healthcare landscape.",
          results: [
            "Identified and prioritized 23 high-value AI use cases across clinical, operational, and patient experience domains",
            "Developed a 3-year implementation roadmap with clear milestones and investment requirements",
            "Created a centralized AI Center of Excellence with supporting governance structure",
            "Guided initial implementation of three priority initiatives, delivering $12M in annual cost savings",
            "Established data infrastructure and partnerships to support long-term AI capabilities"
          ]
        }}
        
        faq={[
          {
            question: "How long does the AI strategy consulting process typically take?",
            answer: "Our standard strategy engagement typically spans 8-12 weeks, depending on the size and complexity of your organization. This includes discovery, opportunity assessment, strategy development, and roadmap creation. For larger enterprises with multiple business units, the timeline may extend to 16 weeks to ensure comprehensive coverage."
          },
          {
            question: "Do we need technical AI expertise on our team to benefit from your strategy consulting?",
            answer: "No. While having some technical knowledge can be helpful, our approach is designed to bridge the gap between business and technology. We translate complex AI concepts into business terms and work effectively with leaders from all backgrounds. We can also help you identify what technical expertise you'll need to build or acquire as part of your strategy."
          },
          {
            question: "How do you ensure the AI strategy aligns with our broader business objectives?",
            answer: "We begin every strategy engagement by deeply understanding your existing business strategy, goals, and challenges. Our opportunity assessment and prioritization frameworks explicitly link AI initiatives to specific business outcomes. We also ensure executive stakeholders from across the business are engaged throughout the process to maintain strategic alignment."
          },
          {
            question: "What deliverables can we expect from the strategy consulting engagement?",
            answer: "Our standard deliverables include: a comprehensive AI opportunity assessment with prioritized use cases; a strategic AI vision and principles document; a capability assessment covering data, technology, talent, and governance; a 2-3 year implementation roadmap with resource requirements; and an executive presentation summarizing key findings and recommendations."
          },
          {
            question: "Can you help with implementation after developing the strategy?",
            answer: "Absolutely. While some clients choose to implement independently using our strategic recommendations, many benefit from our continued support. We offer various implementation support models, from ongoing advisory roles to full implementation partnerships leveraging our AI development and integration services to bring the strategy to life."
          }
        ]}
      />
    </ServiceLayout>
  );
}