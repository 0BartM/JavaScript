$(document).ready(function(){ 

    $(function(){

        var api_key = "58f8fe741b03b0ae4c9a2ed080e94041";
        var id= window.location.hash.substr(1);
        console.log(id);

        // fonction recherche (faut appuyer sur entrée)
        $("#recherche").change(function(){
            var search = $(this).val();
            $.get("http://api.themoviedb.org/3/search/movie?query=" + search + "&language=fr&api_key=" +api_key, function(results){
                renderMovies(results);
            });	
        });

        // affichage de la liste
        var renderMovies = function(movies){
            $("#listeFilms").html("");

            for(var i = 0; i < movies.results.length; i++)
            {
                var movie = movies.results[i];
                $("<div>").attr("class","film"+i).appendTo("#listeFilms");
                $("<div>").attr("class","filmImage"+i).appendTo(".film"+i);
                $("<a>").attr("href","detail.html#"+movie.id).html("<img src='http://image.tmdb.org/t/p/w185/"+movie.poster_path+"' alt='poster'>").appendTo(".filmImage"+i);
                $("<div>").attr("class","detailsFilm"+i).appendTo(".film"+i);
                $("<a>").attr("href","detail.html#"+movie.id).attr("class","titreFilm").text(movie.title).appendTo(".detailsFilm"+i);
            }
        };

        $.get("http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&language=fr&api_key=" +api_key,             function(results){
            renderMovies(results);
        });



    });

});



