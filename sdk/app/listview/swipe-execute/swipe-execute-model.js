var observable_array_1 = require("data/observable-array");
var ViewModel = (function () {
    function ViewModel() {
        this.initDataItems();
    }
    Object.defineProperty(ViewModel.prototype, "dataItems", {
        get: function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    ViewModel.prototype.onCellSwiping = function (args) {
        var swipeLimits = args.data.swipeLimits;
        if (args.data.x > 100) {
            console.log("Threshold achieved: " + args.data.x);
        }
        else if (args.data.x < -100) {
            console.log("Threshold achieved: " + args.data.x);
        }
    };
    ViewModel.prototype.onSwipeCellStarted = function (args) {
        var swipeLimits = args.data.swipeLimits;
        console.log("Started swipe cell: " + args.object);
        swipeLimits.threshold = 100;
    };
    ViewModel.prototype.onItemClick = function (args) {
        console.log("Item click: " + args.itemIndex);
    };
    ViewModel.prototype.onSwipeCellFinished = function (args) {
        var swipeLimits = args.data.swipeLimits;
        console.log("Started swipe cell: " + args.object);
        swipeLimits.threshold = 100;
        swipeLimits.left = 150;
        swipeLimits.right = 150;
    };
    ViewModel.prototype.initDataItems = function () {
        this._items = new observable_array_1.ObservableArray();
        for (var i = 0; i < 50; i++) {
            this._items.push(new DataItem(i, "Item " + i, "This is item description."));
        }
    };
    return ViewModel;
})();
exports.ViewModel = ViewModel;
var DataItem = (function () {
    function DataItem(id, name, description) {
        this.id = id;
        this.itemName = name;
        this.itemDescription = description;
    }
    return DataItem;
})();
exports.DataItem = DataItem;
