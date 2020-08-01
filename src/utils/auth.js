import * as axios from "axios";

const auth = (function createAuth() {
  "use strict";

  const authEndpoint = "http://localhost:9000/authenticate";

  return {
    async signIn(username, password) {
      try {
        const call = await axios.post(authEndpoint, {
          clientID: username,
          clientSecret: password
        });
        
        const { data } = call;
        const { accessToken } = data;

        if (accessToken) {
          // we have an authed user! Let em in
          return {
            username: username,
            accessToken: accessToken
          }
        } 

      } catch(error) {
        console.log(error);
      }
    }
  }
})();

export default auth;
