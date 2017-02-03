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
            $("#listeFilmsIndex").html("");

            for(var i = 0; i < movies.results.length; i++)
            {
               var movie = movies.results[i];
                $("<div>").attr("class","filmIndex filmIndex"+i).appendTo("#listeFilmsIndex");
                $("<div>").attr("class","filmImageIndex filmImageIndex"+i).appendTo(".filmIndex"+i);
                $("<a>").attr("href","detail.html#"+movie.id).html("<img src='http://image.tmdb.org/t/p/w185/"+movie.poster_path+"' alt='poster'>").appendTo(".filmImageIndex"+i);
                $("<div>").attr("class","detailsFilmIndex detailsFilmIndex"+i).appendTo(".filmIndex"+i);
                $("<a>").attr("href","detail.html#"+movie.id).attr("class","titreFilmIndex").text(movie.title).appendTo(".detailsFilmIndex"+i);
                $("<p>").text(movie.overview).attr("class","synopsisIndex").appendTo(".detailsFilmIndex"+i);
            }
        };

        $.get("http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&language=fr&api_key=" +api_key,             function(results){
            renderMovies(results);
        });



    });

});



