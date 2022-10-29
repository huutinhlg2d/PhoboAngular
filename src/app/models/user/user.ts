import { Gender } from "./gender";
import { UserRole } from "./user-role";

export interface User {
    id: number,
    name: string,
    email: string,
    avatarUrl: string,
    dateOfBirth: Date,
    userRole: UserRole,
    gender: Gender,
    isDeleted: boolean,
}
