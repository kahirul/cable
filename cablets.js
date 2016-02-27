System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ActionCable;
    return {
        setters:[],
        execute: function() {
            ActionCable = (function () {
                function ActionCable() {
                }
                ActionCable.prototype.createConsumer = function (url) {
                    if (url === null) {
                        url = "/cable";
                    }
                    return url;
                };
                return ActionCable;
            }());
            exports_1("ActionCable", ActionCable);
        }
    }
});
//# sourceMappingURL=cablets.js.map