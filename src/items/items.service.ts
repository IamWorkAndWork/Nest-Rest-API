import { Song } from "./interfaces/songs.interface";
import { Injectable } from "@nestjs/common";
import { Item } from "./interfaces/items.interface";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel("Item") private readonly itemModel: Model<Item>,
    @InjectModel("Song") private readonly songModel: Model<Song>
  ) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }

  async create(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }

  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndRemove(id);
  }

  async update(id: string, item: Item): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }

  async addSong(item: Song): Promise<Song> {
    const newItem = new this.songModel(item);
    return await newItem.save();
  }

  //   async deleteAll(){
  //       return await this.itemModel.de
  //   }
}
