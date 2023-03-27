import { User } from '../user/user.interface';
import { Room } from './room.interface';

export interface Message {
  id: number;
  text: string;
  user: User;
  room: Room;
  created_at: Date;
  updated_at: Date;
}

export interface MessagesDTO {
  items: Message[];
}

export const messagesDTOToMessages = (messagesDTO: MessagesDTO): Message[] => messagesDTO.items;
