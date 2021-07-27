import React from 'react';
import {Card} from 'react-native-paper';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export const CustomCard = ({itemData, onChangeStatus, navigation}) => (
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
