import React from 'react';
import { LogIn, Smartphone, Shield, Zap } from 'lucide-react';

interface LoginScreenProps {
  onLogin: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Smartphone className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome to LIFF App</h1>
          <p className="text-gray-600 mb-8">Connect with LINE to access all features</p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-3 text-left">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Secure Authentication</p>
                <p className="text-xs text-gray-500">Login safely with your LINE account</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-left">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Instant Access</p>
                <p className="text-xs text-gray-500">Quick setup with no registration required</p>
              </div>
            </div>
          </div>
          
          <button
            onClick={onLogin}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
          >
            <LogIn className="w-5 h-5" />
            <span>Login with LINE</span>
          </button>
          
          <p className="text-xs text-gray-500 mt-4">
            By logging in, you agree to our terms of service
          </p>
        </div>
      </div>
    </div>
  );
};