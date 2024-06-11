'use client';
import Link from 'next/link';
import SapLogo from '../sapLogo';
import styles from './sidenav.module.css';
import { HomeModernIcon, NewspaperIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

const SideNav = () => {
  return (
    <div className={styles.sidenav}>
      <div className={styles.logoWrapper}>
        <SapLogo />
      </div>
      <div className={styles.linksWrapper}>
        {/* <NavLink href='#' text='Reporteria' icon={<NewspaperIcon className={styles.linkIcon} />} />
        <NavLink href='#' text='Levantamientos' icon={<BarsArrowUpIcon className={styles.linkIcon} />} />
        <NavLink href='#' text='Monitoreo' icon={<EyeIcon className={styles.linkIcon} />} />
        <NavLink href='#' text='Asignación diaria' icon={<CalendarDaysIcon className={styles.linkIcon} />} />
        <NavLink href='#' text='Administrar usuarios' icon={<UsersIcon className={styles.linkIcon} />} /> */}
        <NavLink href='/dashboard/predio' text='Predio' icon={<HomeModernIcon className={styles.linkIcon} />} />
        <NavLink href='/dashboard/encuestados' text='Encuestados' icon={<NewspaperIcon className={styles.linkIcon} />} />
      </div>
    </div>
  );
};

const NavLink = ({ href, text, icon }: { href: string, text: string, icon: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${styles.link}${pathname === href ? ' ' + styles.linkActive : ''}`}>
      {icon}
      <p className={styles.linkText}>{text}</p>
    </Link>
  );
};

export default SideNav;