let li = document.querySelectorAll("li");
console.log(li.length);

// convert to array
let liToArray = Array.from(li);
let count = liToArray.length;
let newArray = [];

document.getElementById("btn").addEventListener("click", function () {
  if (newArray.length < count) {
    var x = liToArray.shift();
    newArray.push(x);
    console.log(liToArray.length);
    newArray.forEach((element) => {
      element.classList.add("red-text");
      element.innerHTML = "CANCELED";
      console.log(element);
      
    });
  } else {
    document.location.reload();
  }
});
