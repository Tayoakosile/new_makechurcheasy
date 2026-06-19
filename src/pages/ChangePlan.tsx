import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  ChevronRight, 
  ShieldCheck, 
  Users, 
  Sparkles, 
  Info,
  CheckCircle2,
  Circle
} from "lucide-react";
import { cn } from "../lib/utils";

export default function ChangePlan() {
  const [selectedPlan, setSelectedPlan] = useState("pro");
  const [isUpdating, setIsUpdating] = useState(false);
  const navigate = useNavigate();

  const handleConfirm = () => {
    setIsUpdating(true);
    setTimeout(() => {
      navigate('/subscription');
    }, 1500);
  };

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto w-full space-y-8 pb-16">
      
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
        <Link to="/settings" className="hover:text-slate-900 transition-colors">Account</Link>
        <ChevronRight className="w-4 h-4" />
        <Link to="/subscription" className="hover:text-slate-900 transition-colors">Subscription</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-blue-600 font-bold">Change Plan</span>
      </div>

      <div>
        <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Upgrade your impact</h1>
        <p className="text-slate-500 max-w-2xl text-base">
          Scale your church operations with more credits, advanced reporting, and enhanced community tools. Your data remains safe during the transition.
        </p>
      </div>

      {/* Current Plan Banner */}
      <div className="bg-blue-600 text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-white opacity-5 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none"></div>
        
        <div className="flex items-center gap-5 relative z-10 w-full md:w-auto">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shrink-0 backdrop-blur-md border border-white/10">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-blue-200 mb-1">Your current plan</p>
            <h3 className="text-3xl font-black leading-tight">Pro Plan</h3>
            <p className="text-blue-100 font-medium">$19.00/month • Billed monthly</p>
          </div>
        </div>

        <div className="bg-blue-700/50 backdrop-blur-md border border-blue-500 w-full md:w-auto rounded-xl py-3 px-6 text-center shadow-inner relative z-10 shrink-0">
          <p className="text-xs font-bold text-blue-200 uppercase tracking-widest mb-0.5">Next billing date</p>
          <p className="text-base font-bold text-white">January 12, 2026</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-6">Choose a new plan</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Basic Plan */}
          <label className={cn(
            "relative block bg-white rounded-2xl p-6 md:p-8 cursor-pointer transition-all border-2 flex flex-col h-full",
            selectedPlan === 'basic' ? 'border-blue-500 bg-blue-50/30 shadow-[0_4px_20px_-4px_rgba(37,99,235,0.1)]' : 'border-slate-200 hover:border-slate-300 shadow-sm'
          )}>
            <input 
              type="radio" 
              name="plan" 
              value="basic" 
              checked={selectedPlan === 'basic'} 
              onChange={() => setSelectedPlan('basic')}
              className="sr-only" 
            />
            <div className="flex justify-between items-start mb-4">
              <div className={cn("p-2 rounded-lg", selectedPlan === 'basic' ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              {selectedPlan === 'basic' ? <CheckCircle2 className="w-6 h-6 text-blue-600" /> : <Circle className="w-6 h-6 text-slate-300" />}
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-2">Basic</h3>
            <p className="text-sm text-slate-500 font-medium h-10 mb-6">Essential tools for small congregations.</p>
            
            <div className="space-y-4 mb-8 flex-1">
              <div className="flex items-start gap-2.5 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="font-medium text-slate-700">500 Credits / mo</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="font-medium text-slate-700">2 Admin Seats</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="font-medium text-slate-700">Core Analytics</span>
              </div>
            </div>
            
            <div className="mt-auto">
              <span className="text-4xl font-black text-slate-900 tracking-tight">$9</span>
              <span className="text-slate-500 font-medium">/month</span>
            </div>
          </label>

          {/* Pro Plan */}
          <label className={cn(
            "relative block bg-white rounded-2xl p-6 md:p-8 cursor-pointer transition-all border-2 flex flex-col h-full",
            selectedPlan === 'pro' ? 'border-primary bg-blue-50/30 ring-4 ring-blue-500/10 shadow-[0_4px_20px_-4px_rgba(37,99,235,0.15)]' : 'border-slate-200 hover:border-slate-300 shadow-sm'
          )}>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
              Current Plan
            </div>
            <input 
              type="radio" 
              name="plan" 
              value="pro" 
              checked={selectedPlan === 'pro'} 
              onChange={() => setSelectedPlan('pro')}
              className="sr-only" 
            />
            <div className="flex justify-between items-start mb-4">
              <div className={cn("p-2 rounded-lg", selectedPlan === 'pro' ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500')}>
                <Users className="w-6 h-6" />
              </div>
              {selectedPlan === 'pro' ? <CheckCircle2 className="w-6 h-6 text-blue-600" /> : <Circle className="w-6 h-6 text-slate-300" />}
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-2">Pro</h3>
            <p className="text-sm text-slate-500 font-medium h-10 mb-6">Advanced growth for active churches.</p>
            
            <div className="space-y-4 mb-8 flex-1">
              <div className="flex items-start gap-2.5 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="font-medium text-slate-700">2,500 Credits / mo</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="font-medium text-slate-700">10 Admin Seats</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="font-medium text-slate-700">Custom Reports</span>
              </div>
            </div>
            
            <div className="mt-auto">
              <span className="text-4xl font-black text-slate-900 tracking-tight">$19</span>
              <span className="text-slate-500 font-medium">/month</span>
            </div>
          </label>

          {/* Premium Plan */}
          <label className={cn(
            "relative block bg-white rounded-2xl p-6 md:p-8 cursor-pointer transition-all border-2 flex flex-col h-full",
            selectedPlan === 'premium' ? 'border-primary bg-blue-50/30 ring-4 ring-blue-500/10 shadow-[0_4px_20px_-4px_rgba(37,99,235,0.15)]' : 'border-slate-200 hover:border-slate-300 shadow-sm'
          )}>
            <input 
              type="radio" 
              name="plan" 
              value="premium" 
              checked={selectedPlan === 'premium'} 
              onChange={() => setSelectedPlan('premium')}
              className="sr-only" 
            />
            <div className="flex justify-between items-start mb-4">
               <div className={cn("p-2 rounded-lg", selectedPlan === 'premium' ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500')}>
                <Sparkles className="w-6 h-6" />
              </div>
              {selectedPlan === 'premium' ? <CheckCircle2 className="w-6 h-6 text-blue-600" /> : <Circle className="w-6 h-6 text-slate-300" />}
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-2">Premium</h3>
            <p className="text-sm text-slate-500 font-medium h-10 mb-6">Complete ecosystem for large ministries.</p>
            
            <div className="space-y-4 mb-8 flex-1">
              <div className="flex items-start gap-2.5 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="font-medium text-slate-700">Unlimited Credits</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="font-medium text-slate-700">Unlimited Seats</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="font-medium text-slate-700">24/7 Priority Support</span>
              </div>
            </div>
            
            <div className="mt-auto">
              <span className="text-4xl font-black text-slate-900 tracking-tight">$49</span>
              <span className="text-slate-500 font-medium">/month</span>
            </div>
          </label>

        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
        <div className="flex items-start md:items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-400">
            <Info className="w-6 h-6" />
          </div>
          <p className="text-sm text-slate-600 font-medium max-w-sm">
            Your new plan will take effect on your next billing cycle. Current Pro features remain active until then.
          </p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <Link 
            to="/subscription"
            className="flex-1 md:flex-none py-3 px-6 border border-slate-200 text-slate-700 font-bold text-sm rounded-lg hover:bg-slate-50 transition-colors text-center"
          >
            Cancel
          </Link>
          <button 
            onClick={handleConfirm}
            disabled={selectedPlan === 'pro' || isUpdating}
            className="flex-1 md:flex-none py-3 px-8 bg-blue-600 text-white font-bold text-sm rounded-lg hover:bg-blue-700 active:scale-95 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
          >
            {isUpdating ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" strokeWidth="4" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Updating...
              </span>
            ) : selectedPlan === 'pro' ? 'Current Plan' : 'Confirm Change'}
          </button>
        </div>
      </div>

    </div>
  );
}
