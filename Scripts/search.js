var input=sessionStorage.getItem('input');
var listInput=sessionStorage.getItem('listInput');
function OnloadSearch()
{
    document.getElementById("inputWord").textContent=input;
    Search();
}
function Search()
{
    var wrapper=document.getElementById("resultsContainer");
    wrapper.innerHTML="";
    var url=SearchForWhat()+input;
    console.log("Searched for "+input+" "+listInput+"\n"+url);
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
function seeDetails(elementId)
{
    sessionStorage.setItem('selectedMovieId',elementId);
    location.href="info.html";
}
function CreateDiv(element)
{
    var container=document.getElementById("resultsContainer");
    var newDiv=document.createElement("div");
    newDiv.setAttribute("id","result");
    newDiv.setAttribute("onclick","seeDetails('"+element.id+"')");

    newDiv.appendChild(CreateParagraph(element.title));
    newDiv.appendChild(CreateParagraph(element.description))

    var image=document.createElement("img")
    image.setAttribute("src",element.image);

    newDiv.appendChild(image);
    //append to body
    container.appendChild(newDiv);
}
function CreateParagraph(elementText)
{
    var paragraph=document.createElement("p");
    var text=document.createTextNode(elementText);
    paragraph.appendChild(text);
    return paragraph;
}
function SearchForWhat()
{
    var value=listInput;
    if(value=="movies")
    {
        return "https://imdb-api.com/en/API/SearchMovie/k_ecehvy84/";
    }
    else if(value=="series")
    {
        return "https://imdb-api.com/en/API/SearchSeries/k_ecehvy84/";
    }
    else if(value=="episodes")
    {
        return "https://imdb-api.com/en/API/SearchEpisode/k_ecehvy84/";
    }
}

//Umjesto <span> InputWord poslati onaj input koji je korisnik ukucao ----- urađeno