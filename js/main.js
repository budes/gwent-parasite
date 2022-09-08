let en_layer1 = []
let en_layer2 = []
let en_deck = []

let pl_layer1 = []
let pl_layer2 = []
let pl_deck = [["ascaris_lumbricoides.png", 12, 1, "ascaris"], 
                ["ascaris_lumbricoides.png", 12, 1, "ascaris"], 
                ["amblyomma_cajennense.png", 14, 2, "amblyomma"],
                ["amblyomma_cajennense.png", 14, 2, "amblyomma"],
                ["aedes_aegypti.png", 10, 3, "aedes"], 
                ["aedes_aegypti.png", 10, 3, "aedes"],
                ["aedes_aegypti.png", 10, 3, "aedes"]]

function deckExists() {
    var area = document.getElementById("cards-selection")
    var html = ""
    
    for(var i = 0; i < pl_deck.length; i ++) {

        /* It's on the same line, i just thought that it would be easier to read this way */
        html += '<div id="' + pl_deck[i][3] + '" '
        html += 'onclick="Click([' + "'" + pl_deck[i][0].trim() + "', " + pl_deck[i][1] + ", " + pl_deck[i][2] + ", '" + pl_deck[i][3].trim() + "'" + '])" '
        html +='style="background-image: url(' + "'../images/" + pl_deck[i][0] + "')" + '" ' + 'class="card">'
        
        html += "\t" + '<div class="level">' + pl_deck[i][1] + "</div>"
        html += "</div>"
    }

    area.innerHTML = html
}
deckExists()

function Click(info) {
    var old_area = document.querySelectorAll("#cards-selection #" + info[3])

    var new_html = document.querySelectorAll("#player #l" + info[2])[0].innerHTML
    new_html += '<div id="' + info[2] + '" onclick="Click(' + info[2] + ')" style="background-image: url(' + "'images/"+ info[0] + "')" + '" ' + 'class="card">' + "\n"
    new_html += "\t" + '<div class="level">' + info[1] + "</div>" + "\n"
    new_html += "</div>" + "\n"

    document.querySelectorAll("#player #l" + info[2])[0].innerHTML = new_html

    old_area[0].remove()
}

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

boardCreation("/images/Tabuleiro_1.png", 43)

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
