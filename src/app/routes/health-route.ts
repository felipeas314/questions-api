import { Request, Response, Router } from "express";
import { HealthController } from "../controllers/health-controller";

export default (router: Router): void => {

  const healthController = new HealthController()

  router.get('/health', (request: Request, response: Response) => {

    const message = healthController.handle()

    response.status(200).json({
        message
    })
  })
}