'use client';

import { useFormState, useFormStatus } from 'react-dom';
import styles from './register.module.css'
import { register } from '@/app/lib/actions/auth';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';

const Page = () => {

  const [state, dispatch] = useFormState(register, '');

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (state !== 'Se registro correctamente') {
      setErrorMessage(state);
    } else {
      redirect('/login');
    }
  }, [state]);

  return (
    <form className={styles.register} action={dispatch}>
      <h2>Registro</h2>
      <input type='text' name='name' placeholder='Nombre' required />
      <input type="text" name="user" placeholder="Usuario" required />
      <input type="password" name="password" placeholder="Contraseña" required />
      <input type="number" name="type" placeholder='Tipo' required />
      <div>{errorMessage && <p>{errorMessage}</p>}</div>
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
    <button className={styles.registerButton} type='submit' disabled={pending} onClick={handleClick}>Register</button>
  );
};

export default Page;