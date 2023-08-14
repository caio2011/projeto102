// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQUI

const firebaseConfig = {
    apiKey: "AIzaSyAGDVMbCHb1f0sICwe0n5BVBnTfvBMWwks",
    authDomain: "projeto100-ff37e.firebaseapp.com",
    databaseURL: "https://projeto100-ff37e-default-rtdb.firebaseio.com",
    projectId: "projeto100-ff37e",
    storageBucket: "projeto100-ff37e.appspot.com",
    messagingSenderId: "554351720314",
    appId: "1:554351720314:web:ff175985f4dd1caebb08c3"
};


// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);

    window.location = "chat-room.html";
}



