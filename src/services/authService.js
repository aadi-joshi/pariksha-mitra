// ONLY THESE CREDENTIALS ARE VALID
const validCredentials = {
    email: "aadi.joshi24@vit.edu",
    password: "pmtest@24"
};

const login=(email, password) => {
    // if credentials are valid, then generate and assign session details
    if (email === validCredentials.email && password === validCredentials.password) {
        //generates a random session id
        const sessionId = Math.random().toString(36).substring(2, 15);
        localStorage.setItem("authSessionId", sessionId);
        localStorage.setItem("loginMethod", "login_page");
        localStorage.setItem("authToken", "sampleToken123");
        return true;
    }
    return false;
};
// checks if the user actually entered the credentials through login page.
const isAuthenticatedViaLoginPage = () => {
    return localStorage.getItem("loginMethod") === "login_page" && 
           !!localStorage.getItem("authSessionId");
};



//clears info once sign out button is clicked, hence not allowing users to access their dashboard again
const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("loginMethod");
    localStorage.removeItem("authSessionId");
};
export default { 
    login, 
    isAuthenticatedViaLoginPage, 
    logout 
};