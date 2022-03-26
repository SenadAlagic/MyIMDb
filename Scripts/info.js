var movieId;
function fetchInfo()
{
    movieId=sessionStorage.getItem('selectedMovieId');
    //movie title=document title
    document.title="";
    console.log(movieId);
}
window.addEventListener('load', () => {
    console.log("Info is loaded and ready!");
    fetchInfo();
});