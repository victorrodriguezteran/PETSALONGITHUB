let pets =[];// arreglo vacio
//crear constructtor
//crear constructor
function Pet(nombreD,telefonoD, tipoM, nombreP, generoP, razaP, servicioP){
    
    this.nombredueno=nombreD;
    this.telefono=telefonoD;
    this.selMascota=tipoM;
    this.nombre=nombreP;
    this.genero=generoP;
    this.raza=razaP;
    this.servicio=servicioP;
}
    //variales globales
    //obtemer ñps valores de los inputs
    let inputNombredueno=document.getElementById("txtNombredueno");
    let inputtelefono=document.getElementById("txtTelefono");
    let inputselMascota=document.getElementById("selMascota");
    let inputNombre=document.getElementById("txtNombre");
    let inputGenero=document.getElementById("txtGenero");
    let intputRaza=document.getElementById("txtRaza");
    let inputservicio=document.getElementById("selServicio");

   function validacion(pet){
  let valida=true; //todo bien
  if (pet.nombredueno==""){  //comparacion (utilzar == > <> <= !=)
     //si entro aqui no es valida la mascota
     alert("INGRESA UN NOMBRE");
     inputNombredueno.classList.add("error");
      valida=false;
    }
  //validar que el servicio no quede vacio y mandar alerta registro exitoso
return valida;
}
//objeto
//let pet1= new Pet("Victor","686443003","Macciato","Male","Boxer","baño");
//crear funcion registro
function Registro(){
    console.log("Registando mascota....")   
    //crear objeto (constructor)
    let newPet = new Pet(inputNombredueno.value,inputtelefono.value, inputselMascota.value, inputNombre.value,
        inputGenero.value,intputRaza.value,inputservicio.value);
        if (validacion(newPet)==true){
            //imprimir objeto en consola
            console.log(newPet);
            pets.push(newPet);
            displayCards();
            //limpiar
            limpiarForm();
        }
}
function limpiarForm(){
    inputNombredueno.value="";
    inputtelefono.value="";
    inputselMascota.value="";
    inputNombre.value="";
    inputGenero.value="";
    intputRaza.value="";
    inputservicio.value=""; 
    
}
function init(){
    console.log("Register");
    //objeto
    let pet1 = new Pet("Victor Rodríguez","(686)443003", "Cachorro", "Macciato","Male","Boxer","vacunas");
    let pet2 = new Pet("José Lopéz","(686)443003","Gato","Garfiel","Male","Persa","baño");
    pets.push(pet1);
    pets.push(pet2);
    displayCards();
}
window.onload=init;//ejecuta cuando termina de renderizar html