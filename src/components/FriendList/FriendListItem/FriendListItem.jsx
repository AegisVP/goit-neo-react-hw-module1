import css from './FriendListItem.module.css';

const FriendListItem = ({ key, avatar, name, isOnline }) => (
  <li className={css.card} key={key}>
    <img className={css.avatar} src={avatar} alt='User avatar' width='80' />
    <p className={css.name}>{name}</p>
    <span className={css.status} style={{ color: isOnline ? 'green' : 'red' }}>
      {isOnline ? 'Online' : 'Offline'}
    </span>
  </li>
);

export default FriendListItem;
