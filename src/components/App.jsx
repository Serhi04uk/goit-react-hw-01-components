import { Friends } from './FriendList/FriendList';
import { Prof } from './Profile/Profile';
import { Stat } from './Statistics/Statistics';
import { Trans } from './Transaction/Transaction';

import user from './Profile/user.json';
import data from './Statistics/data.json';
import transaData from './Transaction/transaData.json';
import friendsData from './FriendList/friendsData.json';

export const App = () => {
  return (
    <>
      <Prof
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      ;<Stat title="Upload stats" stats={data} />
      <Friends friends={friendsData} />
      <Trans items={transaData} />
    </>
  );
};
