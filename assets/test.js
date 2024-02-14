console.log("this is a test");

let ele = document.getElementsById("my-ele");
let button = document.createElement("button");
button.title = "Testing";
button.addEventListener(() => {
    console.log("button clicked");
});
ele.appendChild(button);
