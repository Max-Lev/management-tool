import { UpdateConfigDto } from './dto/update-config.dto';
import { IconsConfig } from './entities/config.entity';
import { Column } from 'db/columns';
import { IEvent } from 'db/events';
export interface SuccessResponse {
    status: string;
    code: number;
    message: string;
    data: object | Array<any> | any;
    request: {
        url: string;
        method: string;
    };
}
export declare class ConfigService {
    constructor();
    data: IEvent[];
    getSvgIcons(): Promise<{
        icons: IconsConfig[];
        message: any;
    }>;
    getColumns(): Promise<Column[]>;
    getEvents(): Promise<IEvent[]>;
    create(event: IEvent): Promise<{
        data: IEvent[];
        message: string;
    }>;
    updateProduct(event: IEvent): {
        data: IEvent[];
        message: string;
    };
    resolver(): Promise<{
        products: IEvent[];
        columns: Column[];
    }>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateConfigDto: UpdateConfigDto): string;
    remove(id: number): string;
}
