import { Request, Response } from 'express'

export class HealthController {
  handle(): string {
    return "Server UP"
  }
}