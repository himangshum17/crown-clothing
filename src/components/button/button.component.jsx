const Button = ({
  children,
  buttontype,
  extraClasses = '',
  ...otherButtonProps
}) => {
  return (
    <button
      {...otherButtonProps}
      className={`bg-gray-800 place-self-start text-gray-200 px-4 py-3 text-sm uppercase tracking-wider hover:bg-gray-700 transition-all border border-transparent ${extraClasses} ${
        buttontype === 'google' ? 'bg-blue-700 hover:bg-blue-600' : ''
      } ${
        buttontype === 'inverted'
          ? 'bg-gray-200 border !border-gray-400 text-gray-800 hover:bg-gray-900 hover:text-gray-100 hover:!border-gray-900'
          : ''
      }`}>
      {children}
    </button>
  );
};
export default Button;
