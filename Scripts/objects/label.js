//Source File Name: label.ts
//Author's Name: Zachariah Toulouse
//Last Modified By: Zachariah Toulouse
//Date Last Modified: Feb. 29th, 2016
//Program Description: This program is for COMP397 Assignment 2 Slot Machine. It was created by Zachariah Toulouse.
//Revision History:
//- Feb. 29th, 2016 - Created module objects
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//OBJECTS CLASS
var objects;
(function (objects) {
    // LABEL CLASS ++++++++++++++++++++++++++++++++++++++++++++++
    var Label = (function (_super) {
        __extends(Label, _super);
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++++++++++++
        function Label(labelString, labelFont, labelColour, x, y, isCentered) {
            _super.call(this, labelString, labelFont, labelColour);
            if (isCentered) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            }
            this.x = x;
            this.y = y;
        }
        return Label;
    })(createjs.Text);
    objects.Label = Label;
})(objects || (objects = {}));
//# sourceMappingURL=label.js.map