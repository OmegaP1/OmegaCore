import React from 'react';
import ModernServiceLayout from "../../../components/services/ModernServiceLayout";
import ModernServiceContent from "../../../components/services/ModernServiceContent";

export const metadata = {
  title: "AI Strategy & Integration | OmegaCore",
  description:
    "Strategic consultation to identify where AI agents create value, followed by seamless implementation into your systems.",
};

export default function AIStrategyConsultingPage() {
  const highlights = [
    {
      icon: "🎯",
      title: "Strategic Assessment",
      description:
        "Analyze your business to identify high-impact automation opportunities and prioritize initiatives by ROI.",
    },
    {
      icon: "🗺️",
      title: "Roadmap Development",
      description:
        "Create a phased implementation plan that minimizes disruption and maximizes quick wins.",
    },
    {
      icon: "🔌",
      title: "System Integration",
      description:
        "Seamlessly connect AI agents with your existing tools, databases, and workflows.",
    },
    {
      icon: "👥",
      title: "Team Preparation",
      description:
        "Ensure your organization is ready to work effectively with AI agents from day one.",
    },
    {
      icon: "📈",
      title: "Performance Optimization",
      description:
        "Continuous monitoring and refinement to ensure agents deliver measurable business value.",
    },
    {
      icon: "🚀",
      title: "Scalable Foundation",
      description:
        "Build systems designed to grow with your business needs and ambitions.",
    },
  ];

  const keyPoints = [
    "AI readiness assessment for your organization",
    "Identification of top 5-10 automation opportunities",
    "ROI projection and business case development",
    "Integration architecture and system design",
    "Risk assessment and mitigation strategies",
    "Performance KPIs and success metrics",
    "Change management and adoption planning",
    "Ongoing optimization and support",
  ];

  const process = [
    {
      step: 1,
      title: "Business Analysis",
      description:
        "We dive deep into your operations to understand workflows, pain points, and opportunities.",
    },
    {
      step: 2,
      title: "Opportunity Assessment",
      description:
        "Identify which processes provide the highest ROI when automated with AI agents.",
    },
    {
      step: 3,
      title: "Strategy Development",
      description:
        "Create a detailed roadmap with timelines, resources, and expected outcomes.",
    },
    {
      step: 4,
      title: "Infrastructure Planning",
      description:
        "Design integration architecture and prepare systems for AI deployment.",
    },
    {
      step: 5,
      title: "Implementation & Monitoring",
      description:
        "Execute the strategy with continuous monitoring and optimization for success.",
    },
  ];

  return (
    <ModernServiceLayout
      title="AI Strategy & Integration"
      subtitle="Strategic planning to maximize your AI impact. We identify opportunities, design implementation roadmaps, and ensure seamless integration."
      icon="strategy"
      ctaText="Get Strategic Consultation"
    >
      <ModernServiceContent
        highlights={highlights}
        keyPoints={keyPoints}
        process={process}
        ctaText="Start Your Strategy Session"
      />
    </ModernServiceLayout>
  );
}