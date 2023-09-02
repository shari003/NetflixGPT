/* eslint-disable no-unused-vars */
const setLocalStorage = (uid, email, displayName, photoURL) => {
    localStorage.setItem("uid", uid ? uid : "");
    localStorage.setItem("email", email ? email : "");
    localStorage.setItem("displayName", displayName ? displayName : "");
    localStorage.setItem("photoURL", photoURL ? photoURL : "");
}

export default setLocalStorage;