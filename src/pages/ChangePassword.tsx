import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, CheckCircle2, Lock, Eye, EyeOff, Info, ArrowRight, ShieldCheck, Mail, AlertTriangle } from "lucide-react";
import { cn } from "../lib/utils";

export default function ChangePassword() {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 'forgot' | 'sent'>(1);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  
  const [error, setError] = useState("");

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentPassword === "error") {
      setError("Incorrect password. Please try again.");
    } else {
      setError("");
      setStep(2);
    }
  };

  const handleNewPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    setError("");
    setStep(3);
  };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
    } else {
      setError("");
      setStep(4);
    }
  };

  const handleForgot = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('sent');
  }

  // Helper for step indicators
  const StepIndicator = ({ num, current, label }: { num: number, current: number, label: string }) => {
    const isCompleted = current > num;
    const isActive = current === num;
    
    return (
      <div className="flex flex-col items-center gap-2 relative z-10">
        <div className={cn(
          "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-sm md:text-base border-2 transition-colors",
          isCompleted ? "bg-blue-600 border-blue-600 text-white" : 
          isActive ? "bg-blue-600 border-blue-600 text-white shadow-md" : 
          "bg-slate-50 border-slate-200 text-slate-400"
        )}>
          {isCompleted ? <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" /> : num}
        </div>
        <span className={cn(
          "text-[10px] md:text-xs font-bold uppercase tracking-wider text-center hidden sm:block",
          isCompleted || isActive ? "text-blue-600" : "text-slate-400"
        )}>
          {label}
        </span>
      </div>
    );
  };

  const StepLine = ({ active }: { active: boolean }) => (
    <div className={cn(
      "flex-1 h-1 rounded-full mx-2 transition-colors",
      active ? "bg-blue-600" : "bg-slate-200"
    )} />
  );

  if (step === 'forgot' || step === 'sent') {
    return (
      <div className="p-4 md:p-8 max-w-lg mx-auto w-full min-h-[calc(100vh-80px)] flex flex-col justify-center pb-16">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 text-center">
          {step === 'forgot' ? (
            <>
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Reset Password</h2>
              <p className="text-slate-500 text-sm mb-8">
                Enter your email address and we'll send you a link to reset your password.
              </p>
              <form onSubmit={handleForgot} className="space-y-6">
                <div>
                  <input 
                    type="email" 
                    required 
                    placeholder="Enter your email" 
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none text-left"
                  />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-sm">
                  Send Reset Link
                </button>
              </form>
              <div className="mt-6">
                <button onClick={() => setStep(1)} className="text-blue-600 text-sm font-bold hover:underline">
                  Back to Verify Identity
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Check Your Email</h2>
              <p className="text-slate-500 text-sm mb-8">
                We've sent a password reset link to your email address. Please check your inbox.
              </p>
              <button onClick={() => setStep(1)} className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors shadow-sm">
                Return to Security Settings
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto w-full min-h-[calc(100vh-80px)] flex flex-col pb-16">
      
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 font-medium">
        <Link to="/settings" className="hover:text-slate-900 transition-colors">Account</Link>
        <ChevronRight className="w-4 h-4" />
        <Link to="/security" className="hover:text-slate-900 transition-colors">Security</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-blue-600 font-bold">Change Password</span>
      </div>

      {/* Stepper */}
      <div className="w-full max-w-3xl mx-auto mb-12">
        <div className="flex items-center justify-between px-2">
          <StepIndicator num={1} current={step as number} label="Verify" />
          <StepLine active={(step as number) > 1} />
          <StepIndicator num={2} current={step as number} label="New Password" />
          <StepLine active={(step as number) > 2} />
          <StepIndicator num={3} current={step as number} label="Confirm" />
          <StepLine active={(step as number) > 3} />
          <StepIndicator num={4} current={step as number} label="Success" />
        </div>
      </div>

      <div className="flex-1 flex justify-center w-full">
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden h-fit">
          
          {step === 1 && (
            <div className="p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">1</div>
                <h2 className="text-xl font-bold text-slate-900">Verify Identity</h2>
              </div>
              <p className="text-sm text-slate-500 mb-8">
                Enter your current password to verify your identity before making any changes. (Type 'error' to see error state)
              </p>
              
              <form onSubmit={handleVerify} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Current Password</label>
                  <div className="relative">
                    <input 
                      type={showCurrent ? "text" : "password"} 
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      required
                      placeholder="••••••••••••"
                      className={cn(
                        "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all font-mono",
                        error ? "border-red-300 focus:ring-red-200" : "border-slate-200 focus:ring-blue-100 focus:border-blue-500"
                      )}
                    />
                    <button 
                      type="button"
                      onClick={() => setShowCurrent(!showCurrent)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showCurrent ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {error && (
                    <div className="flex items-center gap-2 mt-2 text-red-600 text-xs font-bold animate-in fade-in">
                      <AlertTriangle className="w-4 h-4" /> {error}
                    </div>
                  )}
                </div>
                
                <div className="flex justify-end">
                  <button type="button" onClick={() => setStep('forgot')} className="text-sm text-blue-600 font-bold hover:underline">
                    Forgot password?
                  </button>
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white py-3.5 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-sm">
                  Continue
                </button>
              </form>
            </div>
          )}

          {step === 2 && (
            <div className="p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">2</div>
                <h2 className="text-xl font-bold text-slate-900">Create New Password</h2>
              </div>
              <p className="text-sm text-slate-500 mb-8">
                Enter your new secure password below based on the requirements.
              </p>
              
              <form onSubmit={handleNewPassword} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">New Password</label>
                  <div className="relative">
                    <input 
                      type={showNew ? "text" : "password"} 
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                      placeholder="Enter new password"
                      className={cn(
                        "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all font-mono",
                        error ? "border-red-300 focus:ring-red-200" : "border-slate-200 focus:ring-blue-100 focus:border-blue-500"
                      )}
                    />
                    <button 
                      type="button"
                      onClick={() => setShowNew(!showNew)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showCurrent ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {error && (
                    <div className="flex items-center gap-2 mt-2 text-red-600 text-xs font-bold animate-in fade-in">
                      <AlertTriangle className="w-4 h-4" /> {error}
                    </div>
                  )}
                </div>

                {/* Password Strength Mock */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-700">Password Strength</span>
                    <span className="text-xs font-bold text-green-600">Strong</span>
                  </div>
                  <div className="flex gap-1 h-1.5 w-full">
                    <div className="flex-1 bg-green-500 rounded-full"></div>
                    <div className="flex-1 bg-green-500 rounded-full"></div>
                    <div className="flex-1 bg-green-500 rounded-full"></div>
                    <div className="flex-1 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Requirements:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-green-600">
                      <CheckCircle2 className="w-4 h-4" /> At least 8 characters
                    </li>
                    <li className="flex items-center gap-2 text-sm text-green-600">
                      <CheckCircle2 className="w-4 h-4" /> One uppercase letter
                    </li>
                    <li className="flex items-center gap-2 text-sm text-green-600">
                      <CheckCircle2 className="w-4 h-4" /> One number or symbol
                    </li>
                  </ul>
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white py-3.5 rounded-lg font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-sm">
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          )}

          {step === 3 && (
            <div className="p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">3</div>
                <h2 className="text-xl font-bold text-slate-900">Confirm Password</h2>
              </div>
              <p className="text-sm text-slate-500 mb-8">
                Re-enter your password to finalize the change.
              </p>
              
              <form onSubmit={handleConfirm} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Confirm New Password</label>
                  <div className="relative">
                    <input 
                      type={showConfirm ? "text" : "password"} 
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      placeholder="••••••••••••"
                      className={cn(
                        "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all font-mono",
                        error ? "border-red-300 focus:ring-red-200" : "border-slate-200 focus:ring-blue-100 focus:border-blue-500"
                      )}
                    />
                    <button 
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {error && (
                    <div className="flex items-center gap-2 mt-2 text-red-600 text-xs font-bold animate-in fade-in">
                      <AlertTriangle className="w-4 h-4" /> {error}
                    </div>
                  )}
                  <p className="text-xs text-slate-500 mt-2 flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5" /> Must match the password entered in the previous step.
                  </p>
                </div>

                <div className="pt-2 flex flex-col gap-3">
                  <button type="submit" className="w-full bg-blue-600 text-white py-3.5 rounded-lg font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-sm">
                    Update Password <Lock className="w-4 h-4" />
                  </button>
                  <button type="button" onClick={() => setStep(2)} className="w-full py-3.5 text-slate-600 font-bold hover:bg-slate-50 rounded-lg transition-colors">
                    Back
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 4 && (
            <div className="p-10 flex flex-col items-center text-center animate-in zoom-in-95 duration-500">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 relative">
                <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping"></div>
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Password Updated</h2>
              <p className="text-sm text-slate-500 mb-8 max-w-xs">
                Your account security has been updated. You will need to use your new password next time you sign in.
              </p>
              <Link 
                to="/security" 
                className="w-full bg-slate-900 text-white py-3.5 rounded-lg font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                Return to Security <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
          
        </div>
      </div>
      
      {step < 4 && (
        <div className="mt-8 text-center">
          <Link to="/security" className="text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium">
            Cancel and return to security
          </Link>
        </div>
      )}

    </div>
  );
}
