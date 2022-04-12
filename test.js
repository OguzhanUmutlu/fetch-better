const fetchBetter = require("./fetch");

fetchBetter.promises.get("https://www.youtube.com/embed/watch?v=dQw4w9WgXcQ")
    .then(response => console.log(response));