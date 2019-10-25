async function handleResultPost() {
  try {
    var data = await resultPost('http://api-meme-zendvn-01.herokuapp.com/api/post/getListPagination.php?pagesize=2&currPage=1');
    console.log(data); 
  } catch (error) {
    console.error(error);
  }
}

async function resultPost(url = '') {
  var response = await fetch(url);
  return await response.json(); // parses JSON response into native JavaScript objects
}

handleResultPost();
