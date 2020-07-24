import React, { useEffect, useState, useContext } from "react";
import Services from "../../services";
import getUser from "../../utils/getUser";
import { AppContext } from "../../AppContext/AppContext";
import Routes from "../../Routes";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps {}

const Settings = ({ history }: Props) => {
  const { updateContext, settingsData } = useContext(AppContext) || {};

  useEffect(() => {
    const getSettingsData = async () => {
      const { token, username } = getUser() || {};
      const { status, data } = await Services.GetSettingsData({ token });

      if (status === 403) {
        history.push(Routes.login);
      } else {
        updateContext({ settingsData: data, username });
      }
    };

    const isSettingsDataExist = Object.keys(settingsData).length;

    if (!isSettingsDataExist) getSettingsData();
  }, []);

  return <div className='Settings--container'>{settingsData}</div>;
};

export default withRouter(Settings);
