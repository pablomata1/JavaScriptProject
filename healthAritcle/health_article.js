//Creating new XHR object
var xhr = new XMLHttpRequest();

//location of json file
var url = './health_article.json';

//'GET': Specifies the HTTP method used for the request (in this case, a GET request).
//URL: Represents the URL from where you will fetch the data.
//True: Indicates if the request is asynchronous (true) or synchronous (false). 
//In this case, it's set to true for asynchronous operation, allowing other scripts to run while the request is processed.
xhr.open('GET', url, true);

//Lets the XHR object know the expected response is in JSON format
xhr.responseType = 'json';



//
xhr.onload = function(){
    //Retrieves the article array from the JSON response
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    //Creates an article from the receive JSON data.
    articles.forEach(function(article) {
        //Create elements and adding class
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
    
        var title = document.createElement('h2');
        title.textContent = article.title;
    
        var description = document.createElement('p');
        description.textContent = article.description;
    
        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';
    
        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way) {
          var listItem = document.createElement('li');
          listItem.textContent = way;
          waysList.appendChild(listItem);
        });
    
        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';
    
        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function(benefit) {
          var listItem = document.createElement('li');
          listItem.textContent = benefit;
          benefitsList.appendChild(listItem);
        });
    
        //Appends all info to an article div - Creates an article with all information
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);
    
        //appends article into artices div - displays into HTMl document
        articlesDiv.appendChild(articleDiv);
      });
}


//Needs to send request to be able to fetch the data from specified URL
xhr.send();