import React, { useEffect, useState, useContext } from "react";
import Services from "../../services";
import getUser from "../../utils/getUser";
import { AppContext } from "../../AppContext/AppContext";
import Routes from "../../Routes";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps {}

const Dashboard = ({ history }: Props) => {
  const { updateContext, dashboardData } = useContext(AppContext) || {};

  useEffect(() => {
    const getDashboardData = async () => {
      const { token, username } = getUser() || {};

      const { status, data } = await Services.GetDashboardData({ token });

      if (status === 403) {
        history.push(Routes.login);
      } else {
        updateContext({ dashboardData: data, username });
      }
    };

    const isDashboardDataExist = Object.keys(dashboardData).length;

    if (!isDashboardDataExist) getDashboardData();
  }, []);

  return <div className='Dashboard--container'>{dashboardData}</div>;
};

export default withRouter(Dashboard);
