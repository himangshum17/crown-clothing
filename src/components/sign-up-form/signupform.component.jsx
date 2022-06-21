const SignUpForm = () => {
  const handleFormSubmit = e => {
    e.preventDefault();
    console.log('Form Submitted');
  };
  return (
    <div>
      <h2>Signup with your email and password</h2>
      <form onSubmit={handleFormSubmit}>
        <div className='grid gap-2'>
          <label htmlFor='dname'>Display Name</label>
          <input
            type='text'
            id='dname'
            className='h-14 py-2 px-4 bg-gray-300 rounded-lg'
          />
        </div>
        <div className='grid gap-2'>
          <label htmlFor='email'>Email Address</label>
          <input
            type='text'
            id='email'
            className='h-14 py-2 px-4 bg-gray-300 rounded-lg'
          />
        </div>
        <div className='grid gap-2'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            className='h-14 py-2 px-4 bg-gray-300 rounded-lg'
          />
        </div>
        <div className='grid gap-2'>
          <label htmlFor='cpassword'>Confirm Password</label>
          <input
            type='password'
            id='cpassword'
            className='h-14 py-2 px-4 bg-gray-300 rounded-lg'
          />
        </div>
        <button type='submit'>Create Account</button>
      </form>
    </div>
  );
};
export default SignUpForm;
