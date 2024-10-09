import "reflect-metadata";
import { DataSource } from "typeorm";
import { Room } from "../entity/room-entity";

export default class DataSourceMongoDb {
  private static dataSource: DataSource;

  static async createConnection(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.dataSource = new DataSource({
        type: "mongodb",
        host: "localhost",
        port: 27017,
        database: "questions",
        synchronize: false,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        logging: true,
        entities: [Room],
        migrations: [],
        subscribers: [],
      });

      this.dataSource.initialize().then(() => {
        console.log('Connection UP')
        resolve();
      });
    });
  }

  static getConnection(): DataSource {
    return this.dataSource;
  }
}
