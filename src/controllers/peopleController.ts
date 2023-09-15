import { peopleServices } from "@/services/peopleServices"
import { Request, Response } from "express"

async function getRandomPerson(req: Request, res: Response) {
    const person = await peopleServices.getRandomPerson()
    res.send(person)
}

export const peopleController = { getRandomPerson }