var toSearch = "president";
var text = "I love my president Draupadi Murmu";
var start = text.indexOf(toSearch);
var end = start+toSearch.length;

console.log(start + " " + end);
console.log(text.substring(start,end));

