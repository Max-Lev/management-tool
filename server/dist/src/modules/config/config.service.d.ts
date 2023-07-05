import { UpdateConfigDto } from './dto/update-config.dto';
import { IconsConfig } from './entities/config.entity';
import { Column } from 'db/columns';
import { IEvents } from 'db/events';
export declare class ConfigService {
    data: IEvents[];
    getSvgIcons(): Promise<IconsConfig[]>;
    getColumns(): Promise<Column[]>;
    getEvents(): Promise<IEvents[]>;
    create(event: IEvents): Promise<IEvents[]>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateConfigDto: UpdateConfigDto): string;
    remove(id: number): string;
}
