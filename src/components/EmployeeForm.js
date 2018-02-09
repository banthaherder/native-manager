import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
  render() {
    const { name, phone, shift, employeeUpdate } = this.props;

    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Bob"
            value={name}
            onChangeText={(value) => employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={phone}
            onChangeText={(value) => employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection style={styles.overrideCardSection}>
          <Text style={styles.pickerLabelStyle}>Shift</Text>
          <Picker
            onValueChange={(value) => employeeUpdate({ prop: 'shift', value })}
            selectedValue={this.props.shift}
          >
            <Picker.Item label="Monday" value="Monday"/>
            <Picker.Item label="Tuesday" value="Tuesday"/>
            <Picker.Item label="Wednesday" value="Wednesday"/>
            <Picker.Item label="Thursday" value="Thursday"/>
            <Picker.Item label="Friday" value="Friday"/>
            <Picker.Item label="Saturday" value="Saturday"/>
            <Picker.Item label="Sunday" value="Sunday"/>
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20
  },
  overrideCardSection: {
    flexDirection: 'column'
  }
};

const mapStateToProps = (state) =>{
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
