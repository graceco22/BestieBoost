"use client"
import React, { useEffect } from 'react';

const LessonPage: React.FC = () => {
  useEffect(() => {
    // Perform the redirect when the component mounts
    window.location.href = "http://localhost:3000/webcam/"; // Redirecting to another local host link
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts

  return (
    <div>
      {/* This content will be briefly displayed before the redirect happens */}
      <p>Redirecting...</p>
    </div>
  );
};

export default LessonPage;
