export const localUserServ = {
    get: () => {
        let dataJSON = localStorage.getItem('USER_INFOR')
        return JSON.parse(dataJSON)
    },
    set: (userInfo) => {
      let dataJson = JSON.stringify(userInfo);
      localStorage.setItem("USER_INFOR", dataJson);
    },
    remove: () => {
        localStorage.removeItem('USER_INFOR');
    },
  };
  