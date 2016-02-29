$(document).ready(function() {
});
var apiKey = ("dc6zaTOxFJmzC");
var searchItem = ("");
var inaGiphy = {
  baseUrl: 'http://api.giphy.com/v1/gifs/search?q=' + searchItem.replace(" ","+") + '&api_key=dc6zaTOxFJmzC' ,
  init: function(){
    inaGiphy.styling();
    inaGiphy.events();
  },
  styling: function(){
  },
  events: function(){
    $('#in-a-giphy').on('click', inaGiphy.submitSearch);
  },
  getFromDom: function () {
    var searchResult = $('input[name="giphySearch"]').val();
    // return {
    //   msg: msg,
    //   username: usersName
    // };
  },
  getGF: function(){
    $.ajax({
    url: inaGiphy.baseUrl,
    method: 'GET',
    success: function (msg) {
    },
    error: function (err) {
      console.log("oh nooooo", err);
    }
  });
  },
  addGF: function(){
    $.ajax({
    url: inaGiphy.baseUrl,
    method: 'POST',
    success: function (msg) {
      inaGiphy.getGF();
    },
    error: function (err) {
    }
  });
  },
  submitSearch: function (event) {
    inaGiphy.prevent();
    var newSearch = inaGiphy.getFromDom();
      inaGiphy.addGF(newSearch);
      $('input').val('');
  },
};

$(".app").html(templates.app);
