export const localUserServ = {
    get: () => {},
    set: (userInfo) => {
      let dataJson = JSON.stringify(userInfo);
      localStorage.setItem("USER_INFOR", dataJson);
    },
    remove: () => {},
  };
  