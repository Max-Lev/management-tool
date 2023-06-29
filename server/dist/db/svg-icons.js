"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SVG_ICONS = exports.MODE_TYPE_ENUM = void 0;
var MODE_TYPE_ENUM;
(function (MODE_TYPE_ENUM) {
    MODE_TYPE_ENUM["LIST"] = "[MODE] LIST";
    MODE_TYPE_ENUM["TILES"] = "[MODE] TILES";
    MODE_TYPE_ENUM["ADD"] = "[MODE] ADD";
    MODE_TYPE_ENUM["INITIAL"] = "[MODE] INITIAL";
})(MODE_TYPE_ENUM = exports.MODE_TYPE_ENUM || (exports.MODE_TYPE_ENUM = {}));
exports.SVG_ICONS = [
    {
        name: "New",
        action: MODE_TYPE_ENUM.ADD,
        path: "../assets/svg/create-new.svg"
    },
    {
        name: "List",
        action: MODE_TYPE_ENUM.LIST,
        path: "../assets/svg/list-mode.svg"
    },
    {
        name: "Tiles",
        action: MODE_TYPE_ENUM.TILES,
        path: "../assets/svg/tiles-mode.svg"
    }
];
//# sourceMappingURL=svg-icons.js.map