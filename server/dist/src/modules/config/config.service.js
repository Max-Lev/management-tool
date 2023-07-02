"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
const common_1 = require("@nestjs/common");
const svg_icons_1 = require("../../../db/svg-icons");
const columns_1 = require("../../../db/columns");
const products_1 = require("../../../db/products");
let ConfigService = class ConfigService {
    async getSvgIcons() {
        return svg_icons_1.SVG_ICONS;
    }
    async getColumns() {
        return columns_1.COLS;
    }
    async getProducts() {
        return products_1.PRODUCTS;
    }
    create(createConfigDto) {
        return 'This action adds a new config';
    }
    findAll() {
        return `This action returns all config`;
    }
    findOne(id) {
        return `This action returns a #${id} config`;
    }
    update(id, updateConfigDto) {
        return `This action updates a #${id} config`;
    }
    remove(id) {
        return `This action removes a #${id} config`;
    }
};
ConfigService = __decorate([
    (0, common_1.Injectable)()
], ConfigService);
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map