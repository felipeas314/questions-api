import { CreateRoomDTO } from "../dto/create-room-dto";
import { Room } from "../entity/room-entity";
import { RoomRepository } from "../repository/room-repository";

export class CreateRoomUseCase {

    constructor(private roomRepository: RoomRepository) {
    }

    async execute(createRoomDTO: CreateRoomDTO): Promise<Room> {
        return this.roomRepository.create(createRoomDTO)
    }
}