import { Camera, HelpCircle, Landmark, ArrowRight, Edit2 } from "lucide-react";

export default function ChurchProfile() {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Church Profile</h1>
          <p className="text-slate-500 mt-1 text-sm">Manage your church information and brand settings.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors bg-white shadow-sm">
          <HelpCircle className="w-4 h-4 text-slate-400" /> Need help?
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Col - Forms */}
        <div className="lg:col-span-7 space-y-6">
          <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Church Information</h2>
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="relative shrink-0">
                  <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center shadow-inner pt-1">
                    <Landmark className="w-10 h-10 text-white" />
                  </div>
                  <button className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center border-2 border-white hover:bg-blue-700 transition-colors shadow-sm">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex-1 w-full pt-1">
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Church Name</label>
                  <input type="text" defaultValue="Saviours Assembly" className="w-full rounded-lg border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 outline-none border" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Tagline (Optional)</label>
                <input type="text" defaultValue="Raising Disciples, Transforming Lives" className="w-full rounded-lg border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 outline-none border" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Website</label>
                  <input type="url" defaultValue="https://savioursassembly.org" className="w-full rounded-lg border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 outline-none border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                  <input type="email" defaultValue="info@savioursassembly.org" className="w-full rounded-lg border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 outline-none border" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Country</label>
                  <select className="w-full rounded-lg border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 outline-none border bg-white">
                    <option>Nigeria</option>
                    <option>United States</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Timezone</label>
                  <select className="w-full rounded-lg border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 outline-none border bg-white">
                    <option>(GMT+1) West Africa Time</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Church Size</label>
                <select className="w-full rounded-lg border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 outline-none border bg-white">
                  <option>201 - 500 Members</option>
                </select>
              </div>

              <div className="pt-2">
                <button className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm text-sm">
                  Save Changes
                </button>
              </div>
            </div>
          </section>
        </div>
        
        {/* Right Col - Previews */}
        <div className="lg:col-span-5 space-y-6">
          <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Profile Preview</h2>
            
            <div className="space-y-4">
              {/* Card 1 */}
              <div className="bg-gradient-to-br from-[#0B1A3B] to-[#1A316A] rounded-xl p-8 flex flex-col items-center justify-center text-center aspect-[16/9] relative overflow-hidden shadow-inner">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_white,_transparent)]"></div>
                <div className="w-16 h-16 rounded-full border-2 border-white/20 bg-black/20 flex items-center justify-center mb-4 relative z-10 pt-1">
                  <Landmark className="text-white w-8 h-8" />
                </div>
                <h3 className="text-white font-bold text-2xl mb-1 relative z-10 tracking-tight">Saviours Assembly</h3>
                <p className="text-blue-100/80 text-sm relative z-10">Raising Disciples, Transforming Lives</p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#050B14] rounded-xl p-6 aspect-[16/9] relative overflow-hidden flex flex-col justify-between border border-slate-800 shadow-inner">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_bottom_right,_purple,_transparent)]"></div>
                <div className="relative z-10">
                  <p className="text-slate-400 text-xs font-semibold mb-3 tracking-wider uppercase">John 3:16 (KJV)</p>
                  <p className="text-white text-base sm:text-lg leading-relaxed font-serif">
                    "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-4 relative z-10 border-t border-slate-800 pt-4">
                  <div className="w-6 h-6 rounded-full bg-[#0B1A3B] flex items-center justify-center pt-0.5">
                    <Landmark className="text-white w-3 h-3" />
                  </div>
                  <span className="text-slate-400 text-xs font-medium">Saviours Assembly</span>
                </div>
              </div>
            </div>

            <button className="w-full mt-6 py-2.5 border border-slate-200 rounded-lg text-blue-600 font-semibold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 text-sm">
              View Full Preview <ArrowRight className="w-4 h-4" />
            </button>
          </section>
        </div>

      </div>

      {/* Bottom sections */}
      <div className="mt-6 space-y-6">
        <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Branding</h2>
          <div className="flex flex-col md:flex-row gap-8">
            
            <div className="w-full md:w-64 shrink-0 bg-slate-50 border border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center">
              <p className="text-sm font-semibold text-slate-900 mb-4 w-full text-left">Logo</p>
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-[#0B1A3B] rounded-full flex items-center justify-center border-4 border-white shadow-md pt-1">
                  <Landmark className="text-white w-10 h-10" />
                </div>
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-white text-slate-600 rounded-full flex items-center justify-center border border-slate-200 shadow-sm hover:text-blue-600 hover:border-blue-200 transition-colors">
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>
              <button className="w-full py-2 border border-slate-200 rounded-lg text-sm text-blue-600 font-semibold hover:bg-slate-50 transition-colors bg-white shadow-sm">
                Change Logo
              </button>
            </div>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="col-span-1 sm:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                  { label: "Primary Color", hex: "#4F46E5", bg: "bg-[#4F46E5]" },
                  { label: "Secondary Color", hex: "#0F172A", bg: "bg-[#0F172A]" },
                  { label: "Accent Color", hex: "#F59E0B", bg: "bg-[#F59E0B]" },
                ].map((c) => (
                  <div key={c.label}>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">{c.label}</label>
                    <div className="flex items-center gap-3 p-2 border border-slate-200 rounded-lg bg-white shadow-sm">
                      <div className={`w-6 h-6 rounded ${c.bg} border border-black/10`}></div>
                      <span className="text-sm font-mono text-slate-600 flex-1">{c.hex}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="col-span-1 sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Font Family</label>
                <select className="w-full rounded-lg border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2.5 outline-none border bg-white">
                  <option>Inter</option>
                  <option>Roboto</option>
                </select>
              </div>

              <div className="col-span-1 border-l border-slate-100 pl-6 flex flex-col justify-end">
                <label className="block text-sm font-medium text-slate-700 mb-2">Upload Favicon</label>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0B1A3B] rounded flex items-center justify-center shrink-0 pt-0.5">
                    <Landmark className="text-white w-5 h-5" />
                  </div>
                  <button className="flex-1 py-2 border border-slate-200 rounded-lg text-sm text-blue-600 font-semibold hover:bg-slate-50 transition-colors bg-white shadow-sm">
                    Change
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Presentation Defaults</h2>
              <p className="text-sm text-slate-500 mt-0.5">Set overrides and defaults for the multi-view output.</p>
            </div>
            <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
              Reset
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { label: "Default Translation", val: "King James Version (KJV)" },
              { label: "Default Lower Third", val: "Modern - Blue" },
              { label: "Default Theme", val: "Saviours Dark" },
              { label: "Default Language", val: "English" },
            ].map((opt) => (
              <div key={opt.label}>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">{opt.label}</label>
                <select className="w-full rounded-lg border-slate-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 outline-none border bg-white font-medium text-slate-800">
                  <option>{opt.val}</option>
                </select>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
