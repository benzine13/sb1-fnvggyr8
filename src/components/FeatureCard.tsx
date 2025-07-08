import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
  color: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  onClick,
  color,
}) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 p-6 text-left group hover:scale-105"
    >
      <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </button>
  );
};