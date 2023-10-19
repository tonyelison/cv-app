function FormItem(props) {
  const { label } = props;

  return (
    <div className="form-item">
      <label htmlFor="">{label}</label>
      <input type="text"></input>
    </div>
  );
}

export default FormItem;