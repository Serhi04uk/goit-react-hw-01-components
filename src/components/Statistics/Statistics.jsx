import data from './data.json';
import './stat.css';

const Ren = () => {
  return data.map(text => {
    return (
      <li className="item" key={text.id}>
        <span className="label">{text.label}</span>
        <span className="percentage">{text.percentage}%</span>
      </li>
    );
  });
};

export const Stat = () => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>;
      <ul className="stat-list">
        <Ren />
      </ul>
    </section>
  );
};
