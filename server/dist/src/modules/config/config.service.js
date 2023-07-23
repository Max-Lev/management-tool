"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
const common_1 = require("@nestjs/common");
const svg_icons_1 = require("../../../db/svg-icons");
const columns_1 = require("../../../db/columns");
const events_1 = require("../../../db/events");
const create_event_dto_1 = require("./dto/create-event.dto");
let ConfigService = class ConfigService {
    constructor() {
        this.data = [...events_1.EVENTS];
    }
    async getSvgIcons() {
        return svg_icons_1.SVG_ICONS;
    }
    async getColumns() {
        return columns_1.COLS;
    }
    async getEvents() {
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(events_1.EVENTS);
            }, 0);
        });
    }
    async create(event) {
        event = Object.assign(Object.assign({}, event), { id: this.data.length + 1 });
        this.data.push(new create_event_dto_1.EventModel(event));
        events_1.EVENTS.push(new create_event_dto_1.EventModel(event));
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data);
            }, 0);
        });
    }
    updateProduct(event) {
        const data = this.data.filter(prod => {
            if (prod.id === event.id) {
                return prod = Object.assign(prod, Object.assign(Object.assign({}, event), { last_update: new Date().toLocaleDateString() }));
            }
            else {
                return prod;
            }
        });
        return data;
    }
    resolver() {
        const products = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(events_1.EVENTS);
            }, 0);
        });
        const columns = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(columns_1.COLS);
            }, 0);
        });
        return Promise.all([products, columns]).then((value) => {
            return {
                products: value[0],
                columns: value[1]
            };
        });
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
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ConfigService);
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map