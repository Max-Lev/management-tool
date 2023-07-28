import { Injectable } from '@nestjs/common';

import { createReadStream } from 'fs';
import { join, resolve } from 'path';
import { CreateConfigDto } from './dto/create-config.dto';
import { UpdateConfigDto } from './dto/update-config.dto';
import { SVG_ICONS } from 'db/svg-icons';
import { IconsConfig } from './entities/config.entity';
import { COLS, Column } from 'db/columns';
import { IEvent, EVENTS } from 'db/events';
import { EventModel } from './dto/create-event.dto';
import { rejects } from 'assert';

export interface SuccessResponse {
  status: string,
  code: number,
  message: string
  data: object | Array<any> | any,
  request: {
    url: string,
    method: string
  }
}

@Injectable()
export class ConfigService {

  constructor() {

  }

  data = [...EVENTS];

  async getSvgIcons(): Promise<{ icons: IconsConfig[], message: any }> {
    return {
      icons: SVG_ICONS,
      message: 'Load Icons',
    };
  }
  async getColumns(): Promise<Column[]> {
    return COLS;
  }
  async getEvents(): Promise<IEvent[]> {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(EVENTS);
      }, 0);
    });
    // return EVENTS;
  }

  async create(event: IEvent): Promise<{ data: IEvent[], message: string }> {

    event = { ...event, ...{ id: this.data.length + 1 } };

    this.data.push(new EventModel(event));

    EVENTS.push(new EventModel(event));

    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: this.data,
          message: 'Create Event'
        });
      }, 0);
    });

  }

  updateProduct(event: IEvent): { data: IEvent[], message: string } {
    const data = this.data.filter(prod => {
      if (prod.id === event.id) {
        return prod = Object.assign(prod, {
          ...event,
          last_update: new Date().toLocaleDateString(),
        })
      } else {
        return prod;
      }
    });

    return {
      data: data,
      message: 'Update Event'
    };

  }

  async resolver(): Promise<{ products: IEvent[], columns: Column[] }> {
    const products = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(EVENTS)
        // reject({ errorCode: 500, message: 'Error' });
      }, 0);
    })
    const columns = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(COLS)
        // reject({ errorCode: 500, message: 'Error' });
      }, 0);
    })
    return Promise.all([products, columns]).then((value: [events: IEvent[], columns: Column[]]) => {

      return {
        message: 'Resolve Data',
        products: value[0],
        columns: value[1]
      };
    })
      .catch((reason) => {
        throw reason;
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
