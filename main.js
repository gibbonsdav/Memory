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

var cards = $(".card").toArray()

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
  .flip() /
  $("#memory").on("click", ".card", function(e) {
    e.preventDefault()
    if (card1) {
      card2 = $(this)
      if (card1.find(".front").html() === card2.find(".front").html()) {
      } else {
        card1.flip()
        card2.flip()
      }
    } else {
      card1 = $(this)
    }
  })
