const ExcelJS = require('exceljs');

async function readCell(){
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile('./testdata.xlsx');
    const sheet = workbook.getWorksheet('Sheet1');
    const value = sheet.getRow(1).getCell(1).value;
    console.log("cell value ", value);
}
readCell();
