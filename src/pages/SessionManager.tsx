import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ChevronRight, 
  Clock, 
  Info, 
  Monitor, 
  Laptop, 
  Smartphone, 
  AlertTriangle, 
  Shield, 
  History, 
  Lock, 
  LogOut,
  CheckCircle2,
  Power
} from "lucide-react";
import { cn } from "../lib/utils";

const sessionsList = [
  { id: '1', name: 'Desktop Church PC', os: 'Windows 11 • Chrome Browser', location: 'Lagos, Nigeria', active: 'Online Now', type: 'desktop', current: true },
  { id: '2', name: 'Pastor Laptop', os: 'macOS • Safari', location: 'Ibadan, Nigeria', active: 'Active 2 hours ago', type: 'laptop', current: false },
  { id: '3', name: 'Home iMac', os: 'macOS Ventura • Firefox', location: 'Lagos, Nigeria', active: 'Active yesterday', type: 'desktop', current: false },
  { id: '4', name: 'iPhone 15 Pro', os: 'iOS • App Session', location: 'Lagos, Nigeria', active: 'Active 3 days ago', type: 'phone', current: false },
];

export default function SessionManager() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedSessions, setSelectedSessions] = useState<Set<string>>(new Set());

  const toggleSession = (id: string) => {
    const newSet = new Set(selectedSessions);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelectedSessions(newSet);
  };

  const IconForType = ({ type, className }: { type: string, className?: string }) => {
    switch (type) {
      case 'desktop': return <Monitor className={className} />;
      case 'laptop': return <Laptop className={className} />;
      case 'phone': return <Smartphone className={className} />;
      default: return <Monitor className={className} />;
    }
  };

  if (step === 3) {
    return (
      <div className="p-4 md:p-8 max-w-7xl mx-auto w-full min-h-[calc(100vh-80px)] flex flex-col pt-16 md:pt-24 pb-16">
        
        {/* Stepper */}
        <div className="max-w-4xl mx-auto w-full mb-10 overflow-x-auto">
          <div className="flex items-center justify-between min-w-[600px] px-4">
            <div className="flex items-center gap-2 opacity-50">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">1</div>
              <span className="text-xs font-bold text-slate-800">Active Sessions</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300" />
            <div className="flex items-center gap-2 opacity-50">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">2</div>
              <span className="text-xs font-bold text-slate-800">Select Sessions</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300" />
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold ring-4 ring-blue-600/20">3</div>
              <span className="text-xs font-bold text-blue-600">Confirm Sign Out</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300" />
            <div className="flex items-center gap-2 opacity-30">
              <div className="w-6 h-6 rounded-full bg-slate-400 text-white flex items-center justify-center text-[10px] font-bold">4</div>
              <span className="text-xs font-bold text-slate-800">Completed</span>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto w-full bg-white/80 backdrop-blur border border-slate-200 rounded-xl shadow-sm overflow-hidden z-10 transition-transform">
          <div className="p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center">
                <LogOut className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">Confirm Sign Out</h2>
                <p className="text-sm font-medium text-slate-500">Step 3 of 4</p>
              </div>
            </div>

            <div className="flex gap-4 items-start mb-6">
              <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
              <div className="space-y-4">
                <p className="text-sm font-semibold text-slate-900 leading-snug">
                  You're about to sign out from <span className="text-red-600 font-bold underline">{selectedSessions.size} session(s)</span>.
                </p>
                <div className="bg-red-50 border border-red-100 p-4 rounded-lg">
                  <p className="text-sm font-medium text-red-800 italic">
                    "You will remain signed in on this current device."
                  </p>
                </div>
                <p className="text-sm text-slate-600">
                  This action will terminate active sessions on other devices. Any unsaved work in those sessions may be lost. Are you sure you want to proceed?
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <button 
                onClick={() => setStep(4)}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-all shadow-md shadow-red-600/20 flex items-center justify-center gap-2 text-sm"
              >
                <Power className="w-5 h-5" />
                Sign Out
              </button>
              <button 
                onClick={() => setStep(2)}
                className="flex-1 border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold py-3 rounded-lg transition-all text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
          <div className="h-1 bg-red-600/10 w-full overflow-hidden">
            <div className="h-full bg-red-600 w-1/3 animate-[pulse_2s_infinite]"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto w-full mt-12">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4">
            <Shield className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Security Protocol</h4>
              <p className="text-xs text-slate-500 mt-1">Session management is encrypted and logged for auditing purposes to ensure church data integrity.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4">
            <History className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Session History</h4>
              <p className="text-xs text-slate-500 mt-1">You can view your full sign-in history in the Security Dashboard at any time.</p>
            </div>
          </div>
        </div>

      </div>
    );
  }

  if (step === 4) {
    return (
      <div className="p-4 md:p-8 max-w-7xl mx-auto w-full min-h-[calc(100vh-80px)] flex flex-col justify-center items-center pb-16">
        
        <div className="relative z-10 w-full max-w-lg bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col items-center p-12">
          <div className="flex items-center gap-2 mb-10 w-full justify-center">
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs">4</div>
            <span className="text-sm font-semibold text-blue-600">Completed</span>
          </div>

          <div className="mb-8 relative flex items-center justify-center">
            <div className="absolute w-24 h-24 bg-green-100 rounded-full animate-ping opacity-50"></div>
            <div className="relative w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-green-600 fill-green-100" />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-slate-900 mb-3 text-center tracking-tight">Signed out successfully!</h1>
          <p className="text-sm text-slate-500 text-center mb-10 max-w-xs leading-relaxed">
            The selected sessions have been successfully terminated from your account across all platforms.
          </p>

          <Link 
            to="/security"
            className="w-full py-3.5 bg-blue-600 text-white font-bold text-sm rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-sm"
          >
            Back to Security
            <ChevronRight className="w-4 h-4" />
          </Link>

          <div className="mt-8 flex items-center gap-3 text-slate-500">
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4" />
              <span className="text-xs font-medium">Account Secure</span>
            </div>
            <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
            <div className="text-xs font-medium">ID: EB-992-0X</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto w-full pb-16">
      
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-slate-500 mb-6 font-medium">
        <Link to="/settings" className="hover:text-slate-900 transition-colors">Account</Link>
        <ChevronRight className="w-4 h-4" />
        <Link to="/security" className="hover:text-slate-900 transition-colors">Security</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-blue-600 font-bold">Active Sessions</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0">
            <Monitor className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Manage Active Sessions</h1>
            <p className="text-slate-500 mt-1 text-sm md:text-base">View and manage devices currently signed in to your account.</p>
          </div>
        </div>
        
        {step === 1 && (
          <div className="flex items-center gap-2 text-slate-600 bg-white shadow-sm px-4 py-2 rounded-full border border-slate-200 h-fit whitespace-nowrap text-sm font-medium">
            <Clock className="w-4 h-4 text-slate-400" />
            2-3 minutes
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Col - Guide */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-blue-600 mb-5 flex items-center gap-2 text-sm">
              <Info className="w-5 h-5" /> Process Guide
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className={cn("w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 font-bold", step === 1 ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500")}>1</div>
                <p className={cn("text-sm", step === 1 ? "text-slate-900 font-bold" : "text-slate-500")}>Review all active devices.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className={cn("w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 font-bold", step === 2 ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500")}>2</div>
                <p className={cn("text-sm", step === 2 ? "text-slate-900 font-bold" : "text-slate-500")}>Select sessions to terminate.</p>
              </div>
              <div className="flex items-start gap-3 opacity-50">
                <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-xs shrink-0 font-bold">3</div>
                <p className="text-slate-500 text-sm">Confirm sign out.</p>
              </div>
            </div>
            
            {step === 1 && (
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button className="w-full text-slate-500 hover:text-blue-600 transition-colors flex items-center justify-center gap-2 text-sm font-semibold">
                  <Info className="w-4 h-4" /> Don't recognize a device?
                </button>
              </div>
            )}
          </div>
          
          {step === 2 && (
            <div className="p-5 rounded-xl bg-white shadow-sm border border-slate-200">
              <p className="flex items-center gap-2 text-slate-700 font-semibold text-sm mb-2">
                <Clock className="w-4 h-4 text-blue-600" /> Est. time: 2–3 minutes
              </p>
              <p className="text-slate-500 text-xs leading-relaxed">Ending active sessions is immediate and will log the user out on those devices.</p>
            </div>
          )}
        </div>

        {/* Right Col - List & Selection */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            
            <div className="p-5 sm:p-6 bg-slate-50/50 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={cn("w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm", step === 1 ? "hidden" : "bg-blue-600 text-white")}>
                  {step}
                </div>
                <div>
                  <h2 className="font-bold text-slate-900 flex items-center gap-2">
                    {step === 1 && <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>}
                    {step === 1 ? "Active Sessions" : "Select Sessions"}
                  </h2>
                  {step === 2 && <p className="text-slate-500 text-xs mt-0.5">Choose the sessions you want to sign out from.</p>}
                </div>
              </div>
              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                {step === 1 ? "4 Devices Found" : `Step ${step} of 3`}
              </span>
            </div>

            <div className="divide-y divide-slate-100">
              {sessionsList.map((session) => {
                const isSelected = selectedSessions.has(session.id);
                
                return (
                  <div 
                    key={session.id} 
                    className={cn(
                      "p-4 sm:p-6 flex items-center gap-4 transition-all group",
                      step === 2 && (session.current ? "opacity-60 cursor-not-allowed" : "cursor-pointer hover:bg-slate-50"),
                      step === 2 && isSelected && "bg-blue-50 hover:bg-blue-50"
                    )}
                    onClick={() => {
                      if (step === 2 && !session.current) toggleSession(session.id);
                    }}
                  >
                    {step === 2 && (
                      <div className="relative shrink-0">
                        <input 
                          type="checkbox"
                          checked={isSelected}
                          disabled={session.current}
                          className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-600 cursor-pointer disabled:cursor-not-allowed"
                          onChange={() => {}} // handled by div click
                        />
                      </div>
                    )}
                    
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm border",
                      step === 2 && isSelected ? "bg-white border-blue-200 text-blue-600" : "bg-slate-50 border-slate-100 text-slate-500",
                      step === 1 && session.current && "relative" // for green dot
                    )}>
                      <IconForType type={session.type} className="w-6 h-6" />
                      {step === 1 && session.current && (
                        <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-slate-900 text-sm">{session.name}</h4>
                        {session.current && (
                          <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-[10px] sm:text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                            Current Device
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-500 truncate">
                        <span className="truncate">{session.location}</span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full shrink-0"></span>
                        <span className="truncate">{session.os}</span>
                      </div>
                    </div>

                    {step === 1 && (
                      <div className="text-right shrink-0 hidden sm:block">
                        <p className={cn("text-xs sm:text-sm font-semibold", session.current ? "text-green-600" : "text-slate-500")}>
                          {session.active}
                        </p>
                      </div>
                    )}
                    
                    {step === 2 && isSelected && (
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 ml-2" />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="p-4 sm:p-6 bg-slate-50/50 border-t border-slate-200 flex flex-col sm:flex-row gap-4 justify-between items-center">
              {step === 1 ? (
                <>
                  <button 
                    onClick={() => setStep(2)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-colors shadow-sm text-sm"
                  >
                    Select Sessions to Sign Out
                  </button>
                  <button 
                    onClick={() => {
                      // Select all but current, go to step 3
                      const others = sessionsList.filter(s => !s.current).map(s => s.id);
                      setSelectedSessions(new Set(others));
                      setStep(3);
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-sm flex items-center justify-center gap-2 text-sm"
                  >
                    <LogOut className="w-4 h-4" /> Sign Out All Other Sessions
                  </button>
                </>
              ) : (
                <>
                  <button className="text-blue-600 font-bold text-sm hover:underline transition-all active:scale-95 text-center w-full sm:w-auto mb-4 sm:mb-0">
                    Don't recognize a device?
                  </button>
                  <div className="flex flex-col-reverse sm:flex-row gap-3 w-full sm:w-auto">
                    <button 
                      onClick={() => {
                        setStep(1);
                        setSelectedSessions(new Set());
                      }}
                      className="w-full sm:w-auto px-6 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors shadow-sm"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={() => {
                        if (selectedSessions.size > 0) setStep(3);
                      }}
                      className={cn(
                        "w-full sm:w-auto px-6 py-2.5 rounded-lg text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2",
                        selectedSessions.size > 0 ? "bg-red-600 hover:bg-red-700 cursor-pointer" : "bg-red-300 cursor-not-allowed"
                      )}
                      disabled={selectedSessions.size === 0}
                    >
                      Sign Out Selected ({selectedSessions.size})
                    </button>
                  </div>
                </>
              )}
            </div>
            
          </div>

          {/* Alert Notice */}
          {step === 1 && (
            <div className="mt-6 flex flex-col sm:flex-row items-start gap-4 p-5 rounded-xl bg-red-50 border border-red-100 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-red-100 shadow-sm">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h5 className="font-bold text-red-900 text-sm">Found a device you don't recognize?</h5>
                <p className="text-sm text-red-800/80 mt-1 mb-3">If any of these sessions seem suspicious, sign out immediately and change your account password to secure your church's sensitive data.</p>
                <button className="text-sm text-red-700 font-bold hover:underline">Change Password Now</button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Related Actions */}
      {step === 1 && (
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-shadow cursor-pointer group">
            <Lock className="w-6 h-6 text-blue-600 mb-4" />
            <h4 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Change Password</h4>
            <p className="text-xs text-slate-500 leading-relaxed">If you don't recognize sessions, update your credentials immediately.</p>
          </div>
          <div className="p-6 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-shadow cursor-pointer group">
            <Shield className="w-6 h-6 text-indigo-600 mb-4" />
            <h4 className="font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">Two-Factor Auth</h4>
            <p className="text-xs text-slate-500 leading-relaxed">Add an extra layer of security to prevent unauthorized access.</p>
          </div>
          <div className="p-6 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-shadow cursor-pointer group">
            <History className="w-6 h-6 text-purple-600 mb-4" />
            <h4 className="font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">Login Activity</h4>
            <p className="text-xs text-slate-500 leading-relaxed">View a full history of all login attempts and locations.</p>
          </div>
        </div>
      )}
      
    </div>
  );
}
