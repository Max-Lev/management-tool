export enum MODE_TYPE_ENUM {
    LIST = '[MODE] LIST',
    TILES = '[MODE] TILES',
    ADD = '[MODE] ADD',
    INITIAL = '[MODE] INITIAL',
}
export const SVG_ICONS =
    [
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