import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';


const TableS = ({navigation}) => {

    function ReptileListItems() {
        const reptiles = ["alligator", "snake", "lizard"];
      
        return reptiles.map((reptile) => <li>{reptile}</li>);
      }



    
  return (
    <View style={styles.container}>
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title>Email</DataTable.Title>
        <DataTable.Title numeric>Age</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>John</DataTable.Cell>
        <DataTable.Cell>[email protected]</DataTable.Cell>
        <DataTable.Cell numeric>33</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Bob</DataTable.Cell>
        <DataTable.Cell>[email protected]</DataTable.Cell>
        <DataTable.Cell numeric>105</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Mei</DataTable.Cell>
        <DataTable.Cell>[email protected]</DataTable.Cell>
        <DataTable.Cell numeric>23</DataTable.Cell>
      </DataTable.Row>

    </DataTable>
  </View>
  )
}


const styles = StyleSheet.create({
    container: {
      paddingTop: 100,
      paddingHorizontal: 30,
    },
  });


export default TableS;