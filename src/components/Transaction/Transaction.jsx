import data from './data.json';
import css from './Transaction.module.css';
import PropTypes from 'prop-types';

const Transact = ({ id, type, amount, currency }) => {
  return data.map(tip => {
    return (
      <tr className={css.tran} key={tip.id}>
        <td>{tip.type}</td>
        <td>{tip.amount}</td>
        <td>{tip.currency}</td>
      </tr>
    );
  });
};

export const Trans = () => {
  return (
    <table className={css.transaction}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <Transact />
      </tbody>
    </table>
  );
};

Transact.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
