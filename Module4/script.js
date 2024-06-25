(function () {

var names = ["Yaakov", "Joseph", "Jonathan", "Polnareff", "jack", "Valik", "Denis", "Yelizavetta", "Jotaro", "KI-222"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();