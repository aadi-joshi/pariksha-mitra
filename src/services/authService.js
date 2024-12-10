// ONLY THESE CREDENTIALS ARE VALID
const validCredentials = {
    email: "aadi.joshi24@vit.edu",
    password: "pmtest@24"
};
const login = (email, password) => {
    return email === validCredentials.email && password === validCredentials.password;
};
export default { login };
