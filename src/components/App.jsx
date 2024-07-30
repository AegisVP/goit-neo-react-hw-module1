import Section from './Section/Section';
import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import css from './App.module.css';

import userProfile from '../data/user.json';
import friendsList from '../data/friends.json';
import transactionHistory from '../data/transactions.json';

function App() {
  return (
    <div className={css.app}>
      <Section title="User profile">
        <Profile
          image={userProfile.avatar}
          name={userProfile.username}
          tag={userProfile.tag}
          location={userProfile.location}
          stats={userProfile.stats}
        />
      </Section>

      <Section title="Friends">
        <FriendList friendsList={friendsList} />
      </Section>

      <Section title="Transactions">
        <TransactionHistory transactionHistory={transactionHistory} />
      </Section>
    </div>
  );
}

export default App;
