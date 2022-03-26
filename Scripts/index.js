var input;
function SearchLanding()
{
    sessionStorage.setItem('input', document.getElementById("keywordLanding").value)
    location.href="index.html";
}
function OnloadSearch()
{
    document.getElementById("keyword").value=sessionStorage.getItem('input');
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
function TestTest()
{
    console.log("Test successful!");
}
function CreateDiv(element)
{
    var wrapper=document.getElementById("wrapper");
    var newDiv=document.createElement("div");
    newDiv.setAttribute("id","result");
    newDiv.setAttribute("onclick","TestTest()");

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

window.addEventListener('load', () => {
    console.log("Loaded and ready!");
});