import styles from './encuestados.module.css';
import { getEncuestados } from "@/app/lib/actions/encuestas";
import EncuestadosTable from "@/app/ui/dashboard/encuestados/encuestadosTable";

export default async function Page() {

  const encuestados = await getEncuestados();

  return (
    <div className={styles.encuestados}>
      <p>Encuestados</p>
      <EncuestadosTable encuestados={encuestados} />
    </div>
  );
}