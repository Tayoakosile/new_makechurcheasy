import { Zap, Globe, Mic, Wallet, ChevronDown, CheckCircle } from "lucide-react";

export default function Credits() {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto w-full flex-1 flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-1">Credits</h1>
        <p className="text-sm text-slate-500">Monitor your usage and manage your AI credits.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: Zap, iconBg: "bg-yellow-100 text-yellow-600", title: "AI Credits", val: "126", total: "/ 200", unit: "Credits remaining", progBg: "bg-yellow-500", prog: 63 },
          { icon: Globe, iconBg: "bg-purple-100 text-purple-600", title: "Translation", val: "23", total: "/ 50", unit: "Credits remaining", progBg: "bg-purple-500", prog: 46 },
          { icon: Mic, iconBg: "bg-emerald-100 text-emerald-600", title: "Speech Mins", val: "74", total: "/ 120", unit: "Minutes used", progBg: "bg-emerald-500", prog: 62 },
        ].map((card, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-6">
              <div className={`p-1.5 rounded-md ${card.iconBg}`}>
                <card.icon className="w-4 h-4 fill-current" />
              </div>
              <span className="text-sm font-semibold text-slate-700">{card.title}</span>
            </div>
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-slate-900">{card.val}</span>
                <span className="text-sm font-medium text-slate-400">{card.total}</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">{card.unit}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${card.progBg}`} style={{ width: `${card.prog}%` }}></div>
              </div>
              <span className="text-xs font-bold text-slate-700">{card.prog}%</span>
            </div>
          </div>
        ))}

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between bg-gradient-to-br from-blue-50 to-white">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 rounded-md bg-blue-100 text-blue-600">
              <Wallet className="w-4 h-4" />
            </div>
            <span className="text-sm font-semibold text-slate-700">Total Balance</span>
          </div>
          <div className="mb-4">
            <div className="text-3xl font-bold text-slate-900">300</div>
            <p className="text-xs text-slate-500 mt-1 font-medium">Auto-renews Jul 18</p>
          </div>
          <button className="w-full bg-blue-600 text-white hover:bg-blue-700 font-semibold text-sm py-2.5 rounded-lg transition-colors shadow-sm">
            Buy More
          </button>
        </div>
      </div>

      {/* Analytics Mockup */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm min-h-[300px] flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-slate-900">Usage Overview</h3>
          <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
            This Month <ChevronDown className="w-4 h-4" />
          </button>
        </div>
        
        {/* Mock Chart Area */}
        <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-slate-100 rounded-xl bg-slate-50 text-slate-400 p-8">
            <Globe className="w-12 h-12 text-slate-300 mb-4" />
            <p className="font-medium text-slate-600 mb-1">Detailed usage graphs appear here.</p>
            <p className="text-xs text-slate-400 text-center max-w-sm">Use your application heavily to generate enough data points to plot the multi-line usage chart.</p>
        </div>
      </div>

      {/* History Table */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-5 border-b border-slate-200 bg-slate-50/50">
          <h3 className="text-lg font-bold text-slate-900">Credits History</h3>
          <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">View all history</a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-slate-50 text-xs text-slate-500 border-b border-slate-200 uppercase tracking-wider">
                <th className="py-3 px-6 font-semibold">Date</th>
                <th className="py-3 px-6 font-semibold">Description</th>
                <th className="py-3 px-6 font-semibold text-right">Amount</th>
                <th className="py-3 px-6 font-semibold text-right">Balance</th>
              </tr>
            </thead>
            <tbody className="text-sm text-slate-800">
              {[
                { date: "June 8, 2026", desc: "Monthly AI credits granted", type: "AI Credits", amt: "+200", bal: "126", pos: true },
                { date: "June 7, 2026", desc: "Sermon translated to Yoruba", type: "AI Credits", amt: "-8", bal: "-", pos: false },
                { date: "June 6, 2026", desc: "12 min speech transcription", type: "Speech Minutes", amt: "-12", bal: "74", pos: false },
                { date: "June 5, 2026", desc: "French translation", type: "Translation", amt: "-3", bal: "23", pos: false },
              ].map((row, i) => (
                <tr key={i} className="border-b border-slate-100 hover:bg-slate-50/50">
                  <td className="py-4 px-6 text-slate-500 font-medium">{row.date}</td>
                  <td className="py-4 px-6">{row.desc}</td>
                  <td className={`py-4 px-6 text-right font-bold ${row.pos ? 'text-green-600' : 'text-slate-800'}`}>{row.amt}</td>
                  <td className="py-4 px-6 text-right font-semibold text-slate-500">{row.bal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
}
