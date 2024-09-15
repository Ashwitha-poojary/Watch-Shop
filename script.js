// javascript is required to create api call
// post ->create api-> send watch data to db

document.getElementById("watch-form").addEventListener("submit",function(event){
event.preventDefault();

    const formdata = new FormData(this);
     fetch("http://127.0.0.1:8000/api/watches/create/",{
        method:"POST",
        body:formdata,
     })
    //  converting the reponse into json
     .then((response) => response.json())
     .then((data) => {
        alert("Watch add successfully")
        displayWatches();
     })
     .catch((error) =>console.error("Error",error));


});

// get-> get all the list of watches from db
const baseUrl="http://127.0.0.1:8000/"
function displayWatches(){
    fetch("http://127.0.0.1:8000/api/watches/")
    .then((response) => response.json())
    .then((data) => {
        const container= document.getElementById("watches-container");
        container.innerHTML="";
       data.forEach((watch) => {

        const imageUrl= baseUrl+watch.image

        const watchCard= `<div class="watch-list" id="watch-list">
  <div class="watch">
    <img src="${imageUrl}" width="50px" height="50px" alt="" />
    <p class="watch-name">Watch Name:${watch.name}</p>
    <p class="watch-model">Watch Model:${watch.brand}</p>
    <p class="watch-price">Watch Price:${watch.price}</p>
  </div>
 </div>`;
container.innerHTML+=watchCard
        
    
    });
});
}
document.addEventListener("DOMContentLoaded",displayWatches);