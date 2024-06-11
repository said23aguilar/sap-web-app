import { formatPredios } from '@/app/lib/actions/predio';
import Table from '../../table';
import stylesTS1 from '@/app/ui/styles/tableStyle1.module.css';

export default function PrediosTable({ predios }: { predios: Array<Record<string, any>> }) {

  const data = formatPredios(predios);

  return (
    <Table
      className={stylesTS1.tableStyle1}
      columns={data.columns}
      rows={data.rows}
    />
  );
}