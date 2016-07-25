var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

// game over var scenes;
(function (scenes) {
    var GameOver = (function (_super) {
        __extends(GameOver, _super);

        function GameOver() {
            _super.call(this);
        }

        GameOver.prototype.start = function () {
     
            this._gameOverLabel = new objects.Label("GAME OVER", "60px Consolas", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._gameOverLabel);

            this._startOverBtn = new objects.Button("StartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 80, true);
            this.addChild(this._startOverBtn);

            // START Button event listener
            this._startOverBtn.on("click", this._startOverBtnClick, this);

            // add this scene to the global stage container
            stage.addChild(this);
        };

        GameOver.prototype.update = function () {
        };
       
        GameOver.prototype._startOverBtnClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.SLOT_MACHINE;
            changeScene();
        };
        return GameOver;
    }(objects.Scene));
    scenes.GameOver = GameOver;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map