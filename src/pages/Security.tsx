import { Shield, Lock, Smartphone, Monitor as Desktop, Mail, ShieldCheck, MoreVertical, CheckCircle } from "lucide-react";

export default function Security() {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto w-full flex flex-col gap-6">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 mb-1">Security</h1>
          <p className="text-sm text-slate-500">Manage your account security and active sessions.</p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col gap-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Security Overview</h2>
            <p className="text-sm text-slate-500 mt-1">Your account security status</p>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 rounded-md text-xs font-bold border border-green-200">
            <ShieldCheck className="w-4 h-4 fill-green-700 text-white" />
            Secure
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Lock, title: "Password", stat: "Strong", color: "text-green-700 bg-green-50" },
            { icon: Smartphone, title: "Two-Factor Auth", stat: "Enabled", color: "text-green-700 bg-green-50" },
            { icon: Desktop, title: "Active Sessions", stat: "3", color: "text-blue-700 bg-blue-50" },
            { icon: Mail, title: "Recovery Email", stat: "Verified", color: "text-green-700 bg-green-50" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${item.color}`}>
                <item.icon className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-semibold text-slate-500 tracking-wide uppercase">{item.title}</span>
                <span className="text-sm font-bold text-slate-900">{item.stat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-base font-bold text-slate-900">Password</h2>
          <p className="text-sm text-slate-500 mt-1">Last changed 30 days ago</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2 border border-slate-200 bg-white text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors shadow-sm whitespace-nowrap">
          <Lock className="w-4 h-4" /> Change Password
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-base font-bold text-slate-900">Two-Factor Authentication</h2>
            <p className="text-sm text-slate-500 mt-1">Add an extra layer of security to your account.</p>
            <p className="text-sm text-slate-600 mt-2 font-medium">Status: <span className="text-green-600 font-bold">Enabled</span></p>
          </div>
          <button className="flex items-center gap-2 px-5 py-2 border border-slate-200 bg-white text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors shadow-sm whitespace-nowrap">
            <Shield className="w-4 h-4" /> Manage 2FA
          </button>
        </div>

        <div className="border border-slate-200 rounded-lg p-5 bg-slate-50/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-start gap-4 flex-1 w-full">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600 mt-1">
              <Smartphone className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-sm font-bold text-slate-900 mb-1">Authenticator App (TOTP)</h3>
              <p className="text-sm text-slate-500 mb-2">You are using an authenticator app to sign in.</p>
              <p className="text-xs text-slate-400 font-medium">Added on May 12, 2026</p>
            </div>
          </div>
          
          <div className="w-24 h-32 bg-slate-100 rounded-xl border-4 border-slate-300 relative flex flex-col items-center justify-center shadow-inner shrink-0 hidden sm:flex">
            <div className="w-8 h-1 bg-slate-300 rounded-full absolute top-2"></div>
            <div className="bg-white rounded px-2 py-1 flex items-center gap-1 shadow-sm mt-4">
              <span className="text-[10px] font-mono font-bold tracking-widest text-slate-800">632 821</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Active Sessions</h2>
            <p className="text-sm text-slate-500 mt-1">These are devices currently signed in to your account.</p>
          </div>
          <button className="px-4 py-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap border border-red-100">
            Sign Out All
          </button>
        </div>

        <div className="flex flex-col divide-y divide-slate-100">
          {[
            { dev: "Desktop Church PC", os: "Windows 11 • Chrome", loc: "Lagos, Nigeria", type: "desktop", current: true },
            { dev: "Pastor Laptop", os: "macOS 14.6 • Safari", loc: "Lagos, Nigeria", type: "laptop", current: false },
            { dev: "Home Mac", os: "macOS 14.4 • Chrome", loc: "Abuja, Nigeria", type: "laptop", current: false }
          ].map((s, i) => (
            <div key={i} className="py-4 flex flex-col sm:flex-row sm:items-center gap-4 justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 text-slate-500">
                  <Desktop className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    {s.dev}
                    {s.current && <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-black uppercase tracking-wider">Current</span>}
                  </span>
                  <span className="text-xs text-slate-500 mt-0.5">{s.os}</span>
                </div>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-6 sm:w-1/3">
                <span className="text-xs text-slate-500 font-medium">{s.loc}</span>
                <button className="text-slate-400 hover:text-slate-900 rounded p-1 transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
