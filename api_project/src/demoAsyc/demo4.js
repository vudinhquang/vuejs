console.log("==============================");

// Khi dùng công cụ để tương tác với server -> Trả về cho mình 1 Promise
// Giả lập 1 function là server -> Return 1 Promise

function login(username, password) {
  return new Promise(
    function(resolve, reject) {
      console.log('Server đang xử lý...');
      // Giả sử server tốn 2 giây để xử lý
      setTimeout(() => {
        console.log('Server xử lý thành công');
        // Giả sử server xử lý thành công và trả về data
        let data = {
          username: username,
          password: '12dwdw34sdsd5678dwdw9',
          isLogin: true,
          userId: 'sasaf-frrgrh-ewewewew'
        };
        resolve(data);
      }, 2000);
    }
  );
}

function getPostByUserId(userId) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      console.log("Server getPostByUserId xử lý thành công, userId=", userId);
      let data = [
        {
          postId: 1,
          userId,
          content: 'sasafrgg'
        },
        {
          postId: 2,
          userId,
          content: 'aasasasafrgg'
        }
      ]
      resolve(data);
    }, 4000);
  });
}
// Promise hell - Callback hell
login('admin', 'admin')
  .then((data) => {
    console.log("Success", data);
    getPostByUserId(data.userId)
      .then((data) => {
        console.log("data getPost=", data);
      });
  })
  .catch((err) => {
    console.log("Error", err);
  });

console.log('Một số đoạn code khác không liên quan đến login');

console.log("==============================");