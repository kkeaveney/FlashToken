import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Performers = ({ transactions }) => {
  var performers = _(transactions)
    .groupBy("recipent")
    .map((objs, key) => ({
      recipent: key,
      amount: _.sumBy(objs, (item) => Number(item.amount)),
    }))
    .value();
  performers = _.orderBy(performers, ["amount"], ["asc"]).reverse();

  return (
    <div className="vertical">
      <div className="card bg-dark text-white">
        <div className="card-header">Token holders</div>
        <div className="card-body">
          <table className="table table-dark table-sm small">
            <thead>
              <tr>
                <th>Account</th>
                <th>FLX</th>
              </tr>
            </thead>
            <tbody>
              {performers.map((performer) => {
                const account = performer.recipent;
                const accountReduced = account.substr(0, 12) + "...";

                return (
                  <tr
                    className={`order-${performer.recipent}`}
                    key={performer.recipent}
                  >
                    <td className="text-muted">{accountReduced}</td>
                    <td>{performer.amount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
Performers.defaultProps = {
  provider: "",
};

Performers.propTypes = {
  provider: PropTypes.string,
};

export default Performers;
