import css from './FriendListItem.module.css';

const FriendListItem = ({ key, avatar, name, isOnline }) => (
  <li className={css.card} key={key}>
    <span className={css.status} style={{ backgroundColor: isOnline ? 'green' : 'red' }} />
    <img className={css.avatar} src={avatar} alt='User avatar' width='48' />
    <p className={css.name}>{name}</p>
  </li>
);

export default FriendListItem;
