import { useState } from 'react';
import {
  createAuthUserWithEmailandPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
const initialFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(initialFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleFormSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('passwords does not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailandPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
    } catch (error) {
      console.log('User creation encountered an error', error.message);
    }

    setFormFields(initialFormFields);
  };
  return (
    <div>
      <h2>Signup with your email and password</h2>
      <form onSubmit={handleFormSubmit}>
        <div className='grid gap-4'>
          <div className='grid gap-2'>
            <label htmlFor='dname'>Display Name</label>
            <input
              type='text'
              onChange={handleInputChange}
              value={displayName}
              name='displayName'
              id='dname'
              className='h-14 py-2 px-4 bg-gray-300 rounded-lg'
            />
          </div>
          <div className='grid gap-2'>
            <label htmlFor='email'>Email Address</label>
            <input
              type='text'
              onChange={handleInputChange}
              value={email}
              name='email'
              id='email'
              className='h-14 py-2 px-4 bg-gray-300 rounded-lg'
            />
          </div>
          <div className='grid gap-2'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              onChange={handleInputChange}
              value={password}
              name='password'
              id='password'
              className='h-14 py-2 px-4 bg-gray-300 rounded-lg'
            />
          </div>
          <div className='grid gap-2'>
            <label htmlFor='cpassword'>Confirm Password</label>
            <input
              type='password'
              onChange={handleInputChange}
              value={confirmPassword}
              name='confirmPassword'
              id='cpassword'
              className='h-14 py-2 px-4 bg-gray-300 rounded-lg'
            />
          </div>
          <button
            type='submit'
            className='bg-gray-800 text-gray-200 px-4 py-3 rounded-lg'>
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};
export default SignUpForm;
