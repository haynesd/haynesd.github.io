$(document).ready(function() {
    function fetchJoke() {
        $.get("https://v2.jokeapi.dev/joke/Programming?type=single", function(result) {
            console.log("From jokeAPI: " + JSON.stringify(result));
            $("#response-joke").html("A programming joke of the day: " + result.joke);
        });
    }
    fetchJoke();
    setInterval(fetchJoke, 60000); // Fetch a new joke every 60 seconds
});