//Source File Name: slotmachine.ts
//Author's Name: Zachariah Toulouse
//Last Modified By: Zachariah Toulouse
//Date Last Modified: Feb. 29th, 2016
//Program Description: This program is for COMP397 Assignment 2 Slot Machine. It was created by Zachariah Toulouse.
//Revision History:
    //- Feb. 29th, 2016 - Added slot machine logic and images. Finished Slot Machine.


// MENU SCENE
module scenes {
    export class SlotMachine extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _backgroundImage: createjs.Bitmap;
        private _bet1Button: objects.Button;
        private _bet10Button: objects.Button;
        private _bet100Button: objects.Button;
        private _spinButton: objects.Button;
        private _restartButton: objects.Button;
        private _quitButton: objects.Button;
        private _reels: createjs.Bitmap[];
        private _jackpotText: objects.Label;
        private _creditsText: objects.Label;
        private _betText: objects.Label;
        private _resultText: objects.Label;
        private playerMoney: number;
        private winnings: number;
        private jackpot: number;
        private playerBet: number;

        private _grape = 0;
        private _watermelon = 0;
        private _orange = 0;
        private _cherry = 0;
        private _clover = 0;
        private _horseshoe = 0;
        private _seven = 0;
        private _lemon = 0;
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void { 
            // Reset the Game to initial values 
            this._resetAll();
            
            // add background image to the scene
            this._backgroundImage = new createjs.Bitmap(assets.getResult("SlotMachine"));
            this.addChild(this._backgroundImage);
            
            // add Bet1Button to the scene
            this._bet1Button = new objects.Button("Bet1Button", 100, 347, false);
            this.addChild(this._bet1Button);
            this._bet1Button.on("click", this._bet1ButtonClick, this); 
            
            // add Bet10Button to the scene
            this._bet10Button = new objects.Button("Bet10Button", 200, 347, false);
            this.addChild(this._bet10Button);
            this._bet10Button.on("click", this._bet10ButtonClick, this); 
            
            // add Bet100Button to the scene
            this._bet100Button = new objects.Button("Bet100Button", 300, 347, false);
            this.addChild(this._bet100Button);
            this._bet100Button.on("click", this._bet100ButtonClick, this); 
            
            // add SpinButton to the scene
            this._spinButton = new objects.Button("SpinButton", 450, 347, false);
            this.addChild(this._spinButton);
            this._spinButton.on("click", this._spinButtonClick, this);
            
            // add RestartButton to the scene
            this._restartButton = new objects.Button("RestartButton", 100, 445, false);
            this.addChild(this._restartButton);
            this._restartButton.on("click", this._restartButtonClick, this); 
            
            this._quitButton = new objects.Button("QuitButton", 400, 445, false);
            this.addChild(this._quitButton);
            this._quitButton.on("click", this._quitButtonClick, this);
        
            // add JackPot Text to the scene
            this._jackpotText = new objects.Label(
                this.jackpot.toString(),
                "14px Consolas",
                "#ff0000",
                370, 115, false);
            this._jackpotText.textAlign = "right";
            this.addChild(this._jackpotText);
        
            // add Credits Text to the scene
            this._creditsText = new objects.Label(
                this.playerMoney.toString(),
                "16px Consolas",
                "#ff0000",
                240, 305, false);
            this._creditsText.textAlign = "right";
            this.addChild(this._creditsText);
            
            // add Bet Text to the scene
            this._betText = new objects.Label(
                this.playerBet.toString(),
                "16px Consolas",
                "#ff0000",
                385, 305, false);
            this._betText.textAlign = "right";
            this.addChild(this._betText);
            
            // add Result Text to the scene
            this._resultText = new objects.Label(
                this.winnings.toString(),
                "16px Consolas",
                "#ff0000",
                525, 305, false);
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
        }

        // SLOT_MACHINE Scene updates here
        public update(): void {

        }
        
        //PRIVATE METHODS
        /* Utility function to check if a value falls within a range of bounds */
        private _checkRange(value: number, lowerBounds: number, upperBounds: number): number {
            return (value >= lowerBounds && value <= upperBounds) ? value : -1;
        }

        private _resetAll() {
            this.playerMoney = 1000;
            this.winnings = 0;
            this.jackpot = 5000;
            this.playerBet = 0;
        }
        
