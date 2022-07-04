import FormInput from '../form-input';
import Button from '../button';
import { useState } from 'react';
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailandPassword,
} from '../../utils/firebase/firebase.utils';
const initialFormFields = {
  email: '',
  password: '',
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(initialFormFields);
  const { email, password } = formFields;
  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };
  const handleFormSubmit = async e => {
    e.preventDefault();
    try {
      await signInAuthUserWithEmailandPassword(email, password);
      setFormFields(initialFormFields);
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert(
            'Incorrect Password, Please enter your password again and try again'
          );
          break;
        case 'auth/user-not-found':
          alert('No user with this email address was found.');
          break;
        default:
          break;
      }
    }
  };
  return (
    <div>
      <h2 className='text-4xl text-gray-800 font-semibold'>
        Already have an account?
      </h2>
      <span className='text-base text-gray-600'>
        Signin with your email and password
      </span>
      <form className='mt-8' onSubmit={handleFormSubmit}>
        <div className='grid gap-4'>
          <FormInput
            label='Email Address'
            name='email'
            value={email}
            onChange={handleInputChange}
            type='email'
            id='email1'
          />
          <FormInput
            label='Password'
            name='password'
            value={password}
            onChange={handleInputChange}
            type='password'
            id='password1'
          />
          <div className='flex space-x-4'>
            <Button type='submit'>Sign in</Button>
            <Button
              type='button'
              onClick={signInWithGoogle}
              buttontype='google'>
              Sign in with google
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
