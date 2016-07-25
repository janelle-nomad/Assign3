// MENU SCENE
module scenes {
    export class Menu extends objects.Scene {
   
        private _startBtn: objects.Button;
        private _menuLbl: objects.Label;
        
      
        constructor() {
            super();
        }
        
     
        public start(): void {    //start 

            this._menuLbl = new objects.Label(
                "SLOT MACHINE",
                "30px Lato",
                "#000000",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y, true);
            this.addChild(this._menuLbl);
                   
            // add the START button to the MENU scene
            this._startBtn = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 80, true);
            this.addChild(this._startBtn);
            
            // START Button event listener
            this._startBtn.on("click", this._startButtonClick, this);
           
            // Setup Background
            this._backdrop("WhiteBackground");
           
            // FadeIn
            this._fadeIn(500);
           
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }

       //start button
        private _startButtonClick(event: createjs.MouseEvent) {
            //FadeOut 
            this._fadeOut(500, () => {
                // Switch to the LEFT_CAVE Scene
                scene = config.Scene.SLOT_MACHINE;
                changeScene();
            });
        }

    }
}