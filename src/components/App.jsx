import user from "../json/user.json";
import statistics from "../json/statistics.json";
import friends from "../json/friends.json";
import transactions from "../json/transactions.json";

import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

import css from "./App.module.css";

export const App = () => {
  return (
    <div className={css.container}>
      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </div>
  );
};
