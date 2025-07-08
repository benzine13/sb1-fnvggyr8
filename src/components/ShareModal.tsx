import React, { useState } from 'react';
import { X, Share2, MessageCircle, Image, Link, FileText } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShare: (type: 'text' | 'image' | 'flex', content: any) => void;
  userName: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  onShare,
  userName,
}) => {
  const [shareType] = useState<'flex'>('flex');
  const [flexTitle, setFlexTitle] = useState('✨BonusTime⭐n');
  const [flexDescription, setFlexDescription] = useState('✨BonusTime⭐');

  if (!isOpen) return null;

  const handleShare = () => {
    const content = {
      type: "flex",
      altText: "✨BonusTime⭐",
      contents: {
        type: "carousel",
        contents: [
          {
            type: "bubble",
            size: "mega",
            direction: "ltr",
            hero: {
              type: "image",
              url: "https://www.i-pic.info/i/5RG11076885.png",
              align: "center",
              size: "full",
              aspectMode: "fit",
              backgroundColor: "#0F0F0FFF",
              action: {
                type: "uri",
                uri: "https://heylink.me/789lkfun/",
                label: "action"
              },
              animated: true
            }
          },
          {
            type: "bubble",
            size: "mega",
            direction: "ltr",
            hero: {
              type: "image",
              url: "https://www.i-pic.info/i/YQig1076886.png",
              align: "center",
              size: "full",
              aspectMode: "fit",
              backgroundColor: "#0F0F0FFF",
              animated: true,
              action: {
                type: "uri",
                label: "action",
                uri: "https://heylink.me/789lkfun/"
              }
            }
          },
          {
            type: "bubble",
            size: "mega",
            direction: "ltr",
            hero: {
              type: "image",
              url: "https://www.i-pic.info/i/jup51076883.png",
              align: "center",
              size: "full",
              aspectMode: "fit",
              backgroundColor: "#0F0F0FFF",
              animated: true,
              action: {
                type: "uri",
                label: "action",
                uri: "https://heylink.me/789lkfun/"
              }
            }
          },
          {
            type: "bubble",
            size: "mega",
            direction: "ltr",
            hero: {
              type: "image",
              url: "https://www.i-pic.info/i/7y2p1076884.png",
              align: "center",
              size: "full",
              aspectMode: "fit",
              backgroundColor: "#0F0F0FFF",
              animated: true,
              action: {
                type: "uri",
                label: "action",
                uri: "https://heylink.me/789lkfun/"
              }
            }
          }
        ]
      }
    };
    
    onShare(shareType, content);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-800">Share Rich Message</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          {/* Rich Message Preview */}
          <div className="mb-6">
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4 border border-purple-200">
              <div className="flex items-center space-x-2 mb-2">
                <FileText className="w-5 h-5 text-purple-600" />
                <h3 className="text-sm font-medium text-purple-800">Rich Carousel Message</h3>
              </div>
              <p className="text-xs text-purple-600">
                This will share a beautiful carousel with 4 animated images that link to your content.
              </p>
            </div>
          </div>

          {/* Message Details */}
          <div className="mb-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-700 mb-3">Message Features:</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>4 animated carousel images</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Interactive tap-to-open links</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Professional design layout</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Mobile-optimized display</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-xl transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              onClick={handleShare}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};