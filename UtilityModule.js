var Utility;
(function (Utility) {
    var util = (function () {
        function util() {
        }
        util.prototype.getName = function (s) {
            return "Text:" + s;
        };
        return util;
    }());
    Utility.util = util;
})(Utility || (Utility = {}));
