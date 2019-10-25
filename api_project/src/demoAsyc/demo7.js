console.log("==============================");

var resultPost = fetch('http://api-meme-zendvn-01.herokuapp.com/api/post/getListPagination.php?pagesize=2&currPage=1');
var start = new Date().getTime();
resultPost.then((response) => {
  var end = new Date().getTime();
  console.log('response', response);
  console.log("time=", end - start);
  return response.json();
}).then((myJson) => {
  console.log(myJson);
})

console.log("==============================");