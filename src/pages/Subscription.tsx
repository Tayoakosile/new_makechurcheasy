import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
  Wallet, 
  BrainCircuit, 
  Languages, 
  Mic, 
  FolderOpen, 
  Download,
  Monitor,
  Laptop,
  MonitorSmartphone,
  Info,
  CheckCircle2,
  FileText,
  FileBox,
  Globe
} from "lucide-react";
import { cn } from "../lib/utils";

export default function Subscription() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress on mount
    const timer = setTimeout(() => {
      setProgress(61.2);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto w-full space-y-8 pb-16">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-1">Subscription & Usage</h1>
        <p className="text-slate-500 text-sm">Manage your church's digital resources and plan details.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Total Credits Card */}
        <div className="lg:col-span-8 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 relative overflow-hidden shadow-sm flex flex-col gap-6">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-[100px] pointer-events-none"></div>
          
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Total Credits Remaining</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-blue-600">612</span>
                <span className="text-xl font-medium text-slate-500">/ 1,000</span>
              </div>
            </div>
            <div className="p-3 bg-blue-50 text-blue-600 rounded-full">
              <Wallet className="w-6 h-6" />
            </div>
          </div>

          <div className="space-y-3">
            <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner border border-slate-200/50">
              <div 
                className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out relative" 
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/20"></div>
              </div>
            </div>
            <p className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
              <Info className="w-4 h-4" /> Credits shared across all features including AI and Transcriptions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
            <div className="p-2 sm:p-3 bg-slate-50 rounded-lg flex items-center gap-2.5">
              <BrainCircuit className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="text-xs font-semibold text-slate-700">AI Tools</span>
            </div>
            <div className="p-2 sm:p-3 bg-slate-50 rounded-lg flex items-center gap-2.5">
              <Languages className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="text-xs font-semibold text-slate-700">Translation</span>
            </div>
            <div className="p-2 sm:p-3 bg-slate-50 rounded-lg flex items-center gap-2.5">
              <Mic className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="text-xs font-semibold text-slate-700">Transcription</span>
            </div>
            <div className="p-2 sm:p-3 bg-slate-50 rounded-lg flex items-center gap-2.5">
              <FolderOpen className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="text-xs font-semibold text-slate-700">Media & More</span>
            </div>
          </div>
        </div>

        {/* Current Plan Card */}
        <div className="lg:col-span-4 bg-slate-900 text-white rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }}></div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-6">
              <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10">Active</span>
              <CheckCircle2 className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-1">Pro Plan</h3>
            <p className="text-slate-400 text-sm font-medium">$19.00 / month</p>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-700 relative z-10">
            <p className="text-sm text-slate-300 mb-4">Next renewal: <span className="font-bold text-white">Oct 12, 2026</span></p>
            <Link 
              to="/subscription/plans" 
              className="w-full bg-white text-slate-900 font-bold py-3 rounded-lg hover:bg-slate-100 transition-all flex items-center justify-center shadow-sm"
            >
              Change Plan
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Usage Overview */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <h2 className="text-lg font-bold text-slate-900">Usage Overview</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <span className="font-semibold text-sm text-slate-700">AI Credits</span>
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-2">245 <span className="text-slate-500 text-sm font-normal">used</span></div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full" style={{ width: "45%" }}></div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                  <Languages className="w-5 h-5" />
                </div>
                <span className="font-semibold text-sm text-slate-700">Translation</span>
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-2">128 <span className="text-slate-500 text-sm font-normal">pages</span></div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full rounded-full" style={{ width: "32%" }}></div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600">
                  <Mic className="w-5 h-5" />
                </div>
                <span className="font-semibold text-sm text-slate-700">Speech</span>
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-2">84 <span className="text-slate-500 text-sm font-normal">min</span></div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-purple-500 h-full rounded-full" style={{ width: "60%" }}></div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
              <span className="font-bold text-slate-900">Recent Usage Logs</span>
              <Link to="/credits/history" className="text-blue-600 font-semibold text-sm hover:underline">View All</Link>
            </div>
            <div className="divide-y divide-slate-100">
              <div className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-slate-400" />
                  <span className="text-sm font-medium text-slate-700">Sermon Transcription - Sunday Service</span>
                </div>
                <span className="text-xs font-semibold text-slate-500">2.4 Credits • 10m ago</span>
              </div>
              <div className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3">
                  <FileBox className="w-5 h-5 text-slate-400" />
                  <span className="text-sm font-medium text-slate-700">AI Summary: Outreach Program</span>
                </div>
                <span className="text-xs font-semibold text-slate-500">1.0 Credits • 2h ago</span>
              </div>
              <div className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-slate-400" />
                  <span className="text-sm font-medium text-slate-700">Newsletter Translation (Spanish)</span>
                </div>
                <span className="text-xs font-semibold text-slate-500">5.0 Credits • Yesterday</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Download className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold text-slate-900">Download EasyBible</h3>
            </div>
            <p className="text-sm text-slate-500 mb-6">Mount your church library as a local drive on your computer.</p>
            
            <div className="flex flex-col gap-3">
              <button className="flex items-center justify-between p-3 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all group">
                <div className="flex items-center gap-3 text-slate-700 group-hover:text-blue-700">
                  <Monitor className="w-5 h-5" />
                  <span className="text-sm font-semibold">Windows (x64)</span>
                </div>
                <Download className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
              </button>
              
              <button className="flex items-center justify-between p-3 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all group">
                <div className="flex items-center gap-3 text-slate-700 group-hover:text-blue-700">
                  <Laptop className="w-5 h-5" />
                  <span className="text-sm font-semibold">macOS Intel</span>
                </div>
                <Download className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
              </button>
              
              <button className="flex items-center justify-between p-3 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all group">
                <div className="flex items-center gap-3 text-slate-700 group-hover:text-blue-700">
                  <MonitorSmartphone className="w-5 h-5" />
                  <span className="text-sm font-semibold">macOS Apple Silicon</span>
                </div>
                <Download className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
              </button>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Monitor className="w-5 h-5 text-slate-400" />
              <h3 className="font-bold text-slate-900">Current Device</h3>
            </div>
            
            <div className="flex gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center justify-center text-blue-600 shrink-0">
                <Laptop className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm mb-1">MacBook Pro M2</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
                  <span className="text-xs font-semibold text-slate-500">Connected • Active</span>
                </div>
              </div>
            </div>
            
            <div className="mt-5 space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Last Sync:</span>
                <span className="font-medium text-slate-900">2 mins ago</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">App Version:</span>
                <span className="font-medium text-slate-900">v2.4.1 (Stable)</span>
              </div>
            </div>
            
            <Link to="/devices" className="mt-6 w-full py-2.5 text-blue-600 font-bold text-sm border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center">
              Manage Devices
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
