import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import * as userActions from '../actions/user';
import bold from './SecondPage.css';

const SecondPage = () => (
  <div className={bold}>
    <p>Second Page</p>
    <Link to={'/'}>First</Link>
  </div>
);

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SecondPage);
