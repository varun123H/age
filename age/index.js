var rootRef = firebase.database().ref().child("user");
rootRef.on("child_added", snap => {

 

    var name = snap.child("userName").val();
 
    $("#par").append("<li>" + name + "</li>")
});