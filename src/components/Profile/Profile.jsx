// import { ProfileCard, Avatar, Name, Info, StatList, StatItem, StatLabel, StatValue } from './Profile.styled';
import css from './Profile.module.css';

const Profile = ({ avatarURL = 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png', userName, userTag, location, followers = '-', views = '-', likes = '-' }) => {
  const stats = [
    {
      label: 'Followers',
      value: followers,
    },
    {
      label: 'Views',
      value: views,
    },
    {
      label: 'Likes',
      value: likes,
    },
  ];

  return (
    <div className={css.card}>
      <img className={css.avatar} src={avatarURL} alt="User avatar" />
      <p className={css.nam}>{userName}</p>
      <p className={css.info}>@{userTag}</p>
      <p className={css.info}>{location}</p>

      <ul className={css.stats}>{stats.map(sMap)}</ul>
    </div>
  );
};

function sMap(stat) {
  return (
    <li className={css.stat} key={stat.label}>
      <span className={css.label}>{stat.label}</span>
      <span className={css.value}>{stat.value}</span>
    </li>
  );
}

export default Profile;