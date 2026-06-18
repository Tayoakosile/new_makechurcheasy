import { Monitor, Phone, Zap, ArrowRight, Laptop, Edit2, Trash2, MoreVertical, ShieldCheck, Info } from "lucide-react";

export default function Devices() {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto w-full space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Devices</h1>
        <p className="text-slate-500 mt-1 text-sm">Manage devices connected to your EasyBible Mount account.</p>
      </div>

      {/* Summary Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: Monitor, color: "text-blue-600 bg-blue-50", count: "4", title: "Total Devices", sub: "Devices connected" },
          { icon: null, dot: "bg-green-500", color: "bg-green-50", count: "2", title: "Online", sub: "Currently active" },
          { icon: null, dot: "bg-slate-400", color: "bg-slate-100", count: "2", title: "Offline", sub: "Not connected" },
          { icon: Zap, color: "text-purple-600 bg-purple-50", count: "8", title: "This Month", sub: "Active sessions" }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col shadow-sm">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${stat.color}`}>
              {stat.icon ? <stat.icon className="w-5 h-5" /> : (stat.dot ? <div className={`w-3 h-3 rounded-full ${stat.dot}`}></div> : null)}
            </div>
            <p className="text-3xl font-bold text-slate-900 mb-1">{stat.count}</p>
            <p className="text-sm font-semibold text-slate-700">{stat.title}</p>
            <p className="text-xs text-slate-500 mt-1">{stat.sub}</p>
          </div>
        ))}
      </section>

      {/* Device List */}
      <section className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
          <h2 className="text-lg font-semibold text-slate-900">Your Devices</h2>
          <button className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 border border-slate-200 bg-white px-3 py-1.5 rounded-lg shadow-sm">
            <Zap className="w-4 h-4" /> Refresh
          </button>
        </div>
        
        <div className="divide-y divide-slate-100">
          {[
            { name: "Desktop Church PC", os: "Windows 11 • EASYBIBLE-001", app: "EasyBible Mount 5.0.0", icon: Monitor, status: "online", active: "2 mins ago", isThis: true },
            { name: "Pastor Laptop", os: "MacBook Pro (M2) • PASTOR-MBP", app: "EasyBible Mount 5.0.0", icon: Laptop, status: "online", active: "4 hours ago", isThis: false },
            { name: "Media Computer", os: "Windows 10 • STUDIO-02", app: "EasyBible Mount 4.9.2", icon: Monitor, status: "offline", active: "2 days ago", isThis: false },
            { name: "Home Mac", os: "MacBook Air (M1) • HOME-MAC", app: "EasyBible Mount 4.9.0", icon: Laptop, status: "offline", active: "1 week ago", isThis: false },
          ].map((dev, i) => (
            <div key={i} className={`p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50 transition-colors ${dev.status === 'offline' ? 'opacity-75' : ''}`}>
              <div className="flex items-start gap-4">
                <div className="flex justify-center w-6 pt-1.5">
                  <div className={`w-2.5 h-2.5 rounded-full ${dev.status === 'online' ? 'bg-green-500' : 'bg-slate-300'}`}></div>
                </div>
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                  <dev.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-slate-900">{dev.name}</h3>
                    {dev.isThis && <span className="text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full uppercase tracking-wider">This Device</span>}
                  </div>
                  <p className="text-sm text-slate-500 mt-1">{dev.os}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{dev.app}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 md:ml-auto pl-10 md:pl-0">
                <div className="text-right hidden sm:block w-24 shrink-0">
                  <p className="text-xs text-slate-500">Last active</p>
                  <p className="text-sm font-semibold text-slate-900 truncate">{dev.active}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-100 bg-white transition-colors shadow-sm">
                    <Edit2 className="w-3.5 h-3.5 text-slate-400" /> <span className="hidden sm:inline">Rename</span>
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 border border-red-200 rounded-md text-sm font-medium text-red-600 hover:bg-red-50 bg-white transition-colors shadow-sm">
                    <Trash2 className="w-3.5 h-3.5" /> <span className="hidden sm:inline">Disconnect</span>
                  </button>
                  <button className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-slate-100 text-center bg-slate-50">
          <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1.5">
            View all devices activity <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Connection Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Connect New */}
        <section className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Connect a New Device</h2>
          <p className="text-slate-500 text-sm mb-6 max-w-sm">Generate a pairing code to connect a new device without entering your password.</p>
          
          <div className="border border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center mb-6 bg-slate-50 relative flex-1 min-h-[140px]">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 font-mono tracking-[0.2em] flex items-center gap-4">
              A4K9-T7P2
            </div>
            <p className="text-xs text-slate-500 mt-4">Expires in <span className="font-semibold text-slate-700">09:57</span></p>
          </div>
          
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm">
            <Zap className="w-4 h-4" /> Generate New Code
          </button>
        </section>

        {/* How to */}
        <section className="bg-[#f8faff] p-6 md:p-8 rounded-xl border border-blue-100 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Info className="w-5 h-5 text-blue-500" /> How to Connect
          </h2>
          <div className="space-y-6">
            {[
              { title: "Install EasyBible Mount", desc: "Download and install on your new device." },
              { title: "Open and select connect", desc: 'Click "Connect Device" on the welcome screen.' },
              { title: "Enter pairing code", desc: "Type the code shown on this screen securely." },
              { title: "You're all set!", desc: "Your device will instantly appear in the list above." },
            ].map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold border border-blue-200">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-slate-900">{step.title}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      <footer className="bg-green-50 border border-green-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-green-600" />
          <div>
            <p className="font-semibold text-sm text-green-900">Your security is our priority</p>
            <p className="text-xs text-green-700 mt-0.5 hidden sm:block">All device connections are encrypted end-to-end and highly secure.</p>
          </div>
        </div>
        <button className="text-sm font-semibold text-blue-600 hover:underline shrink-0">Learn more</button>
      </footer>

    </div>
  );
}
