const checkValidData=(email,password)=>{
//* website : saturn cloud

const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

const isPaswordValid=/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

if(!isEmailValid) return "Email is not valid !";

if(!isPaswordValid) return "Password is invalid : e.g - #Test1234 ";

return null;


}
export default checkValidData;