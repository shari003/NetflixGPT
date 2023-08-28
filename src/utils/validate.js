export const checkData = (email, password) => {
    const EMAIL_REGEX = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const validEmail = EMAIL_REGEX.test(email);
    const validPwd = PASSWORD_REGEX.test(password);

    if(!validEmail) return "Email is not Valid";
    if(!validPwd) return "Password is not Valid";

    return null;
}