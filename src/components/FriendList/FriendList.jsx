import FriendListItem from './FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends = [] }) => (
  <ul className={css.list}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
    ))}
  </ul>
);

export default FriendList;