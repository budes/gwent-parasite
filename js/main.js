let en_layer1 = []
let en_layer2 = []
let en_layer3 = []
let en_deck = []

let pl_layer1 = []
let pl_layer2 = []
let pl_layer3 = []
let pl_deck = []

/* Player's deck creation */
function getRandomCards(number_of_cards) {
    /* Selects random cards to put on the pl_deck array */
    for (var repetitions = 1; repetitions <= number_of_cards; repetitions++) {
        pl_deck.push(cards[Math.floor(Math.random() * cards.length)])
    }
}
getRandomCards(10)

function deckCreate() {
    /* Creates the deck dinamically based on the values on pl_deck */
    var area = document.getElementById("cards-selection")
    var html = ""
    
    for(var i = 0; i < pl_deck.length; i ++) {

        /* It's on the same line, i just thought that it would be easier to read this way */
        html += '<div id="' + pl_deck[i][3] + '" '
        html += 'onclick="Click([' + "'" + pl_deck[i][0].trim() + "', '" + pl_deck[i][1] + "', " + pl_deck[i][2] + ", '" + pl_deck[i][3].trim() + "'" + '])" '
        html +='style="background-image: url(' + "'./images/cards/" + pl_deck[i][0] + "')" + '" ' + 'class="card">'
        
        html += "\t" + '<div class="level">' + pl_deck[i][1] + "</div>"
        html += "</div>"
    }

    area.innerHTML = html
}
deckCreate()

/* Funcionality of the cards */
function Click(info) {
    /* Makes the card move from the deck to the game */
    var old_area = document.querySelectorAll("#cards-selection #" + info[3])

    var new_html = document.querySelectorAll("#player #l" + info[2])[0].innerHTML
    new_html += '<div id="' + info[2] + '" onclick="Click(' + info[2] + ')" style="background-image: url(' + "'./images/cards/"+ info[0] + "')" + '" ' + 'class="card">' + "\n"
    new_html += "\t" + '<div class="level">' + info[1] + "</div>" + "\n"
    new_html += "</div>" + "\n"

    document.querySelectorAll("#player #l" + info[2])[0].innerHTML = new_html

    old_area[0].remove()
    
    if (info[2] == 1) {
        pl_layer1.push(info)
        
        if (info[3] == "quarto") {
            changeCardsPoints(2, 0)
        }
        if (info[3] == "saneamento") {
            changeCardsPoints(3, 0)
        }
        
    } else if(info[2] == 2) {
        pl_layer2.push(info)
    } else {
        pl_layer3.push(info)
    }
}

/* The creation of the board, with the right proportion of the image and hitbox */
function boardCreation(source, height) {
    // Every value atributed to the height will be converted to the rem units

    var game_board = document.getElementById("game")
    
    /* Obtaining the dimensions of the image */
    const img = new Image();
    img.src = source

    var img_aspect_ratio = img.width / img.height
    
    /* Atributing the values to the dimensions */
    game_board.style.backgroundImage = 'url("' + source + '")'
    
    game_board.style.height = height + "rem"
    game_board.style.width = img_aspect_ratio * height + "rem"

}
boardCreation("./images/Tabuleiro_3.png", 34)

/* The score */
function changeCardsPoints(layer, action) {
    var elements = document.querySelectorAll("#player #l" + layer + " div .level")

    if (action == 0) { // Duplication (2x)
        for (var i = 0; i < elements.length; i++) {
            var value = elements[i].innerHTML
            elements[i].innerHTML = parseInt(value) * 2
        }
    } else if (action == 1) { // Split by half (/2)
        for (var i = 0; i < elements.length; i++) {
            var value = elements[i].innerHTML
            elements[i].innerHTML = parseInt(parseInt(value) / 2)
        }
    } else { // Reset to 1
        for (var i = 0; i < elements.length; i++) {
            var value = elements[i].innerHTML
            elements[i].innerHTML = 1
        }
    }

}   

/*
const card = document.getElementsByClassName("card");

document.addEventListener("mousedown", function (){
    card_ghost = document.getElementsByClassName("card_ghost");

    card_ghost.setAttribute("style","height:inherit") 
    card_ghost.setAttribute("style","width:6rem")

    document.addEventListener("mousemove", function(event) {
        card_ghost.setAttribute("style","left:" + event.pageX + "px")
        card_ghost.setAttribute("style","top:" + event.pageY + "px")
    })
})
*/
