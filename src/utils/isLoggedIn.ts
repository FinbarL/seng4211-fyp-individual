
export function isLoggedIn(cookie: string) {
    console.log("COOKIE:",cookie)
    if(cookie && cookie.includes("isLoggedIn=true")) {
        return cookie.split("username=")[1].split(";")[0];
    }
    return false;
}
