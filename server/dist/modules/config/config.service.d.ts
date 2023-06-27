/// <reference types="node" />
import { CreateConfigDto } from './dto/create-config.dto';
import { UpdateConfigDto } from './dto/update-config.dto';
export declare class ConfigService {
    getDefaultConfig(): import("fs").ReadStream;
    create(createConfigDto: CreateConfigDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateConfigDto: UpdateConfigDto): string;
    remove(id: number): string;
}
