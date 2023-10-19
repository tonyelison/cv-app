function ViewForm({ applicant }) {
  return (
    <div>
      <h2>Personal Details</h2>
      <label>Full Name</label>
      <div>
        {applicant.personal['full-name']}
      </div>
      <label>Email</label>
      <div>
        {applicant.personal.email}
      </div>
      <label>Phone</label>
      <div>
        {applicant.personal.phone}
      </div>
    </div>
  );
}

export default ViewForm;