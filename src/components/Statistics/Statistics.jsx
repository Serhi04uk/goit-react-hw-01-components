import css from './stat.module.css';
import PropTypes from 'prop-types';

export const Stat = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>};
      <ul className={css.stat}>
        {stats.map(text => {
          return (
            <li className={css.item} key={text.id}>
              <span className={css.label}>{text.label}</span>
              <span className={css.percentage}>{text.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Stat.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
