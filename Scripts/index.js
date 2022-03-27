var input;
function SearchLanding()
{
    sessionStorage.setItem('input', document.getElementById("insertText").value)
    sessionStorage.setItem('listInput', document.getElementById("searchList").value)
    location.href="search.html";
}
window.addEventListener('load', () => {
    console.log("Loaded and ready!");
});