import { Gender } from "./gender";
import { UserRole } from "./user-role";

export interface Register {
    name: string,
    email: string,
    avatarUrl: string,
    password: string,
    repassword: string,
    dateOfBirth: Date,
    userRole: UserRole,
    gender: Gender,
}
