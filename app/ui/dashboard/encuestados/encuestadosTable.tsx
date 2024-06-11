import styles from './encuestadosTable.module.css';
import stylesTS1 from '@/app/ui/styles/tableStyle1.module.css';
import { formatEncuestados } from "@/app/lib/actions/encuestas";
import Table from "../../table";

export default function EncuestadosTable({ encuestados }: { encuestados: Array<Record<string, any>> }) {

  const data = formatEncuestados(encuestados);

  return (
    <div className={styles.encuestadosTableWrapper}>
      <Table
        className={`${stylesTS1.tableStyle1} ${styles.encuestadosTable}`}
        sections={data.sections}
        columns={data.columns}
        rows={data.rows}
      />
    </div>
  );
}