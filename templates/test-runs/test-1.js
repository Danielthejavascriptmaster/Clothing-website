const colors = [
    {
        id: "1",
        color: "red",
        type: "warm"
    },

    {
        id: "2",
        color: "yellow",
        type: "warm"
    },

    {
        id: "3",
        color: "orange",
        type: "warm"
    },

    {
        id: "4",
        color: "green",
        type: "neutral"
    },

    {
        id: "5",
        color: "blue",
        type: "cold"
    },

    {
        id: "6",
        color: "purple",
        type: "cold"
    }
]

let index = 0;

for(let i = 0; i < colors.length; i++){
    const card = document.createElement("div");
    const label = document.createElement("h1")
    const description = document.createElement("p");
    const name = document.createElement("h3");

    label.textContent = colors[i].color;
    name.textContent = colors[i].type;
    description.textContent = colors[i].id;


    document.body.appendChild(description)
    document.body.appendChild(name)
    document.body.appendChild(label);
}

