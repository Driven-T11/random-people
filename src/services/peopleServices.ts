import { Person } from "@/protocols"
import { peopleRepository } from "@/repositories/peopleRepository"
import { getRandomNumber } from "@/utils/getRandomNumber"

async function getRandomPerson(): Promise<Person> {
    const count = await peopleRepository.getCount()
    const randomId = getRandomNumber(1, count)
    const randomPerson = await peopleRepository.getById(randomId)
    return randomPerson
}

export const peopleServices = { getRandomPerson }