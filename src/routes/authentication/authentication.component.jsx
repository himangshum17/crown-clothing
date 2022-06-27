import { SignInForm, SignUpForm } from '../../components';

const Authentication = () => {
  return (
    <section className='pt-10 lg:py-20'>
      <div className='container'>
        <div className='grid max-w-5xl mx-auto lg:grid-cols-2 gap-16'>
          <SignInForm />
          <SignUpForm />
        </div>
      </div>
    </section>
  );
};
export default Authentication;
