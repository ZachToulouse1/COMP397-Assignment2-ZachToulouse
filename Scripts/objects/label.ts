//Source File Name: label.ts
//Author's Name: Zachariah Toulouse
//Last Modified By: Zachariah Toulouse
//Date Last Modified: Feb. 29th, 2016
//Program Description: This program is for COMP397 Assignment 2 Slot Machine. It was created by Zachariah Toulouse.
//Revision History:
    //- Feb. 29th, 2016 - Created module objects

//OBJECTS CLASS
module objects {
    // LABEL CLASS ++++++++++++++++++++++++++++++++++++++++++++++
    export class Label extends createjs.Text {
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++++++++++++
        constructor(labelString: string, labelFont: string, labelColour: string, x: number, y: number, isCentered: boolean) {
            super(labelString, labelFont, labelColour);

            if (isCentered) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            }

            this.x = x;
            this.y = y;
        }
    }
} 