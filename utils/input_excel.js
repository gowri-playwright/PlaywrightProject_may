const ExcelJS = require('exceljs');

async function readCell(){
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile('./testdata.xlsx');
    const sheet = workbook.getWorksheet('testDetails');
    
    const data = {

       location: sheet.getRow(2).getCell(1).value,     
   hotels: sheet.getRow(2).getCell(2).value,   

     roomType:  sheet.getRow(2).getCell(3).value,

     rooms: sheet.getRow(2).getCell(4).value,

     checkIn:  sheet.getRow(2).getCell(5).value,    

     checkOut:  sheet.getRow(2).getCell(6).value,

     adults:  sheet.getRow(2).getCell(7).value,
     child: sheet.getRow(2).getCell(8).value,

    }
   return data;

     }


module.exports = {readCell};

