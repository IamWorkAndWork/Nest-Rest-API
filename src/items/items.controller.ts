import { Song } from "./interfaces/songs.interface";
import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  Res,
  Param,
  Delete,
  Put
} from "@nestjs/common";
import { CreateItemDto } from "./dto/create-item.dto";
import { Request, Response } from "express";
import { ItemsService } from "./items.service";
import { Item } from "./interfaces/items.interface";
import { CreateSongDto } from "./dto/create-song.dto";
@Controller("items")
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  // using express response, request
  //   @Get()
  //   findAll(@Req() req: Request, @Res() res: Response): Response {
  //     console.log("req = ",req.url)
  //     return res.send({
  //         name:"Hello World"
  //     })
  //     // return "Get All Items";
  //   }

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(":id")
  findOne(@Param() param): Promise<Item> {
    //   console.log("param = ",param)
    // return `item ${param.id}`;
    // console.log("find one = ",param.id)
    return this.itemsService.findOne(param.id);
  }

  @Delete(":id")
  delete(@Param("id") id): Promise<Item> {
    // return "delete " + id;
    return this.itemsService.delete(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }

  @Post("song")
  createSong(@Body() createSongDto: CreateSongDto): Promise<Song> {
    return this.itemsService.addSong(createSongDto);
  }

  @Put(":id")
  update(@Body() updateItemDto: CreateItemDto, @Param("id") id): Promise<Item> {
    // return `Update id = ${id} - item = ${updateItemDto.name}`;
    return this.itemsService.update(id, updateItemDto);
  }
}
