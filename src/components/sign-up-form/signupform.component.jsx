import { useState } from 'react';
import {
  createAuthUserWithEmailandPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import Button from '../button';
import FormInput from '../form-input';
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
      <h2 className='text-4xl text-gray-800 font-semibold'>
        Don't have an account?
      </h2>
      <span className='text-base text-gray-600'>
        Signup with your email and password
      </span>
      <form onSubmit={handleFormSubmit}>
        <div className='grid gap-4'>
          <FormInput
            label='Display Name'
            name='displayName'
            value={displayName}
            onChange={handleInputChange}
            type='text'
            id='dname'
          />
          <FormInput
            label='Email Address'
            name='email'
            value={email}
            onChange={handleInputChange}
            type='email'
            id='email'
          />
          <FormInput
            label='Password'
            name='password'
            value={password}
            onChange={handleInputChange}
            type='password'
            id='password'
          />
          <FormInput
            label='Confirm Password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleInputChange}
            type='password'
            id='cpassword'
          />
          <Button type='submit'>Create Account</Button>
        </div>
      </form>
    </div>
  );
};
export default SignUpForm;
