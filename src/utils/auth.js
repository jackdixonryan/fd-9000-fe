import * as axios from "axios";

const auth = (function createAuth() {
  "use strict";

  const authEndpoint = "https://fd-9000-server-production.herokuapp.com/authenticate";

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
