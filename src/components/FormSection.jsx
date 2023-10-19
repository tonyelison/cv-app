import FormItem from './FormItem.jsx'
import humanize from '../util/humanize.js'

function FormSection(props) {
  const { name, items, updateHandler } = props;

  return (
    <div className='form-section'>
      <h2>{humanize(name)}</h2>
      {Object.keys(items).map((key) => {
        return (
          <FormItem
            key={key}
            name={key}
            value={items[key]}
            onChange={(event) => updateHandler({ [name]: { ...items, [key]: event.target.value } })}
          />
        )
      })}
    </div>
  );
}

export default FormSection;