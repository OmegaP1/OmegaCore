import React from 'react';
import ModernServiceLayout from "../../../components/services/ModernServiceLayout";
import ModernServiceContent from "../../../components/services/ModernServiceContent";

export const metadata = {
  title: "AI Team Training | OmegaCore",
  description:
    "Empower your team to work effectively with AI agents. Hands-on training for deployment, optimization, and maintenance.",
};

export default function AITrainingPage() {
  const highlights = [
    {
      icon: "🎓",
      title: "Role-Based Training",
      description:
        "Customized programs for your entire team—from executives to technicians to support staff.",
    },
    {
      icon: "👁️",
      title: "Monitoring & Management",
      description:
        "Learn to monitor agent performance, troubleshoot issues, and optimize results in real-time.",
    },
    {
      icon: "🔧",
      title: "Hands-On Workshops",
      description:
        "Practical, interactive sessions with real-world scenarios specific to your business.",
    },
    {
      icon: "📈",
      title: "Performance Optimization",
      description:
        "Train your team to continuously improve agent performance and maximize ROI.",
    },
    {
      icon: "🌱",
      title: "Continuous Learning",
      description:
        "Ongoing resources and support to keep your team updated as AI technology evolves.",
    },
    {
      icon: "💡",
      title: "Best Practices",
      description:
        "Industry insights and proven approaches to getting the most from your AI agents.",
    },
  ];

  const keyPoints = [
    "Executive overview of AI agents and business impact",
    "Hands-on agent management and monitoring training",
    "Performance metrics and KPI tracking",
    "Troubleshooting and optimization techniques",
    "Integration with existing workflows and tools",
    "Data security and compliance practices",
    "Change management and team adoption strategies",
    "Ongoing support and knowledge resources",
  ];

  const process = [
    {
      step: 1,
      title: "Skills Assessment",
      description:
        "Evaluate your team's current knowledge and identify specific training needs for each role.",
    },
    {
      step: 2,
      title: "Customized Curriculum",
      description:
        "Design training programs tailored to your team's roles, experience level, and business context.",
    },
    {
      step: 3,
      title: "Interactive Sessions",
      description:
        "Deliver engaging training with hands-on exercises using your actual AI agents and systems.",
    },
    {
      step: 4,
      title: "Knowledge Certification",
      description:
        "Validate that your team has mastered the skills needed to manage and optimize AI agents.",
    },
    {
      step: 5,
      title: "Ongoing Support",
      description:
        "Provide continuous resources, updates, and assistance as your team gains experience.",
    },
  ];

  return (
    <ModernServiceLayout
      title="AI Team Training"
      subtitle="Empower your team to work effectively with AI agents. Hands-on training covering deployment, optimization, monitoring, and maintenance."
      icon="education"
      ctaText="Enroll Your Team"
    >
      <ModernServiceContent
        highlights={highlights}
        keyPoints={keyPoints}
        process={process}
        ctaText="Schedule Training Session"
      />
    </ModernServiceLayout>
  );
}
         