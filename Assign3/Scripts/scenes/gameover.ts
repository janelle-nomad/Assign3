// GAME_OVER SCENE
module scenes {
    export class GameOver extends objects.Scene {
        private _startOverBtn: objects.Button;
        private _gameOverLbl: objects.Label;
        
        constructor() {
            super();
        }        
        public start(): void {    
            
         
            this._gameOverLbl = new objects.Label(
                "GAME OVER",
                "30px Lato",
                "#000000",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y, true);
            this.addChild(this._gameOverLbl);      
                   
            // add the START button to the MENU scene
            this._startOverBtn = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 80, true);
            this.addChild(this._startOverBtn);
            
            // START Button event listener
            this._startOverBtn.on("click", this._startOverBtnClick, this);
           
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }

        private _startOverBtnClick(event: createjs.MouseEvent) {
      
            scene = config.Scene.SLOT_MACHINE;
            changeScene();
        }

    }
}