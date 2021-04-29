'use strict';
const getMoviesAsync = async () => { //async == 프로미스를 리턴하겠다 same
    try {
        //destructuring
        const [moviesResponse, suggestionsResponse] = await Promise.all([
            fetch('https://yts.mx/api/v2/list_movies.json'),
            fetch('https://yts.mx/api/v2/movie_suggestions.json?movie_id=10')
        ]);
        //destructuring
        const [movies, suggestions] = await Promise.all(
            [moviesResponse.json(), suggestionsResponse.json()]
        );
        console.log(movies, suggestions);
    } catch (e) {
        console.log(e);
    }
    finally {
        console.log('we are done');
    }
}
getMoviesAsync();
