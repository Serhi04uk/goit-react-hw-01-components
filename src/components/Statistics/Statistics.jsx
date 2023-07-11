import data from './data.json';
import css from './stat.module.css';
import PropTypes from 'prop-types';

const Ren = ({ id, label, percentage }) => {
  return data.map(text => {
    return (
      <li className={css.item} key={text.id}>
        <span className={css.label}>{text.label}</span>
        <span className={css.percentage}>{text.percentage}%</span>
      </li>
    );
  });
};

export const Stat = () => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>;
      <ul className={css.stat}>
        <Ren />
      </ul>
    </section>
  );
};

Ren.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.string,
};
