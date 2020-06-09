import axios from 'axios'
import setAuthorizationToken from './../services/SetAuthorizationToken'
import jwt from 'jsonwebtoken'

class Service{
    state={

    }
    // Api for Login
    login(data){
        console.log("login is axios ", data);
        return axios.post('https://localhost:5001/api/Employee/login', data);
    }

    // Api for getting all user data
    getAllUser(){
        console.log("user data retrieved");
        return axios.get('https://localhost:5001/api/Employee/');
    }

    getSpecificUser(id){
        console.log("get data by id in axios",id);
        return axios.get('https://localhost:5001/api/Employee/'+id)
    }

    register(data){
        console.log('register in axios service');
        return axios.post('https://localhost:5001/api/Employee', data)
        
    }

    delete(id){
        console.log('delete by id in axios', id);
        return axios.delete('https://localhost:5001/api/Employee/'+id);  
    }

    update(data){
        console.log('update data in axios',data);
        return axios.put('https://localhost:5001/api/Employee/update',data);
        
    }

}

export default Service;