import Section from './Section/Section';
import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import css from './App.module.css';

import profile from '../data/user.json';
import friendsList from '../data/friends.json';
import transactionHistory from '../data/transactions.json';

function App() {
  return (
    <div className={css.app}>
      <Section title="User profile">
        <Profile
          image={profile.avatar}
          name={profile.username}
          tag={profile.tag}
          location={profile.location}
          stats={profile.stats}
        />
      </Section>

      <Section title="Friends">
        <FriendList friends={friendsList} />
      </Section>

      <Section title="Transactions">
        <TransactionHistory items={transactionHistory} />
      </Section>
    </div>
  );
}

export default App;
