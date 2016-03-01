//Source File Name: asset.ts
//Author's Name: Zachariah Toulouse
//Last Modified By: Zachariah Toulouse
//Date Last Modified: Feb. 29th, 2016
//Program Description: This program is for COMP397 Assignment 2 Slot Machine. It was created by Zachariah Toulouse.
//Revision History:
//- Feb. 29th, 2016 - Created module objects
var objects;
(function (objects) {
    // ASSET CLASS ++++++++++++++++++++++++++
    var Asset = (function () {
        // CONSTRUCTOR +++++++++++++++++++++
        function Asset(id, src) {
            this.id = id;
            this.src = src;
        }
        return Asset;
    })();
    objects.Asset = Asset;
})(objects || (objects = {}));
//# sourceMappingURL=asset.js.map