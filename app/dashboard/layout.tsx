import NavbarServer from '../ui/dashboard/navbarServer';
import SideNav from '../ui/dashboard/sidenav';
import styles from './dashboardLayout.module.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.dashboardLayout}>
      <div className={styles.sideNavWrapper}>
        <SideNav />
      </div>
      <div className={styles.content}>
        <NavbarServer />
        {children}
      </div>
    </div>
  );
};

export default Layout;