import "reflect-metadata"
import { Entity, ObjectId, ObjectIdColumn, Column, PrimaryGeneratedColumn } from "typeorm";

export class Response {

  @Column('text', { nullable: false })
  text: string;

  constructor(text: string) {
    this.text = text;
  }
  
}
