import { Injectable } from '@nestjs/common';

import { createReadStream } from 'fs';
import { join } from 'path';
import { CreateConfigDto } from './dto/create-config.dto';
import { UpdateConfigDto } from './dto/update-config.dto';
import { SVG_ICONS } from 'db/svg-icons';
import { IconsConfig } from './entities/config.entity';
import { COLS, Column } from 'db/columns';
import { IProducts, PRODUCTS } from 'db/products';

@Injectable()
export class ConfigService {

  async getSvgIcons(): Promise<IconsConfig[]> {
    return SVG_ICONS;
  }
  async getColumns(): Promise<Column[]> {
    return COLS;
  }
  async getProducts(): Promise<IProducts[]> {
    return PRODUCTS;
  }

  create(createConfigDto: CreateConfigDto) {
    return 'This action adds a new config';
  }

  findAll() {
    return `This action returns all config`;
  }

  findOne(id: number) {
    return `This action returns a #${id} config`;
  }

  update(id: number, updateConfigDto: UpdateConfigDto) {
    return `This action updates a #${id} config`;
  }

  remove(id: number) {
    return `This action removes a #${id} config`;
  }
}
