import React, { RefObject } from 'react';
import { Sparkles, ArrowRight, Zap, Check, Undo, Share2, Clock, MousePointer } from 'lucide-react';
import { TransformHistory } from '../types';
import { contentExamples } from '../constants/content';

interface HeroSectionProps {
  contentType: string;
  selectedText: string;
  transformedText: string;
  activeDemo: string | null;
  transformHistory: TransformHistory[];
  showSuccess: boolean;
  demoTextRef: RefObject<HTMLDivElement | null>;
  onContentTypeChange: (type: string) => void;
  onResetDemo: () => void;
  onShareDemo: () => void;
  onClearHistory: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  contentType,
  selectedText,
  transformedText,
  activeDemo,
  transformHistory,
  showSuccess,
  demoTextRef,
  onContentTypeChange,
  onResetDemo,
  onShareDemo,
  onClearHistory
}) => {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-8 border border-white/20">
          <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
          <span>Transform AI text in real-time</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
          Highlight. Click. Transform.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Stop rewriting AI responses from scratch. Transform any part with surgical precision while keeping the rest intact.
        </p>

        {/* Content Type Selector */}
        <div className="flex justify-center gap-2 mb-6">
          {Object.entries(contentExamples).map(([key, content]) => (
            <button
              key={key}
              onClick={() => onContentTypeChange(key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all ${
                contentType === key 
                  ? 'bg-white/20 text-white' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {content.icon}
              {content.title}
            </button>
          ))}
        </div>

        {/* Live Demo Box */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
          <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <MousePointer className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-gray-400">Try it: Highlight any text below</span>
              </div>
              {transformHistory.length > 0 && (
                <button
                  onClick={onClearHistory}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Clock className="w-4 h-4" />
                  Clear history
                </button>
              )}
            </div>
            
            <div 
              ref={demoTextRef}
              className="text-left text-lg leading-relaxed select-text"
              style={{ userSelect: 'text' }}
            >
              {!activeDemo && (
                <p className="text-gray-300">
                  {contentExamples[contentType as keyof typeof contentExamples].text}
                </p>
              )}
              
              {activeDemo && transformedText && (
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-500 mb-2">Original</p>
                      <p className="text-gray-500 line-through">{selectedText}</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-green-400 mb-2">Transformed</p>
                      <p className="text-green-400">{transformedText}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={onResetDemo}
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-all"
                    >
                      <Undo className="w-4 h-4" />
                      Try another
                    </button>
                    <button 
                      onClick={onShareDemo}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-full text-sm transition-all text-blue-400"
                    >
                      <Share2 className="w-4 h-4" />
                      {showSuccess ? <Check className="w-4 h-4" /> : 'Share this magic'}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Transformation History */}
            {transformHistory.length > 0 && !activeDemo && (
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-gray-400 mb-3">Recent transformations</p>
                <div className="flex gap-2 overflow-x-auto">
                  {transformHistory.map((transform) => (
                    <div 
                      key={transform.id}
                      className="flex-shrink-0 px-3 py-2 bg-white/5 rounded-lg text-sm"
                    >
                      <span className="text-gray-400">{transform.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-xl flex items-center gap-2 justify-center">
            Get Early Access
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full font-semibold text-lg transition-all border border-white/20 flex items-center gap-2 justify-center">
            Watch 2-min Demo
            <Zap className="w-5 h-5" />
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400">
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-400" />
            No credit card required
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-400" />
            Works with any AI
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-400" />
            Cancel anytime
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
