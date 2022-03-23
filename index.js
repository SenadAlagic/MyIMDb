var input;
function Search()
{
    input=document.getElementById("keyword").value;
    var url="https://imdb-api.com/en/API/SearchMovie/k_ecehvy84/"+input;
    console.log("Searched for "+input);
    fetch(url)
        .then(
            r => {
                if (r.status != 200) {
                    return;
                }
                r.json().then(
                    t => {
                        t.results.forEach(element => {
                            var newDiv = document.createElement("div");
                            newDiv.setAttribute("id", "result")

                            var titleParagaph=document.createElement("p");
                            var title=document.createTextNode(element.title);
                            titleParagaph.appendChild(title);
                            newDiv.appendChild(titleParagaph);

                            var descriptionParagaph=document.createElement("p");
                            var description=document.createTextNode(element.description);
                            descriptionParagaph.appendChild(description);
                            newDiv.appendChild(descriptionParagaph);

                            document.body.appendChild(newDiv);
                        });
                    });
            }
        )
    .catch(err=>{
        console.log(err);
    });
}

window.addEventListener('load', () => {
    console.log("Loaded and ready!");
});