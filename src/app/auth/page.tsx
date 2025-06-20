"use client";
import React, { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FaApple, FaGoogle } from 'react-icons/fa';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    contactNumber: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.push('/');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    try {
      if (isLogin) {
        const result = await signIn('credentials', {
          email: formData.email,
          password: formData.password,
          redirect: false,
        });

        if (result?.error) {
          setError('Invalid credentials');
        } else {
          router.push('/');
        }
      } else {
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            username: formData.username,
            email: formData.email,
            contactNumber: formData.contactNumber,
            password: formData.password,
          }),
        });

        if (response.ok) {
          // Auto login after registration
          const result = await signIn('credentials', {
            email: formData.email,
            password: formData.password,
            redirect: false,
          });

          if (result?.error) {
            setError('Registration successful but login failed');
          } else {
            router.push('/');
          }
        } else {
          const data = await response.json();
          setError(data.error || 'Registration failed');
        }
      }
    } catch {
      setError('An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy via-navy to-dark-navy p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-gold mb-2">Noorion</h1>
          <p className="text-ivory/80">Modern Islamic Social Platform</p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gold/20">
          <div className="flex mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                isLogin
                  ? 'bg-gold text-navy'
                  : 'text-ivory/60 hover:text-ivory'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                !isLogin
                  ? 'bg-gold text-navy'
                  : 'text-ivory/60 hover:text-ivory'
              }`}
            >
              Register
            </button>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required={!isLogin}
                    className="w-full px-4 py-3 bg-white/10 border border-ivory/20 rounded-lg text-ivory placeholder-ivory/50 focus:outline-none focus:border-gold transition-colors"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required={!isLogin}
                    className="w-full px-4 py-3 bg-white/10 border border-ivory/20 rounded-lg text-ivory placeholder-ivory/50 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required={!isLogin}
                  className="w-full px-4 py-3 bg-white/10 border border-ivory/20 rounded-lg text-ivory placeholder-ivory/50 focus:outline-none focus:border-gold transition-colors"
                />
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Contact Number"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-ivory/20 rounded-lg text-ivory placeholder-ivory/50 focus:outline-none focus:border-gold transition-colors"
                />
              </>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-ivory/20 rounded-lg text-ivory placeholder-ivory/50 focus:outline-none focus:border-gold transition-colors"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-ivory/20 rounded-lg text-ivory placeholder-ivory/50 focus:outline-none focus:border-gold transition-colors"
            />

            {!isLogin && (
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required={!isLogin}
                className="w-full px-4 py-3 bg-white/10 border border-ivory/20 rounded-lg text-ivory placeholder-ivory/50 focus:outline-none focus:border-gold transition-colors"
              />
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Loading...' : (isLogin ? 'Login' : 'Register')}
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-ivory/20" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-ivory/60">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center px-4 py-3 border border-ivory/20 rounded-lg text-ivory hover:bg-white/10 transition-colors">
                <FaApple className="mr-2" />
                Apple
              </button>
              <button className="flex items-center justify-center px-4 py-3 border border-ivory/20 rounded-lg text-ivory hover:bg-white/10 transition-colors">
                <FaGoogle className="mr-2" />
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
