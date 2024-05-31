'use client';
import { UserIcon } from '@heroicons/react/24/outline';
import styles from './avatar.module.css';
import { useState } from 'react';
import { logout } from '@/app/lib/actions/auth';

const Avatar = () => {
  const [show, setShow] = useState(false);

  const handleClick = (e: React.ChangeEvent<any>) => {
    e.stopPropagation();
    setShow(!show);
  };

  const handleLogoutClick = (e: React.ChangeEvent<any>) => {
    logout();
  }

  return (
    <div className={styles.avatarWrapper}>
      <button className={styles.avatar} onClick={handleClick}>
        <UserIcon className={styles.icon} />
      </button>
      <div className={`${styles.modal}${show ? ' ' + styles.modalActive : ''}`}>
        <button className={styles.logoutBtn} onClick={handleLogoutClick}>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Avatar;