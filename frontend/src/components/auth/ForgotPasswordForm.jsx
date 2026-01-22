import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Logo from './Logo';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ForgotPasswordForm = ({ onBack }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await axios.post(`${API}/auth/forgot-password`, { email });
      console.log('Password reset email sent:', response.data);
      setSuccess(true);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send reset email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6" data-testid="forgot-password-form">
      <Logo size="medium" />
      
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground">Reset Password</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Enter your email to receive reset instructions
        </p>
      </div>

      {success ? (
        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm" data-testid="reset-success-message">
            Password reset instructions have been sent to your email!
          </div>
          <Button
            onClick={onBack}
            variant="outline"
            className="w-full h-11"
            data-testid="back-to-login-button"
          >
            Back to Login
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm" data-testid="forgot-password-error">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              data-testid="forgot-password-email-input"
              className="h-11"
            />
          </div>

          <Button
            type="submit"
            className="w-full h-11 bg-gradient-to-r from-pink-400 to-blue-400 hover:from-pink-500 hover:to-blue-500 text-white font-semibold"
            disabled={loading}
            data-testid="forgot-password-submit-button"
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </Button>

          <Button
            type="button"
            onClick={onBack}
            variant="ghost"
            className="w-full h-11"
            data-testid="back-button"
          >
            Back to Login
          </Button>
        </form>
      )}
    </div>
  );
};

export default ForgotPasswordForm;