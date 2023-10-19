import { useState } from "react";
import './App.css'
// import { v4 as uuidv4 } from 'uuid';
import EditForm from './components/EditForm.jsx'
import ViewForm from './components/ViewForm.jsx'

function App() {

  // const mockData = [
  //   {
  //     id: 'personal',
  //     label: 'Personal Details',
  //     items: ['First Name', 'Email Address', 'Phone Number']
  //   },
  //   {
  //     id: 'schools',
  //     label: 'Education',
  //     items: ['School', 'Degree', 'Start Date', 'End Date']
  //   },
  //   {
  //     id: 'jobs',
  //     label: 'Employment History',
  //     items: ['Employer', 'Job Title', 'Start Date', 'End Date']
  //   },
  // ];

  const applicant = {
    personal: {
      'full-name': 'John Smith',
      email: 'example@email.com',
      phone: '000-000-0000',
    },
    education: [],
    'employment-history': [],
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
