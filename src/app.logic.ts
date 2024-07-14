import { yarg } from './config/plugins/args.plugin';
import fs from 'fs';

let outputMessage = '';
const { b: base, l: limit, s: showTable } = yarg;
const headerMessage = `
=================================
        Tabla del ${base}
=================================\n
`;

for (let i = 1; i <= limit; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;

if (showTable) {
  console.log(outputMessage);
}

const outputPath = `outputs`;

// Crea directorio de manera recursiva
fs.mkdirSync(outputPath, { recursive: true });

// Crea el archivo en l directorio que le indicamos
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log('File created!');
