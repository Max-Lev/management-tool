import { Injectable } from '@nestjs/common';

import { createReadStream } from 'fs';
import { join } from 'path';
import { CreateConfigDto } from './dto/create-config.dto';
import { UpdateConfigDto } from './dto/update-config.dto';
import { SVG_ICONS } from 'db/svg-icons';
import { IconsConfig } from './entities/config.entity';
import { COLS, Column } from 'db/columns';
import { IEvent, EVENTS } from 'db/events';
import { EventModel } from './dto/create-event.dto';
import { rejects } from 'assert';

@Injectable()
export class ConfigService {

  data = [...EVENTS];

  async getSvgIcons(): Promise<IconsConfig[]> {
    return SVG_ICONS;
  }
  async getColumns(): Promise<Column[]> {
    return COLS;
  }
  async getEvents(): Promise<IEvent[]> {
    return EVENTS;
  }

  async create(event: IEvent): Promise<IEvent[]> {

    event = { ...event, ...{ id: this.data.length + 1 } };
    
    this.data.push(new EventModel(event));

    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
      }, 1000);
    });

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
