function buttonClick() {
    console.log("function called...");
    document.getElementById("paragraph1").innerHTML = "Hello JavaScript!"
}


let header = "Template Strings";
let tags = ["chakka", "manga", "thenga"];

let content = `<h2>${header}</h2><ul>`;

for (const x of tags) {
    content += `<li>${x}</li>`;
}

content += `</ul>`;
document.getElementById("demo").innerHTML = content;
