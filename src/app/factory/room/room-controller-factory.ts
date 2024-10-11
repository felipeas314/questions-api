import { CreateRoomController } from "../../controllers/create-room-controller";
import { CreateRoomUseCaseFactory } from "./create-room-use-case-factory";

export class CreateRoomControllerFactory {
    
    constructor() {}

    static createCreateRoomController(): CreateRoomController {
        const createRoomUseCase = CreateRoomUseCaseFactory.createCreateRoomUseCaseFactory()
        const createRoomController = new CreateRoomController(createRoomUseCase)
        return createRoomController
    }
}