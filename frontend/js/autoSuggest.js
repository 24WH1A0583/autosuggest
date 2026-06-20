
//https://autosuggest-backend.onrender.com/api/autosuggest?q=a&weighted=true&algorithm=trie&limit=8(total url)

var apiUrl="https://autosuggest-backend.onrender.com/api/autosuggest?q=";//main common api 
var searchBar = document.getElementById("search-input");// searched text by user
var suggestions = document.getElementById("suggestions");// suggestions box to show the suggestions
searchBar.addEventListener("input", function() {// adding an event listener to the search bar to listen for input events
    fetch(apiUrl+searchBar.value.trim()+"&weighted=true&algorithm=trie&limit=8")//fetching the data from the api with the searched text and other parameters
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        //var suggestions = document.getElementById("suggestions"); 
        if(data.count==0){
            suggestions.innerHTML = "<div class='suggestion'>No suggestions found</div>"; // Show a message when no suggestions are found
            return;
        }  
        suggestions.innerHTML = ""; // Clear previous suggestions
        for(var i=0;i<data.results.length;i++){
            var suggestion = document.createElement("div");
            suggestion.className = "suggestion";
            suggestion.innerText = data.results[i].text;
            suggestions.appendChild(suggestion);
        }      
        

})
.catch(function(err){
    console.log("Error: "+err);
});
});
