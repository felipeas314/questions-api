import DataSourceMongoDb from "../../config/mongo-datasource-config";
import { RoomRepository } from "../../repository/room-repository";

export class RoomRepositoryFactory {
    
    constructor() {}

    static createRoomRepository(): RoomRepository {
        const dataSource = DataSourceMongoDb.getConnection()
        return new RoomRepository(dataSource)
    }
}