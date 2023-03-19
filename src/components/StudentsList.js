import _ from 'lodash';
import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { CardSection } from '../ortak/CardSection';
import { connect } from 'react-redux';
import { studentListData } from '../actions';
import ListItem from './ListItem';

class StudentList extends Component {
  UNSAFE_componentWillMount() {
    this.props.studentListData();
  }

  renderRow({ item, index }) {
    return <ListItem ogrenci={item} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.studentArray}
        renderItem={this.renderRow}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}
const mapStateToProps = ({ studentDataResponse }) => {
  const studentArray = _.map(studentDataResponse, (val, uid) => {
    return { ...val, uid };
  });
  return { studentArray };
};

export default connect(
  mapStateToProps,
  { studentListData },
)(StudentList);

