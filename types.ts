
// Fix: Import React to resolve 'Cannot find namespace React' for React.ReactNode
import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  status: 'pending' | 'active' | 'completed';
}
