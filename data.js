const f50ColorWays = [
                        {
                            colorWay: "Born For Goals",
                            color:["lime", "black", "white"],
                            hex: ["#d2ff5f", "#000000", "#ffffff"],
                            image: "assets/images/f50-born-for-goals-elite.webp"
                        },

                        {
                            colorWay: "Pure Victory",
                            color: ["white", "red", "lime"],
                            hex: ["#ffffff", "#ff0000", "#d2ff5f"],
                            image: "assets/images/f50-pure-victory-elite.webp"
                        },

                        {
                            colorWay: "Stealth Victory",
                            color: ["black", "red", "white", "grey"],
                            hex: ["#000000", "#ff0000", "#ffffff", "#808080"],
                            image: "assets/images/f50-stealth-victory-elite.webp"
                        },

                        {
                            colorWay: "Coral blaze",
                            color: ["blue", "coral", "white"],
                            hex: ["#0000ff", "#ff7f00", "#ffffff"],
                            image: "assets/images/f50-coral-blaze-elite.webp"
                        },

                        {
                            colorWay: "Road To Glory",
                            color: ["gold", "black", "white", "lavender"],
                            hex: ["#FFD700", "#000000", "#ffffff", "#d8b9f3"],
                            image: "assets/images/f50-road-to-glory-elite.webp"
                        },

                        {
                            colorWay: "Mystic Glory",
                            color: ["lime", "pink", "lavender" ],
                            hex: ["#d2ff5f", "#f300a6", "#d8b9f3"],
                            image: "assets/images/f50-mystic-glory-elite.webp"
                        },
]


const mercurialColorWays = [
    {
        colorWay: "United-silt",
        color: ["black", "pink", "lightblue"],
        hex: ["#000000", "#ff69b4", "#89cff0"],
        image: ""
    },

    {
        colorWay: "Mad ambition",
        color: ["blue", "lightblue"],
        hex: ["#0000ff", "#89cff0"],
        image:"",
    },

    {
        colorWay: "Shadow",
        color: ["black", "darkblue"],
        hex: ["#000000", "#00008b"],
        image:"",
    },

    {
        colorWay: "Prism Ocean",
        color: ["lightblue", "pink"],
        hex: ["#89cff0", "#ff69b4"],
        image:"",
    },

    {
        colorWay: "Fear Nothing",
        color: ["white", "black", "red"],
        hex: ["#ffffff", "#000000", "#ff0000"],
        image:"",
    },
]

const mercurialSuperfly10ColorWays = [
    {
        colorWay: "Light-Laser",
        color: ["black", "yellow", "red"],
        hex: ["#000000", "#ffff00", "#ff0000"],
        image:"",
    }
]


const products = [
    
    {
        id: 1,
        name: "Adidas f50",
        brand: "Adidas",
        category: "cleats",
        versions: [

            {
                name: "F50 club",
                price: 50,
                laceless: false,
                studTypes: ["FG", "AG", "SG"], 
                colorWays: f50ColorWays
            },

            { 
                name: "F50 pro",
                price:120,
                laceless: false,
                studTypes: ["FG", "AG", "SG"],
                colorWays: f50ColorWays
            },

            {
                name: "F50 elite",
                price: 310,
                laceless: false,
                studTypes: ["FG", "AG", "SG"],
                colorWays: f50ColorWays
            },



        ],
    },

    {
        id: 2,
        name: "Nike Mercurial",
        brand: "Nike",
        category: "cleats",
        versions: [

            {
                name: "Mercurial elite",
                price: 250,
                laceless: false,
                studTypes: ["FG", "AG", "SG"],
                colorWays: mercurialColorWays,
            }
        ],
    },

    {
        id: 3,
        name: "Mercural superfly 10",
        brand: "Nike",
        category: "cleats",
        versions: [
            {
                name:"Mercurial Superfly 10 elite",
                price: 300,
                laceless: false,
                studTypes: ["FG", "AG", "SG"],
                colorWays: mercurialSuperfly10ColorWays,

            }


        ]

    }
];


//*!--------------------next sectiond----------------------
