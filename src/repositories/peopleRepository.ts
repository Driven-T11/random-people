import { db } from "@/database/databaseConnection"
import { Count, Person } from "@/protocols"

async function getById(id: number): Promise<Person> {
    const person = await db.query<Person>(`SELECT * FROM people WHERE id=$1;`, [id])
    return person.rows[0]
}

async function getCount(): Promise<number> {
    const person = await db.query<Count>(`SELECT COUNT(*) FROM people;`)
    return person.rows[0].count
}

export const peopleRepository = { getById, getCount }
