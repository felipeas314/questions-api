import "reflect-metadata"
import AppDataSource from "./config/mongo-datasource-config";


AppDataSource.createConnection()
  .then(async () => {
    const { setupApp } = await import("./config/express-config");
    const s = await setupApp();
    s.listen(4000, () => console.log("werwerwerd"));
  })
  .catch((error) => console.log(error));
