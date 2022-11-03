// Donald listener
const btnDonny = document.querySelector("#js-new-quote-donny");
btnDonny.addEventListener("click", () => {getQuote("https://api.whatdoestrumpthink.com/api/v1/quotes/random", "donny")});

//Cat Listener
const btnCat = document.querySelector("#js-new-quote-cat");
btnCat.addEventListener("click", () => {getQuote("https://catfact.ninja/fact", "cat")});

//Joke Listener
const btnJoke = document.querySelector("#js-new-quote-joke");
btnJoke.addEventListener("click", () => {getQuote("https://official-joke-api.appspot.com/random_joke", "joke")})

//Activity Listener
const btnActivity = document.querySelector("#js-new-quote-activity");
btnActivity.addEventListener("click", () => {getQuote("https://www.boredapi.com/api/activity", "activity")});

function getQuote(str, quoteType) 
{
    let endpt = str;
    fetch(endpt)
        .then((response) => {
            if (!response.ok)
            {
                alert("Failed to generate quote.");
                throw new Error("Failed to generate quote.");
            }
            return response.json();
        })
        .then((quote) => {
            displayQuote(quote, quoteType);
        })
        .catch((error) => {
            console.error("An error occured: ", error);
        })
}

function displayQuote(quote, quoteType) {
    const txt = document.querySelector("#js-quote-text");
    if (quoteType == "donny")
    {
        txt.textContent = quote.message;
    }
    else if (quoteType == "cat")
    {
        txt.textContent = quote.fact;
    }
    else if (quoteType == "joke")
    {
        txt.textContent = quote.setup + " " + quote.punchline;
    }
    else if (quoteType == "activity")
    {
        txt.textContent = quote.activity;
    }
}

getQuote("https://api.whatdoestrumpthink.com/api/v1/quotes/random", "donny");