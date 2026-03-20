import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import UploadAnalysis from './pages/UploadAnalysis';
import AnalysisResults from './pages/AnalysisResults';
import Roadmap from './pages/Roadmap';
import HRDashboard from './pages/HRDashboard';
import UploadResumes from './pages/UploadResumes';
import TrainerDashboard from './pages/TrainerDashboard';
import RoadmapReview from './pages/RoadmapReview';
import Candidates from './pages/Candidates';
import CandidateDetail from './pages/CandidateDetail';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Layout for Auth pages (Login)
const AuthLayout = ({ children }) => (
  <div className="bg-surface-dim text-on-surface min-h-screen selection:bg-primary-container selection:text-on-primary-container font-inter">
    <Navbar />
    {children}
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page is the root page */}
        <Route path="/" element={<Landing />} />
        
        {/* Login page with its specific layout */}
        <Route 
          path="/login" 
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          } 
        />
        
        {/* Dashboard/Internal pages (UploadAnalysis handles its own full-page layout with Sidebar) */}
        <Route path="/upload" element={<UploadAnalysis />} />
        <Route path="/analysis" element={<AnalysisResults />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/hr-dashboard" element={<HRDashboard />} />
        <Route path="/upload-resumes" element={<UploadResumes />} />
        <Route path="/trainer-dashboard" element={<TrainerDashboard />} />
        <Route path="/roadmap-review" element={<RoadmapReview />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/candidate-detail" element={<CandidateDetail />} />
        <Route path="/register" element={<Register />} />
        
        {/* Add more dashboard routes here */}
      </Routes>
    </Router>
  );
}

export default App;
