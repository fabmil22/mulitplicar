
const fs = require('fs');
let data="";




let crearTabla = (base) => {
    return  new Promise (
        (resuel , reject)  => {

    // if (NaN(base)){
    //      reject("debe ser un nemero");
    //      return;
    //     }


    for (let index = 0; index < 10; index++) {
         data +=` ${index} x ${base}= ${index * base} \n`;
        }
    fs.writeFile(`tabladenultiplicar- ${base}.txt`, data, (err) => {
            if (err) rejec (err)
            else
            resuel(`tabladenultiplicar- ${base}.txt`);
          });
        
    })
}


module.exports = { crearTabla };