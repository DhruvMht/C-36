class Form{
    constructor() {
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement('h3');
    }

    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display() {
        var title = createElement('h1');
        title.html("Car Racing Game");
        title.position(displayWidth/2-50, 30);

        this.input.position(displayWidth/2-30, 100);
        this.button.position(displayWidth/2, 140);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount = playerCount+1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Welcome"+ player.name);
            this.greeting.position(displayWidth/2-50, 100);
        })
    }


}