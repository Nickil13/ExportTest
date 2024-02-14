console.log("this is a test");

let ele = document.getElementById("my-ele");
let button = document.createElement("button");
button.textContent = "Testing";

let iframe = document.createElement("iframe");
iframe.src = "https://nickil13.github.io/ExportTest/";
iframe.width = 200;
iframe.height = 200;

button.addEventListener("click", () => {
    console.log("showing iframe");
    ele.appendChild(iframe);
});
if (ele) {
    ele.appendChild(button);
}
