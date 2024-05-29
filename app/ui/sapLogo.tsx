import { ChartBarIcon } from '@heroicons/react/24/outline';
import styles from './sapLogo.module.css';
import { BuildingOffice2Icon } from '@heroicons/react/24/outline';

const SapLogo = () => {
  return (
    <div className={styles.sapLogo}>
      <BuildingOffice2Icon className={styles.icon} />
      <p className={styles.text}>Sap</p>
    </div>
  );
};

export default SapLogo;