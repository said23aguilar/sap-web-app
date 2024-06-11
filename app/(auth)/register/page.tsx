'use client';

import { useFormState, useFormStatus } from 'react-dom';
import styles from '../auth.module.css'
import { register } from '@/app/lib/actions/auth';
import React, { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { montserratAlternates } from '@/app/ui/fonts';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import SelectAvatar from '@/app/ui/auth/selectAvatar';

const Page = () => {

  const [state, dispatch] = useFormState(register, '');

  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (state !== 'Se registro correctamente') {
      setErrorMessage(state);
    } else {
      redirect('/login');
    }
  }, [state]);

  return (
    <form className={styles.authForm} action={dispatch}>
      <p className={`${montserratAlternates.className} ${styles.title}`}>Registro</p>
      <label className={styles.label}>
        Nombre(s)
        <input className={styles.input} type='text' name='firstName' required />
      </label>
      <label className={styles.label}>
        Apellidos
        <input className={styles.input} type='text' name='lastName' required />
      </label>
      <SelectAvatar />
      <label className={styles.label}>
        Usuario
        <input className={styles.input} type="text" name="user" required />
      </label>
      {/* TODO: Agregar verificar contraseña */}
      <label className={styles.label}>
        Contraseña
        <input
          className={styles.input}
          type={showPassword ? 'text' : 'password'}
          name="password"
          required
        />
        <ShowPasswordButton onChange={(value: boolean) => setShowPassword(value)} />
      </label>
      <label className={styles.label}>
        Confirmar contraseña
        <input
          className={styles.input}
          type={showConfirmPassword ? 'text' : 'password'}
          name="confirmPassword"
          required
        />
        <ShowPasswordButton onChange={(value: boolean) => setShowConfirmPassword(value)} />
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

function ShowPasswordButton({ onChange = () => { } }: { onChange: Function }) {

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPasswordClick = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
    onChange(!showPassword);
  };

  return (
    <button
      className={styles.passwordIconBtn}
      onClick={handleShowPasswordClick}
      tabIndex={-1}
    >
      {
        showPassword ?
          <EyeIcon className={styles.passwordIcon} />
          : <EyeSlashIcon className={styles.passwordIcon} />
      }
    </button>
  );
}

export default Page;