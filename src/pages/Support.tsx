import React, { useState } from "react";
import { 
  HelpCircle, 
  Mail, 
  MessageCircle, 
  FileText, 
  Search,
  BookOpen,
  ChevronRight,
  PhoneCall,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Support() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do I connect a new presentation display?",
      a: "To connect a new display, navigate to the Devices tab and click 'Generate Pairing Code'. Open the EasyBible Mount app on your presentation computer, enter the pairing code, and it will automatically sync with your account."
    },
    {
      q: "How are credits calculated for translations?",
      a: "Every 1,000 characters translated consumes 1 credit. For typical sunday sermons, a full service transcription with dual-language output usually takes between 15-25 credits."
    },
    {
      q: "Can I use the app offline?",
      a: "Yes! Once you have downloaded your media library and bible versions, EasyBible Mount will function completely offline. You will only need an internet connection to sync new files, download updates, or use cloud-based AI tools."
    },
    {
      q: "How do I upgrade to the Premium plan?",
      a: "You can change your plan at any time by going to Account > Subscription and clicking 'Change Plan'. Pro rated charges will be applied automatically to your next billing cycle."
    }
  ];

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto w-full flex-1 flex flex-col gap-8 pb-16">
      
      {/* Search Header */}
      <div className="bg-blue-600 rounded-[2rem] p-8 md:p-12 text-center relative overflow-hidden shadow-xl">
        <div className="absolute inset-0 bg-white opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-black text-white mb-4">How can we help today?</h2>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search for articles, guides, or error codes..." 
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border-none shadow-lg focus:ring-4 focus:ring-blue-400/30 outline-none text-slate-900 font-medium transition-all"
            />
          </div>
        </div>
      </div>

      {/* Support Channels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">Knowledge Base</h3>
          <p className="text-sm text-slate-500 mb-6 flex-1">Read guides, tutorials, and documentation for all features.</p>
          <button className="w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-lg text-sm font-bold transition-colors">
            Browse Articles
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <MessageCircle className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">Live Chat</h3>
          <p className="text-sm text-slate-500 mb-6 flex-1">Chat directly with our support team in real-time.</p>
          <button className="w-full py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-lg text-sm font-bold transition-colors border border-emerald-200 flex justify-center items-center gap-2">
            Start Chat
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">Email Ticket</h3>
          <p className="text-sm text-slate-500 mb-6 flex-1">Send us a detailed message about complex issues.</p>
          <button className="w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-lg text-sm font-bold transition-colors">
            Submit Ticket
          </button>
        </div>

      </div>

      {/* FAQs */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 bg-slate-50">
          <h3 className="text-lg font-bold text-slate-900">Frequently Asked Questions</h3>
        </div>
        <div className="divide-y divide-slate-100">
          {faqs.map((faq, i) => (
            <div key={i} className="p-2">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-4 bg-white hover:bg-slate-50 rounded-lg transition-colors text-left"
              >
                <span className="font-bold text-slate-800 text-sm">{faq.q}</span>
                {openFaq === i ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>
              {openFaq === i && (
                <div className="px-4 pb-4 pt-2 text-sm text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
