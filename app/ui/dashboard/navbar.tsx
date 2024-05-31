'use client';

import { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import Avatar from './avatar';

const Navbar = ({ token }: { token: String }) => {
  const [greetin, setGreetin] = useState('');

  useEffect(() => {
    (
      async () => {
        if (token) {
          try {
            const res = await fetch('https://login-service-production.up.railway.app/auth/perfil', {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${token}`,
              }
            });
            const user = await res.json();
            if (user?.nombre) {
              setGreetin(user.nombre);
            }
          } catch (error) {
            console.log(error);
          }
        }
      }
    )();
  }, [token]);

  return (
    <div className={styles.navbar}>
      <p className={styles.greeting}>Bienvenido {greetin}</p>
      <Avatar />
    </div>
  );
};

export default Navbar;