import React from 'react';
import { Metadata } from "next";
import ServiceLayout from "../../../components/services/ServiceLayout";
import ServiceContent from "../../../components/services/ServiceContent";

export const metadata: Metadata = {
  title: "AI Personal Assistants | OmegaCore AI",
  description:
    "Your custom AI helper that manages tasks, schedules, and gives you real-time insights to boost your productivity.",
  keywords:
    "AI personal assistants, virtual assistant, task automation, productivity tools, AI helper",
};

export default function AIPersonalAssistantsPage() {
  return (
    <ServiceLayout
      title="AI Personal Assistants"
      subtitle="Your custom AI helper that manages tasks, schedules, and gives you real-time insights to boost your productivity."
      icon="personal-assistant"
    >
      <ServiceContent
        overview="Think of OmegaCore's AI Assistant as your new team member who never sleeps. It learns how you work, adapts to your style, and handles routine tasks so you can focus on what really matters. Unlike off-the-shelf AI tools, our assistants are built specifically for your needs and work seamlessly with your existing systems."
        benefits={[
          {
            title: "Save 30% of Your Day",
            description:
              "Hand off routine tasks to your AI and free up nearly a third of your workday for the strategic stuff that drives results.",
          },
          {
            title: "Get More Done, Automatically",
            description:
              "Your assistant learns your patterns and starts handling tasks before you even ask, making your workflow smoother than ever.",
          },
          {
            title: "Always On, Always Ready",
            description:
              "Need something at 2 AM? Your AI is there, ready to help whether you're burning the midnight oil or taking an early start.",
          },
          {
            title: "It's All About You",
            description:
              "Your assistant adapts to how you communicate and what you prioritize, getting better and more personalized every day.",
          },
        ]}
        features={[
          {
            title: "Talk Like You Normally Would",
            description:
              "Just speak or type naturally. Your assistant understands normal conversation, gets context, and works in multiple languages.",
          },
          {
            title: "Your Calendar, Managed",
            description:
              "Let your assistant handle scheduling, find the perfect meeting times, and organize your day for maximum efficiency.",
          },
          {
            title: "Document Whisperer",
            description:
              "Your assistant organizes files, pulls out key information, summarizes reports, and even drafts responses for you.",
          },
          {
            title: "Plays Well With Others",
            description:
              "Connects smoothly with your favorite tools - from your CRM and project software to email and messaging apps.",
          },
          {
            title: "Insights When You Need Them",
            description:
              "Get personalized recommendations based on your data patterns, helping you make smarter decisions faster.",
          },
        ]}
        process={[
          {
            title: "Let's Get to Know You",
            description:
              "We start by understanding your workflow, challenges, and goals to identify exactly where an AI assistant will give you the biggest boost.",
          },
          {
            title: "Building Your Assistant",
            description:
              "Our team creates your custom assistant with the specific capabilities you need for your unique situation.",
          },
          {
            title: "Connecting Everything",
            description:
              "We integrate your assistant with your existing digital tools, ensuring smooth information flow across all platforms.",
          },
          {
            title: "Training Time",
            description:
              "Your team learns how to make the most of your new assistant, followed by a step-by-step rollout.",
          },
          {
            title: "Getting Better Together",
            description:
              "We fine-tune your assistant based on real-world use and feedback, making it more effective over time.",
          },
        ]}
        casestudy={{
          title: "Executive Team Saves 14 Hours Every Week",
          description:
            "A leadership team at a Fortune 500 company brought in OmegaCore AI assistants to help their executives spend less time on admin work and more time on strategic decisions.",
          results: [
            "Executives gained back 14 hours weekly by offloading routine tasks",
            "Meeting prep time cut by 60% through automated briefing notes",
            "Email handling improved by 75%, focusing on what really matters",
            "Faster decisions thanks to real-time data analysis",
            "Full investment payback in just 4 months",
          ],
        }}
        faq={[
          {
            question: "How secure is my data with the AI assistant?",
            answer:
              "Security is our #1 priority. We use bank-level encryption, strict access controls, and secure handling protocols. Your assistant can work entirely within your security systems, and we comply with all major regulations like GDPR and HIPAA.",
          },
          {
            question: "Will it really learn my personal preferences?",
            answer:
              "Absolutely! Our AI uses advanced learning algorithms that adapt to your communication style, preferences, and patterns. The more you use your assistant, the more personalized it becomes - like a team member who really gets to know you.",
          },
          {
            question: "How long before it's up and running?",
            answer:
              "Simple setups take 2-4 weeks, while more complex enterprise solutions might need 2-3 months. We'll give you a clear timeline during our first conversation.",
          },
          {
            question: "Can it work with our older systems?",
            answer:
              "Yes! We've designed our assistants to work with all kinds of systems, including legacy applications. We use custom connections, middleware solutions, or direct integration methods to make everything work smoothly together.",
          },
          {
            question: "How quickly will we see results?",
            answer:
              "Most clients start seeing ROI within 3-6 months. You'll typically save 20-30% of your time, reduce mistakes, find information faster, and make better decisions. We provide tracking tools so you can see exactly how it's helping.",
          },
        ]}
      />
    </ServiceLayout>
  );
}