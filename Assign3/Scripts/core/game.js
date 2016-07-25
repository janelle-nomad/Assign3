/// <reference path = "_reference.ts" />
// global variables
var assets;
var canvas;
var stage;
var stats;
var currentScene;
var scene;
// Game Scenes
var menu;
var slotMachine;
var gameOver;
var assetData = [
    { id: "BackButton", src: "../../Assets/images/BackButton.png" },
    { id: "Nextbutton", src: "../../Assets/images/Nextbutton.png" },
    { id: "StartButton", src: "../../Assets/images/StartButton.png" },
    { id: "StartOverButton", src: "../../Assets/images/StartOverButton.png" },
    { id: "SlotMachine", src: "../../Assets/images/SlotMachine.png" },
    { id: "Bet1Button", src: "../../Assets/images/Bet1Button.png" },
    { id: "Bet10Button", src: "../../Assets/images/Bet10Button.png" },
    { id: "Bet100Button", src: "../../Assets/images/Bet100Button.png" },
    { id: "SpinButton", src: "../../Assets/images/SpinButton.png" },
    { id: "ResetButton", src: "../../Assets/images/ResetButton.png" },
    { id: "QuitButton", src: "../../Assets/images/QuitButton.png" },
    { id: "BlackBackground", src: "../../Assets/images/BlackBackground.png" },
    { id: "WhiteBackground", src: "../../Assets/images/WhiteBackground.png" },
    { id: "Spin", src: "../../Assets/images/Spin.png" },
    { id: "Blank", src: "../../Assets/images/Blank.png" },
    { id: "Grapes", src: "../../Assets/images/Grapes.png" },
    { id: "Banana", src: "../../Assets/images/Banana.png" },
    { id: "Cherry", src: "../../Assets/images/Cherry.png" },
    { id: "Orange", src: "../../Assets/images/Orange.png" },
    { id: "Bar", src: "../../Assets/images/Bar.png" },
    { id: "Bell", src: "../../Assets/images/Bell.png" },
    { id: "Seven", src: "../../Assets/images/Seven.png" }
];
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
    //ref HTML canvas Element
    canvas = document.getElementById("canvas");

    stage = new createjs.Stage(canvas);

    stage.enableMouseOver(20);
  
    createjs.Ticker.setFPS(config.Game.FPS);

    createjs.Ticker.on("tick", gameLoop, this);
    // stats
    setupStats();
    
    //set scene
    scene = config.Scene.MENU;
    changeScene();
}

function gameLoop(event) {
    stats.begin();
    currentScene.update();
    stage.update();
    stats.end();
}
// Setup Game Stats
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

function changeScene() {
   
    switch (scene) {
        case config.Scene.MENU:
          
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            console.log("Starting MENU Scene");
            break;
        case config.Scene.SLOT_MACHINE:
            stage.removeAllChildren();
            slotMachine = new scenes.SlotMachine();
            currentScene = slotMachine;
            console.log("Starting SLOT_MACHINE Scene");
            break;
        case config.Scene.GAME_OVER:
            stage.removeAllChildren();
            gameOver = new scenes.GameOver();
            currentScene = gameOver;
            console.log("Starting GAME_OVER Scene");
            break;
    }
    console.log(currentScene.numChildren);
}
window.onload = preload;
//# sourceMappingURL=game.js.map