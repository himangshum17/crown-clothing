const FormInput = ({ label, id, ...otherInputProps }) => {
  return (
    <div className='grid gap-2'>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        className='h-14 py-2 px-4 bg-gray-300 rounded-md'
        {...otherInputProps}
      />
    </div>
  );
};
export default FormInput;
