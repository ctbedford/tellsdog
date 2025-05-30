import React from 'react';
import { X } from 'lucide-react';
import { BubblePosition, SliderValues } from '../types';

interface SemanticSlidersProps {
  showSliders: boolean;
  bubblePosition: BubblePosition;
  sliderValues: SliderValues;
  isTransforming: boolean;
  onSliderChange: (values: SliderValues) => void;
  onClose: () => void;
  onTransform: () => void;
}

const SemanticSliders: React.FC<SemanticSlidersProps> = ({
  showSliders,
  bubblePosition,
  sliderValues,
  isTransforming,
  onSliderChange,
  onClose,
  onTransform
}) => {
  if (!showSliders) return null;

  return (
    <div 
      className="fixed z-50 animate-fade-in"
      style={{ 
        left: `${bubblePosition.x}px`, 
        top: `${bubblePosition.y - 200}px`,
        transform: 'translateX(-50%)'
      }}
    >
      <div className="w-80 p-6 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Fine-tune transformation</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        {Object.entries(sliderValues).map(([key, value]) => (
          <div key={key} className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="capitalize text-gray-400">{key}</span>
              <span className="text-white">{value}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              onChange={(e) => onSliderChange({ ...sliderValues, [key]: parseInt(e.target.value) })}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
        ))}
        
        <button
          onClick={onTransform}
          className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-full font-medium transition-all"
          disabled={isTransforming}
        >
          Apply Transform
        </button>
      </div>
    </div>
  );
};

export default SemanticSliders;
