var input;
function Search()
{
    var wrapper=document.getElementById("wrapper");
    wrapper.innerHTML="";
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
                            CreateDiv(element);
                        });
                    });
            }
        )
    .catch(err=>{
        console.log(err);
    });
}
function CreateDiv(element)
{
    var wrapper=document.getElementById("wrapper");
    var newDiv=document.createElement("div");
    newDiv.setAttribute("id","result");

    //add and create a title
    // var titleParagaph = document.createElement("p");
    // var title = document.createTextNode(element.title);
    // titleParagaph.appendChild(title);
    // newDiv.appendChild(titleParagaph);
    newDiv.appendChild(CreateParagraph(element.title));

    //add and create a description
    // var descriptionParagaph = document.createElement("p");
    // var description = document.createTextNode(element.description);
    // descriptionParagaph.appendChild(description);
    // newDiv.appendChild(descriptionParagaph);
    newDiv.appendChild(CreateParagraph(element.description))

    //append to body
    wrapper.appendChild(newDiv);
}
function CreateParagraph(elementText)
{
    var paragraph=document.createElement("p");
    var text=document.createTextNode(elementText);
    paragraph.appendChild(text);
    return paragraph;
}

window.addEventListener('load', () => {
    console.log("Loaded and ready!");
});