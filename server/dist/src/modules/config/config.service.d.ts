import { UpdateConfigDto } from './dto/update-config.dto';
import { IconsConfig } from './entities/config.entity';
import { Column } from 'db/columns';
import { IEvent } from 'db/events';
export declare class ConfigService {
    constructor();
    data: IEvent[];
    getSvgIcons(): Promise<IconsConfig[]>;
    getColumns(): Promise<Column[]>;
    getEvents(): Promise<IEvent[]>;
    create(event: IEvent): Promise<IEvent[]>;
    updateProduct(event: IEvent): IEvent[];
    resolver(): Promise<{
        products: IEvent[];
        columns: Column[];
    }>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateConfigDto: UpdateConfigDto): string;
    remove(id: number): string;
}
