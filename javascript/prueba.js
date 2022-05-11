
let input=[
    {nombre:"Pedro",edad:20, ciudad: "Córdoba"},
    {nombre:"Patricia",edad:22, ciudad: "Córdoba"},
    {nombre:"Jose",edad:23, ciudad: "Mendoza"},
    {nombre:"María",edad:20, ciudad: "Córdoba"},
    {nombre:"Juan",edad:20, ciudad: "Córdoba"},
    {nombre:"Ana",edad:22, ciudad: "Córdoba"},
];

let cordoba=[];
let i=0;
let twenty=[];
let twentytwo=[];

input.forEach(element => {
    if(element.ciudad=="Córdoba"){
        cordoba[i]=element;
        i++;
    }
});

i=0;
let j=0;
cordoba.forEach(element=>{
    if(element.edad==20){
        twenty[i]=element;
        i++;
    }else{
        if(element.edad==22){
            twentytwo[j]=element;
            j++;
        }
    }
});

twenty.sort(function(a,b){
    if(a.nombre>b.nombre){
        return 1;
    }
    if (a.nombre<b.nombre) {
        return -1;
    }    
});

twentytwo.sort(function(a,b){
    if(a.nombre>b.nombre){
        return 1;
    }
    if (a.nombre<b.nombre) {
        return -1;
    }    
});

twenty=twenty.concat(twentytwo);

let nombres=[];
i=0;
twenty.forEach(element => {
    
        nombres[i]=element.nombre;
        i++;
});

    console.log(nombres);