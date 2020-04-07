import React from 'react';
import FacebookLogin, { ReactFacebookLoginInfo } from 'react-facebook-login';
import { UserInfo, SNS_DIV } from '../../api/user';

interface LoginFacebookProps {
  callback: (fbResponse: UserInfo) => void;
}

export default function LoginFacebook({ callback }: LoginFacebookProps) {
  const resposeFacebook = (response: ReactFacebookLoginInfo) => {
    callback({
      snsId: response.id,
      snsDiv: SNS_DIV.FACEBOOK,
      email: response.email || '',
      name: response.name || '',
      accessToken: response.accessToken,
    });
  };

  return (
    <div>
      <FacebookLogin
        appId="501191147275518"
        autoLoad={false}
        fields="name,email,picture"
        size="small"
        callback={resposeFacebook}
      />
    </div>
  );
}
