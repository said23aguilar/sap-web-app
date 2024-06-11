export type Column = {
  key: string;
  text: string;
}

export type Section = {
  text: string;
  colspan?: number;
}

// type Row = {
//   [key: string]: string | number;
// }

type TablePropTypes = {
  sections?: Array<Array<Section>>;
  columns: Array<Column>;
  rows: Array<Record<string, string | number>>;
  className?: string;
}

export default function Table({ sections, columns, rows, className }: TablePropTypes) {
  return (
    <table className={className}>
      <thead>
        {
          sections?.map((section, sectionIndex) => (
            <tr key={`section-${sectionIndex}`}>
              {
                section?.map((col, colIndex) => (
                  <th key={`${col.text}-${colIndex}`} colSpan={col.colspan}>{col.text}</th>
                ))
              }
            </tr>
          ))
        }
        <tr>
          {
            columns.map(col => (
              <th key={col.key}>{col.text}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          rows.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`}>
              {
                columns.map(({ key }, colIndex) => (
                  <td key={`${key}-${rowIndex}-${colIndex}`}>{row?.[key]}</td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}