import { Request, Response, Router } from "express";
const { v4: uuidv4 } = require("uuid");

import { CreateRoomController } from "../controllers/create-room-controller";
import { CreateRoomControllerFactory } from "../factory/room/room-controller-factory";

export default (router: Router): void => {

  let createRoomController: CreateRoomController = CreateRoomControllerFactory.createCreateRoomController()

  router.post('/room', async (request: Request, response: Response) => {
    const message = await createRoomController.handle(request.body)

    response.status(200).json({
        message
    })
  })
}