//script para comenzar a desplegar las mascotas
function displayCards(){
    // declaracion de variables en html
    const DIV = document.getElementById("mascotas");
    let card="";
    //recorrer el arreglo pets[]
    for(let i=0;i<pets.length;i++){           //console.log(pets[i].nombre);
        card += `
        <div class="card">
         <p>Nombre dueño: ${pets[i].nombredueno}  </p> 
         <p>Telefono dueño: ${pets[i].telefono}  </p> 
         <p>Tipo Mascota: ${pets[i].selMascota}  </p> 
         <p>Genero Mascota: ${pets[i].genero}  </p> 
         <p>Nombre Mascota: ${pets[i].nombre}  </p> 
         <p>Raza Mascota: ${pets[i].raza}  </p> 
         <p>Servicio solicitado: ${pets[i].servicio}  </p>          
        </div>
        `;
    }
   // console.log(DIV);
    // crear el template de la tarjeta (HTML)
    // inserto la tarjeta en HTML
    DIV.innerHTML=card;
}


