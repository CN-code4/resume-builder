'use client'

import  html2canvas  from "html2canvas-pro";
import jsPDF from 'jspdf';

function ResumePreview({ formData }) {
  return (
    <div id="resume-preview"
    className="bg-white text-black p-8 max-w-4xl mx-auto shadow-lg" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      {/* Header Section */}
      <div className="text-center border-b-2 border-gray-300 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {formData.name || 'Your Name'}
        </h1>
        <div className="flex justify-center items-center space-x-4 text-sm text-gray-600">
          <span>{formData.email || 'your.email@example.com'}</span>
          <span>•</span>
          <span>{formData.phone || '+1 (555) 123-4567'}</span>
        </div>
      </div>

      {/* About Me Section */}
      {formData.summary && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            {formData.summary}
          </p>
        </div>
      )}

      {/* Skills Section */}
      {formData.skills && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">
            SKILLS
          </h2>
          <div className="text-sm text-gray-700">
            {formData.skills.split(',').map((skill, index) => (
              <span key={index} className="inline-block mr-4 mb-1">
                • {skill.trim()}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Work Experience Section */}
      {formData.experience && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">
            WORK EXPERIENCE
          </h2>
          <div className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
            {formData.experience}
          </div>
        </div>
      )}

      {/* Education Section */}
      {formData.education && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">
            EDUCATION
          </h2>
          <div className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
            {formData.education}
          </div>
        </div>
      )}

      <div className="text-center mt-8">
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          onClick={async () => {
            const element = document.getElementById('resume-preview');
            if (!element) return;
            const canvas = await html2canvas(element);
            const pdf = new jsPDF();
            pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0);
            pdf.save('resume.pdf');
            }}
          >
            Download Resume
          </button>
        </div>
      
    </div>
  );
}



export default ResumePreview;
/*function ResumePreview({formData}) {
    return (
        <div>
            <h2>Full Name: {formData.name}</h2>
            <h2>Email: {formData.email}</h2>
            <h2>Phone Number: {formData.phone}</h2>
            <h2>About Me: {formData.summary}</h2>
            <h2>Skills: {formData.skills}</h2>
            <h2>Education: {formData.eduction}</h2>
            <h2>Experience: {formData.experience}</h2>
        </div>
    )
}

export default ResumePreview;*/