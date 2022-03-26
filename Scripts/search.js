function OnloadSearch()
{
    document.getElementById("keyword").value=sessionStorage.getItem('input');
    document.getElementById("searchList").value=sessionStorage.getItem('listInput');
    Search();
}
function Search()
{
    var wrapper=document.getElementById("wrapper");
    wrapper.innerHTML="";
    input=document.getElementById("keyword").value;
    var url=SearchForWhat()+input;
    //console.log("Searched for "+input);
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
    var wrapper=document.getElementById("wrapper");
    var newDiv=document.createElement("div");
    newDiv.setAttribute("id","result");
    newDiv.setAttribute("onclick","seeDetails('"+element.id+"')");

    newDiv.appendChild(CreateParagraph(element.title));
    newDiv.appendChild(CreateParagraph(element.description))

    var image=document.createElement("img")
    image.setAttribute("src",element.image);

    newDiv.appendChild(image);
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
function SearchForWhat()
{
    var searchList=document.getElementById("searchList");
    var value=searchList.value;
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