'use client';

import { login } from '@/app/lib/actions/auth';
import styles from './login.module.css';
import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useState } from 'react';
import { RedirectType, redirect } from 'next/navigation';
import Link from 'next/link';

const Page = () => {

  const [state, dispatch] = useFormState(login, '');

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (typeof state === 'string') {
      setErrorMessage(state);
    } else if (state?.token) {
      redirect('/dashboard', RedirectType.replace);
    }
  }, [state]);


  return (
    <form className={styles.login} action={dispatch}>
      <h2>Inicio de sesión</h2>
      <input className={styles.input} type="text" name="user" placeholder="Usuario" required />
      <input className={styles.input} type="password" name="password" placeholder="Contraseña" required />
      <div>{errorMessage && <p className={styles.error}>{errorMessage}</p>}</div>
      <LoginButton />
      <div className={styles.links}>
        <Link href='/register'>
          <p>Crear cuenta</p>
        </Link>
      </div>
    </form>
  );
};

const LoginButton = () => {
  const { pending } = useFormStatus();

  const handleClick = (e: React.ChangeEvent<any>) => {
    if (pending) {
      e.preventDefault();
    }
  };

  return (
    <button className={styles.loginButton} type='submit' disabled={pending} onClick={handleClick}>{
      pending ?
        'Login...'
        : 'Login'
    }</button>
  );
};

export default Page;