//connect to server
import axios from "axios"
import { Component } from "react";
class ApiService extends Component {

    getUserList = () => {
     return axios.get("https://jsonplaceholder.typicode.com/users");
    }
    getPostsList = () => {
        return axios.get("https://jsonplaceholder.typicode.com/posts");
    }
    addNewUserPost=(data)=>{
        return axios.post("https://jsonplaceholder.typicode.com/posts",data).then((response)=>{return response});

    }
}
export default new ApiService()
