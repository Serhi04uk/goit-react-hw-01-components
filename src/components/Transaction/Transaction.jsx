import data from './data.json';
import './Transaction.css';

const Transact = () => {
  return data.map(tip => {
    return (
      <tr className="tran-list" key={tip.id}>
        <td>{tip.type}</td>
        <td>{tip.amount}</td>
        <td>{tip.currency}</td>
      </tr>
    );
  });
};

export const Trans = () => {
  return (
    <table className="transaction-history">
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
