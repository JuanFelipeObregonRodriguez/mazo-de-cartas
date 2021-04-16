const xhttp = new XMLHttpRequest();

xhttp.open('GET', '../data.json', true);

xhttp.send();

xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        let datos = JSON.parse(this.responseText);
        let res = document.querySelector('#res');
        res.innerHTML = '';

        for(let item of datos){
            //console.log(item);
            res.innerHTML += `
                <tr>
                    <td>${item.numero}</td>
                    <td>${item.carta}</td>
                    <td>${item.datos}</td>
                </tr>
            `
        }

        localStorage.setItem('datos', JSON.stringify(datos));
    }
}

    var json =
    [{
        "numero": "1",
        "carta": "As",
         "datos": "0"},
    
        {
        "numero": "2",
        "carta": "2 de diamantes",
         "datos": "0"
        },
    
        {
        "numero": "3",
        "carta": "3 de corazones",
         "datos": "0"
        },
    
        {
        "numero": "4",
        "carta": "4 de corazones",
        "datos": "0"
         },
    
        {
        "numero": "5",
        "carta": "5 de corazones", 
        "datos": "0"
        }]
            
    localStorage.setItem('datos',JSON.stringify(json));


function agregarCarta(){
    var numero = document.querySelector('#numero').value;
    var carta = document.querySelector('#carta').value;
    var cant = localStorage.getItem('datos');

    cant = JSON.parse(cant);

    var info = {numero: numero, carta: carta, cantidad: '0'};

    cant.push(info);

    localStorage.setItem('datos', JSON.stringify(info));
}

function agregarAtabla(){
    var cant = localStorage.getItem('datos');

    let res = document.querySelector('#res');
        res.innerHTML='';

    cant = JSON.parse(cant);

    for(let item of cant){
        res.innerHTML += `
        <tr>
            <td>${item.numero}</td>
            <td>${item.carta}</td>
            <td>${item.datos}</td>
        </tr>
    `
    }
}

document.getElementById("boton").onclick = agregarCarta;