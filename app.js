
const { crearTabla } = require('./multiplicar');
var colors = require('colors');
const argv = require('yargs')
        .command('listar',
                'Imprime la tabla de multiplicacion', {
                    base :  {
                        demand: true,
                        alias : 'b'
                    }
                }
          ).help().argv;

console.log(argv);
//console.log(process.argv);
let base = process.argv[2];
let parametro = argv.base;

console.log(colors.green('base: ', argv.base));
console.log(colors.red('base: ', argv.base)); 
crearTabla (parametro).then(
   response => console.log(`la base es ${response}`)
 ).catch(erro => console.log(erro))


