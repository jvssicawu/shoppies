import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useContext } from 'react';
import { bannerSuccessMsg, HIDE_BANNER_ACTION, SUCCESS } from '../Constants';
import { appContext } from '../contexts/Store';

const handleClose = (dispatch) => {
  dispatch({ type: HIDE_BANNER_ACTION });
};

const Banner = () => {
  const { state, dispatch } = useContext(appContext);
  return (
    <Snackbar open={state.showBanner} onClose={() => handleClose(dispatch)}>
      <Alert onClose={() => handleClose(dispatch)} severity={SUCCESS}>
        {bannerSuccessMsg}
      </Alert>
    </Snackbar>
  );
};

export default Banner;
