var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var scenes; //Defining assets
(function (scenes) {
    var SlotMachine = (function (_super) {
        __extends(SlotMachine, _super);

        function SlotMachine() {  //symbols 
            _super.call(this);
            this._grapes = 0;
            this._bananas = 0;
            this._oranges = 0;
            this._cherries = 0;
            this._bars = 0;
            this._bells = 0;
            this._sevens = 0;
            this._blanks = 0;
        }

        SlotMachine.prototype.start = function () {
            // Reset the Game to initial values 
            this._resetAll();
          
            this._backgroundImage = new createjs.Bitmap(assets.getResult("SlotMachine"));
            this.addChild(this._backgroundImage); //add slotMachine as bg image

            // adding Bet1Button to the scene
            this._bet1Button = new objects.Button("Bet1Button", 168, 382, false);
            this.addChild(this._bet1Button);
            this._bet1Button.on("click", this._bet1ButtonClick, this);

            
            this._bet10Button = new objects.Button("Bet10Button", 240, 382, false);
            this.addChild(this._bet10Button);
            this._bet10Button.on("click", this._bet10ButtonClick, this);
        
            this._bet100Button = new objects.Button("Bet100Button", 312, 382, false);
            this.addChild(this._bet100Button);
            this._bet100Button.on("click", this._bet100ButtonClick, this);
           
            this._spinButton = new objects.Button("SpinButton", 402, 382, false);
            this.addChild(this._spinButton);
            this._spinButton.on("click", this._spinButtonClick, this);

            this._resetButton = new objects.Button("ResetButton", 259, 166, false);
            this.addChild(this._resetButton);
            this._resetButton.on("click", this._resetButtonClick, this);

     
            this._quitButton = new objects.Button("QuitButton", 341, 166, false);
            this.addChild(this._quitButton);
            this._quitButton.on("click", this._quitButtonClick, this);

            this._jackpotText = new objects.Label(this.jackpot.toString(), "14px Lato", "#ff0000", 353, 107, false);
            this._jackpotText.textAlign = "right";
            this.addChild(this._jackpotText);

         
            this._creditsText = new objects.Label(this.playerMoney.toString(), "14px Lato", "#ff0000", 254, 303, false);
            this._creditsText.textAlign = "right";
            this.addChild(this._creditsText);

            // add Bet Text to the scene
            this._betText = new objects.Label(this.playerBet.toString(), "14px Lato", "#ff0000", 351, 303, false);
            this._betText.textAlign = "right";
            this.addChild(this._betText);

            // add Result Text to the scene
            this._resultText = new objects.Label(this.winnings.toString(), "14px Lato", "#ff0000", 450, 303, false);
            this._resultText.textAlign = "right";
            this.addChild(this._resultText);

            // Initialize Array of Bitmaps 
            this._initializeBitmapArray();

            // Setup Background
            this._setupBackground("WhiteBackground");

            // FadeIn
            this._fadeIn(500);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        
        SlotMachine.prototype.update = function () {
        };
       

        SlotMachine.prototype._checkRange = function (value, lowerBounds, upperBounds) {
            return (value >= lowerBounds && value <= upperBounds) ? value : -1;
        };
        SlotMachine.prototype._resetAll = function () {
            this.playerMoney = 1000;
            this.winnings = 0;
            this.jackpot = 5000;
            this.playerBet = 0;
        };

     
        SlotMachine.prototype._spinReels = function () {
            var betLine = [" ", " ", " "];
            var outCome = [0, 0, 0];
            for (var spin = 0; spin < 3; spin++) {
                outCome[spin] = Math.floor((Math.random() * 65) + 1);
                switch (outCome[spin]) {
                    case this._checkRange(outCome[spin], 1, 27):
                        betLine[spin] = "Blank";
                        this._blanks++;
                        break;
                    case this._checkRange(outCome[spin], 28, 37):
                        betLine[spin] = "Grapes";
                        this._grapes++;
                        break;
                    case this._checkRange(outCome[spin], 38, 46):
                        betLine[spin] = "Banana";
                        this._bananas++;
                        break;
                    case this._checkRange(outCome[spin], 47, 54):
                        betLine[spin] = "Orange";
                        this._oranges++;
                        break;
                    case this._checkRange(outCome[spin], 55, 59):
                        betLine[spin] = "Cherry";
                        this._cherries++;
                        break;
                    case this._checkRange(outCome[spin], 60, 62):
                        betLine[spin] = "Bar";
                        this._bars++;
                        break;
                    case this._checkRange(outCome[spin], 63, 64):
                        betLine[spin] = "Bell";
                        this._bells++;
                        break;
                    case this._checkRange(outCome[spin], 65, 65):
                        betLine[spin] = "Seven";
                        this._sevens++;
                        break;
                }
            }
            return betLine;
        };
      
        /**
         * Contains game [winning] logic
         */

        SlotMachine.prototype._chckWinnings = function () {
            if (this._blanks == 0) {
                if (this._grapes == 3) {
                    this.winnings = this.playerBet * 10;
                }
                else if (this._bananas == 3) {
                    this.winnings = this.playerBet * 20;
                }
                else if (this._oranges == 3) {
                    this.winnings = this.playerBet * 30;
                }
                else if (this._cherries == 3) {
                    this.winnings = this.playerBet * 40;
                }
                else if (this._bars == 3) {
                    this.winnings = this.playerBet * 50;
                }
                else if (this._bells == 3) {
                    this.winnings = this.playerBet * 75;
                }
                else if (this._sevens == 3) {
                    this.winnings = this.playerBet * 100;
                }
                else if (this._grapes == 2) {
                    this.winnings = this.playerBet * 2;
                }
                else if (this._bananas == 2) {
                    this.winnings = this.playerBet * 2;
                }
                else if (this._oranges == 2) {
                    this.winnings = this.playerBet * 3;
                }
                else if (this._cherries == 2) {
                    this.winnings = this.playerBet * 4;
                }
                else if (this._bars == 2) {
                    this.winnings = this.playerBet * 5;
                }
                else if (this._bells == 2) {
                    this.winnings = this.playerBet * 10;
                }
                else if (this._sevens == 2) {
                    this.winnings = this.playerBet * 20;
                }
                else if (this._sevens == 1) {
                    this.winnings = this.playerBet * 5;
                }
                else {
                    this.winnings = this.playerBet * 1;
                }
                console.log("Win!");
            }
            else {
                console.log("Loss!");
            }
            this._resultText.text = this.winnings.toString();
            this.playerMoney += this.winnings;
            this._creditsText.text = this.playerMoney.toString();
            this._resetFruitTally();
        };
        SlotMachine.prototype._resetFruitTally = function () {
            this._grapes = 0;
            this._bananas = 0;
            this._oranges = 0;
            this._cherries = 0;
            this._bars = 0;
            this._bells = 0;
            this._sevens = 0;
            this._blanks = 0;
        };
        SlotMachine.prototype._initializeBitmapArray = function () {
            this._reels = new Array();
            for (var reel = 0; reel < 3; reel++) {
                this._reels[reel] = new createjs.Bitmap(assets.getResult("Spin"));
                this._reels[reel].x = 216 + (reel * 84);
                this._reels[reel].y = 220;
                this.addChild(this._reels[reel]);
                console.log("reel" + reel + " " + this._reels[reel]);
            }
        };
        SlotMachine.prototype._placeBet = function (playerBet) {
           
            if (playerBet <= this.playerMoney) {
                this.playerBet += playerBet;
                this.playerMoney -= playerBet;
                this._creditsText.text = this.playerMoney.toString();
                this._betText.text = this.playerBet.toString();
                this.winnings = 0;
                this._resultText.text = this.winnings.toString();
            }
        };
        SlotMachine.prototype._disableSpinButton = function () {
            console.log("2 player money: " + this.playerMoney);
            if (this.playerMoney == 0) {
                this._spinButton.alpha = 0.7;
            }
        };
      
        SlotMachine.prototype._bet1ButtonClick = function (event) {
            console.log("Bet 1 Credit");
            this._placeBet(1);
        };
        SlotMachine.prototype._bet10ButtonClick = function (event) {
            console.log("Bet 10 Credit");
            this._placeBet(10);
        };
        SlotMachine.prototype._bet100ButtonClick = function (event) {
            console.log("Bet 100 Credit");
            this._placeBet(100);
        };
        SlotMachine.prototype._resetButtonClick = function (event) {
            console.log("Reset Game");
            //FadeOut 
            this._fadeOut(500, function () {
                // Switch to the SLOT_MACHINE Scene
                scene = config.Scene.SLOT_MACHINE;
                changeScene();
            });
        };
        SlotMachine.prototype._quitButtonClick = function (event) {
            console.log("Quit Game");
            //FadeOut 
            this._fadeOut(500, function () {
                // Switch to the GAME_OVER Scene
                scene = config.Scene.GAME_OVER;
                changeScene();
            });
        };
        SlotMachine.prototype._spinButtonClick = function (event) {
            if (this.playerBet == 0 && this.playerMoney == 0) {
                console.log("Player is out of money");
                this._disableSpinButton();
            }
            // ensure player has enough money to play [as per game requirements]
            if (this.playerBet > 0) {
                var bitmap = this._spinReels();
                for (var reel = 0; reel < 3; reel++) {
                    this._reels[reel].image = assets.getResult(bitmap[reel]);
                }

                this._chckWinnings();
                // reset player's bet to zero
                this.playerBet = 0;
                this._betText.text = this.playerBet.toString();
            }
        };
        return SlotMachine;
    }(objects.Scene));
    scenes.SlotMachine = SlotMachine;
})(scenes || (scenes = {}));
//# sourceMappingURL=slotmachine.js.map