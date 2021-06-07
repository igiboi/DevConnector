
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
    alerts !== null &&
    alerts.length > 0 &&
  alerts.map((alerts) => (
    <div key={alerts.id} className={`alert alert-${alerts.alertType}`}>
      {alerts.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  alerts: state.alerts
});

export default connect(mapStateToProps)(Alert);