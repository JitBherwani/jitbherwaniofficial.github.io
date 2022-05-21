const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const heart = document.getElementById('heart')
let apiQuotes =[];

function newQuote(){
  
  const quote = apiQuotes[Math.round(Math.random()*apiQuotes.length)]
    if(!quote.author){
      authorText.textContent = 'Unknown';
    }else{
      authorText.textContent = quote.author;
    }
    if(quote.text.length >25){
      quoteText.classList.add('long-quote');
    }else{
      quoteText.classList.remove('long-quote');
    }
    
    quoteText.textContent = quote.text;
    
}
async function getQuotes(){
  
  try{
    const res = await fetch("https://type.fit/api/quotes");
    apiQuotes = await res.json();
    newQuote();
  } catch(error){
    console.log(error);
  }
}

function tweet(){
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}  ~${authorText.textContent}`;
  window.open(twitterUrl,'_blank');
}

newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweet);


getQuotes();

