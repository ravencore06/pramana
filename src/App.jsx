import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import IssueCertificate from "./pages/IssueCertificate";
import IssuedCertificates from "./pages/IssuedCertificates";
import CertificateDetails from "./pages/CertificateDetails";
import VerificationPortal from "./pages/VerificationPortal";
import CertificatePreviewPage from "./pages/CertificatePreviewPage";
import Settings from "./pages/Settings";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#F8FAFC]">
        <Navbar
          sidebarOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen((prev) => !prev)}
        />
        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="pt-16 lg:pl-64 min-h-screen transition-all duration-200">
          <div className="px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/issue" element={<IssueCertificate />} />
              <Route path="/certificates" element={<IssuedCertificates />} />
              <Route path="/certificate/:id" element={<CertificateDetails />} />
              <Route path="/verify" element={<VerificationPortal />} />
              <Route path="/preview" element={<CertificatePreviewPage />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}
