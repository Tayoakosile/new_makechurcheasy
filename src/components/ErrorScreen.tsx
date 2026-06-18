import { HelpCircle, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface ErrorScreenProps {
  title: string;
  description: string;
  code?: string;
  icon?: React.ReactNode;
  primaryActionText?: string;
  primaryActionLink?: string;
  secondaryActionText?: string;
  secondaryActionLink?: string;
}

export default function ErrorScreen({
  title,
  description,
  code,
  icon,
  primaryActionText = "Return to Dashboard",
  primaryActionLink = "/",
  secondaryActionText = "Contact Support",
  secondaryActionLink = "/support"
}: ErrorScreenProps) {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-sm p-8 text-center relative overflow-hidden flex flex-col items-center">
        {/* Decorative background blobs */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-60"></div>

        {icon && (
          <div className="relative z-10 w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mb-6">
            <div className="absolute inset-0 rounded-full border-4 border-red-500/20"></div>
            {icon}
          </div>
        )}

        {code && (
          <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 relative z-10">
            Error {code}
          </span>
        )}

        <h1 className="text-2xl font-bold text-slate-900 mb-3 relative z-10 tracking-tight">
          {title}
        </h1>
        
        <p className="text-slate-600 text-sm mb-8 relative z-10 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full relative z-10">
          <Link 
            to={secondaryActionLink}
            className="w-full sm:w-auto px-6 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-bold shadow-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
          >
            <HelpCircle className="w-4 h-4" />
            {secondaryActionText}
          </Link>
          <Link 
            to={primaryActionLink}
            className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-bold shadow-md shadow-blue-600/20 hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            {primaryActionText}
          </Link>
        </div>
      </div>
    </div>
  );
}
