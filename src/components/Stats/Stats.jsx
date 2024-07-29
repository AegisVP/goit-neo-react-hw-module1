import css from './Stats.module.css';
// const css = {};

const Statistics = ({ title, statsList = [] }) => (
  <div className={css.stats}>
    {title && <h3 className={css.title}>{title}</h3>}

    <ul className={css.stats}>
      {statsList.map(({ id, label, percentage }) => (
        <Statistic key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  </div>
);

const Statistic = ({ id, label, percentage }) => (
  <li className={css.stat} key={id}>
    <span className={css.label}>{label}</span>
    <span className={css.value}>{percentage}%</span>
  </li>
);

export default Statistics;
