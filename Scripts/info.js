//full cast
//https://imdb-api.com/en/API/FullCast/k_ecehvy84/ + id
//posters
//https://imdb-api.com/en/API/Posters/k_ecehvy84/ + id
//ratings
//https://imdb-api.com/en/API/Ratings/k_ecehvy84/+ id
//images
//https://imdb-api.com/en/API/Images/k_ecehvy84/(id)/Short



// var wrapper=document.getElementById("wrapper");
// var newDiv=document.createElement("div");
// newDiv.setAttribute("id","result");
// newDiv.setAttribute("onclick","seeDetails('"+element.id+"')");

// newDiv.appendChild(CreateParagraph(element.title));
// newDiv.appendChild(CreateParagraph(element.description))

// var image=document.createElement("img")
// image.setAttribute("src",element.image);

// newDiv.appendChild(image);
// //append to body
// wrapper.appendChild(newDiv);


var movieId;
function fetchInfo()
{
    movieId=sessionStorage.getItem('selectedMovieId');
    console.log(movieId);
}
function Search()
{
    var fullCastUrl="https://imdb-api.com/en/API/FullCast/k_ecehvy84/"+movieId;
    var postersUrl="https://imdb-api.com/en/API/Posters/k_ecehvy84/"+movieId;
    var ratingsUrl="https://imdb-api.com/en/API/Ratings/k_ecehvy84/"+movieId;
    var imaggesUrl="https://imdb-api.com/en/API/Images/k_ecehvy84/"+movieId+"/Short";

    fetch(fullCastUrl)
        .then(
            r => {
                if (r.status != 200) {
                    return;
                }
                r.json().then(t => 
                    {
                        t.directors.items.forEach(elements=>
                        {
                            console.log(elements.name);
                        });
                        t.writers.items.forEach(elements=>
                        {
                            console.log(elements.name);
                        });
                        t.actors.forEach(elements=>
                        {
                            console.log(elements.name+" as "+ elements.asCharacter);
                        });
                        t.others.forEach(elements=>
                        {
                            console.log(elements.job);
                        });
                });
            })
        .catch(err => {
            console.log(err);
        });
}
function elementCreation(array)
{
    var div=document.getElementById("general")
    array.forEach(element=>{
        var paragraph=document.createElement("p");
        var text=document.createTextNode(element.name+"\n");
        paragraph.appendChild(text);
    });
}
window.addEventListener('load', () => {
    console.log("Info is loaded and ready!");
    fetchInfo();
    Search();
});