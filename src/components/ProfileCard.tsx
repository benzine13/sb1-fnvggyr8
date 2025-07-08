import React from 'react';
import { User, MessageCircle, Share2 } from 'lucide-react';
import type { LiffProfile } from '../types/liff';

interface ProfileCardProps {
  profile: LiffProfile;
  onSendMessage: () => void;
  onShare: () => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  profile,
  onSendMessage,
  onShare,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <div className="flex items-center space-x-4 mb-6">
        {profile.pictureUrl ? (
          <img
            src={profile.pictureUrl}
            alt={profile.displayName}
            className="w-16 h-16 rounded-full object-cover border-4 border-green-100"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
            <User className="w-8 h-8 text-white" />
          </div>
        )}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-800">{profile.displayName}</h2>
          {profile.statusMessage && (
            <p className="text-gray-600 text-sm mt-1">{profile.statusMessage}</p>
          )}
          <p className="text-xs text-gray-500 mt-1">ID: {profile.userId}</p>
        </div>
      </div>
      
      <div className="flex space-x-3">
        <button
          onClick={onSendMessage}
          className="flex-1 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Send Message</span>
        </button>
        <button
          onClick={onShare}
          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2 relative group"
        >
          <Share2 className="w-4 h-4" />
          <span>Share</span>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};