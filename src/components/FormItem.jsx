import humanize from '../util/humanize.js'

function FormItem(props) {
  const { name, value, onChange } = props;

  return (
    <div className="form-item">
      <label htmlFor="">{humanize(name)}</label>
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event)}
      />
    </div>
  );
}

export default FormItem;