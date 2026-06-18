import { useState, useRef, useEffect } from "react";
import { Bell, Search, HelpCircle, ChevronDown, Menu, User, Settings, Shield, LogOut } from "lucide-react";
import { useLocation, Link, useNavigate } from "react-router-dom";

export function Topbar({ onMenuClick }: { onMenuClick?: () => void }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  const getPageTitle = () => {
    if (location.pathname.startsWith('/settings/email')) {
      return "Security Settings";
    }
    if (location.pathname === '/security/sessions') {
      return "Manage Active Sessions";
    }
    if (location.pathname === '/security/password') {
      return "Change Password";
    }
    if (location.pathname.startsWith('/error')) {
      return "Action Required";
    }
    if (location.pathname === '/settings/deactivate') {
      return "Deactivate Account";
    }
    
    if (location.pathname === '/credits/history') {
      return "Credits History";
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
        <button 
          onClick={onMenuClick}
          className="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors"
        >
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

        <div className="relative" ref={profileRef}>
          <button 
            className="flex items-center gap-2 pl-4 border-l border-slate-200 hover:bg-slate-50 py-1.5 px-3 rounded-lg transition-colors group cursor-pointer"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=150&h=150&q=80" 
              alt="Tayo Akosile"
              className="w-8 h-8 rounded-full border border-slate-200 object-cover"
            />
            <div className="hidden md:block text-left">
              <div className="text-sm font-bold text-slate-800 leading-none">Tayo Akosile</div>
              <div className="text-xs text-slate-500 mt-0.5">Admin</div>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-slate-600 ml-1 transition-transform" style={{ transform: isProfileOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-slate-200 shadow-xl rounded-xl overflow-hidden z-50">
              <div className="p-4 border-b border-slate-100 bg-slate-50/50">
                <p className="text-sm font-bold text-slate-900">Tayo Akosile</p>
                <p className="text-xs text-slate-500 truncate">oluwatayoakosile@gmail.com</p>
              </div>
              <div className="p-2 space-y-1">
                <Link to="/settings" onClick={() => setIsProfileOpen(false)} className="flex items-center gap-3 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg transition-colors">
                  <User className="w-4 h-4 text-slate-400" /> My Profile
                </Link>
                <Link to="/security" onClick={() => setIsProfileOpen(false)} className="flex items-center gap-3 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg transition-colors">
                  <Shield className="w-4 h-4 text-slate-400" /> Security
                </Link>
                <Link to="/settings" onClick={() => setIsProfileOpen(false)} className="flex items-center gap-3 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg transition-colors">
                  <Settings className="w-4 h-4 text-slate-400" /> Settings
                </Link>
              </div>
              <div className="p-2 border-t border-slate-100">
                <button 
                  onClick={() => setIsProfileOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 text-sm font-bold text-red-600 hover:bg-red-50 rounded-lg transition-colors w-full text-left"
                >
                  <LogOut className="w-4 h-4 text-red-500" /> Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
