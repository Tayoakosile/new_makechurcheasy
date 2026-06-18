import { Bell, Search, HelpCircle, ChevronDown, Menu } from "lucide-react";
import { useLocation } from "react-router-dom";

export function Topbar() {
  const location = useLocation();
  
  const getPageTitle = () => {
    if (location.pathname.startsWith('/settings/email')) {
      return "Security Settings";
    }
    
    switch (location.pathname) {
      case "/": return "Overview";
      case "/settings": return "Profile Settings";
      case "/devices": return "Devices";
      case "/church-profile": return "Church Profile";
      case "/security": return "Security";
      case "/credits": return "Credits";
      case "/downloads": return "Downloads";
      default: return "Dashboard";
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 flex justify-between items-center px-4 md:px-8 py-3">
      <div className="flex items-center gap-4">
        <button className="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg">
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-bold text-slate-900 hidden md:block">{getPageTitle()}</h1>
      </div>

      <div className="flex items-center gap-3 md:gap-5">
        <div className="hidden lg:flex items-center bg-slate-50 border border-slate-200 rounded-full px-3 py-1.5 w-64 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
          <Search className="w-4 h-4 text-slate-400 mr-2" />
          <input 
            type="text" 
            placeholder="Search anything..." 
            className="bg-transparent border-none outline-none w-full text-sm text-slate-800 placeholder:text-slate-400"
          />
          <div className="flex items-center gap-1 bg-white px-1.5 py-0.5 rounded text-xs text-slate-400 border border-slate-200 shadow-sm ml-2">
            <span>⌘</span><span>K</span>
          </div>
        </div>

        <button className="hidden md:flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-full text-slate-600 hover:bg-slate-50 transition-colors text-sm font-medium">
          <HelpCircle className="w-4 h-4" />
          <span>Need help?</span>
        </button>

        <button className="relative p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-all">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="h-6 w-px bg-slate-200 hidden md:block mx-1"></div>

        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity pl-1">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=150&h=150&q=80" 
            alt="Tayo Akosile" 
            className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover border border-slate-200"
          />
          <div className="hidden md:flex flex-col">
            <span className="text-sm font-semibold text-slate-900 leading-tight">Tayo Akosile</span>
            <span className="text-xs text-slate-500 leading-tight">Saviours Assembly</span>
          </div>
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </div>
      </div>
    </header>
  );
}
