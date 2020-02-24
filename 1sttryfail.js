// $(document).ready(function() {
//   const html = items
//   .map(function(item, i) {
//     return `
//     <div id="card-8" class="card">
//       <div class="front">
//         <img src="assets/starwars.jpg" />
//       </div>
//       <div class="back">
//         <img src="assets/r2.jpg" />
//       </div>
//     </div>

// `
//   }

//     var img = ""
// //Function for shuffling images.
// function randImg() {
//   img = results[Math.floor(Math.random() * results.length)]
// }
// randImg()
// // Function End.
// var items = results
//   .map(function(item, i) {
//     return `
// <div id="card${i}">
//   <div class="front">
//   </div>
//   <div class="back">
//       <img src="${item.url}">
//   </div>
// </div>
// `
//   })
//   .join("")
// document.querySelector("#cardgame").innerHTML = items

//   document.querySelector(".back").innerHTML = html

//   $("#card1").flip()
//   $("#card2").flip()
//   $("#card3").flip()
//   $("#card4").flip()
//   $("#card5").flip()
//   $("#card6").flip()
//   $("#card7").flip()
//   $("#card8").flip()
//   $("#card9").flip()

//   $("#card-1").flip()
//   $("#card-2").flip()
//   $("#card-3").flip()
//   $("#card-4").flip()
//   $("#card-5").flip()
//   $("#card-6").flip()
//   $("#card-7").flip()
//   $("#card-8").flip()
//   $("#card-9").flip()
// })

// we create a variable called cards. It corresponds with the individual cards created in html, and we turn those into an array
var cards = $(".card").toArray()
// we make a function to shuffle them
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex
  //While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    //     // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}
shuffle(cards)
console.log(cards)
$("#memory").html(cards)
$("#memory")
  .find(".card")
  .flip()

const state = {
  card1: "",
  card2: ""
}

$("#memory").on("click", ".card", function(e) {
  //$(this).data("value")
  $(this).addClass("flipped")
  if (state.card1 === "") {
    state.card1 = $(this)
  } else {
    state.card2 = $(this)
  }
  setTimeout(() => {
    if (
      state.card1.data("value") === state.card2.data("value") &&
      state.card1 !== "" &&
      state.card2 !== ""
    ) {
      $(this)
        .removeClass("flipped")
        .addClass("match")
      $(this)
        .siblings()
        .find("+ .flipped")
        .removeClass("flipped")
        .addClass("match")
    } else if (
      state.card1.data("value") !== state.card2.data("value") &&
      state.card1 !== "" &&
      state.card2 !== ""
    ) {
      $(".match").off(".flip")
    }
  }, 100)
  // console.log(state)

  // setTimeout(() => {
  //   state.card1.flip(false)
  //   state.card2.flip(false)
  // }, 1000)
  // card1.off(".flip").click(false)
  // card2.off(".flip").click(false)
  // state.card1 = null
  // state.card2 = null
})

// let hasflippedcard = false;
// let firstcard, secondcard;

// if (card1.data)

// $("#card").flip({
//   axis: "x",
//   trigger: card1 != card2
// })

// if (card1 === card2) {
//   state.card1.flip(false)
//   state.card2.flip(false)
// }

// if (state.card1 === state.card2) {
//   // we have a match

//   state.card1 = ""
//   state.card2 = ""
// } else {
//   // no match, flip them back over

//   state.card1 = ""
//   state.card2 = ""
// }

// console.log(state)

// e.preventDefault()
// if (card1) {
//   card2 = $(this)
//   if (card1.find(".front").html() === card2.find(".front").html()) {
//   } else {
//     card1.flip()
//     card2.flip()
//   }
// } else {
//   card1 = $(this)
// }

// const state = {
//   num1: ""
//   num2: ""

// }

// $("#memory").on(flip(), function(e) {
// e.preventDefault()

// var val = $(this).html()
// if (card1.val === card2.val) {
// }
// else {
//   $("card1").flip() $("card2").flip()
// }
// }
// )

// Establish values for the cards

// When 2 cards are clicked/flipped, if their value is the same leave them flipped to the front. If their value is different, flip them back over.

// Set a number of turns the player gets. If they run out of turns, show them a losing screen.

// If they win, show them a 'You won' screen.
