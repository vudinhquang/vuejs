console.log("==============================");
// console.log("demoAsyc");

function first() {
  // console.log("first run");
  setTimeout(() => {
    console.log("Tương tác với server");
  }, 5000);
}

function second() {
  console.log("Trước khi gọi function first()");
  first();
  console.log("Sau khi gọi function first()");
}

// second();

console.log("==============================");