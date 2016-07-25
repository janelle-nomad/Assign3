var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU SCENE
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);

        function Menu() {
            _super.call(this);
        }
      
        // Start Method
        Menu.prototype.start = function () {
        
            this._welcomeLabel = new objects.Label("Slot Machine", "30px Lato", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._welcomeLabel);
       
            this._startButton = new objects.Button("StartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 80, true);
            this.addChild(this._startButton);
  
            this._startButton.on("click", this._startButtonClick, this);

            this._setupBackground("WhiteBackground");

            this._fadeIn(500);//fade in
        
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Menu.prototype.update = function () {
        };
    
        Menu.prototype._startButtonClick = function (event) {
            //FadeOut 
            this._fadeOut(500, function () {
          
                scene = config.Scene.SLOT_MACHINE;
                changeScene();
            });
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map