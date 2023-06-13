import { serverUrl } from './link';
import axios  from 'axios';

const NewPasswordApi = async (email, password, secret) => {

    var data = JSON.stringify({
        email: email,
        newPassword: password,
        secret: secret
      });
      
      var config = {
        method: 'post',
        url: serverUrl + "/users/newpassword",
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      try {
        const res = await axios.request(config)
        console.log(res)
        return res;
      } catch (e) {
          console.log(e)
          return e
      }

}

export default NewPasswordApi;