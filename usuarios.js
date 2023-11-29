function obtenerListaUsuarios() {
    var listaUsuarios=JSON.parse(localStorage.getItem('listaUsuariosLs'))
    if(listaUsuarios==null)  {
        listaUsuarios=
        [
        ['1','Cielo','Candia','cielo.candia123@gmail.com','panetonsanluis','2002-01-07','1'],
        ['2','Juanita','Perez','juanisperes@gmail.com','juanissexi','2003-05-11','2']
        ]
    }
    return listaUsuarios;
}
function validarCredenciales (pCorreo,pContrasenna) {
    var listaUsuarios=obtenerListaUsuarios();
    var bAcceso=false
    for (var i=0; i<listaUsuarios.length;i++){
        if(pCorreo==listaUsuarios[i][3]&&pContrasenna==listaUsuarios[i][4]){
            bAcceso=true
            sessionStorage.setItem('usuarioActivo',listaUsuarios[i][1]+' '+listaUsuarios[i][2])
            sessionStorage.setItem('rolUsuarioActivo',listaUsuarios[i][6])
        }
    }
    return bAcceso
}