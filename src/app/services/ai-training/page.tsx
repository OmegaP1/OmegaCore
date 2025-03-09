import React from 'react';
import ServiceLayout from '../../../components/services/ServiceLayout';
import ServiceContent from '../../../components/services/ServiceContent';

export const metadata = {
  title: 'AI Training & Education | OmegaCore',
  description: 'Comprehensive training programs to help your team understand and effectively work with AI technologies in your business context.',
}

export default function AITrainingPage() {
  return (
    <ServiceLayout
      title="AI Training & Education"
      subtitle="Comprehensive training programs to help your team understand and effectively work with AI technologies in your business context."
      icon="education"
    >
      <ServiceContent
        overview="OmegaCore's AI Training & Education programs bridge the knowledge gap between cutting-edge AI technologies and practical business application. We offer customized learning experiences designed to equip your team with the specific AI skills and knowledge they need to drive successful implementation and adoption. Our training combines theoretical fundamentals with hands-on practice using real-world business scenarios relevant to your industry. Whether you're looking to build technical expertise or help business leaders understand AI's strategic implications, our programs provide the targeted education necessary to build organizational AI capabilities."
        
        benefits={[
          {
            title: "Accelerated AI Adoption",
            description: "Speed up implementation and time-to-value by ensuring your team has the knowledge and skills to effectively leverage AI technologies."
          },
          {
            title: "Reduced Dependency on Specialists",
            description: "Build internal capabilities that reduce your reliance on external experts, giving you more control and agility in your AI initiatives."
          },
          {
            title: "Improved Cross-Functional Collaboration",
            description: "Create a common understanding and language around AI across technical and business teams, enhancing collaboration and alignment."
          },
          {
            title: "Increased Innovation Capacity",
            description: "Empower your team to identify new AI opportunities and applications specific to your business challenges and objectives."
          }
        ]}
        
        features={[
          {
            title: "Role-Based Learning Paths",
            description: "Customized training tracks for different roles including executives, product managers, data scientists, developers, and business users, with content tailored to their specific needs."
          },
          {
            title: "Industry-Specific Case Studies",
            description: "Real-world examples and applications relevant to your industry, demonstrating how AI is being applied to solve similar challenges to yours."
          },
          {
            title: "Hands-On Workshops",
            description: "Practical sessions where participants work with actual AI tools and technologies to solve business problems and build confidence through direct experience."
          },
          {
            title: "Custom Use Case Development",
            description: "Guided exercises that help your team conceptualize, design, and plan specific AI applications for your organization's unique context."
          },
          {
            title: "Continuous Learning Resources",
            description: "Ongoing access to curated materials, communities, and learning tools that keep your team updated as AI technologies and best practices evolve."
          }
        ]}
        
        process={[
          {
            title: "Needs Assessment",
            description: "We evaluate your team's current AI knowledge, identify skill gaps, and understand your specific learning objectives to tailor the training program."
          },
          {
            title: "Custom Curriculum Development",
            description: "Based on the assessment, we develop a curriculum that addresses your specific needs, incorporating relevant industry cases and your organization's context."
          },
          {
            title: "Learning Experience Delivery",
            description: "We deliver the training through an optimal mix of formats including workshops, seminars, e-learning, and hands-on labs, guided by expert instructors."
          },
          {
            title: "Knowledge Application",
            description: "Participants apply what they've learned to real business challenges through guided projects that reinforce skills and demonstrate practical value."
          },
          {
            title: "Progress Assessment and Refinement",
            description: "We measure learning outcomes, gather feedback, and refine future training sessions to ensure continued relevance and effectiveness."
          }
        ]}
        
        casestudy={{
          title: "Insurance Carrier's AI Capability Development",
          description: "A leading insurance company embarked on an AI transformation initiative but faced significant knowledge gaps across their organization. OmegaCore developed a comprehensive training program to build capabilities across multiple teams and functions.",
          results: [
            "Trained 450+ employees across technical, business, and leadership roles in 8 months",
            "Accelerated time-to-market for AI initiatives by 40% through improved internal capabilities",
            "Achieved 87% reduction in third-party AI consulting costs post-training",
            "Enabled cross-functional teams to identify and implement 12 new AI use cases",
            "Created a sustainable internal AI learning community with ongoing engagement"
          ]
        }}
        
        faq={[
          {
            question: "Do participants need prior technical knowledge to benefit from your training?",
            answer: "No. We design our programs for various knowledge levels, from complete beginners to experienced practitioners. Our role-based approach ensures that each participant receives training appropriate to their background and job requirements. For non-technical roles, we focus on conceptual understanding and business applications rather than technical implementation details."
          },
          {
            question: "How is the training delivered?",
            answer: "We offer flexible delivery formats to suit your team's needs and preferences. Options include in-person workshops and boot camps, live virtual training sessions, self-paced e-learning modules, or a hybrid approach. All formats include interactive elements and practical exercises to reinforce learning."
          },
          {
            question: "How long do the training programs typically last?",
            answer: "Program duration varies based on learning objectives, depth of content, and delivery format. Executive overviews may be as brief as half-day sessions, while comprehensive technical training might span several weeks of part-time learning. Most of our role-based programs involve 3-5 days of instruction plus practical application activities."
          },
          {
            question: "Can you customize the training to use our own data and business scenarios?",
            answer: "Absolutely. We strongly believe in contextual learning and regularly incorporate client-specific data, case studies, and business scenarios into our training. This approach increases relevance and helps participants immediately see how to apply concepts to their actual work challenges. We work with you to identify appropriate examples while ensuring data security and confidentiality."
          },
          {
            question: "How do you measure the effectiveness of the training?",
            answer: "We employ a multi-faceted measurement approach, including pre and post-training assessments to gauge knowledge acquisition, practical project evaluations to assess skill application, participant feedback on content relevance and delivery quality, and follow-up assessments to measure long-term retention and application. We also work with you to define business impact metrics that link training outcomes to your specific objectives."
          }
        ]}
      />
    </ServiceLayout>
  );
}