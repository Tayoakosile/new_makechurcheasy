import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  CreditCard,
  Zap,
  Download,
  Monitor,
  Landmark,
  BookOpen,
  Users,
  HelpCircle,
  ShieldCheck,
  Receipt,
  Settings,
  Headset,
} from "lucide-react";
import { cn } from "../lib/utils";

const mainNavItems = [
  { path: "/", label: "Overview", icon: LayoutDashboard },
  { path: "/subscription", label: "Subscription", icon: CreditCard },
  { path: "/credits", label: "Credits", icon: Zap },
  { path: "/downloads", label: "Downloads", icon: Download },
  { path: "/devices", label: "Devices", icon: Monitor },
  { path: "/church-profile", label: "Church Profile", icon: Landmark },
  { path: "/tutorials", label: "Tutorials", icon: BookOpen },
  { path: "/community", label: "Community", icon: Users },
  { path: "/support", label: "Support", icon: HelpCircle },
  { path: "/security", label: "Security", icon: ShieldCheck },
  { path: "/billing", label: "Billing", icon: Receipt },
  { path: "/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-slate-200 flex flex-col z-50 hidden md:flex">
      <div className="flex items-center gap-3 px-6 py-5 mb-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
          E
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-slate-900 leading-tight">EasyBible</span>
          <span className="text-xs font-semibold text-slate-500">Mount</span>
        </div>
      </div>

      <nav className="flex-1 px-4 py-2 space-y-1 overflow-y-auto">
        {mainNavItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                )
              }
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="p-4 mt-auto border-t border-slate-100 flex flex-col gap-4">
        <div className="bg-blue-600 rounded-xl p-5 text-white shadow-lg relative overflow-hidden">
          <Zap className="w-6 h-6 mb-2 opacity-90 fill-white" />
          <h3 className="font-semibold mb-1 text-sm">Upgrade to Elite</h3>
          <p className="text-xs text-blue-100 mb-4 leading-relaxed">
            Unlock unlimited AI credits, multi-view production, and more.
          </p>
          <button className="w-full bg-white text-blue-600 font-semibold py-2 rounded-lg text-xs hover:bg-blue-50 transition-colors">
            Upgrade Now
          </button>
        </div>

        <a
          href="#"
          className="flex items-center gap-3 text-slate-600 hover:bg-slate-50 rounded-lg px-3 py-2 transition-colors text-sm font-medium"
        >
          <Headset className="w-5 h-5" />
          <div className="flex flex-col">
            <span className="font-bold">Need help?</span>
            <span className="text-xs text-slate-500">Contact Support</span>
          </div>
        </a>
      </div>
    </aside>
  );
}
