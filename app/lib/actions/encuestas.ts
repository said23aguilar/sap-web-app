import { Column } from "@/app/ui/table";

export async function getEncuestados() {
  try {
    const res = await fetch('https://encuestas-service-production.up.railway.app/encuestados/list');
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

export function formatEncuestados(encuestados: Array<Record<string, any>>) {
  const sections = [
    [
      {
        text: 'Predio',
        colspan: 9,
      },
      {
        text: 'Toma de agua',
        colspan: 3,
      },
      {
        text: 'Medidor',
        colspan: 6,
      },
      {
        text: 'Drenaje',
        colspan: 6,
      },
      {
        text: 'Cisterna',
        colspan: 3,
      },
      {
        text: 'Tinaco',
        colspan: 3,
      },
      {
        text: 'Servicios y uso',
        colspan: 5,
      },
      {
        text: 'Información adicional',
        colspan: 3,
      },
    ],
  ];
  const columns: Array<Column> = [
    // Predio
    {
      key: 'clave',
      text: 'Clave',
    },
    {
      key: 'id_predio',
      text: 'ID predio',
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
      key: 'email',
      text: 'Email',
    },
    {
      key: 'telefono',
      text: 'Telefono',
    },
    {
      key: 'ref_ubicacion',
      text: 'Ref ubicación',
    },
    // Toma de agua
    {
      key: 'toma_agua',
      text: 'Toma de agua',
    },
    {
      key: 'numero_tomas',
      text: '# de tomas',
    },
    {
      key: 'ubicacion_toma',
      text: 'Ubicación',
    },
    // Medidor
    {
      key: 'medidor',
      text: 'Medidor',
    },
    {
      key: 'nom_medidor',
      text: 'Nom',
    },
    {
      key: 'ubicacion_medidor',
      text: 'Ubicación',
    },
    {
      key: 'estado_medidor',
      text: 'Estado',
    },
    {
      key: 'referencia_ubicacion_medidor',
      text: 'Ref ubicación',
    },
    {
      key: 'estado_toma',
      text: 'Estado toma',
    },
    // Drenaje
    {
      key: 'drenaje',
      text: 'Drenaje',
    },
    {
      key: 'num_descargas',
      text: '# de descargas',
    },
    {
      key: 'fosa_septica',
      text: 'Fosa septica',
    },
    {
      key: 'registro',
      text: 'Registro',
    },
    {
      key: 'ubicacion_registro',
      text: 'Ubicación',
    },
    {
      key: 'no_personas',
      text: '# de personas',
    },
    // Cisterna
    {
      key: 'cisterna',
      text: 'Cisterna',
    },
    {
      key: 'capacidad_cisterna',
      text: 'Capacidad',
    },
    {
      key: 'uso_cisterna',
      text: 'Uso',
    },
    // Tinaco
    {
      key: 'tinaco',
      text: 'Tinaco',
    },
    {
      key: 'capacidad_tinaco',
      text: 'Capacidad',
    },
    {
      key: 'uso_tinaco',
      text: 'Uso',
    },
    // Servicios y uso
    {
      key: 'servicio_domestico',
      text: 'Domestico',
    },
    {
      key: 'servicio_comercial',
      text: 'Comercial',
    },
    {
      key: 'servicio_industrial',
      text: 'Industrial',
    },
    {
      key: 'giro',
      text: 'Giro',
    },
    {
      key: 'estado_vivienda',
      text: 'Estado vivienda',
    },
    // Informacion adicional
    {
      key: 'comentario_generales',
      text: 'Comentarios generales',
    },
    {
      key: 'quien_proporciona_informacion',
      text: 'Quien proporciona la información',
    },
    {
      key: 'encuestadores',
      text: 'Encuestadores',
    },
  ];

  return {
    sections,
    columns,
    rows: encuestados,
  };
}