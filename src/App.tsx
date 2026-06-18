import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import Overview from "./pages/Overview";
import ProfileSettings from "./pages/ProfileSettings";
import Devices from "./pages/Devices";
import ChurchProfile from "./pages/ChurchProfile";
import Security from "./pages/Security";
import Credits from "./pages/Credits";
import Downloads from "./pages/Downloads";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="settings" element={<ProfileSettings />} />
          <Route path="devices" element={<Devices />} />
          <Route path="church-profile" element={<ChurchProfile />} />
          <Route path="security" element={<Security />} />
          <Route path="credits" element={<Credits />} />
          <Route path="downloads" element={<Downloads />} />
          
          {/* Fallback routes for dummy links */}
          <Route path="subscription" element={<div className="p-8 text-center text-slate-500">Subscription details coming soon...</div>} />
          <Route path="tutorials" element={<div className="p-8 text-center text-slate-500">Tutorials coming soon...</div>} />
          <Route path="community" element={<div className="p-8 text-center text-slate-500">Community details coming soon...</div>} />
          <Route path="support" element={<div className="p-8 text-center text-slate-500">Support center coming soon...</div>} />
          <Route path="billing" element={<div className="p-8 text-center text-slate-500">Billing details coming soon...</div>} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
