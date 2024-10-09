import { ObjectId } from "typeorm";

export interface CreateRoomDTO {
    name: string;
    description: string;
}