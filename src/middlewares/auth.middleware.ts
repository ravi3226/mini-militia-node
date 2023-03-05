export const validateSignupPayload = (data: any) => {
    const errors = {
        email: [],
        password: [],
        confirmPassword: []
    }

    if (!data.email || data.email === "") errors.email.push(`email is required.`);
    if (!data.password || data.password === "") errors.password.push(`password is required.`);
    if ( !data.confirmPassword || data.confirmPassword === "" ) errors.confirmPassword.push("confirm password is required.")

    
}