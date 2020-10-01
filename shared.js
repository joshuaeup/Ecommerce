// Data object array
var data = [
    {
        id: 0,
        title: "Kitchen",
        price: "$500",
        image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        text: "Timeless design scheme, you can never go wrong with an all-white palette. Curious about how to pull off the look? These high-design kitchens, boasting everything from sleek cabinetry to eye-catching tiles, are all the inspiration you need to make white hues work for your own space."
    },
    {
        id: 1,
        title: "Kitchen",
        price: "$800",
        image: "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        text: "Embodies a sense of renewal and growth, so it's only fitting that it would be a top choice for leading designers, especially when it comes to kitchens."
    },
    {
        id: 2,
        title: "Kitchen",
        price: "$1000",
        image: "https://images.pexels.com/photos/373548/pexels-photo-373548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        text: "We all want to shed light on the areas of our homes that matter most. And in spaces where you spend the majority of your time, considering custom details that you're truly passionate about can transform the look—and feel—of the space."
    },
    {
        id: 3,
        title: "Bedroom",
        price: "$300",
        image: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        text: "This bedroom by interior designed Gail Davis is full of rich texture and pattern yet still remains neutral and calming. If you want to introduce more warmth and texture to your space, consider a wood ceiling."
    },
    {
        id: 4,
        title: "Bedroom",
        price: "$1500",
        image: "https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        text: "In this peaceful blue master bedroom designed by Cathy Chapman, the gorgeous stone walls bring in an earthy feel. Want to make sure you actually get sweet dreams?"
    },
    {
        id: 5,
        title: "Bedroom",
        price: "$1000",
        image: "https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        text: "Instead of oversized furniture, opt for minimalist, low-to-the-ground beds and nightstands that are built into the wall for a sleek floating effect."
    },
    {
        id: 6,
        title: "Bathroom",
        price: "$2300",
        image: "https://images.pexels.com/photos/342800/pexels-photo-342800.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        text: "A light blue vanity and brass pulls are a pretty surprise against this bathroom's black-and-white, mosaic tile floor. A cactus adds a fun, playful touch."
    },
    {
        id: 7,
        title: "Bathroom",
        price: "$400",
        image: "https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        text: "This large main bath is great for a couple who loves a lot of space. The marble backsplash and thick quartz countertops, combined with the porcelain tile floor and soaking tub, emphasize luxury."
    },
    {
        id: 8,
        title: "Bathroom",
        price: "$500",
        image: "https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        text: "This California bathroom gives a nod to the home's midcentury origins. Modern elements like the freestanding tub and vessel sinks mix with eclectic and bohemian touches."
    },
    {
        id: 9,
        title: "Living Room",
        price: "$900",
        image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        text: "Create a relaxing living room environment by choosing furniture with clean lines to allow light to circulate around the room."
    },
    {
        id: 10,
        title: "Living Room",
        price: "$100",
        image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        text: "For hygge vibes, add extra comfort to seating with a toning mix of patterned and plain cushions in linen and wool. It's the perfect autumn/winter look."
    },
    {
        id: 11,
        title: "Living Room",
        price: "$1600",
        image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        text: "Combine straight, curved and angular lines with splashes of colour for a graphic look, keeping the background of this living room understated."
    }
];

// Grid items selectors
// var one = document.querySelector("#grid__bg__one");
// var two = document.querySelector("#grid__bg__two");

var domImages = document.querySelectorAll(".grid-container__column__bg");
var domTitle = document.querySelectorAll(".grid-container__column__titleLeft");
var domPrice = document.querySelectorAll(".grid-container__column__titleRight");
var domText = document.querySelectorAll(".grid-container__column__subTitle");

var responsiveToggle = document.querySelector("#main-nav__responsive__toggle");
var responsiveNav = document.querySelector("#responsive-nav");
var arrow = document.querySelector("#down-arrow-wrapper")
var body = document.querySelector("body");

// Loops through all of data then sets values to dom
for (var i = 0; i < domImages.length; i++) {
    domImages[i].style.backgroundImage = "url('" + data[i].image + "')";
    domTitle[i].innerHTML = data[i].title;
    domPrice[i].innerHTML = data[i].price
    domText[i].innerHTML = data[i].text;
}

// On click listeners
// one.addEventListener("click", function() {
//     console.log(images[0].title);
// });

// two.addEventListener("click", function() {
//     console.log(images[1].title);
// });


if (responsiveToggle) {
    responsiveToggle.addEventListener("click", function() {
        if (responsiveNav.style.display === "none") {
            console.log("Display");
            if (arrow) {
                arrow.style.display = "none";
            }
            responsiveNav.style.display = "block";
            body.style.overflow = "hidden"
        } else {
            console.log("Hide");
            if (arrow) {
                arrow.style.display = "block";
            }
            responsiveNav.style.display = "none";
            body.style.overflow = "scroll";
        }
        
    });
}
