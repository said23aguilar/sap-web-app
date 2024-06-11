import { Column } from "@/app/ui/table";

export async function getPredios() {
  try {
    const res = await fetch('https://encuestas-service-production.up.railway.app/predio/list');
    if (res.status === 200) {
      const data = await res.json();
      if (data?.response?.length) {
        return data.response;
      }
      return [];
    }
    return [];
  } catch (error) {
    console.log(error);
    return 'Error';
  }
}

export function formatPredios(predios: Array<Record<string, any>>) {
  const columns: Array<Column> = [
    {
      key: 'id_predio',
      text: 'ID',
    },
    {
      key: 'predio',
      text: 'Predio',
    },
    {
      key: 'propietario',
      text: 'Propietario',
    },
    {
      key: 'domicilio',
      text: 'Domicilio',
    },
    {
      key: 'colonia',
      text: 'Colonia',
    },
    {
      key: 'ref_ubicacion',
      text: 'Ref ubicación',
    },
    {
      key: 'email',
      text: 'Email',
    },
    {
      key: 'telefono',
      text: 'Telefono',
    },
  ];
  return {
    columns,
    rows: predios,
  };
}