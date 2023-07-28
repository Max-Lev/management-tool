import { ConfigService } from './config.service';
import { UpdateConfigDto } from './dto/update-config.dto';
import { IEvent } from 'db/events';
export declare class ConfigController {
    private readonly configService;
    constructor(configService: ConfigService);
    svgIcons(): Promise<{
        icons: import("./entities/config.entity").IconsConfig[];
        message: any;
    }>;
    columns(): Promise<import("../../../db/columns").Column[]>;
    events(): Promise<IEvent[]>;
    resolver(): Promise<{
        products: IEvent[];
        columns: import("../../../db/columns").Column[];
    }>;
    create(event: IEvent): Promise<{
        data: IEvent[];
        message: string;
    }>;
    updateProduct(event: IEvent): {
        data: IEvent[];
        message: string;
    };
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateConfigDto: UpdateConfigDto): string;
    remove(id: string): string;
}
