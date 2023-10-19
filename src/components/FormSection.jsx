import FormItem from './FormItem.jsx'

function FormSection(props) {
  const { label, items } = props;

  return (
    <div className='form-section'>
      <h2>{label}</h2>
      {items.map((item) => <FormItem key={item} label={item} /> )}
    </div>
  );
}

export default FormSection;