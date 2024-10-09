import { CreateRoomDTO } from "../dto/create-room-dto";
import { Room } from "../entity/room-entity";
import { CreateRoomUseCase } from "../usecase/create-room-use-case";

export class CreateRoomController {
  constructor(private createRoomUseCase: CreateRoomUseCase) {}

  async handle(createRoomDTO: CreateRoomDTO): Promise<Room> {
    return this.createRoomUseCase.execute(createRoomDTO);
  }
}
