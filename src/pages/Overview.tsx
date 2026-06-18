import { 
  Download, 
  CreditCard, 
  Zap, 
  Monitor, 
  Landmark, 
  History, 
  Check, 
  MoreVertical, 
  Link, 
  ChevronRight, 
  PlayCircle,
  MessageCircle,
  Lightbulb,
  Map,
  HelpCircle,
  Users
} from "lucide-react";

export default function Overview() {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto w-full space-y-6">
      
      {/* Hero Banner */}
      <div className="w-full bg-white border border-slate-200 rounded-xl overflow-hidden relative shadow-sm flex flex-col md:flex-row min-h-[220px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10 w-2/3 md:w-1/2"></div>
          <img 
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?fit=crop&w=1200&q=80" 
            alt="Church Hero" 
            className="w-full h-full object-cover object-right opacity-60"
          />
        </div>
        
        <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row w-full justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-md border-4 border-white shrink-0">
              <Landmark className="w-10 h-10 md:w-12 md:h-12" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-slate-500 mb-1">Welcome back,</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1 flex items-center gap-2">
                Tayo Akosile <span className="text-2xl">👋</span>
              </h2>
              <p className="text-sm text-slate-600">Saviours Assembly Church</p>
              
              <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-4">
                <div className="flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-700 px-3 py-1.5 rounded-full text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  Pro Plan
                </div>
                <div className="flex items-center gap-1.5 text-slate-600 text-xs font-medium hidden sm:flex">
                  <Monitor className="w-4 h-4 text-slate-400" />
                  4 Devices Connected
                </div>
                <div className="flex items-center gap-1.5 text-slate-600 text-xs font-medium">
                  <CreditCard className="w-4 h-4 text-slate-400" />
                  Member since June 2026
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto">
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-sm">
              <Download className="w-5 h-5" />
              Download App
            </button>
            <button className="bg-white border border-slate-200 text-slate-700 px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors shadow-sm">
              <CreditCard className="w-5 h-5 text-slate-500" />
              Manage Subscription
            </button>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between h-[120px]">
          <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
            <CreditCard className="w-4 h-4 text-purple-500" /> Plan
          </div>
          <div className="flex items-end justify-between">
            <div className="text-xl font-bold text-slate-900">Pro Plan</div>
            <div className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold">Active</div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between h-[120px]">
          <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
            <Zap className="w-4 h-4 text-yellow-500" /> AI Credits
          </div>
          <div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-2xl font-bold text-slate-900">126</span>
              <span className="text-xs text-slate-400">/ 200</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-1.5">
              <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '63%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between h-[120px]">
          <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
            <Monitor className="w-4 h-4 text-blue-500" /> Devices
          </div>
          <div className="flex items-end justify-between">
            <div className="text-3xl font-bold text-slate-900">4</div>
            <div className="flex items-center gap-1.5 text-slate-500 text-xs">
              Active Devices <span className="w-2 h-2 rounded-full bg-green-500"></span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between h-[120px]">
          <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4 text-rose-500" /> Support Tickets
          </div>
          <div className="flex items-end justify-between">
            <div className="text-3xl font-bold text-slate-900">2</div>
            <div className="flex items-center gap-1.5 text-slate-500 text-xs">
              Open Tickets <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col">
          <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
            <div className="flex items-center gap-2 text-slate-900 font-semibold">
              <History className="w-5 h-5 text-slate-400" /> Recent Activity
            </div>
            <button className="text-blue-600 text-sm font-medium hover:underline">View all</button>
          </div>
          <div className="flex-1 p-2">
            {[
              { icon: Check, color: "text-green-700 bg-green-100", text: "Desktop Church PC connected", time: "2 mins ago" },
              { icon: Download, color: "text-blue-700 bg-blue-100", text: "EasyBible Mount 5.0.0 downloaded", time: "1 hour ago" },
              { icon: Landmark, color: "text-purple-700 bg-purple-100", text: "Sermon translated to Yoruba", time: "3 hours ago" },
              { icon: Zap, color: "text-yellow-700 bg-yellow-100", text: "10 AI credits used", time: "5 hours ago" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${item.color}`}>
                  <item.icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900 truncate">{item.text}</p>
                </div>
                <span className="text-xs text-slate-500 whitespace-nowrap">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Connected Devices */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col">
          <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
            <div className="flex items-center gap-2 text-slate-900 font-semibold">
              <Monitor className="w-5 h-5 text-slate-400" /> Connected Devices
            </div>
            <button className="text-blue-600 text-sm font-medium hover:underline">Manage</button>
          </div>
          <div className="flex-1 p-4 flex flex-col gap-3">
            {[
              { name: "Desktop Church PC", os: "Windows 11", status: "Online", time: "2 mins ago" },
              { name: "Pastor Laptop", os: "MacBook Pro (M2)", status: "Online", time: "4 hours ago" },
            ].map((dev, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-3 flex items-center justify-between hover:border-blue-300 transition-colors bg-white">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center text-slate-600 shrink-0">
                    <Monitor className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-sm font-medium text-slate-900 truncate">{dev.name}</p>
                    <p className="text-xs text-slate-500 truncate">{dev.os}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <div className="flex items-center gap-1.5 text-[11px] text-green-700 bg-green-100 px-2 py-0.5 rounded font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    {dev.status}
                  </div>
                  <button className="text-slate-400 hover:text-slate-700">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
            
            {/* Offline Device */}
            <div className="border border-slate-200 rounded-lg p-3 flex items-center justify-between hover:border-blue-300 transition-colors bg-white opacity-70">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center text-slate-500 shrink-0">
                  <Monitor className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <p className="text-sm font-medium text-slate-900 truncate">Media Computer</p>
                  <p className="text-xs text-slate-500 truncate">Windows 10</p>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                  Offline
                </div>
                <button className="text-slate-400 hover:text-slate-700">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <button className="mt-2 text-blue-600 text-sm font-medium hover:underline flex items-center justify-center gap-1 w-full py-2">
              View all devices (4) <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 flex flex-col">
          <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-slate-400" /> Quick Actions
          </h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 border border-slate-200 rounded-lg hover:border-blue-400 transition-colors group text-left">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Link className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Pair Device</p>
                  <p className="text-xs text-slate-500">Connect a new device</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
            </button>
            <button className="w-full flex items-center justify-between p-3 border border-slate-200 rounded-lg hover:border-yellow-400 transition-colors group text-left">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-yellow-50 text-yellow-600 flex items-center justify-center">
                  <Zap className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Buy Credits</p>
                  <p className="text-xs text-slate-500">Add more AI credits</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-yellow-600" />
            </button>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-slate-900 flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-slate-400" /> Tutorials
            </h3>
            <button className="text-blue-600 text-xs font-medium hover:underline">View all</button>
          </div>
          <div className="space-y-4">
            {["Getting Started", "Speech to Scripture", "Translation Features"].map((title, i) => (
              <a key={i} href="#" className="flex items-center gap-3 group">
                <div className="relative w-20 h-12 bg-slate-100 rounded overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-slate-800/10 group-hover:bg-slate-800/20 transition-colors"></div>
                  <PlayCircle className="w-5 h-5 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-md" />
                </div>
                <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {title}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-slate-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-slate-400" /> Community
            </h3>
            <button className="text-blue-600 text-xs font-medium hover:underline">Join Us</button>
          </div>
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900 group-hover:text-green-700 transition-colors">WhatsApp Community</p>
                <p className="text-xs text-slate-500">12,000+ members</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded bg-yellow-100 text-yellow-700 flex items-center justify-center shrink-0">
                <Lightbulb className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900 group-hover:text-yellow-700 transition-colors">Feature Requests</p>
                <p className="text-xs text-slate-500">Vote for upcoming</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                <Map className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900 group-hover:text-purple-700 transition-colors">Roadmap</p>
                <p className="text-xs text-slate-500">See what's next</p>
              </div>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
