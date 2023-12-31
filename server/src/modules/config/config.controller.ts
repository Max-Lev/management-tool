import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ConfigService } from './config.service';
import { CreateConfigDto } from './dto/create-config.dto';
import { UpdateConfigDto } from './dto/update-config.dto';
import { IEvent } from 'db/events';

@Controller('config')
export class ConfigController {
  constructor(private readonly configService: ConfigService) { }

  @Get('icons')
  svgIcons() {
    return this.configService.getSvgIcons();
  }
  @Get('columns')
  columns() {
    return this.configService.getColumns();
  }
  @Get('events')
  events() {
    return this.configService.getEvents();
  }

  @Get('resolver')
  resolver() {
    return this.configService.resolver();
  }

  @Post()
  create(@Body() event: IEvent) {
    return this.configService.create(event);
  }

  @Put()
  updateProduct(@Body() event:IEvent){
    return this.configService.updateProduct(event);
  }
  

  @Get()
  findAll() {
    return this.configService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.configService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConfigDto: UpdateConfigDto) {
    return this.configService.update(+id, updateConfigDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.configService.remove(+id);
  }
}
