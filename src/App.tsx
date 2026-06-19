import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import Overview from "./pages/Overview";
import ProfileSettings from "./pages/ProfileSettings";
import ChangeEmail from "./pages/ChangeEmail";
import EmailVerified from "./pages/EmailVerified";
import SessionManager from "./pages/SessionManager";
import DeactivateAccount from "./pages/DeactivateAccount";
import ChangePassword from "./pages/ChangePassword";
import ErrorView from "./pages/ErrorView";
import Devices from "./pages/Devices";
import ChurchProfile from "./pages/ChurchProfile";
import Security from "./pages/Security";
import Credits from "./pages/Credits";
import CreditsHistory from "./pages/CreditsHistory";
import Downloads from "./pages/Downloads";
import Subscription from "./pages/Subscription";
import ChangePlan from "./pages/ChangePlan";
import Invoice from "./pages/Invoice";
import Tutorials from "./pages/Tutorials";
import Community from "./pages/Community";

import Support from "./pages/Support";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="settings" element={<ProfileSettings />} />
          <Route path="settings/email" element={<ChangeEmail />} />
          <Route path="settings/email/verified" element={<EmailVerified />} />
          <Route path="settings/deactivate" element={<DeactivateAccount />} />
          <Route path="security/sessions" element={<SessionManager />} />
          <Route path="security/password" element={<ChangePassword />} />
          <Route path="error/:type" element={<ErrorView />} />
          <Route path="devices" element={<Devices />} />
          <Route path="church-profile" element={<ChurchProfile />} />
          <Route path="security" element={<Security />} />
          <Route path="credits" element={<Credits />} />
          <Route path="credits/history" element={<CreditsHistory />} />
          <Route path="downloads" element={<Downloads />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="subscription/plans" element={<ChangePlan />} />
          <Route path="billing/invoices/:id" element={<Invoice />} />
          <Route path="billing" element={<Invoice />} /> {/* Redirecting for demo */}
          
          <Route path="tutorials" element={<Tutorials />} />
          <Route path="community" element={<Community />} />

          {/* Fallback routes for dummy links */}
          <Route path="support" element={<Support />} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
