import React from 'react';

const SocialProof: React.FC = () => {
  const stats = [
    { value: "2.3M", label: "Transformations" },
    { value: "47%", label: "Time Saved" },
    { value: "4.9/5", label: "User Rating" },
    { value: "$2.1M", label: "Raised" }
  ];

  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full text-lg mb-8 border border-white/20">
          <span className="text-2xl">🚀</span>
          <span>Join 10,000+ early adopters transforming how they work with AI</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
