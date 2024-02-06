import userData from '../database/userData.json';
import {Profile} from './Profile/Profile.jsx';

import friends from '../database/friends.json';
import {FriendList} from './FriendList/FriendList.jsx';

import transactions from '../database/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory.jsx';


export const App = () => {
  return (
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
