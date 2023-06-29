import { CreateConfigDto } from './dto/create-config.dto';
import { UpdateConfigDto } from './dto/update-config.dto';
import { IconsConfig } from './entities/config.entity';
import { Column } from 'db/columns';
import { IProducts } from 'db/products';
export declare class ConfigService {
    getSvgIcons(): Promise<IconsConfig[]>;
    getColumns(): Promise<Column[]>;
    getProducts(): Promise<IProducts[]>;
    create(createConfigDto: CreateConfigDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateConfigDto: UpdateConfigDto): string;
    remove(id: number): string;
}
