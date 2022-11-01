const btn = document.querySelector("#js-new-quote");

btn.addEventListener("click", getQuote);

function getQuote() 
{
    const endpt = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";
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
            displayQuote(quote);
        })
        .catch((error) => {
            console.error("An error occured: ", error);
        })
}

function displayQuote(quote) {
    const txt = document.querySelector("#js-quote-text");
    txt.textContent = quote.message;
}

getQuote();