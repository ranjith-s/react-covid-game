import * as ACTION_TYPES from "./action_types";

export const login = (username, stats) => {
  return {
    type: ACTION_TYPES.LOGIN,
    data: { username: username, stats: stats },
  };
};

export const loading = (loadingState) => {
  return {
    type: ACTION_TYPES.LOADING,
    data: loadingState,
  };
};

export const asyncLogin = (username) => {
  return (dispatch) => {
    //turn on loader
    dispatch(loading(true));

    //making a server call to get covid cases today
    fetch("https://api.covid19api.com/summary")
      .then((response) => response.json())
      .then((res) => {
        dispatch(loading(false)); //turn off loader

        if (res.Global.NewConfirmed) {
          let stats = {
            total: res.Global.TotalConfirmed,
            recovered: res.Global.TotalRecovered,
            deaths: res.Global.TotalDeaths,
          };
          // Login to covid-19 awareness application as and when we get the covid-stats
          dispatch(login(username, stats));
        }
      })
      .catch((e) => {
        console.error(e);
        //turn off loader
        dispatch(loading(false));
      });
  };
};

export const logout = () => {
  return {
    type: ACTION_TYPES.LOGOUT,
  };
};

export const prevent = () => {
  return {
    type: ACTION_TYPES.PREVENT,
  };
};

export const reset = () => {
  return {
    type: ACTION_TYPES.RESET,
  };
};
