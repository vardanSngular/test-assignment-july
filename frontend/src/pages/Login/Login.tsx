import React, { useState, useContext } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Services from "../../services";
import Routes from "../../Routes";
import { AppContext } from "../../AppContext/AppContext";

interface Props extends RouteComponentProps {}

interface State {
  email: string;
  password: string;
}

const Login = ({ history }: Props) => {
  const [state, setState] = useState<State>({
    email: "",
    password: "",
  });

  const { updateContext } = useContext(AppContext) || {};

  const onLogin = async () => {
    const { email, password } = state;
    const { status, username } = await Services.Login({
      password,
      username: email,
    });

    if (status == 200) {
      updateContext({ username });
      history.push(Routes.home);
    }
  };

  const onSignUp = async () => {
    const { email, password } = state;
    const { status, username } = await Services.SignUp({
      password,
      username: email,
    });

    if (status === 201) {
      updateContext({ username });
      history.push(Routes.home);
    }
  };

  const updateState = (updatedState: object) => {
    setState({ ...state, ...updatedState });
  };

  const { email, password } = state;
  const isValidCredentials = !!email && !!password;

  return (
    <div className='Login--container'>
      <div className='Login--container--form'>
        <div className='Login--container--form--inputContainer'>
          <Input
            label='email'
            value={email}
            onChange={(updatedEmail) => updateState({ email: updatedEmail })}
          />
          <Input
            label='password'
            value={password}
            isPassword
            onChange={(updatedPassword) =>
              updateState({ password: updatedPassword })
            }
          />
        </div>

        <div className='Login--container--form--buttonContainer'>
          <Button
            isActive={isValidCredentials}
            label='Login'
            onClick={onLogin}
          />
          <Button
            isActive={isValidCredentials}
            label='SignUp'
            onClick={onSignUp}
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
