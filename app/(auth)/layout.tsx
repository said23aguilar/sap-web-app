import styles from './layout.module.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.authLayout}>
      <div className={styles.authLayoutContent}>
        {children}
      </div>
    </div>
  );
};

export default Layout;