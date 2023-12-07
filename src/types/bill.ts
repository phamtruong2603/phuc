import { Booking } from "./booking"
import { Room } from "./room"

export interface Bill {
    id: Number,
    name: string
    booking: Booking
    room: Room
}