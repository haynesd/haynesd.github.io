// Guess Age using Fetch
async function guessAge(name) {
    const response = await fetch("https://api.agify.io/?name=" + name);
    const result = await response.json();
    $("#response-age").html("Hi " + name + ", your age should be " + result.age);
}