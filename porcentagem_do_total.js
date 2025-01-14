/*

porcentagem do total 	- Alan Teixeira de Matos - alanteixeiradematos@gmail.com
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53
*/

const sp = 67836.43
const rj = 36678.66
const mg = 29229.88
const es = 27165.48
const outros = 19849.53

const total = sp + rj + mg + es + outros

const porcentagemSP = (sp / total) * 100
const porcentagemRJ = (rj / total) * 100
const porcentagemMG = (mg / total) * 100
const porcentagemES = (es / total) * 100
const porcentagemOutros =  (outros / total) * 100

console.log(`Porcentagem de SP: ${porcentagemSP.toFixed(2)}%`)
console.log(`Porcentagem de RJ: ${porcentagemRJ.toFixed(2)}%`)
console.log(`Porcentagem de MG: ${porcentagemMG.toFixed(2)}%`)
console.log(`Porcentagem de ES: ${porcentagemES.toFixed(2)}%`)
console.log(`Porcentagem de Outros: ${porcentagemOutros.toFixed(2)}%`)
