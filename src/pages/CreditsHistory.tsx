import { ArrowLeft, Download, Filter, Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function CreditsHistory() {
  const transactions = [
    { id: "TRX-1092", date: "June 18, 2026 14:30", desc: "Translation: Sunday Sermon", amt: "-45", bal: "1,260", pos: false },
    { id: "TRX-1091", date: "June 17, 2026 09:15", desc: "Speech Transcription: Setup", amt: "-12", bal: "1,305", pos: false },
    { id: "TRX-1090", date: "June 15, 2026 11:00", desc: "Sermon generation via AI", amt: "-150", bal: "1,317", pos: false },
    { id: "TRX-1089", date: "June 14, 2026 16:45", desc: "Translation: Bible Study notes", amt: "-25", bal: "1,467", pos: false },
    { id: "TRX-1088", date: "June 10, 2026 10:00", desc: "Additional credits purchased", amt: "+500", bal: "1,492", pos: true },
    { id: "TRX-1087", date: "June 08, 2026 00:00", desc: "Monthly Auto-Renewal", amt: "+2000", bal: "992", pos: true },
    { id: "TRX-1086", date: "June 05, 2026 13:20", desc: "Speech Transcription: Event", amt: "-80", bal: "-1,008", pos: false },
    { id: "TRX-1085", date: "June 02, 2026 15:40", desc: "Translation: Event Flyer", amt: "-15", bal: "-928", pos: false },
    { id: "TRX-1084", date: "May 28, 2026 09:10", desc: "Sermon generation via AI", amt: "-120", bal: "-913", pos: false },
    { id: "TRX-1083", date: "May 20, 2026 11:30", desc: "Monthly Auto-Renewal", amt: "+2000", bal: "-793", pos: true },
  ];

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto w-full flex-1 flex flex-col gap-6 pb-16">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Link to="/credits" className="text-slate-400 hover:text-slate-600 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl font-bold text-slate-900">Credits History</h1>
          </div>
          <p className="text-sm text-slate-500 md:pl-7">View all your past AI credit usage and purchases.</p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto mt-4 md:mt-0">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 bg-white text-slate-700 rounded-lg text-sm font-bold hover:bg-slate-50 transition-colors shadow-sm whitespace-nowrap">
            <Filter className="w-4 h-4" /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 bg-white text-slate-700 rounded-lg text-sm font-bold hover:bg-slate-50 transition-colors shadow-sm whitespace-nowrap">
            <Download className="w-4 h-4" /> Export CSV
          </button>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
        {/* Search Bar */}
        <div className="p-4 border-b border-slate-200 bg-slate-50/50">
          <div className="relative max-w-md">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by description or transaction ID..." 
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
             <thead>
              <tr className="bg-slate-50/80 text-xs text-slate-500 border-b border-slate-200 uppercase tracking-wider">
                <th className="py-4 px-6 font-bold">Transaction ID</th>
                <th className="py-4 px-6 font-bold">Date & Time</th>
                <th className="py-4 px-6 font-bold">Description</th>
                <th className="py-4 px-6 font-bold text-right">Amount</th>
                <th className="py-4 px-6 font-bold text-right">Balance</th>
              </tr>
            </thead>
            <tbody className="text-sm text-slate-800 divide-y divide-slate-100">
              {transactions.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors group cursor-pointer">
                  <td className="py-4 px-6 text-slate-600 font-mono text-xs">{row.id}</td>
                  <td className="py-4 px-6 text-slate-500 font-medium whitespace-nowrap">{row.date}</td>
                  <td className="py-4 px-6 font-medium text-slate-700">{row.desc}</td>
                  <td className={`py-4 px-6 text-right font-bold whitespace-nowrap ${row.pos ? 'text-green-600 bg-green-50/30 group-hover:bg-green-100/50' : 'text-slate-900'}`}>
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
        
        {/* Pagination Dummy */}
        <div className="p-4 border-t border-slate-200 flex items-center justify-between bg-white text-sm text-slate-500">
          <span>Showing 1 to 10 of 42 entries</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-200 rounded text-slate-400 cursor-not-allowed">Prev</button>
            <button className="px-3 py-1 border border-blue-600 bg-blue-600 text-white rounded">1</button>
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50 transition-colors text-slate-700">2</button>
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50 transition-colors text-slate-700">3</button>
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50 transition-colors text-slate-700">Next</button>
          </div>
        </div>
      </div>

    </div>
  );
}
