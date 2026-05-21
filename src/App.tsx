import { Navigate, Route, Routes } from "react-router-dom";
import AboutPage from "./routes/AboutPage";
import ContactPage from "./routes/ContactPage";
import EarnPage from "./routes/EarnPage";
import FaqPage from "./routes/FaqPage";
import HomePage from "./routes/HomePage";
import LocaleLayout from "./routes/LocaleLayout";
import PrivacyPage from "./routes/PrivacyPage";
import ProductPage from "./routes/ProductPage";
import RiskPage from "./routes/RiskPage";
import SecurityPage from "./routes/SecurityPage";
import ServicesPage from "./routes/ServicesPage";
import TermsPage from "./routes/TermsPage";
import PayPage from "./routes/PayPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/en" replace />} />
      <Route path="/pay" element={<PayPage />} />
      <Route path="/:locale" element={<LocaleLayout />}>
        <Route index element={<HomePage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="security" element={<SecurityPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="risk" element={<RiskPage />} />
        <Route path="earn" element={<EarnPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/en" replace />} />
    </Routes>
  );
}
