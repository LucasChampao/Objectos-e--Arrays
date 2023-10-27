const carros = [
    {
        marca: 'BMW',
        modelo: '325iA',
        ano: '2006',
        nome: 'BMW X1'
    },
    {
        marca: 'BMW',
        modelo: '852iA',
        ano: '1996',
        nome: 'séries 3'
    },
    {
        marca: 'Fiat',
        modelo: 'uno 1.0',
        ano: '2006',
        nome: 'Uno sport'
    },
    {
        marca: 'Toyota',
        modelo: 'etios',
        ano: '2010',
        nome: 'Toyota etios'
    },
    {
        marca: 'honda',
        modelo: 'sport',
        ano: '2020',
        nome: 'civic'
    },
    {
        marca: 'honda',
        modelo: 'hr-v',
        ano: '2023',
        nome: 'new hr-v'
    },
];



function btn1(){
    const bmw = carros.filter((carros) => carros.marca == 'BMW');
    console.log(bmw);
   
}
function btn2(){
    const fiat = carros.filter((carros)=> carros.marca == 'Fiat');
    console.log(fiat);
}
function btn3(){
    const Toyota = carros.filter((carros)=> carros.marca == 'Toyota');
    console.log(Toyota);
}
function btn4(){
    let honda = carros.filter((element) => element.marca == 'honda')
    console.log(honda)

}