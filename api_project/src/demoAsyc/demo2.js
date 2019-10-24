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
          isLogin: true
        };
        resolve(data);
      }, 2000);
    }
  );
}

// console.log(login('admin', 'admin'));
login('admin', 'admin').then((data) => {
  console.log('Bên trong này là những đoạn code xử lý tiếp sau khi login');
  console.log('Sau khi promise xử lý thành công');
  return {
    demo: 'abc',
    demo2: 'Xử lý xong công việc thứ 2',
    data: data
  }
}).then((data) => {
  console.log('Xử lý lần 3', data);
});
console.log('Một số đoạn code khác không liên quan đến login');

console.log("==============================");