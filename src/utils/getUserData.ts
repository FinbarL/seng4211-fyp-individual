import type {UserData} from "../types/types";

export function getUserData(cookie: string): UserData | null {
    if(cookie) {
        try {
            const JsonObj = JSON.parse(cookie);
            const User: UserData = {
                id: JsonObj.id,
                username: JsonObj.username,
                email: JsonObj.email,
                password: JsonObj.password,
                firstName: JsonObj.firstName,
                lastName: JsonObj.lastName,
                gender: JsonObj.gender,
                image: JsonObj.image,
                token: JsonObj.token
            }
            return User;

        } catch(e) {
            console.log("ERROR:",e)
            return null;
        }
    }
    return null;
}
