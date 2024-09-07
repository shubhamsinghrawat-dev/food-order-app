export const checkvalidate = (isSignUp, name, email, password) => {
    // Validation checks
    const isNameValid = isSignUp ? /\b([A-ZÀ-ÿa-z][-,a-z. ']+[ ]*)+/.test(name) : true;
    const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isNameValid && isSignUp) return "Please Enter Proper Name"; // Name check only for signup
    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password is not valid, Hint:- Uppercase, numbers, special character, >=8";

    return null;
}
