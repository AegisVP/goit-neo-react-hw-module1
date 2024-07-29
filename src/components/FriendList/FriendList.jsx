import FriendListItem from './FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friendsList = [] }) => (
  <ul className={css.list}>
    {friendsList.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
    ))}
  </ul>
);

export default FriendList;