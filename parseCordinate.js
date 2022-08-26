var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function parseCoordinate(arg1, arg2) {
    var coord = {
        x: 0,
        y: 0
    };
    if (typeof arg1 === 'string') {
        arg1.split(",").forEach(function (str) {
            var _a = str.split(":"), key = _a[0], val = _a[1];
            coord[key] = parseInt(val, 10);
            console.log('coord', coord);
        });
    }
    else if (typeof arg1 === 'object') {
        coord = __assign({}, arg1);
    }
    else {
        coord = {
            x: arg1,
            y: arg2
        };
    }
    return coord;
}
console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({ x: 40, y: 50 }));
console.log(parseCoordinate("x:60,y:70"));
