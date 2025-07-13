'use client'

import ResumeForm from './resume-form';
import ResumePreview from './resume-preview';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    summary: '',
    skills: '',
    education: '',
    experience: ''
  });

  return (
   <div className='flex space-x-10 p-10'>
     <div className='border-2 p-10'>
     <ResumeForm formData={formData} setFormData={setFormData} />
     </div>
     <div className='border-2 p-10'>
     <ResumePreview formData={formData} />
     </div>
   </div>
  );
}
