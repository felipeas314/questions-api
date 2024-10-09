import "reflect-metadata"
import { Entity, ObjectId, ObjectIdColumn, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('room')
export class Room {

  @ObjectIdColumn()
  id: ObjectId;

  @Column('text', { nullable: false })
  name: string;

  @Column('text', { nullable: false })
  description: string;

  constructor(id: ObjectId, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
  
}
