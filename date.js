// LIGHTENING EXERCISE 01/22/2019
console.log("Hello from date.js");

let putDate = document.querySelector("#displayContainer");

let sayDate = document.createElement("p");
sayDate.setAttribute("id", "say__date")
sayDate.value = new Date();
sayDate.innerHTML = `<p>${sayDate.value}</p>`;
putDate.appendChild(sayDate);

let updateButton = document.createElement("button");
    updateButton.textContent = "Update";
    updateButton.addEventListener("click", () => {
        document.getElementById("say__date").value = new Date();
        sayDate.innerHTML = `<p>${sayDate.value}</p>`;
        console.log(sayDate.innerHTML);
    })

putDate.appendChild(updateButton);