module objects {
    // Scene Class
    export class Scene extends createjs.Container {
      
        protected "_bg-black": createjs.Bitmap;

        constructor() {
            super();            
            this.start();
        }
        
 
        public start(): void {
            stage.addChild(this);
        }
        
 
        public update(): void {

        }
        
        // Setup Background
        protected _backdrop(background:string): void {
            this["_bg-black"] = new createjs.Bitmap(assets.getResult(background));
            this.addChild(this["_bg-black"]);
        }
        
        
        // FadeIn method
        protected _fadeIn(transitionTime:number): void {
            createjs.Tween.get(this["_bg-black"]).to({ alpha: 0 }, transitionTime, createjs.Ease.getPowInOut(2));
        }
        
        // FadeIn method
        protected _fadeOut(transitionTime:number,callback:any): void {
            this["_bg-black"].alpha = 0;
            createjs.Tween.get(this["_bg-black"]).to({ alpha: 1 }, transitionTime, createjs.Ease.getPowInOut(2)).call(callback);
        }
    }
}