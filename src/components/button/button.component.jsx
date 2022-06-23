const Button = ({ children, buttontype, ...otherButtonProps }) => {
  return (
    <button
      {...otherButtonProps}
      className={`bg-gray-800 text-gray-200 px-4 py-3 rounded-md uppercase tracking-wider hover:bg-gray-700 transition-all border border-transparent ${
        buttontype === 'google' ? 'bg-blue-700 hover:bg-blue-600' : ''
      } ${
        buttontype === 'inverted'
          ? 'bg-gray-200 border !border-gray-400 text-gray-800 hover:bg-gray-100'
          : ''
      }`}>
      {children}
    </button>
  );
};
export default Button;