        /* When this function is called it determines the betLine results.
        e.g. Bar - Orange - Banana */
        private _spinReels(): string[] {
            var betLine = [" ", " ", " "];
            var outCome = [0, 0, 0];

            for (var spin = 0; spin < 3; spin++) {
                outCome[spin] = Math.floor((Math.random() * 65) + 1);
                switch (outCome[spin]) {
                    case this._checkRange(outCome[spin], 1, 27):  // 41.5% probability
                        betLine[spin] = "Lemon";
                        this._lemon++;
                        break;
                    case this._checkRange(outCome[spin], 28, 37): // 15.4% probability
                        betLine[spin] = "Grape";
                        this._grape++;
                        break;
                    case this._checkRange(outCome[spin], 38, 46): // 13.8% probability
                        betLine[spin] = "Watermelon";
                        this._watermelon++;
                        break;
                    case this._checkRange(outCome[spin], 47, 54): // 12.3% probability
                        betLine[spin] = "Orange";
                        this._orange++;
                        break;
                    case this._checkRange(outCome[spin], 55, 59): //  7.7% probability
                        betLine[spin] = "Cherry";
                        this._cherry++;
                        break;
                    case this._checkRange(outCome[spin], 60, 62): //  4.6% probability
                        betLine[spin] = "Clover";
                        this._clover++;
                        break;
                    case this._checkRange(outCome[spin], 63, 64): //  3.1% probability
                        betLine[spin] = "Horseshoe";
                        this._horseshoe++;
                        break;
                    case this._checkRange(outCome[spin], 65, 65): //  1.5% probability
                        betLine[spin] = "Seven";
                        this._seven++;
                        break;
                }
            }
            return betLine;
        }

        /* This function calculates the player's winnings, if any */
        private _determineWinnings(): void {
            if (this._lemon == 0) {
                if (this._grape == 3) {
                    this.winnings = this.playerBet * 10;
                }
                else if (this._watermelon == 3) {
                    this.winnings = this.playerBet * 20;
                    this._jackpotText.text = "Congratulations! You won the jackpot!!!";
                }
                else if (this._orange == 3) {
                    this.winnings = this.playerBet * 30;
                }
                else if (this._cherry == 3) {
                    this.winnings = this.playerBet * 40;
                }
                else if (this._clover == 3) {
                    this.winnings = this.playerBet * 50;
                }
                else if (this._horseshoe == 3) {
                    this.winnings = this.playerBet * 75;
                }
                else if (this._seven == 3) {
                    this.winnings = this.playerBet * 100 + this.jackpot;
                }
                else if (this._grape == 2) {
                    this.winnings = this.playerBet * 2;
                }
                else if (this._watermelon == 2) {
                    this.winnings = this.playerBet * 2;
                }
                else if (this._orange == 2) {
                    this.winnings = this.playerBet * 3;
                }
                else if (this._cherry == 2) {
                    this.winnings = this.playerBet * 4;
                }
                else if (this._clover == 2) {
                    this.winnings = this.playerBet * 5;
                }
                else if (this._horseshoe == 2) {
                    this.winnings = this.playerBet * 10;
                }
                else if (this._seven == 2) {
                    this.winnings = this.playerBet * 20;
                }
                else if (this._seven == 1) {
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

        }

        private _resetFruitTally(): void {
            this._grape = 0;
            this._watermelon = 0;
            this._orange = 0;
            this._cherry = 0;
            this._clover = 0;
            this._horseshoe = 0;
            this._seven = 0;
            this._lemon = 0;
        }


        private _initializeBitmapArray(): void {
            this._reels = new Array<createjs.Bitmap>();
            for (var reel: number = 0; reel < 3; reel++) {
                this._reels[reel] = new createjs.Bitmap(assets.getResult("Blank"));
                this._reels[reel].x = 130 + (reel * 140);
                this._reels[reel].y = 165;
                this.addChild(this._reels[reel]);
                console.log("reel" + reel + " " + this._reels[reel]);
            }
        }

        private _placeBet(playerBet: number) {
            // ensure player's bet is less than or equal to players money
            if (playerBet <= this.playerMoney) {
                this.playerBet += playerBet;
                this.playerMoney -= playerBet;
                this._creditsText.text = this.playerMoney.toString();
                this._betText.text = this.playerBet.toString();
            }
        }
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        private _bet1ButtonClick(event: createjs.MouseEvent): void {
            console.log("Bet 1 Credit");
            this._placeBet(1);
        }

        private _bet10ButtonClick(event: createjs.MouseEvent): void {
            console.log("Bet 10 Credit");
            this._placeBet(10);
        }

        private _bet100ButtonClick(event: createjs.MouseEvent): void {
            console.log("Bet 100 Credit");
            this._placeBet(100);
        }

        private _spinButtonClick(event: createjs.MouseEvent): void {
            // ensure player has enough money to play
            if (this.playerBet > 0) {
                var bitmap: string[] = this._spinReels();

                for (var reel: number = 0; reel < 3; reel++) {
                    this._reels[reel].image = assets.getResult(bitmap[reel]);
                }
                
                this._determineWinnings();
                
                // reset player's bet & winnings back to 0
                this.playerBet = 0;
                this._betText.text = this.playerBet.toString();
                this.winnings = 0;
            }
        }
        
        // reset game for player on click
        private _restartButtonClick(event: createjs.MouseEvent): void {
            this.playerMoney = 1000;
            this._creditsText.text = this.playerMoney.toString();
            this.playerBet = 0;
            this._betText.text = this.playerBet.toString();
            this.winnings = 0;
            this._resultText.text = this.winnings.toString();
        }
        
        // quits game for player on click
        private _quitButtonClick(event: createjs.MouseEvent): void {
            if (confirm("Quit Game?")) {
                location.reload();  
            }
        }
    }
}