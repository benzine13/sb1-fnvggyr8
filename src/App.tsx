import React from 'react';
import { useLiff } from './hooks/useLiff';
import { LoadingSpinner } from './components/LoadingSpinner';
import { LoginScreen } from './components/LoginScreen';
import { ProfileCard } from './components/ProfileCard';
import { LiffInfo } from './components/LiffInfo';
import { FeatureCard } from './components/FeatureCard';
import { ShareModal } from './components/ShareModal';
import { 
  MessageCircle, 
  Share2, 
  ExternalLink, 
  X, 
  Camera, 
  MapPin,
  Settings,
  Heart
} from 'lucide-react';

function App() {
  const [isShareModalOpen, setIsShareModalOpen] = React.useState(false);
  
  const {
    isLiffReady,
    profile,
    liffData,
    error,
    isLoggedIn,
    login,
    logout,
    sendMessage,
    shareTargetPicker,
    openWindow,
    closeWindow,
  } = useLiff();

  if (!isLiffReady) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-md w-full">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <X className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Connection Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <p className="text-sm text-gray-500">Please make sure you're opening this app from LINE</p>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return <LoginScreen onLogin={login} />;
  }

  const handleSendMessage = () => {
    sendMessage(`Hello from ${profile?.displayName}! 👋`);
  };

  const handleShare = () => {
    setIsShareModalOpen(true);
  };

  const handleShareContent = (type: 'text' | 'image' | 'flex', content: any) => {
    shareTargetPicker([content]);
  };

  const handleOpenExternal = () => {
    openWindow('https://developers.line.biz/en/docs/liff/');
  };

  const features = [
    {
      icon: MessageCircle,
      title: 'Send Message',
      description: 'Send a message to the current chat',
      onClick: handleSendMessage,
      color: 'bg-green-500',
    },
    {
      icon: Share2,
      title: 'Share Content',
      description: 'Share content with friends using target picker',
      onClick: handleShare,
      color: 'bg-blue-500',
    },
    {
      icon: ExternalLink,
      title: 'Open External',
      description: 'Open LIFF documentation in external browser',
      onClick: handleOpenExternal,
      color: 'bg-purple-500',
    },
    {
      icon: Camera,
      title: 'Camera Feature',
      description: 'Access camera functionality (demo)',
      onClick: () => alert('Camera feature would be implemented here'),
      color: 'bg-orange-500',
    },
    {
      icon: MapPin,
      title: 'Location',
      description: 'Get user location (demo)',
      onClick: () => alert('Location feature would be implemented here'),
      color: 'bg-red-500',
    },
    {
      icon: Settings,
      title: 'Settings',
      description: 'App settings and preferences',
      onClick: () => alert('Settings would be implemented here'),
      color: 'bg-gray-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-md mx-auto p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pt-4">
          <h1 className="text-2xl font-bold text-gray-800">LIFF App</h1>
          <div className="flex items-center space-x-2">
            <button
              onClick={logout}
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
            <button
              onClick={closeWindow}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>

        {/* Profile Card */}
        {profile && (
          <ProfileCard
            profile={profile}
            onSendMessage={handleSendMessage}
            onShare={handleShare}
          />
        )}

        {/* LIFF Info */}
        {liffData && <LiffInfo liffData={liffData} />}

        {/* Features Grid */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Features</h3>
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                onClick={feature.onClick}
                color={feature.color}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-6">
          <div className="flex items-center justify-center space-x-1 text-gray-500 mb-2">
            <span className="text-sm">Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span className="text-sm">for LINE</span>
          </div>
          <p className="text-xs text-gray-400">
            LIFF v2.0 • React + TypeScript
          </p>
        </div>
      </div>
      
      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        onShare={handleShareContent}
        userName={profile?.displayName || 'LIFF User'}
      />
    </div>
  );
}

export default App;