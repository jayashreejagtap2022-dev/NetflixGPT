export const checkValidData = (email, password) => {
   const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    if (!emailRegex.test(email)) {
        return("Please enter a valid email address");
        
    }

    if (!passwordRegex.test(password)) {
        return("Password must be at least 8 characters, include uppercase, lowercase, number, and special character.");
       
    }

};