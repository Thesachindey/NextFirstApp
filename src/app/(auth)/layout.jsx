import React from 'react';

const AuthLayout = ({ children }) => {
    return (
        <div>
           
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 relative overflow-hidden">
      
      {/* Decorative Blob 1 (Top Left) */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      
      {/* Decorative Blob 2 (Bottom Right) */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-75"></div>

      {/* The Glass Card */}
      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-3xl p-8">
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white">MyApp</h1>
            <p className="text-slate-300 text-sm mt-2">Welcome back</p>
          </div>

          {children}

        </div>
      </div>
    </div>
        </div>
    );
};

export default AuthLayout;