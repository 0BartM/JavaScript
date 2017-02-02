$(document).ready(function(){ 

    $(function(){

        var api_key = "58f8fe741b03b0ae4c9a2ed080e94041";
        var id= window.location.hash.substr(1);
        console.log(id);

        // FONCTION QUI AFFICHE LE LISTING
        var renderMovies = function(movies){
            $("#listing").html("");

            for(var i = 0; i < movies.results.length; i++)
            {
                var movie = movies.results[i];
                $("<div>").attr("class","movie movie"+i).appendTo("#listing");
                $("<div>").attr("class","movie-image movie-image"+i).appendTo(".movie"+i);
                $("<a>").attr("href","detail.html#"+movie.id).html("<img src='http://image.tmdb.org/t/p/w185/"+movie.poster_path+"' alt='poster'>").appendTo(".movie-image"+i);
                $("<div>").attr("class","movie-info movie-info"+i).appendTo(".movie"+i);
                $("<a>").attr("href","detail.html#"+movie.id).attr("class","movie-title").text(movie.title).appendTo(".movie-info"+i);
            }
        };

        // FILMS AFFICHE AU CHARGEMENT
        $.get("http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&language=fr&api_key=" +api_key,             function(results){
            renderMovies(results);
        });

        // BOUTON RECHERCHER
        $("#search").change(function(){
            var search = $(this).val();
            $.get("http://api.themoviedb.org/3/search/movie?query=" + search + "&language=fr&api_key=" +api_key, function(results){
                renderMovies(results);
            });	
        });

    });

});



