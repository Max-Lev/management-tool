import { ConfigService } from './config.service';
import { UpdateConfigDto } from './dto/update-config.dto';
import { IEvent } from 'db/events';
export declare class ConfigController {
    private readonly configService;
    constructor(configService: ConfigService);
    svgIcons(): Promise<import("./entities/config.entity").IconsConfig[]>;
    columns(): Promise<import("../../../db/columns").Column[]>;
    events(): Promise<IEvent[]>;
    create(event: IEvent): Promise<IEvent[]>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateConfigDto: UpdateConfigDto): string;
    remove(id: string): string;
}
