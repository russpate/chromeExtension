$(document).ready(function() {
  inaGiphy.init();
});
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
    $('.app').on('submit', 'form', function(event) {
      event.preventDefault();
      // inaGiphy.submitSearch();
      var searchTerm = $("#in-a-giphy-search").val();
      var url = inaGiphy.baseUrl + 'v1/gifs/search?q=' + searchTerm.replace(" ","+") + '&api_key=dc6zaTOxFJmzC';
      inaGiphy.getGF(url);
    });
  },
  buildTemplate: function (templateStr) {
    return _.template(templates.searchResults);
  },
  buildData: function (arr) {
      return {
        url: arr[url]
      };
  },
  getFromDom: function () {
    var searchResult = $('input[name="giphySearch"]').val();
    return searchResult;
  },
  addToDom: function (result, $target) {
    $target.html('');
    var htmlInsert = "";
      htmlInsert += templates.result;
    $target.html(htmlInsert);
  },
  getGF: function(url){
    $.ajax({
    url: url,
    method: 'GET',
    success: function (result) {
      console.log("SUCCESS!", result);
      inaGiphy.addToDom(inaGiphy.buildData(result),$('.app'));
    },
    error: function (err) {
      console.log("oh nooooo", err);
    }
  });
  },
  addGF: function(newSearch){
    $.ajax({
      url: inaGiphy.baseUrl,
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

$(".app").html(templates.app);
