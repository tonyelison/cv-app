import FormSection from './FormSection.jsx'

function EditForm(props) {
  return (
    <form>
      {props.form.map(({ id, label, items }) => {
        return <FormSection key={id} label={label} items={items} />
      })}
    </form>
  );
}

export default EditForm;