import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import HRDashboard from './pages/HRDashboard';
import UploadResumes from './pages/UploadResumes';
import TrainerDashboard from './pages/TrainerDashboard';
import RoadmapReview from './pages/RoadmapReview';
import Candidates from './pages/Candidates';
import CandidateDetail from './pages/CandidateDetail';
import AnalysisResults from './pages/AnalysisResults';
import Register from './pages/Register';
import HRLayout from './components/HRLayout';
import TrainerLayout from './components/TrainerLayout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload" element={<Navigate to="/hr/upload" replace />} />
        
        {/* HR Routes */}
        <Route path="/hr" element={<HRLayout />}>
          <Route index element={<Navigate to="/hr/upload" replace />} />
          <Route path="upload" element={<UploadResumes />} />
          <Route path="status" element={<HRDashboard />} />
          <Route path="candidate/:id" element={<CandidateDetail />} />
        </Route>

        {/* Trainer Routes */}
        <Route path="/trainer" element={<TrainerLayout />}>
          <Route index element={<Navigate to="/trainer/dashboard" replace />} />
          <Route path="dashboard" element={<TrainerDashboard />} />
          <Route path="review/:id" element={<RoadmapReview />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="candidate/:id" element={<CandidateDetail />} />
          <Route path="enterprise" element={<AnalysisResults />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
