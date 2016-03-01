var templates = {};

templates.app = [
  '<h1>inaGiphy</h1>',
  '<form class="">',
    '<input id="in-a-giphy-search" type="search" name="giphySearch" placeholder="search giphy">',
  '</form>'
].join("");

templates.searchResults = [
  '<p>your inaGiphy search results are:</p>',
  '<div><img src=">',
  '<%= url %>',
  '"/>',
  '</div>'
].join("");
