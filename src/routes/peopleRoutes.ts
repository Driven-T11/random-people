import { peopleController } from "@/controllers/peopleController"
import { Router } from "express"

const peopleRouter = Router()

peopleRouter.get("/person", peopleController.getRandomPerson)

export default peopleRouter