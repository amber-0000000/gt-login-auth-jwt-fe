import axios from "axios"
import {IUser} from "../jwt-fe/app/types/users"

const baseURL = 'http://localhost:8080/users/'

export const getPassword = async (loginUser: IUser): Promise <IUser> => {
    return axios.get("http://localhost:8080/users/" + loginUser.email).then(res => {
        console.log("res", res.data)
        return (res.data)
    })
}