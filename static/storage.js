
export async function register() {
    // const response = await fetch(`http://${window.location.hostname}:5000/register`, {
    //     mode: "no-cors",
    //     method: "POST"
    // });
    const response = await fetch(`http://${window.location.hostname}/internal/register`, {
        mode: "no-cors",
        method: "POST"
    });
    const userData = response.then(response => response.json());
    localStorage.setItem("userID", userData.userID);
    localStorage.setItem("userHash", userData.userHash);

    return userData;
}

export async function getUserID() {
    let userID = localStorage.getItem("userID");
    if (!userID) {
        userID = await register().userID;
    }
    return userID;
}

export async function getUserHash() {
    let userHash = localStorage.getItem("userHash");
    if (!userHash) {
        userHash = await register().userHash;
    }
    return userHash;
}

export function isRegistered() {
    return !!localStorage.getItem("userID") && !!localStorage.getItem("userHash");
}