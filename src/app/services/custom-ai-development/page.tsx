import React from 'react';
import ModernServiceLayout from "../../../components/services/ModernServiceLayout";
import ModernServiceContent from "../../../components/services/ModernServiceContent";

export const metadata = {
  title: "Custom AI Agents | OmegaCore",
  description:
    "Tailored autonomous agents designed for your specific workflows. From customer service automation to data analysis.",
};

export default function CustomAIAgentsPage() {
  const highlights = [
    {
      icon: "🤖",
      title: "Autonomous Agents",
      description:
        "AI agents that work independently, making decisions and taking action 24/7 without human intervention.",
    },
    {
      icon: "⚙️",
      title: "Purpose-Built",
      description:
        "Each agent is customized for your specific workflows, industry, and business processes.",
    },
    {
      icon: "🔄",
      title: "Continuous Learning",
      description:
        "Agents improve over time, adapting to new patterns and refining their performance automatically.",
    },
    {
      icon: "🔗",
      title: "Seamless Integration",
      description:
        "Works with your existing tools and systems without disruption to current workflows.",
    },
    {
      icon: "📊",
      title: "Real-Time Insights",
      description:
        "Get instant visibility into agent performance with comprehensive dashboards and reporting.",
    },
    {
      icon: "🛡️",
      title: "Enterprise-Grade Security",
      description:
        "Built with security and compliance at the core, meeting your industry standards.",
    },
  ];

  const keyPoints = [
    "Customer service automation handling 70%+ of inquiries",
    "Data processing and analysis tasks completed in minutes",
    "Lead qualification and follow-up on autopilot",
    "Scheduled reporting and monitoring 24/7",
    "Document processing and information extraction",
    "Multi-step workflow automation",
    "Proactive alerts and notifications",
    "Performance metrics and ROI tracking",
  ];

  const process = [
    {
      step: 1,
      title: "Discovery & Analysis",
      description:
        "We map your workflows, identify automation opportunities, and understand your success metrics.",
    },
    {
      step: 2,
      title: "Agent Design",
      description:
        "We design the agent's behavior, decision logic, and integration points with your systems.",
    },
    {
      step: 3,
      title: "Development & Testing",
      description:
        "Rapid development with thorough testing to ensure reliability and accuracy.",
    },
    {
      step: 4,
      title: "Deployment & Training",
      description:
        "We deploy your agent and train your team on monitoring and management.",
    },
    {
      step: 5,
      title: "Optimization & Support",
      description:
        "Ongoing monitoring and refinement to maximize performance and ROI.",
    },
  ];

  return (
    <ModernServiceLayout
      title="Custom AI Agents"
      subtitle="Deploy autonomous agents tailored to your workflows. Automate tasks, scale your team, and drive measurable results."
      icon="development"
      ctaText="Schedule Agent Demo"
    >
      <ModernServiceContent
        highlights={highlights}
        keyPoints={keyPoints}
        process={process}
        ctaText="Start Your AI Agent Project"
      />
    </ModernServiceLayout>
  );
}