import { useState } from "react";

const useLoginValidation = (username : string, password : string, isSubmitted : boolean) => {
    const alert = 
    {
        "alert": false,
        "alertMessage": "",
        "alertType": "error"
     }
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    let passwordAlert = alert;
    let usernameAlert = alert;
    const validateUsername = (user : string) => {
        if(user.length === 0 && !isSubmitted) {
            usernameAlert = {
                "alert": false,
                "alertMessage": "",
                "alertType": "userError"
             }
        }
        else if(user.length < 5) {
            usernameAlert = {
                "alert": true,
                "alertMessage": "Username should be at least 5 characters length!",
                "alertType": "userError"
            }
        }
        else {
            usernameAlert = {
                "alert": false,
                "alertMessage": "",
                "alertType": ""
            }
        }
    }
    const validatePassword = (pass : string) => {
        if(pass.length ===  0 && !isSubmitted) {
            passwordAlert = {
                "alert": false,
                "alertMessage": "",
                "alertType": "passwordError"
             }
        }
        else if(regex.test(pass)) {
            passwordAlert = {
                "alert": false,
                "alertMessage": "",
                "alertType": ""
            }
        }
        else if(pass.length < 6) {
            passwordAlert = {
                "alert": true,
                "alertMessage":"Password should be at least 6 characters length!",
                "alertType": "passwordError"
            }
        }
        else {
            passwordAlert = {
                "alert": true,
                "alertMessage":"Password should contain at least one lower,upper character and number!",
                "alertType": "passwordError"
            }
        }
    }
    validateUsername(username)
    validatePassword(password);
    return {usernameAlert, passwordAlert}
}

export default useLoginValidation