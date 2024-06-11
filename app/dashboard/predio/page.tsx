import { getPredios } from '@/app/lib/actions/predio';
import styles from './predio.module.css';
import Table from '@/app/ui/table';
import PrediosTable from '@/app/ui/dashboard/predio/prediosTable';

export default async function Page() {

  const predios = await getPredios();

  return (
    <div className={styles.predio}>
      <p>Predio</p>
      <PrediosTable predios={predios} />
    </div>
  );
}