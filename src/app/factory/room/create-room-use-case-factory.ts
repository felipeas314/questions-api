import DataSourceMongoDb from "../../config/mongo-datasource-config";
import { RoomRepository } from "../../repository/room-repository";
import { CreateRoomUseCase } from "../../usecase/create-room-use-case";
import { RoomRepositoryFactory } from "./room-repository-factory";

export class CreateRoomUseCaseFactory {
    
    constructor() {}

    static createCreateRoomUseCaseFactory(): CreateRoomUseCase {
        const roomRepository = RoomRepositoryFactory.createRoomRepository()
        const createRoomUseCase = new CreateRoomUseCase(roomRepository)
        return createRoomUseCase
    }
}