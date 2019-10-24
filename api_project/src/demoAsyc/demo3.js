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
        let dataError = {
          error: 'Đăng nhập thất bại',
          isLogin: false
        };
        reject(dataError);
      }, 2000);
    }
  );
}

login('admin', 'admin')
  .then((data) => {
    console.log("Success", data);
  })
  .catch((err) => {
    console.log("Error", err);
  });

console.log('Một số đoạn code khác không liên quan đến login');

console.log("==============================");