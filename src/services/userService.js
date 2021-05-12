import axios from 'axios';

export const userServicesAPI = {};

const headers = {
    'Content-type': 'application/json',
    Authorization: "Barer Token"
}


userServicesAPI.createUser = async(data) => { 
    try {
        let res = await axios.post('http://localhost:8080/users', data, { headers: headers });
        return res.data;
    } catch (err) {
        throw err.response? err.response.data : err
      }
}

userServicesAPI.userList = async() => {
    try { 
        let res =await axios.get('http://localhost:8080/users', { headers: headers });
        return res.data;
    } catch (err) { 
        throw err.response ? err.responsne.data : err;
    }
}

userServicesAPI.updateUser =async (id,data) => { 
    try { 
        let res =await axios.put(`http://localhost:8080/users/${id}`, data, { headers: headers });
        return res.data;
    } catch (err) {
        throw err.response ? err.response.data : err;
     }
}
userServicesAPI.deleteUser = async (id) => { 
    try { 
        let res = await axios.delete(`http://localhost:8080/users/${id}`, { headers: headers });
        return res.data;
    } catch (err) { 
        throw err.response ? err.response.data : err;
    }
}
