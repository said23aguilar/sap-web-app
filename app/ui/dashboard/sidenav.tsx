import Link from 'next/link';
import SapLogo from '../sapLogo';
import styles from './sidenav.module.css';
import { BarsArrowUpIcon, CalendarDaysIcon, EyeIcon, NewspaperIcon, UsersIcon } from '@heroicons/react/24/outline';

const SideNav = () => {
  return (
    <div className={styles.sidenav}>
      <div className={styles.logoWrapper}>
        <SapLogo />
      </div>
      <div className={styles.linksWrapper}>
        <NavLink text='Reporteria' icon={<NewspaperIcon className={styles.linkIcon} />} />
        <NavLink text='Levantamientos' icon={<BarsArrowUpIcon className={styles.linkIcon} />} />
        <NavLink text='Monitoreo' icon={<EyeIcon className={styles.linkIcon} />} />
        <NavLink text='Asignación diaria' icon={<CalendarDaysIcon className={styles.linkIcon} />} />
        <NavLink text='Administrar usuarios' icon={<UsersIcon className={styles.linkIcon} />} />
      </div>
    </div>
  );
};

const NavLink = ({ text, icon }: { text: String, icon: React.ReactNode }) => {
  return (
    <Link href='#' className={styles.link}>
      {icon}
      <p className={styles.linkText}>{text}</p>
    </Link>
  );
};

export default SideNav;