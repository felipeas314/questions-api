import { DataSource ,MongoRepository } from "typeorm"


import { Room } from "../entity/room-entity";
import { CreateRoomDTO } from "../dto/create-room-dto";

export class RoomRepository {

    private repository: MongoRepository<Room>;

    constructor(dataSource: DataSource) {
        this.repository = dataSource.getMongoRepository(Room);
    }

    async create(room: CreateRoomDTO): Promise<Room> {
        return await this.repository.save(room)
    }

    async findAll() {
        return await this.repository.findAndCount()
    }
}