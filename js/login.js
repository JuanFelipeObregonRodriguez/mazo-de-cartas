var json =
            [{"usuario": "admin","clave": "1234"}]
localStorage.setItem('datos',JSON.stringify(json));

function validar(){
    var usuario = document.querySelector('#usuario').value;
    var clave = document.querySelector('#clave').value;
    let usuariol = localStorage.getItem("usuario");
    let clavel = localStorage.getItem("clave");

    if(usuario == usuariol && clave == clavel){
        location.href = 'index.html'
    }
}