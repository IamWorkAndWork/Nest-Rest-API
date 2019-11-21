import { Module } from "@nestjs/common";
import { ItemsController } from "./items.controller";
import { ItemsService } from "./items.service";
import { ItemSchema } from "./schemas/item.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { SongSchema } from "./schemas/songs.schema";
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: "Item",
        schema: ItemSchema
      },
      {
        name: "Song",
        schema: SongSchema
      }
    ])
  ],
  controllers: [ItemsController],
  providers: [ItemsService]
})
export class ItemsModule {}
