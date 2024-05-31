'use client';

import { useFormState, useFormStatus } from 'react-dom';
import styles from '../auth.module.css'
import { register } from '@/app/lib/actions/auth';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { montserratAlternates } from '@/app/ui/fonts';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const Page = () => {

  const [state, dispatch] = useFormState(register, '');

  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (state !== 'Se registro correctamente') {
      setErrorMessage(state);
    } else {
      redirect('/login');
    }
  }, [state]);

  const handleShowPasswordClick = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <form className={styles.authForm} action={dispatch}>
      <p className={`${montserratAlternates.className} ${styles.title}`}>Registro</p>
      <label className={styles.label}>
        Nombre
        <input type='text' name='name' required />
      </label>
      <label className={styles.label}>
        Usuario
        <input type="text" name="user" required />
      </label>
      {/* TODO: Agregar verificar contraseña */}
      <label className={styles.label}>
        Contraseña
        <input type={showPassword ? 'text' : 'password'} name="password" required />
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
      <label className={styles.label}>
        Tipo
        <input type="number" name="type" required />
      </label>
      <div>{errorMessage && <p className={styles.error}>{errorMessage}</p>}</div>
      <RegisterButton />
      <div className={styles.links}>
        <Link href='/login'>
          <p>Iniciar sesión</p>
        </Link>
      </div>
    </form>
  );
};

const RegisterButton = () => {
  const { pending } = useFormStatus();

  const handleClick = (e: React.ChangeEvent<any>) => {
    if (pending) {
      e.preventDefault();
    }
  };

  return (
    <button className={styles.authButton} type='submit' disabled={pending} onClick={handleClick}>{
      pending ?
        'Registrando...'
        : 'Registrar'
    }</button>
  );
};

export default Page;