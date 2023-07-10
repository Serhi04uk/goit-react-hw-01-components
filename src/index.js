import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Prof } from 'components/Profile/Profile';
import { Stat } from 'components/Statistics/Statistics';
import { Friends } from 'components/FriendList/FriendList';
import { Trans } from 'components/Transaction/Transaction';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App />  */}
    <Prof></Prof>
    <Stat></Stat>
    <Friends></Friends>
    <Trans></Trans>
  </React.StrictMode>
);
