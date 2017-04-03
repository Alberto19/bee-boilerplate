import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import * as userActions from '../actions/user';
import bold from './FirstPage.css';

const FirstPage = ({ user }) => (
  <div className={bold}>
    <p>
      First Page
    </p>
    <p>{`Email: ${user.email}`}</p>
    <Link to={'/second'}>Second</Link>
  </div>
    );

FirstPage.propTypes = {
  user: PropTypes.element.isRequired
};

const mapStateToProps = state => ({
  user: state.user, //eslint-disable-line
});

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FirstPage);
