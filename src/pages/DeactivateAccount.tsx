import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AlertOctagon, CheckCircle2, ChevronRight, X, AlertTriangle, Shield, Download, Lock } from "lucide-react";
import { cn } from "../lib/utils";

export default function DeactivateAccount() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleDeactivate = (e: React.FormEvent) => {
    e.preventDefault();
    if (password) {
      setStep(3);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setStep(1);
    setPassword("");
  };

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto w-full pb-16">
      
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-slate-500 mb-6 font-medium">
        <Link to="/settings" className="hover:text-slate-900 transition-colors">Account</Link>
        <ChevronRight className="w-4 h-4" />
        <Link to="/settings" className="hover:text-slate-900 transition-colors">Profile</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-red-600 font-bold">Deactivate Account</span>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-6 md:p-10 border-b border-slate-100 bg-red-50/30">
          <div className="flex items-start gap-4">
            <div className="p-4 bg-red-100 text-red-600 rounded-2xl shrink-0 mt-1">
              <AlertOctagon className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Deactivate Your Account</h1>
              <p className="text-slate-600 mt-2 text-sm leading-relaxed max-w-2xl">
                Deactivating your account will temporarily remove your profile and suspend your access to EasyBible Mount. 
                You can recover your account within 30 days. After that, your data will be permanently deleted.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-10">
          <h3 className="font-bold text-slate-900 mb-4">What happens when you deactivate?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="flex gap-4 p-5 rounded-xl border border-slate-100 bg-slate-50/50">
              <Shield className="w-6 h-6 text-slate-400 shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Profile Hidden</h4>
                <p className="text-sm text-slate-500 mt-1">Your profile and activity will no longer be visible to other members of your church.</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-5 rounded-xl border border-slate-100 bg-slate-50/50">
              <Download className="w-6 h-6 text-slate-400 shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Data Retention</h4>
                <p className="text-sm text-slate-500 mt-1">Your data will be retained securely for 30 days before permanent deletion.</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center gap-4 justify-between">
            <p className="text-sm text-slate-500 font-medium text-center sm:text-left">
              If you're ready to proceed, please confirm.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-3 bg-red-600 text-white rounded-lg text-sm font-bold shadow-md shadow-red-600/20 hover:bg-red-700 transition-all active:scale-95"
            >
              Continue to Deactivation
            </button>
          </div>
        </div>
      </div>

      {/* Deactivation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={closeModal}></div>
          
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
            
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                Account Deactivation
              </h3>
              <button onClick={closeModal} className="p-1 hover:bg-slate-100 rounded-lg transition-colors text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Steps */}
            <div className="p-6">
              
              {step === 1 && (
                <div className="space-y-6">
                  <div className="bg-red-50 border border-red-100 p-4 rounded-xl">
                    <h4 className="font-bold text-red-900 text-sm mb-1">Are you absolutely sure?</h4>
                    <p className="text-sm text-red-800/80">
                      You will immediately lose access to your church's portal, and any scheduled giving or event registrations may be cancelled.
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => setStep(2)}
                    className="w-full py-3 bg-red-600 text-white rounded-lg text-sm font-bold shadow-sm hover:bg-red-700 transition-all font-medium"
                  >
                    Yes, I understand the consequences
                  </button>
                  <button 
                    onClick={closeModal}
                    className="w-full py-3 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-bold shadow-sm hover:bg-slate-50 transition-all"
                  >
                    Cancel and keep my account
                  </button>
                </div>
              )}

              {step === 2 && (
                <form onSubmit={handleDeactivate} className="space-y-6">
                  <p className="text-sm text-slate-600">
                    Please enter your password to confirm your identity and deactivate your account securely.
                  </p>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
                    <div className="relative">
                      <Lock className="w-5 h-5 text-slate-400 absolute left-3 top-2.5" />
                      <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none"
                        placeholder="Enter your current password"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button 
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 py-2.5 border border-slate-200 text-slate-700 rounded-lg text-sm font-bold hover:bg-slate-50 transition-all"
                    >
                      Back
                    </button>
                    <button 
                      type="submit"
                      disabled={!password}
                      className="flex-1 py-2.5 bg-red-600 disabled:bg-red-400 text-white rounded-lg text-sm font-bold shadow-sm hover:bg-red-700 transition-all"
                    >
                      Deactivate Now
                    </button>
                  </div>
                </form>
              )}

              {step === 3 && (
                <div className="py-6 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-2">
                    <CheckCircle2 className="w-8 h-8 text-slate-500" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Account Deactivated</h4>
                  <p className="text-sm text-slate-500 max-w-xs">
                    Your session has ended. Your account will be permanently deleted in 30 days unless you sign in again to recover it.
                  </p>
                  <button 
                    onClick={() => navigate('/')}
                    className="w-full mt-4 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-bold shadow-sm hover:bg-slate-800 transition-all"
                  >
                    Return to Home
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
