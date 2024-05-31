'use client';

import { login } from '@/app/lib/actions/auth';
import styles from '../auth.module.css';
import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useState } from 'react';
import { RedirectType, redirect } from 'next/navigation';
import Link from 'next/link';
import { montserratAlternates } from '@/app/ui/fonts';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const Page = () => {

  const [state, dispatch] = useFormState(login, '');

  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (typeof state === 'string') {
      setErrorMessage(state);
    } else if (state?.token) {
      redirect('/dashboard', RedirectType.replace);
    }
  }, [state]);

  const handleShowPasswordClick = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <form className={styles.authForm} action={dispatch}>
      <p className={`${montserratAlternates.className} ${styles.title}`}>Inicio de sesión</p>
      <label className={styles.label}>
        Usuario
        <input className={styles.input} type="text" name="user" placeholder="MiUsuario" required></input>
      </label>
      <label className={styles.label}>
        Contraseña
        <input className={styles.input} type="password" name="password" placeholder="********" required />
        <button
          className={styles.passwordIconBtn}
          onClick={handleShowPasswordClick}
        >
          {
            showPassword ?
              <EyeIcon className={styles.passwordIcon} />
              : <EyeSlashIcon className={styles.passwordIcon} />
          }
        </button>
      </label>
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
    <button className={styles.authButton} type='submit' disabled={pending} onClick={handleClick}>{
      pending ?
        'Login...'
        : 'Login'
    }</button>
  );
};

export default Page;