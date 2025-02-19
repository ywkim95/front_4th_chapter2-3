import { User } from './user.ts';

export const findUserById = (users: User[], userId: number): User | undefined =>
  users.find((user) => user.id === userId);
