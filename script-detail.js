$(function(){
    var id = window.location.hash.substr(1);

    $.get("https://api.themoviedb.org/3/movie/"+id+"?language=fr&api_key=58f8fe741b03b0ae4c9a2ed080e94041",function(movie){

        // affichage des infos
        $('.title').html(movie.title);
        $('.affiche').attr("src","http://image.tmdb.org/t/p/w500/"+movie.poster_path);
        $('.affiche').attr("alt",movie.title);
        $('.synopsis').html(movie.overview);
        $("<li>").text("Budget : "+movie.budget+" $").appendTo(".detailsFilm");

        // affichage des genres
        var genreGeneral=movie.genres.length;
        var genres="";

        for (i=0; i<genreGeneral; i++) {
            genres=genres+movie.genres[i].name;
            if(i!=genreGeneral-1){
                genres=genres+", ";
            }
        }
        $("<li>").text("Genres : "+genres).appendTo(".detailsFilm");

        //affichage producteurs
        var producGeneral=movie.production_companies.length;
        var producteurs="";

        for (i=0; i<producGeneral; i++) {
            producteurs=producteurs+movie.production_companies[i].name;
            if(i!=producGeneral-1){
                producteurs=producteurs+", ";
            }
        }
        $("<li>").text("Producteurs : "+producteurs).appendTo(".detailsFilm");
        $("<li>").text("Langue originale : "+movie.original_language).appendTo(".detailsFilm");
        $("<li>").text("Titre original : "+movie.original_title).appendTo(".detailsFilm");
        $("<li>").text("Date de sortie : "+movie.release_date).appendTo(".detailsFilm");
        $("<li>").text("Note : "+movie.vote_average).appendTo(".detailsFilm");

    });
});