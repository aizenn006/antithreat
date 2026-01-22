import { useState } from "react";
import LoginForm from "@/components/auth/LoginForm";
import SignupForm from "@/components/auth/SignupForm";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

const Index = () => {
  const [view, setView] = useState("login");

  return (
    <div className="auth-container flex items-center justify-center p-4 sm:p-6" data-testid="auth-container">
      <div className="w-full max-w-md">
        <div className="auth-card smooth-transition">
          {view === "login" && (
            <LoginForm
              onSwitchToSignup={() => setView("signup")}
              onForgotPassword={() => setView("forgot")}
            />
          )}
          {view === "signup" && (
            <SignupForm onSwitchToLogin={() => setView("login")} />
          )}
          {view === "forgot" && (
            <ForgotPasswordForm onBack={() => setView("login")} />
          )}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          SafeGuard © 2025 • Your Safety, Our Priority
        </p>
      </div>
    </div>
  );
};

export default Index;