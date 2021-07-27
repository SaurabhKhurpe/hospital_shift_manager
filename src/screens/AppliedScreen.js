import React, {useContext} from 'react';
import {FlatList, View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {userContext} from '../userContext';
import {shiftStatus} from '../data/dummy-data';
// import {CustomCard} from '../Components/CustomCard';
import {Card} from 'react-native-paper';

const AppliedRoute = (props) => {
  const {shifts} = useContext(userContext);
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={shifts.filter((item) => item.status === shiftStatus.APPLIED)}
      renderItem={(itemData) => <CustomCard itemData={itemData} />}
    />
  );
};

export default AppliedRoute;

const CustomCard = ({itemData, onChangeStatus, navigation}) => (
  <View style={styles.container}>
    <Card style={styles.card}>
      <Card.Title title={itemData.item.hospital} />
      <Card.Content>
        <Text>
          {itemData.item.time} on {itemData.item.date}
        </Text>
        <Text>{itemData.item.location}</Text>
        <Text>{itemData.item.department}</Text>
      </Card.Content>
      {itemData.item.status === 'Open' && (
        <Card.Actions>
          <TouchableOpacity
            style={styles.button}
            title="Apply"
            mode="contained"
            onPress={() => onChangeStatus(itemData.item.id, 'Applied')}>
            <Text>Apply</Text>
          </TouchableOpacity>
        </Card.Actions>
      )}
    </Card>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 50,
    padding: 5,
    borderRadius: 15,
    backgroundColor: '#ecf0f1',
  },
  card: {
    margin: 5,
    borderRadius: 15,
  },
  button: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 10,
  },
});
