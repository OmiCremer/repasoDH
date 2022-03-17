const semáforo ='Rojo';

switch(semáforo){
    case 'Verde':
        console.log('Puedo cruzar');
        break;
    case 'Amarillo':
            console.log('Precaución');
            break;  
    case 'Rojo':
        console.log('No cruces, hay que esperar');
        break;  
    default:
        console.log('No funciona el semáforo');
};



console.log(semáforo);