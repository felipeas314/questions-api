import "reflect-metadata"
import { Entity, ObjectId, ObjectIdColumn, Column, PrimaryGeneratedColumn } from "typeorm";

export class Test {

    @ObjectIdColumn()
    id: ObjectId;

    constructor(id: ObjectId) {
        this.id = id
    }

}