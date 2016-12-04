
(function(window) 
  {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];  



for (var name in names) {
// console.log(names[name]);
name1=names[name].toLowerCase();
var firstLetter = name1.charAt(0);
// console.log(firstLetter);
if (firstLetter=='j') {
  byeSpeaker.speak(name1);
}
else {
  helloSpeaker.speak(name1);
}
} 
  })(window);
