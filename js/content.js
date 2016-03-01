/*jshint ignore: start*/

// All gifs provided thanks to giphy
$(document).ready(function() {
  inaGiphy.init();
});
// This is a public api key please visit http://api.giphy.com/ for more information about getting a private key.
var apiKey = ("dc6zaTOxFJmzC");
var inaGiphy = {
  baseUrl: 'http://api.giphy.com/',
  init: function(){
    inaGiphy.styling();
    inaGiphy.events();
  },

  styling: function(){
  },

  events: function(){
    $('.searchForm').on('submit', 'form', function(event) {
      event.preventDefault();
      var searchTerm = $("#in-a-giphy-search").val();
      var url = inaGiphy.baseUrl + 'v1/gifs/search?q=' + searchTerm.replace(" ","20%") + '&api_key=dc6zaTOxFJmzC';
      inaGiphy.getGF(url);
    });
  },

  buildTemplate: function (templateStr) {
    return _.template(templates[searchResults]);
  },
  buildData: function (el) {
   console.log('what is this el', el);

     return _.map(el.data, function (item) {
             return {
               src: "https://media.giphy.com/media/"+ item.id +"/giphy.gif",
               embedUrl: item.url
             };
           });
 },
  getFromDom: function () {
    var searchResult = $('input[name="giphySearch"]').val();
    return searchResult;
  },
  addToDom: function (data, $target) {
    console.log('what result', data);
    console.log("what is target", $target);
    $target.html('');
    var htmlInsert = "";

    _.each(data,function(item) {
      htmlInsert +=
      '<div class="gifBox"><img src="'
      + item.src
      + '"/>'
      + '<a href="'
      + item.embedUrl
      + '"><div id="in-a-giphy-link">link to giphy</div></a>'
      + '</div>';
});
    $target.html(htmlInsert);
  },
  getGF: function(url){
    $.ajax({
    url: url,
    method: 'GET',
    success: function (result) {
      console.log("SUCCESS!",url, result);
      inaGiphy.addToDom(inaGiphy.buildData(result),$('.giffies'));
    },
    error: function (err) {
      console.log("oh nooooo", err);
    }
  });
  },
  addGF: function(newSearch){
    $.ajax({
      // url: inaGiphy.baseUrl,
      method: 'GET',
      data: newSearch,
      success: function (response) {
        inaGiphy.getGF();
      },
      error: function (err) {
      }
    });
  },
  submitSearch: function()  {
    var newSearch = inaGiphy.getFromDom();
      inaGiphy.addGF(newSearch);
      $('#in-a-giphy-search').val('');
  },
};

// $(".app").html(templates.app);
