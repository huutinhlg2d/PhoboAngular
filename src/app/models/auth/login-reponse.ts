import { User } from "../user/user";

export interface LoginReponse {
    user: User,
    token: string,
}
