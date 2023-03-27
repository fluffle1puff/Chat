export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
}

export interface UsersDTO {
  items: User[]
}

export const usersDTOTOUsers = (usersDTO: UsersDTO): User[] => usersDTO.items;
