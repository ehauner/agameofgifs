/**
* Searches giphy for the search term and returns all of the URLs as the data
* in a promise.
**/
function searchGiphy(searchTerm) {
  return new Promise(function (resolve, reject) {
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    const url = `http://api.giphy.com/v1/gifs/search?q=${encodedSearchTerm}
                &limit=50&rating=pg-13&api_key=dc6zaTOxFJmzC`;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === XMLHttpRequest.DONE) {
        if (xmlhttp.status === 200) {
          const imageUrls = extractUrls(xmlhttp.responseText);
          resolve(imageUrls);
        }
        else {
          reject(`Request failed with response code ${xmlhttp.status}.`);
        }
      }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  });
}

function extractUrls(response) {
  const dataArray = JSON.parse(response).data;
  return dataArray.map(function (giphyObject) {
    return giphyObject.url;
  });
}

export { searchGiphy };
