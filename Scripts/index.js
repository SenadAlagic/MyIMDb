var input;
function SearchLanding()
{
    sessionStorage.setItem('input', document.getElementById("keywordLanding").value)
    location.href="search.html";
}
window.addEventListener('load', () => {
    console.log("Loaded and ready!");
});