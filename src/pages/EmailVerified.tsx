import { CheckCircle2, RotateCcw, Shield, Activity, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmailVerified() {
  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto w-full min-h-[calc(100vh-80px)] flex flex-col justify-center items-center pb-16">
      
      <div className="w-full bg-white border border-slate-200 rounded-2xl shadow-sm p-8 md:p-12 text-center relative overflow-hidden flex flex-col items-center">
        {/* Decorative background blobs */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-60"></div>

        <div className="relative z-10 w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-8 animate-in zoom-in duration-500">
          <div className="absolute inset-0 rounded-full border-4 border-green-500/20 animate-ping delay-150"></div>
          <CheckCircle2 className="w-12 h-12 text-green-600 fill-green-100" />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 relative z-10 tracking-tight">
          Your email has been successfully verified
        </h1>
        
        <p className="text-slate-600 text-sm md:text-base max-w-md mx-auto mb-8 relative z-10">
          Thank you, <span className="font-bold text-slate-900">Tayo Akosile</span>. Your primary account email has been updated to your new address. All future communications will be sent there.
        </p>

        <div className="w-full max-w-md bg-slate-50 border border-slate-200/60 rounded-xl p-5 mb-8 flex items-center gap-4 relative z-10 mx-auto text-left">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600 shadow-sm shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">Verified Account Email</p>
            <p className="text-sm sm:text-base font-semibold text-slate-900 truncate">pastor.tayo@savioursassembly.org</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full relative z-10">
          <Link 
            to="/settings"
            className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg text-sm font-bold shadow-md shadow-blue-600/20 hover:bg-blue-700 transition-all"
          >
            Return to Profile Settings
          </Link>
          <Link 
            to="/"
            className="w-full sm:w-auto px-8 py-3 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-bold shadow-sm hover:bg-slate-50 transition-all"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        <Link to="/security" className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 group">
          <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
            <RotateCcw className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Update Password</h3>
            <p className="text-xs text-slate-500 mt-1">Keep your account secure</p>
          </div>
        </Link>
        <Link to="/security" className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 group">
          <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center shrink-0">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">2FA Setup</h3>
            <p className="text-xs text-slate-500 mt-1">Add extra protection</p>
          </div>
        </Link>
        <Link to="/security" className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 group">
          <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center shrink-0">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 group-hover:text-purple-600 transition-colors">Activity Logs</h3>
            <p className="text-xs text-slate-500 mt-1">Review recent logins</p>
          </div>
        </Link>
      </div>
      
    </div>
  );
}
