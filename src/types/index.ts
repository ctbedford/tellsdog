import { ReactElement } from 'react';

export interface Transformation {
  original: string;
  transformed: string;
  icon: string;
  color: 'blue' | 'purple' | 'pink' | 'green';
}

export interface ContentExample {
  title: string;
  icon: ReactElement;
  text: string;
}

export interface TransformHistory {
  id: number;
  type: string;
  original: string;
  transformed: string;
  timestamp: Date;
}

export interface SliderValues {
  formality: number;
  complexity: number;
  creativity: number;
  length: number;
}

export interface BubblePosition {
  x: number;
  y: number;
}

export interface TransformChain {
  id: number;
  steps: {
    text: string;
    transformType?: string;
  }[];
}

export type ContentType = 'mixed' | 'email' | 'report';
export type TransformationType = 'simplify' | 'formalize' | 'story' | 'actionable';