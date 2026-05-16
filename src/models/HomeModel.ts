
// src/models/HomeModel.ts
export type TimelineColor = 'green' | 'blue' | 'neutral';

export interface TimelineItem {
  period: string;
  role: string;
  org: string;
  color: TimelineColor;
  desc: string;
}

export interface ProjectItem {
  name: string;
  desc: string;
  stack: string[];
  url: string;
  highlight: boolean;
}