"use client";
import React, { useState } from 'react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container mx-auto p-4 flex justify-center items-center min-h-[70vh]">
      <div className="w-full max-w-md bg-dark/50 p-8 rounded-lg">
        <h1 className="text-3xl font-serif text-gold mb-6 text-center">
          {isLogin ? 'Login' : 'Register'}
        </h1>
        <form className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-md bg-dark text-light border border-gold"
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-md bg-dark text-light border border-gold"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-md bg-dark text-light border border-gold"
          />
          <button
            type="submit"
            className="w-full p-3 rounded-md bg-gold text-dark font-bold hover:bg-gold/80"
          >
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </form>
        <p className="text-center mt-4 text-ivory">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button onClick={() => setIsLogin(!isLogin)} className="text-gold font-bold ml-2">
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
