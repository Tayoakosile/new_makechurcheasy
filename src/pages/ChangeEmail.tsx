import { Mail, CheckCircle2, Lock, Eye, Send, ShieldAlert } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function ChangeEmail() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate email verification sent and verified
    navigate("/settings/email/verified");
  };

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto w-full space-y-8 pb-16">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Change Email Address</h1>
        <p className="text-slate-500 mt-1 text-sm">Update the email used to sign in and receive account notifications.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Current Email Section */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 flex items-center justify-center rounded-full shrink-0">
            <Mail className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Current Email</span>
              <span className="px-2 py-0.5 rounded bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 border border-green-100">
                Verified
              </span>
            </div>
            <p className="text-base sm:text-lg font-semibold text-slate-900 truncate">oluwatayoakosile@gmail.com</p>
            <p className="text-xs text-slate-400 mt-1">Last changed: June 12, 2026</p>
          </div>
        </section>

        {/* Enter New Email Section */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-base font-bold text-slate-900">Enter New Email</h2>
          <p className="text-sm text-slate-500 mb-6 mt-1">Please enter and verify your new email address.</p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="new_email">
                New Email Address
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  id="new_email" 
                  type="email" 
                  defaultValue="pastor.tayo@savioursassembly.org"
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm outline-none shadow-sm"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="confirm_email">
                Confirm New Email Address
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  id="confirm_email" 
                  type="email" 
                  defaultValue="pastor.tayo@savioursassembly.org"
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm outline-none shadow-sm"
                  required
                />
              </div>
            </div>
          </div>
        </section>

        {/* Verify Identity Section */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-base font-bold text-slate-900">Verify Your Identity</h2>
          <p className="text-sm text-slate-500 mb-6 mt-1">For your security, please enter your password to continue.</p>
          
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                id="password" 
                type="password" 
                defaultValue="secretpassword123"
                className="w-full pl-10 pr-10 py-2.5 border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm outline-none shadow-sm font-mono"
                required
              />
              <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                <Eye className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 pt-2">
          <Link 
            to="/settings"
            className="w-full sm:w-auto px-6 py-2.5 border border-slate-200 bg-white text-slate-700 rounded-lg text-sm font-bold hover:bg-slate-50 transition-colors shadow-sm text-center"
          >
            Cancel
          </Link>
          <button 
            type="submit"
            className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" /> Send Verification Email
          </button>
        </div>

        {/* Important Note */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 flex items-start gap-4 shadow-sm mt-8">
          <div className="w-10 h-10 bg-white border border-blue-100 rounded-lg flex items-center justify-center shrink-0 shadow-sm text-blue-600">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">Important</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              A verification link will be sent to your new email address.<br className="hidden sm:block" />
              Your current email will remain active until the new email is verified.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
