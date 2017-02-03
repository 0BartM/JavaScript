$(function(){
    var id = window.location.hash.substr(1);

    $.get("https://api.themoviedb.org/3/movie/"+id+"?language=fr&api_key=58f8fe741b03b0ae4c9a2ed080e94041",function(movie){

        // affichage des infos
        $('.title').html(movie.title);
        $('.affiche').attr("src","http://image.tmdb.org/t/p/w500/"+movie.poster_path);
        $('.affiche').attr("alt",movie.title);
        $('.synopsis').html(movie.overview);
        

        // affichage des genres
        var genreGeneral=movie.genres.length;
        var genres="";

        for (i=0; i<genreGeneral; i++) {
            genres=genres+movie.genres[i].name;
            if(i!=genreGeneral-1){
                genres=genres+", ";
            }
        }
        

        //affichage producteurs
        var producGeneral=movie.production_companies.length;
        var producteurs="";

        for (i=0; i<producGeneral; i++) {
            producteurs=producteurs+movie.production_companies[i].name;
            if(i!=producGeneral-1){
                producteurs=producteurs+", ";
            }
        }
        $("<li>").text("Genres : "+genres).appendTo(".infos");
        $("<li>").text("Budget : "+movie.budget+" $").appendTo(".infos");
        $("<li>").text("Producteurs : "+producteurs).appendTo(".infos");
        $("<li>").text("Langue originale : "+movie.original_language).appendTo(".infos");
        $("<li>").text("Titre original : "+movie.original_title).appendTo(".infos");
        $("<li>").text("Date de sortie : "+movie.release_date).appendTo(".infos");
        $("<li>").text("Note : "+movie.vote_average).appendTo(".infos");

    });
});                                                                                                                                                                                                                                                                                                                                                                                                 