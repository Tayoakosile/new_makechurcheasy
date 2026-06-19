import { useState } from "react";
import { Zap, Wallet, ChevronDown, CheckCircle, ArrowRight, AlertCircle, CheckCircle2, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const dummyData = [
  { name: 'Mon', usage: 120 },
  { name: 'Tue', usage: 450 },
  { name: 'Wed', usage: 150 },
  { name: 'Thu', usage: 800 },
  { name: 'Fri', usage: 500 },
  { name: 'Sat', usage: 220 },
  { name: 'Sun', usage: 600 },
];

export default function Credits() {
  const [showPurchaseStatus, setShowPurchaseStatus] = useState<'success' | 'failed' | null>(null);
  const [showPurchaseDropdown, setShowPurchaseDropdown] = useState(false);

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto w-full flex-1 flex flex-col gap-6 pb-16">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-1">Credits</h1>
        <p className="text-sm text-slate-500">Monitor your global AI credit usage over all services.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm flex flex-col justify-between">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
              <Zap className="w-6 h-6 fill-current" />
            </div>
            <span className="text-base font-bold text-slate-900">Total AI Credits</span>
          </div>
          <div className="mb-6">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-black text-slate-900 tracking-tight">1,260</span>
              <span className="text-lg font-bold text-slate-400">/ 2,000</span>
            </div>
            <p className="text-sm text-slate-500">Credits remaining across all applications</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200/50 shadow-inner">
              <div className="h-full rounded-full bg-blue-600 relative overflow-hidden" style={{ width: '63%' }}>
                <div className="absolute inset-0 bg-white/20"></div>
              </div>
            </div>
            <span className="text-sm font-bold text-slate-900">63%</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 shadow-lg flex flex-col justify-between text-white border border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-slate-700/50 text-blue-400 ring-1 ring-slate-600">
              <Wallet className="w-6 h-6" />
            </div>
            <span className="text-base font-bold text-slate-100">Subscription Status</span>
          </div>
          <div className="mb-6">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-black text-white">$49.00</span>
              <span className="text-sm text-slate-400 font-medium">/ month</span>
            </div>
            <div className="flex items-center gap-2 mt-2 bg-green-500/10 text-green-400 px-3 py-1 rounded-full w-fit border border-green-500/20">
              <CheckCircle className="w-4 h-4 shrink-0" />
              <span className="text-xs font-bold tracking-wide uppercase">Active Plan</span>
            </div>
            <p className="text-sm text-slate-400 mt-4 leading-relaxed max-w-sm">Auto-renews on <strong className="text-white">Jul 18, 2026</strong>. Additional usage is charged at $0.05 per 10 credits.</p>
          </div>
          <div className="flex gap-3 relative">
            <div className="relative">
               <button 
                 onClick={() => setShowPurchaseDropdown(!showPurchaseDropdown)}
                 className="bg-blue-600 text-white hover:bg-blue-500 font-bold text-sm px-6 py-3 rounded-lg transition-colors shadow-sm w-full sm:w-auto"
               >
                 Buy More Credits
               </button>
               {showPurchaseDropdown && (
                 <div className="absolute top-full mt-2 left-0 w-48 bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden z-20">
                   <button 
                     onClick={() => { setShowPurchaseStatus('success'); setShowPurchaseDropdown(false); }} 
                     className="w-full text-left px-4 py-3 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 font-bold border-b border-slate-100 transition-colors"
                   >
                     Test Purchase Success
                   </button>
                   <button 
                     onClick={() => { setShowPurchaseStatus('failed'); setShowPurchaseDropdown(false); }} 
                     className="w-full text-left px-4 py-3 text-sm text-slate-700 hover:bg-red-50 hover:text-red-700 font-bold transition-colors"
                   >
                     Test Purchase Failed
                   </button>
                 </div>
               )}
            </div>
            <button className="bg-slate-700 text-slate-200 hover:bg-slate-600 font-bold text-sm px-6 py-3 rounded-lg transition-colors border border-slate-600 w-full sm:w-auto">
              Manage Billing
            </button>
          </div>
        </div>
      </div>

      {/* Analytics Chart */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Usage Overview</h3>
            <p className="text-sm text-slate-500 mt-1">Daily credit usage for the past week.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
            This Week <ChevronDown className="w-4 h-4 ml-1 opacity-50" />
          </button>
        </div>
        
        <div className="h-72 w-full mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={dummyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                cursor={{ stroke: '#94a3b8', strokeWidth: 1, strokeDasharray: '4 4' }}
              />
              <Area 
                type="monotone" 
                dataKey="usage" 
                stroke="#2563eb" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorUsage)" 
                activeDot={{ r: 6, fill: "#2563eb", stroke: "#e0e7ff", strokeWidth: 4 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* History Table */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-6 border-b border-slate-200 bg-slate-50/50">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Recent Transactions</h3>
            <p className="text-sm text-slate-500 mt-1">Your latest credit additions and deductions.</p>
          </div>
          <Link to="/credits/history" className="flex items-center gap-1.5 text-blue-600 text-sm font-bold hover:text-blue-800 transition-colors bg-blue-50 px-4 py-2 rounded-lg">
            View all <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-slate-50/80 text-xs text-slate-500 border-b border-slate-200 uppercase tracking-wider">
                <th className="py-4 px-6 font-bold">Date</th>
                <th className="py-4 px-6 font-bold">Description</th>
                <th className="py-4 px-6 font-bold text-right">Amount</th>
                <th className="py-4 px-6 font-bold text-right">Balance</th>
              </tr>
            </thead>
            <tbody className="text-sm text-slate-800 divide-y divide-slate-100">
              {[
                { date: "June 18, 2026", desc: "Translation: Sunday Sermon", amt: "-45", bal: "1,260", pos: false },
                { date: "June 17, 2026", desc: "Speech Transcription: Setup", amt: "-12", bal: "1,305", pos: false },
                { date: "June 15, 2026", desc: "Sermon generation via AI", amt: "-150", bal: "1,317", pos: false },
                { date: "June 10, 2026", desc: "Additional credits purchased", amt: "+500", bal: "1,467", pos: true },
                { date: "June 08, 2026", desc: "Monthly Auto-Renewal", amt: "+2000", bal: "967", pos: true },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                   <td className="py-4 px-6 text-slate-500 font-medium whitespace-nowrap">{row.date}</td>
                   <td className="py-4 px-6 font-medium text-slate-700">{row.desc}</td>
                   <td className={`py-4 px-6 text-right font-bold whitespace-nowrap ${row.pos ? 'text-green-600 bg-green-50/30' : 'text-slate-900'}`}>
                     <span className={row.pos ? 'px-2 py-1 rounded bg-green-100/50 inline-block' : ''}>
                       {row.amt}
                     </span>
                   </td>
                   <td className="py-4 px-6 text-right font-bold text-slate-500">{row.bal}</td>
                 </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Success Modal */}
      {showPurchaseStatus === 'success' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowPurchaseStatus(null)}></div>
          <div className="relative w-full max-w-md bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200/60 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(16,185,129,0.2)]">
                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Purchase Successful!</h2>
              <p className="text-sm font-medium text-slate-500 mb-8 px-4 leading-relaxed">
                Great news! 500 credits have been successfully added to your church's account balance.
              </p>
              
              <div className="w-full bg-slate-50 rounded-xl border border-slate-100 p-5 mb-8 text-left space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-500">Package</span>
                  <span className="text-sm font-bold text-slate-900">500 Credits</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-500">Amount</span>
                  <span className="text-sm font-bold text-slate-900">$45.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-500">Payment Method</span>
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-slate-400" />
                    <span className="text-sm font-bold text-slate-900">Visa ending in 4242</span>
                  </div>
                </div>
              </div>
              
              <div className="w-full flex flex-col gap-3">
                <button onClick={() => setShowPurchaseStatus(null)} className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg text-white font-bold text-sm transition-all shadow-sm">
                  Back to Credits
                </button>
                <Link to="/billing/invoices/1" onClick={() => setShowPurchaseStatus(null)} className="w-full bg-white hover:bg-slate-50 border border-slate-200 py-3 rounded-lg text-slate-700 font-bold text-sm transition-all">
                  View Invoice
                </Link>
              </div>
            </div>
            <div className="h-1.5 w-full bg-gradient-to-r from-emerald-400 via-blue-500 to-emerald-400"></div>
          </div>
        </div>
      )}

      {/* Failed Modal */}
      {showPurchaseStatus === 'failed' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setShowPurchaseStatus(null)}></div>
          <div className="relative w-full max-w-[480px] bg-white rounded-xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
            <div className="p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-6">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Purchase Failed</h2>
              <div className="px-6 relative">
                <p className="text-sm font-medium text-slate-500 leading-relaxed">
                  Your payment method was declined. Please check your details and try again.
                </p>
              </div>
            </div>
            
            <div className="mx-8 mb-8 p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center gap-3">
              <div className="px-2 py-0.5 bg-slate-200 rounded font-mono text-xs font-bold text-slate-600">ERR</div>
              <span className="font-mono text-xs font-bold text-slate-600 tracking-wider">PAYMENT_DECLINED</span>
            </div>
            
            <div className="p-6 bg-slate-50/80 flex flex-col gap-3 border-t border-slate-100">
              <button onClick={() => setShowPurchaseStatus(null)} className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold text-sm shadow-sm transition-colors hover:bg-blue-700">
                Try Again
              </button>
              <button onClick={() => setShowPurchaseStatus(null)} className="w-full bg-white border border-slate-200 text-slate-700 py-3 rounded-lg font-bold text-sm hover:bg-slate-50 transition-colors">
                Update Payment Method
              </button>
              <button onClick={() => setShowPurchaseStatus(null)} className="w-full py-2 text-slate-500 font-bold text-sm hover:text-slate-900 transition-colors">
                Cancel and close
              </button>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}
