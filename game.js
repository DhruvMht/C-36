class Game{
    constructor() {}

    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }
    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
   async start() {
        if(gameState === 0) {
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }

    play() {
        form.hide();
        textSize(30);
        text("Game Start", displayWidth/2, 130);
        Player.getPlayerInfo();
        if(allPlayers!== undefined) {

        }
        if(keyIsDown(UP_ARROW)&& player.index!== null) {
            player.distance = player.distance + 30;
            player.update();
        }
    }
}

