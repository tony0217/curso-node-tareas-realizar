const { resolve } = require('path');

require('colors');


// se debe retornar una promesa por el return del opt que esta dentro de un callback
const showMenu = () =>{

    return new Promise( resolve =>{

        console.clear();
        console.log('==============================='.green);
        console.log(' Seleccione Una Opcion '.green);
        console.log('===============================\n'.green);
    
    
        console.log(`${'1'.green} Crear Tarea`);
        console.log(`${'2'.green} Listar Tareas`);
        console.log(`${'3'.green} listar Tareas Completadas`);
        console.log(`${'4'.green} Listar  Tareas Pendientes`);
        console.log(`${'5'.green} Completar Tarea(s)`);
        console.log(`${'6'.green} Borrar Tarea`);
        console.log(`${'0'.green} Salir\n`);
    
    
        const readLine = require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        });
    
    
        readLine.question('seleccione una opcion: ',(opt)=>{
            readLine.close();
            resolve(opt);
        });


    })



}

const pause = () => {

    return new Promise( resolve =>{

        const readLine = require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        });
    
        readLine.question(`Presione ${'ENTER'.green}`,(opt)=>{
            readLine.close();
            resolve();
        });
    
    })

  
}



module.exports = {
    showMenu,
    pause
}