function ViewForm({ applicant }) {
  return (
    <div>
      {applicant.personal['full-name']}
    </div>
  );
}

export default ViewForm;