// import { useState } from 'react'
import './App.css'
import EditForm from './components/EditForm.jsx'
import ViewForm from './components/ViewForm.jsx'

function App() {

  const form = [
    {
      id: 'personal',
      label: 'Personal Details',
      items: ['First Name', 'Email Address', 'Phone Number']
    },
    {
      id: 'edu',
      label: 'Education',
      items: ['School', 'Degree', 'Start Date', 'End Date']
    },
  ];

  return (
    <div className="app">
      <EditForm form={form} />
      <ViewForm />
    </div>
  )
}

export default App
