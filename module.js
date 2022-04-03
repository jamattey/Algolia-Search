import algoliasearch from 'https://cdn.jsdelivr.net/npm/algoliasearch@4/dist/algoliasearch.esm.browser.js';

const client = algoliasearch ( 'WX6U30KWY0', 'beab434bbff7ca31f52e5024036179e');
const index = client.initIndex ('billionaires');
let typingTimer;
// this holds the JS timeout function
let doneTypingInterval = 400;
// wait this long (in ms) after user is done typing to query Algolia
var input = document.getElementById('hits');
// our search results container is defined in the html

async function query (val) {
    htmlHits.innerHTML = '';

    // reset search results container

    // query Algolia here 

    let {hits} = await index.search(val, {hitsPerPage: 10});

    // loop through the search results and inject a <p> tag into the HTML containing the billionaire info

    for var (i = 0; i < hits.length; i++) {
        let billionaire = hits[i];

        // get the current billionaire record

        htmlHits.innerHTML += `<p class="hit">${billionaire.Name}
        <span>Rank: ${billionaire.Rank} &nbsp:&nbsp;Net worth ${billionaire.Rank}&nbsp;&nbsp | &nbsp;&nbsp; Net worth ${billionaire.NetWorth}</span></p>`;
        } 

        htmlHits.style.display = "block";
    }
    
    
            
 // event called when user is typing
input.onkeyup = function (e) {
    clearTimeout(typingTimer);

    // clear the JS timeout

    let input_val = this.value;

    // get the current value from the input

    // check if there is anything in the input

    if (input_val.length > 0) {
        // if there is, query Algolia

        typingTimer = setTimeout(() => query(input_val), doneTypingInterval);
        } else {
                // if there is nothing in the input, clear the search results

                hits = [];
                htmlHits.innerHTML = '<p class ="hits-placeholder">Start typing to see the results.</p>';
            }
    }