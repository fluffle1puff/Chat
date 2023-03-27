import { User } from "../user/user.interface";

export interface Room {
  id: number;
  name?: string;
  chatName?: string;
  users: User[];
  created_at: Date;
  updated_at: Date;
}

export interface RoomsDTO {
  items: Room[];
}

export const roomsDTOToRooms = (roomsDTO: RoomsDTO): Room[] => roomsDTO.items;
