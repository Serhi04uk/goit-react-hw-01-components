import { Friends } from './FriendList/FriendList';
import { Prof } from './Profile/Profile';
import { Stat } from './Statistics/Statistics';
import { Trans } from './Transaction/Transaction';

export const App = () => {
  return (
    <>
      <Prof></Prof>
      <Stat></Stat>
      <Friends></Friends>
      <Trans></Trans>
    </>
  );
};
