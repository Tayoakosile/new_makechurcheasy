import { Download, Monitor, Command, Server, Info, Zap, Globe, Sparkles, Layout } from "lucide-react";

export default function Downloads() {
  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto w-full space-y-12 pb-16">
      
      <section>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Downloads</h1>
        <p className="text-slate-500 mt-2 text-lg">Download and install EasyBible Mount on your devices.</p>
      </section>

      {/* Hero Release */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border border-blue-100 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-sm">
        <div className="md:w-1/2 z-10 space-y-6">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-md tracking-wide">
            LATEST RELEASE
          </span>
          <div>
            <h2 className="text-4xl font-black text-slate-900 flex items-center gap-3 tracking-tight">
              EasyBible 5.0.0
              <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest align-middle">Stable</span>
            </h2>
            <p className="text-slate-600 mt-4 text-lg font-medium">Experience the fastest, most powerful version yet.</p>
          </div>
          
          <button className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors bg-white px-4 py-2 rounded-lg shadow-sm border border-blue-200">
            View Release Notes <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0 z-10">
          <div className="w-48 h-48 bg-blue-600 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden border-4 border-white/20 transform rotate-3">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-700 opacity-80"></div>
            <BookIcon className="w-20 h-20 text-white relative z-10 drop-shadow-md" />
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section>
        <h3 className="text-xl font-bold text-slate-900 mb-6">Download for Your Platform</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Windows */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col hover:shadow-md transition-shadow relative">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                <Monitor className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">Windows</h4>
                <p className="text-xs font-medium text-slate-500">Windows 10 (64-bit) or later</p>
              </div>
            </div>
            <div className="mb-4">
              <span className="inline-block bg-purple-100 text-purple-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest">Recommended</span>
            </div>
            <div className="space-y-1 mb-8 mt-auto pt-4 text-sm">
              <p className="text-slate-800 font-semibold"><span className="text-slate-500 font-normal">Version</span> 5.0.0</p>
              <p className="text-slate-800 font-semibold"><span className="text-slate-500 font-normal">Size:</span> 156 MB</p>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors mb-3 shadow-sm">
              <Download className="w-4 h-4" /> Download
            </button>
            <div className="text-center">
              <button className="text-xs text-slate-400 hover:text-slate-600 hover:underline font-medium">Checksum (SHA256)</button>
            </div>
          </div>

          {/* Mac Silicon */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col hover:shadow-md transition-shadow relative">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                <Command className="w-6 h-6 text-slate-800" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">macOS</h4>
                <p className="text-xs font-medium text-slate-500">Apple Silicon (M1/M2/M3)</p>
              </div>
            </div>
            <div className="space-y-1 mb-8 mt-auto pt-4 text-sm">
              <p className="text-slate-800 font-semibold"><span className="text-slate-500 font-normal">Version</span> 5.0.0</p>
              <p className="text-slate-800 font-semibold"><span className="text-slate-500 font-normal">Size:</span> 148 MB</p>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors mb-3 shadow-sm">
              <Download className="w-4 h-4" /> Download
            </button>
            <div className="text-center">
              <button className="text-xs text-slate-400 hover:text-slate-600 hover:underline font-medium">Checksum (SHA256)</button>
            </div>
          </div>

          {/* Mac Intel */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col hover:shadow-md transition-shadow relative">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                <Server className="w-6 h-6 text-slate-800" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">macOS</h4>
                <p className="text-xs font-medium text-slate-500">Intel (x64 CPU)</p>
              </div>
            </div>
            <div className="space-y-1 mb-8 mt-auto pt-4 text-sm">
              <p className="text-slate-800 font-semibold"><span className="text-slate-500 font-normal">Version</span> 5.0.0</p>
              <p className="text-slate-800 font-semibold"><span className="text-slate-500 font-normal">Size:</span> 168 MB</p>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors mb-3 shadow-sm">
              <Download className="w-4 h-4" /> Download
            </button>
            <div className="text-center">
              <button className="text-xs text-slate-400 hover:text-slate-600 hover:underline font-medium">Checksum (SHA256)</button>
            </div>
          </div>

        </div>
      </section>

      {/* Help Banner */}
      <section className="bg-slate-50 rounded-xl border border-slate-200 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900">Need help installing?</h4>
            <p className="text-sm text-slate-600">Follow our step-by-step installation guide for your platform.</p>
          </div>
        </div>
        <button className="px-5 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-700 font-semibold hover:bg-slate-50 transition-colors shadow-sm text-sm">
          View Installation Guide
        </button>
      </section>

      {/* What's New */}
      <section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900 mb-8">What's New in 5.0.0</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {[
            { icon: Zap, bg: "bg-orange-50 text-orange-500", title: "Improved Performance", desc: "Faster load times and smoother experience across all modules." },
            { icon: Globe, bg: "bg-blue-50 text-blue-600", title: "Advanced Translation Engine", desc: "More accurate translations in more languages via AI." },
            { icon: Layout, bg: "bg-indigo-50 text-indigo-600", title: "OBS Dock Enhancements", desc: "New dock interface with better scene and source management." },
            { icon: Sparkles, bg: "bg-emerald-50 text-emerald-600", title: "New Lower Thirds & Themes", desc: "Beautiful new designs for speakers, titles and announcements." },
          ].map((f, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-1 ${f.bg}`}>
                <f.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">{f.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

// Inline helper for BookIcon to avoid strict dependency on specific lib icon mapping
function BookIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4 19V5C4 3.89543 4.89543 3 6 3H19.4C19.7314 3 20 3.26863 20 3.6V16.7143C20 17.9255 19.0664 18.9 17.9048 18.9H6C5.44772 18.9 5 19.3477 5 19.9C5 20.4523 5.44772 20.9 6 20.9H19.4C19.7314 20.9 20 21.1686 20 21.5C20 21.8314 19.7314 22.1 19.4 22.1H6C4.89543 22.1 4 21.2046 4 20.1V19ZM11 6V11L13.5 9.5L16 11V6H11Z"></path>
    </svg>
  );
}

function ArrowRight(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  );
}
