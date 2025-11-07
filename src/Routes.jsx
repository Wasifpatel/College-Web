import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import AdmissionsGateway from './pages/admissions-gateway-your-journey-starts-here';
import Homepage from './pages/homepage-engineering-excellence-hub';
import PlacementSuccessCenter from './pages/placement-success-center-career-outcomes';
import ContactConnectPage from './pages/contact-connect-multiple-touchpoints';
import AcademicUniversePage from './pages/academic-universe-departments-programs';
import AboutDypcetHeritage from './pages/about-dypcet-heritage-vision';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AboutDypcetHeritage />} />
        <Route path="/admissions-gateway-your-journey-starts-here" element={<AdmissionsGateway />} />
        <Route path="/homepage-engineering-excellence-hub" element={<Homepage />} />
        <Route path="/placement-success-center-career-outcomes" element={<PlacementSuccessCenter />} />
        <Route path="/contact-connect-multiple-touchpoints" element={<ContactConnectPage />} />
        <Route path="/academic-universe-departments-programs" element={<AcademicUniversePage />} />
        <Route path="/about-dypcet-heritage-vision" element={<AboutDypcetHeritage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
