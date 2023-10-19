import FormSection from './FormSection.jsx'

function EditForm({ applicant, setApplicant }) {
  const updateHandler = (updates) => setApplicant({ ...applicant, ...updates });

  return (
    <form>
      <FormSection name="personal" items={applicant.personal} updateHandler={updateHandler} />
      <FormSection name="education" items={applicant.education} updateHandler={updateHandler} />
      <FormSection name="employment-history" items={applicant['employment-history']} updateHandler={updateHandler} />
    </form>
  );
}

export default EditForm;