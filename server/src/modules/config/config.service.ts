import { Injectable } from '@nestjs/common';

import { createReadStream } from 'fs';
import { join } from 'path';
import { CreateConfigDto } from './dto/create-config.dto';
import { UpdateConfigDto } from './dto/update-config.dto';
import { SVG_ICONS } from 'db/svg-icons';
import { IconsConfig } from './entities/config.entity';
import { COLS, Column } from 'db/columns';
import { IEvents, EVENTS } from 'db/events';

@Injectable()
export class ConfigService {

  data = [...EVENTS];

  async getSvgIcons(): Promise<IconsConfig[]> {
    return SVG_ICONS;
  }
  async getColumns(): Promise<Column[]> {
    return COLS;
  }
  async getEvents(): Promise<IEvents[]> {
    return EVENTS;
  }

  async create(event: IEvents): Promise<IEvents[]> {

    this.data.push({
      color: event.color,
      name: event.name,
      description: event.description,
      create_date: new Date().toLocaleDateString(),
      last_update: new Date().toLocaleDateString(),
      create_by:'UNKNOW'
    });
    console.log(this.data)
    return this.data;
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
