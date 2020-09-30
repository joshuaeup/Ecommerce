var images = [
    {
        id: 0,
        image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        title: "Hello 1"
    },
    {
        id: 1,
        image: "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        title: "Hello 2"
    },
    {
        id: 2,
        image: "https://images.pexels.com/photos/1267438/pexels-photo-1267438.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        title: "Hello 3"
    },
    {
        id: 3,
        image: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        title: "Hello"
    },
    {
        id: 4,
        image: "https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Hello"
    },
    {
        id: 5,
        image: "https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        title: "Hello"
    },
    {
        id: 6,
        image: "https://images.pexels.com/photos/342800/pexels-photo-342800.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Hello"
    },
    {
        id: 7,
        image: "https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        title: "Hello"
    },
    {
        id: 8,
        image: "https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        title: "Hello"
    },
    {
        id: 9,
        image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Hello"
    },
    {
        id: 10,
        image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        title: "Hello"
    },
    {
        id: 11,
        image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        title: "Hello"
    },
    {
        id: 12,
        image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        title: "Hello 12"
    },
];

var one = document.querySelector("#grid__bg__one");
var two = document.querySelector("#grid__bg__two");



var domImages = document.querySelectorAll(".grid-container__column__bg");

for (var i = 0; i < domImages.length; i++) {
    domImages[i].style.backgroundImage = "url('" + images[i].image + "')";
    // domImages[i].addEventListener("click", function() {
    //     // if(domImages[i] != images.id) {
    //     console.log(images[i]);
    //     // }
    // });
}


one.addEventListener("click", function() {
    console.log(images[0].title);
});

two.addEventListener("click", function() {
    console.log(images[1].title);
});


// domImages

// function launchModal() {
//     console.log(domImages)
// }