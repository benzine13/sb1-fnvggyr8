import React from 'react';
import { Info, Smartphone, Globe, Users } from 'lucide-react';
import type { LiffData } from '../types/liff';

interface LiffInfoProps {
  liffData: LiffData;
}

export const LiffInfo: React.FC<LiffInfoProps> = ({ liffData }) => {
  const getContextIcon = () => {
    switch (liffData.context.type) {
      case 'utou':
        return <Users className="w-4 h-4" />;
      case 'room':
        return <Users className="w-4 h-4" />;
      case 'group':
        return <Users className="w-4 h-4" />;
      default:
        return <Smartphone className="w-4 h-4" />;
    }
  };

  const getContextLabel = () => {
    switch (liffData.context.type) {
      case 'utou':
        return '1:1 Chat';
      case 'room':
        return 'Room';
      case 'group':
        return 'Group';
      case 'square_chat':
        return 'Square Chat';
      default:
        return 'Unknown';
    }
  };

  const getViewTypeColor = () => {
    switch (liffData.context.viewType) {
      case 'compact':
        return 'bg-yellow-100 text-yellow-800';
      case 'tall':
        return 'bg-blue-100 text-blue-800';
      case 'full':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <Info className="w-5 h-5 text-blue-500" />
        <h3 className="font-semibold text-gray-800">LIFF Information</h3>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between py-2 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <Globe className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">Language</span>
          </div>
          <span className="text-sm font-medium text-gray-800">{liffData.language}</span>
        </div>
        
        <div className="flex items-center justify-between py-2 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            {getContextIcon()}
            <span className="text-sm text-gray-600">Context</span>
          </div>
          <span className="text-sm font-medium text-gray-800">{getContextLabel()}</span>
        </div>
        
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center space-x-2">
            <Smartphone className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">View Type</span>
          </div>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${getViewTypeColor()}`}>
            {liffData.context.viewType}
          </span>
        </div>
      </div>
    </div>
  );
};