import { Injectable } from '@nestjs/common';

import { createReadStream } from 'fs';
import { join } from 'path';
import { CreateConfigDto } from './dto/create-config.dto';
import { UpdateConfigDto } from './dto/update-config.dto';

@Injectable()
export class ConfigService {

  getDefaultConfig() {
    const file = createReadStream(join(process.cwd(), 'db/svg-icons.json'));
    console.log('file:',file)
    return file;
    // return [{
    //   name:'Max'
    // }]
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
