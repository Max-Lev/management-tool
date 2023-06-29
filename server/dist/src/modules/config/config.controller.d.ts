import { ConfigService } from './config.service';
import { CreateConfigDto } from './dto/create-config.dto';
import { UpdateConfigDto } from './dto/update-config.dto';
export declare class ConfigController {
    private readonly configService;
    constructor(configService: ConfigService);
    svgIcons(): Promise<import("./entities/config.entity").IconsConfig[]>;
    columns(): Promise<import("../../../db/columns").Column[]>;
    products(): Promise<import("../../../db/products").IProducts[]>;
    create(createConfigDto: CreateConfigDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateConfigDto: UpdateConfigDto): string;
    remove(id: string): string;
}
