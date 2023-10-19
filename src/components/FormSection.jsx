import renderSection from '../util/render-section.js';
import FormItem from './FormItem.jsx'
import humanize from '../util/humanize.js'

function FormSection(props) {
  const { name, items, updateHandler } = props;

  const buildSection = (key, sectionData) => (
    <FormItem
      key={key}
      name={key}
      value={sectionData[key]}
      onChange={(event) => updateHandler({ [name]: { ...sectionData, [key]: event.target.value } })}
    />
  );

  return (
    <div className='form-section'>
      <h2>{humanize(name)}</h2>
      {renderSection(items, buildSection)}
    </div>
  );
}

export default FormSection;