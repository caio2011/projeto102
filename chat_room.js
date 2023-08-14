function addRoom()
{
   room_name = document.getElementById("room_name").value;

   firebase.database().ref("/").child(room_name).update({
      purpose : "adicionando nome da sala"
   });

   localStorage.setItem("room_name", room_name);

   window.location = "kwitter_page.html";
}

function getData ()
{
   firebase.database().ref("/").on('value', function(snapshot)
   {document.getElementById("output").innerHTML = 
   "";snapshot.forEach(function(childSnapshot) {childKey = 
   childSnapshot.key;
                     Room_names = childKey;
                    //Comece a programar aqui

                    function redirectToRoomName(name)
                     {
                        console.log(name);
                        localStorage.setItem("room_name", name);
                        window.location = "kwitter_page.html";
                     }
                    
                    //Termine de programar aqui
   });
   });
}