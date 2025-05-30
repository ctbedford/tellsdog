import React from 'react';
import { Sliders, Layers } from 'lucide-react';
import { BubblePosition } from '../types';
import { transformations, transformationPreviews } from '../constants/content';

interface TransformBubblesProps {
  showBubbles: boolean;
  bubblePosition: BubblePosition;
  isTransforming: boolean;
  hoveredTransform: string | null;
  contentType: string;
  isIterativeMode?: boolean;
  onTransform: (type: string) => void;
  onHoverTransform: (type: string | null) => void;
  onShowSliders: () => void;
}

const TransformBubbles: React.FC<TransformBubblesProps> = ({
  showBubbles,
  bubblePosition,
  isTransforming,
  hoveredTransform,
  contentType,
  isIterativeMode = false,
  onTransform,
  onHoverTransform,
  onShowSliders
}) => {
  if (!showBubbles) return null;

  return (
    <div 
      className="fixed z-50 animate-fade-in"
      style={{ 
        left: `${bubblePosition.x}px`, 
        top: `${bubblePosition.y - 60}px`,
        transform: 'translateX(-50%)'
      }}
    >
      <div className="bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl">
        {isIterativeMode && (
          <div className="px-3 py-1.5 bg-purple-500/20 border-b border-white/10 flex items-center justify-center gap-2">
            <Layers className="w-3 h-3 text-purple-400" />
            <span className="text-xs text-purple-400">Iterating on transformed text</span>
          </div>
        )}
        
        <div className="flex gap-2 p-2">
          {Object.entries(transformations).map(([key, transform]) => (
            <button
              key={key}
              onClick={() => onTransform(key)}
              onMouseEnter={() => onHoverTransform(key)}
              onMouseLeave={() => onHoverTransform(null)}
              className={`relative px-4 py-2 ${
                transform.color === 'blue' ? 'bg-blue-500 hover:bg-blue-600' :
                transform.color === 'purple' ? 'bg-purple-500 hover:bg-purple-600' :
                transform.color === 'pink' ? 'bg-pink-500 hover:bg-pink-600' :
                transform.color === 'green' ? 'bg-green-500 hover:bg-green-600' :
                'bg-gray-500 hover:bg-gray-600'
              } rounded-full text-sm font-medium transition-all hover:scale-105 shadow-lg`}
              disabled={isTransforming}
            >
              {transform.icon} {key.charAt(0).toUpperCase() + key.slice(1)}
              
              {/* Preview tooltip */}
              {hoveredTransform === key && (
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-64 p-3 bg-gray-800 rounded-lg text-xs text-left shadow-xl">
                  <p className="text-gray-400 mb-1">Preview:</p>
                  <p className="text-white">
                    {transformationPreviews[key as keyof typeof transformationPreviews]?.[contentType as keyof typeof transformationPreviews.simplify]?.slice(0, 80)}...
                  </p>
                  {isIterativeMode && (
                    <p className="text-purple-400 mt-2 text-xs">
                      This will transform only the selected portion
                    </p>
                  )}
                </div>
              )}
            </button>
          ))}
          
          <button
            onClick={onShowSliders}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-full text-sm font-medium transition-all hover:scale-105 shadow-lg flex items-center gap-2"
          >
            <Sliders className="w-4 h-4" />
            Custom
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransformBubbles;