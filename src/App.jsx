import { useState } from "react";
import './App.css'
// import { v4 as uuidv4 } from 'uuid';
import EditForm from './components/EditForm.jsx'
import ViewForm from './components/ViewForm.jsx'

function App() {
  
  const applicant = {
    personal: {
      'full-name': 'John Smith',
      email: 'example@email.com',
      phone: '000-000-0000',
    },
    education: [
      {
        school: 'University of Utah',
        degree: 'Bachelor of Science',
        'start-date': '08-01-2005',
        'end-date': '09-01-2023',
      },
      {
        employer: 'Utah Valley University',
        title: 'Masters in Science',
        'start-date': '07-01-2005',
        'end-date': '10-01-2023',
      },
    ],
    'employment-history': [
      {
        employer: 'University of Utah',
        title: 'Administrator',
        'start-date': '08-01-2005',
        'end-date': '09-01-2023',
      },
      {
        employer: 'Utah Valley University',
        title: 'Administrator',
        'start-date': '07-01-2005',
        'end-date': '10-01-2023',
      },
    ],
  };

  const [statefulApplicant, setApplicant] = useState(applicant);

  return (
    <div className="app">
      <EditForm applicant={statefulApplicant} setApplicant={setApplicant} />
      <ViewForm applicant={statefulApplicant} />
    </div>
  )
}

export default App
