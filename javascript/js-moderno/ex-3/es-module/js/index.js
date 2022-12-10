import { exIn } from "./inline.js"
import exInDe from "./inline.js"

import { exNIn, exNInDe } from "./non-inline.js"

//import { exIn as ExportInline } from "./inline.js" ==> caso queira renomear

// import exInDe, { exIn } from "./inline.js" ==> chamar todos juntos

console.log('Inicializando...')
exIn()
exInDe()
exNIn()
exNInDe()
console.log('Finalizado.')