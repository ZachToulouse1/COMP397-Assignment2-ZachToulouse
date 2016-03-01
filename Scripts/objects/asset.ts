//Source File Name: asset.ts
//Author's Name: Zachariah Toulouse
//Last Modified By: Zachariah Toulouse
//Date Last Modified: Feb. 29th, 2016
//Program Description: This program is for COMP397 Assignment 2 Slot Machine. It was created by Zachariah Toulouse.
//Revision History:
    //- Feb. 29th, 2016 - Created module objects

module objects {
    // ASSET CLASS ++++++++++++++++++++++++++
    export class Asset {
        //PUBLIC INSTANCE VARIABLES
        public id:string;
        public src: string;
        // CONSTRUCTOR +++++++++++++++++++++
        
        constructor(id:string, src:string) {
            this.id = id;
            this.src = src;
        }
    }
}