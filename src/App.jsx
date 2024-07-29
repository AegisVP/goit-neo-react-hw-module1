import Section from './components/Section/Section';
import Profile from './components/Profile/Profile';
import Statistics from './components/Stats/Stats';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import userProfile from './data/user.json';
import statsData from './data/data.json';
import friendsList from './data/friends.json';
import transactionHistory from './data/transactions.json';

function App() {
  return (
    <>
      <Section title="User profile">
        <Profile
          avatarURL={userProfile.avatar}
          userName={userProfile.username}
          userTag={userProfile.tag}
          location={userProfile.location}
          followers={userProfile.stats.followers}
          views={userProfile.stats.views}
          likes={userProfile.stats.likes}
        />
      </Section>

      <Section title="Statistics">
        <Statistics title="Upoad stats" statsList={statsData} />
      </Section>

      <Section title="Friends">
        <FriendList friendsList={friendsList} />
      </Section>

      <Section title="Transactions">
        <TransactionHistory transactionHistory={transactionHistory} />
      </Section>
    </>
  );
}

export { App };
