import { User } from "../user/user.interface";

export interface NewRoom {
  name: string;
  users: User[];
}
