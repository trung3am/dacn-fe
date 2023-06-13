import { serverUrl } from './link';
import axios  from 'axios';

const ChangePasswordApi = async (token, data) => {

      
      var config = {
        method: 'post',
        url: serverUrl + "/users/changepassword",
        headers: { 
          Authorization: "Bearer " + token
        },
        data:data

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

export default ChangePasswordApi;