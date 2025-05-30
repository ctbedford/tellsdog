import React from 'react';
import { FileText, Mail, BookOpen } from 'lucide-react';
import { ContentExample, Transformation } from '../types';

export const contentExamples: Record<string, ContentExample> = {
  mixed: {
    title: "Mixed Content",
    icon: <FileText className="w-4 h-4" />,
    text: "Quantum superposition enables qubits to exist in multiple states simultaneously until measurement causes wave function collapse. This fundamental principle of quantum mechanics allows quantum computers to process vast amounts of information in parallel. The stock market went crazy yesterday with tech stocks jumping up a lot. User engagement increased by 47% after implementing the new onboarding flow. Research shows that morning routines can improve productivity."
  },
  email: {
    title: "Work Email",
    icon: <Mail className="w-4 h-4" />,
    text: "Hi team, I wanted to touch base regarding our Q3 objectives. As per our last discussion, we need to leverage our core competencies to drive synergies across departments. The deliverables from the product team have been suboptimal, and we need to circle back on the timeline. Going forward, let's ensure all stakeholders are aligned. Please advise on your bandwidth for a follow-up meeting."
  },
  report: {
    title: "Technical Report",
    icon: <BookOpen className="w-4 h-4" />,
    text: "The implementation of microservices architecture resulted in a 34% reduction in deployment time and improved system resilience. However, the increased operational complexity necessitated additional DevOps resources. Database query optimization yielded marginal improvements, with average response times decreasing from 240ms to 180ms. Further analysis indicates that caching strategies could provide substantial performance gains."
  }
};

export const transformations: Record<string, Transformation> = {
  simplify: {
    original: "Quantum superposition enables qubits to exist in multiple states simultaneously until measurement causes wave function collapse.",
    transformed: "Quantum bits are like magical coins that can be both heads AND tails at the same time—until you look at them.",
    icon: "🧒",
    color: "blue"
  },
  formalize: {
    original: "The stock market went crazy yesterday with tech stocks jumping up a lot.",
    transformed: "Yesterday's equity markets experienced significant volatility, with technology sector securities demonstrating substantial upward price movements.",
    icon: "🎩",
    color: "purple"
  },
  story: {
    original: "User engagement increased by 47% after implementing the new onboarding flow.",
    transformed: "Sarah was skeptical when we redesigned the onboarding. 'Another experiment,' she sighed. Six weeks later, she walked into my office with a grin: 'Remember those new users who kept dropping off? Nearly half of them are sticking around now.'",
    icon: "📖",
    color: "pink"
  },
  actionable: {
    original: "Research shows that morning routines can improve productivity.",
    transformed: "Start tomorrow: Set your alarm 30 minutes earlier, drink a glass of water immediately upon waking, and write down your top 3 priorities before checking any devices. Track your productivity score (1-10) for one week.",
    icon: "🎯",
    color: "green"
  }
};

export const transformationPreviews = {
  simplify: {
    mixed: "Quantum bits are special because they can be multiple things at once—like a coin spinning in the air...",
    email: "Hi team, let's talk about our Q3 goals. Based on our last chat, we need to work better together...",
    report: "Breaking our system into smaller pieces made deployments 34% faster and more reliable..."
  },
  formalize: {
    mixed: "The phenomenon of quantum superposition constitutes a fundamental characteristic of quantum mechanical systems...",
    email: "Dear colleagues, I am writing to address our third-quarter strategic objectives...",
    report: "The architectural transition to microservices demonstrated a 34% optimization in deployment efficiency..."
  },
  story: {
    mixed: "Picture this: Sarah, our lead quantum physicist, walks into the lab with her morning coffee...",
    email: "It was 8 AM when Jake opened his inbox. The subject line made his coffee go cold: 'Q3 Review Today'...",
    report: "The team gathered around the deployment dashboard, hearts racing. After months of refactoring..."
  },
  actionable: {
    mixed: "Step 1: Open your quantum computing simulator. Step 2: Create a qubit in superposition state...",
    email: "Action items for Q3: 1) Schedule department sync by Friday 2) Review competency matrices...",
    report: "Implementation roadmap: Week 1: Containerize services. Week 2: Set up orchestration..."
  }
};