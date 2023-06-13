import { serverUrl } from './link';
import axios  from 'axios';

const VerifySecretApi = async (secret) => {

    var data = JSON.stringify({

      });
      
      var config = {
        method: 'post',
        url: serverUrl + "/users/verifyreset?key=" + secret,
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

export default VerifySecretApi;