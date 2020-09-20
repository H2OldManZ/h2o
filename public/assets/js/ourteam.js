var team = ["bekah","courtney","luk","dave","eric","metz","zimmerman","hope","kelsey","cody","sam"];



function showportrait(name){
  var modal = document.getElementById(name);
  modal.style.display = "block";

  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];


  // When the user clicks on <span> (x), close the modal
  function hideportrait(name) {
      var modal = document.getElementById(name);
      modal.style.display = "none";
    };


  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    team.forEach(function(item,index){
      var modal = document.getElementById(item);
      if (event.target == modal) {
        
        modal.style.display = "none";
      }

    });

  }
