import React from 'react';
import { MousePointer, Wand2, Brain } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: MousePointer,
      title: "1. Highlight Any Part",
      description: "Select the exact text you want to transform. No more rewriting entire responses.",
      color: "blue"
    },
    {
      icon: Wand2,
      title: "2. Choose Your Transform",
      description: "Pick from smart suggestions or use semantic sliders for precise control.",
      color: "purple"
    },
    {
      icon: Brain,
      title: "3. Perfect Integration",
      description: "Transformed text flows naturally with AI-powered boundary coherence.",
      color: "pink"
    }
  ];

  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Your Text, Your Way
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className={`w-12 h-12 bg-${step.color}-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <step.icon className={`w-6 h-6 text-${step.color}-400`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
