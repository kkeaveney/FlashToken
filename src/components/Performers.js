import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Performers = ({ accounts }) => {
  var performers = _.map(accounts, (o) =>
    _.pick(o, ["id", "recipent", "balance"])
  );

  performers = _.uniqBy(performers, "recipent");
  performers = _.sortBy(performers, ["balance"]).reverse();

  const balances = _.pick(performers, ["balance"]);

  console.log(performers);

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
                    <td>{performer.balance}</td>
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
