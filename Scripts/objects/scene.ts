//Source File Name: asset.ts
//Author's Name: Zachariah Toulouse
//Last Modified By: Zachariah Toulouse
//Date Last Modified: Feb. 29th, 2016
//Program Description: This program is for COMP397 Assignment 2 Slot Machine. It was created by Zachariah Toulouse.
//Revision History:
    //- Feb. 29th, 2016 - Created module objects

//OBJECTS CLASS
module objects {
    export class Scene extends createjs.Container {
        // PROTECTED INSTANCE VARIABLES
        protected _blackBackground: createjs.Bitmap;
         
        // CONSTRUCTOR +++++++++++++++++++++++++++++
        constructor() {
            super();            
            this.start();
        }
        
        // Add game objects to my scene in this method
        public start(): void {
            stage.addChild(this);
        }
        
        // update game objects in my scene
        public update(): void {

        }
        
        // Setup Background
        protected _setupBackground(background:string): void {
            this._blackBackground = new createjs.Bitmap(assets.getResult(background));
            this.addChild(this._blackBackground);
        }
        
        
        // FadeIn method
        protected _fadeIn(transitionTime:number): void {
            createjs.Tween.get(this._blackBackground).to({ alpha: 0 }, transitionTime, createjs.Ease.getPowInOut(2));
        }
        
        // FadeIn method
        protected _fadeOut(transitionTime:number,callback:any): void {
            this._blackBackground.alpha = 0;
            createjs.Tween.get(this._blackBackground).to({ alpha: 1 }, transitionTime, createjs.Ease.getPowInOut(2)).call(callback);
        }
    }
}