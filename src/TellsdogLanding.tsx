import React, { useState, useEffect, useRef } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import HeroSection from './components/HeroSection';
import TransformBubbles from './components/TransformBubbles';
import SemanticSliders from './components/SemanticSliders';
import HowItWorks from './components/HowItWorks';
import SocialProof from './components/SocialProof';
import { BubblePosition, SliderValues, TransformHistory } from './types';
import { transformations } from './constants/content';

export default function TellsdogLanding() {
  const [selectedText, setSelectedText] = useState('');
  const [showBubbles, setShowBubbles] = useState(false);
  const [bubblePosition, setBubblePosition] = useState<BubblePosition>({ x: 0, y: 0 });
  const [transformedText, setTransformedText] = useState('');
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [isTransforming, setIsTransforming] = useState(false);
  const [showSliders, setShowSliders] = useState(false);
  const [contentType, setContentType] = useState('mixed');
  const [hoveredTransform, setHoveredTransform] = useState<string | null>(null);
  const [transformHistory, setTransformHistory] = useState<TransformHistory[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const demoTextRef = useRef<HTMLDivElement>(null);

  // Semantic dimensions
  const [sliderValues, setSliderValues] = useState<SliderValues>({
    formality: 50,
    complexity: 50,
    creativity: 50,
    length: 50
  });

  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      const text = selection?.toString().trim() || '';
      
      if (text && text.length > 10 && demoTextRef.current && selection?.anchorNode && demoTextRef.current.contains(selection.anchorNode)) {
        setSelectedText(text);
        
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        
        setBubblePosition({
          x: rect.left + rect.width / 2,
          y: rect.top - 10
        });
        
        setShowBubbles(true);
      } else if (!showSliders) {
        setShowBubbles(false);
        setSelectedText('');
      }
    };

    document.addEventListener('mouseup', handleSelection);
    document.addEventListener('touchend', handleSelection);

    return () => {
      document.removeEventListener('mouseup', handleSelection);
      document.removeEventListener('touchend', handleSelection);
    };
  }, [showSliders]);

  const handleTransform = async (type: string) => {
    setIsTransforming(true);
    setActiveDemo(type);
    
    // Add to history
    const newTransform: TransformHistory = {
      id: Date.now(),
      type,
      original: selectedText,
      transformed: transformations[type as keyof typeof transformations]?.transformed || "Transformed text based on your settings...",
      timestamp: new Date()
    };
    
    setTransformHistory(prev => [newTransform, ...prev].slice(0, 5));
    
    // Simulate API call with typing effect
    let finalText = transformations[type as keyof typeof transformations]?.transformed || "Transformed text...";
    let currentText = '';
    let index = 0;
    
    const typeText = () => {
      if (index < finalText.length) {
        currentText += finalText[index];
        setTransformedText(currentText);
        index++;
        setTimeout(typeText, 20);
      } else {
        setIsTransforming(false);
        setShowBubbles(false);
      }
    };
    
    setTimeout(typeText, 300);
  };

  const handleSliderTransform = () => {
    setIsTransforming(true);
    
    setTimeout(() => {
      const formalityText = sliderValues.formality > 70 ? 
        "The analysis demonstrates significant improvements across key performance indicators." :
        sliderValues.formality < 30 ?
        "Things are looking way better than before!" :
        "The results show notable improvements in our metrics.";
        
      setTransformedText(formalityText);
      setIsTransforming(false);
      setShowSliders(false);
      setShowBubbles(false);
    }, 800);
  };

  const resetDemo = () => {
    setActiveDemo(null);
    setTransformedText('');
    setSelectedText('');
    setShowSliders(false);
    window.getSelection()?.removeAllRanges();
  };

  const shareDemo = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatedBackground />
      
      <HeroSection
        contentType={contentType}
        selectedText={selectedText}
        transformedText={transformedText}
        activeDemo={activeDemo}
        transformHistory={transformHistory}
        showSuccess={showSuccess}
        demoTextRef={demoTextRef}
        onContentTypeChange={(type) => {
          setContentType(type);
          resetDemo();
        }}
        onResetDemo={resetDemo}
        onShareDemo={shareDemo}
        onClearHistory={() => setTransformHistory([])}
      />

      <TransformBubbles
        showBubbles={showBubbles && !showSliders}
        bubblePosition={bubblePosition}
        isTransforming={isTransforming}
        hoveredTransform={hoveredTransform}
        contentType={contentType}
        onTransform={handleTransform}
        onHoverTransform={setHoveredTransform}
        onShowSliders={() => setShowSliders(true)}
      />

      <SemanticSliders
        showSliders={showSliders}
        bubblePosition={bubblePosition}
        sliderValues={sliderValues}
        isTransforming={isTransforming}
        onSliderChange={setSliderValues}
        onClose={() => setShowSliders(false)}
        onTransform={handleSliderTransform}
      />

      <HowItWorks />
      <SocialProof />

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        ::selection {
          background: rgba(59, 130, 246, 0.5);
          color: white;
        }
        
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          background: white;
          cursor: pointer;
          border-radius: 50%;
        }
        
        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          background: white;
          cursor: pointer;
          border-radius: 50%;
          border: none;
        }
      `}</style>
    </div>
  );
}
