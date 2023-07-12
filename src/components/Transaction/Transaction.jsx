import css from './Transaction.module.css';
import PropTypes from 'prop-types';

export const Trans = ({ items }) => {
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
        {items.map(tip => {
          return (
            <tr className={css.tran} key={tip.id}>
              <td>{tip.type}</td>
              <td>{tip.amount}</td>
              <td>{tip.currency}</td>
            </tr>
          );
        })}
        ;
      </tbody>
    </table>
  );
};

Trans.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
