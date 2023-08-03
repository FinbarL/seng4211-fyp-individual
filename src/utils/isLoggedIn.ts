
export function isLoggedIn(cookie: string) {
    console.log(cookie)
    if(cookie.includes("isLoggedIn=true")) {
        return cookie.split("username=")[1].split(";")[0];
    }
    return false;
}
