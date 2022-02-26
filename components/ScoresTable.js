import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const ScoresTable=({navigation})=>{
   {
    
    this.state = {
      HeadTable: ['Name', 'Score'],
      DataTable: [
        ['1', '2'],
        ['1', '2'],
        ['1', '2'],
        ['1', '2'],
        ['1', '2'],
        ['1', '2'],
        ['1', '2'],
        ['1', '2'],
        ['1', '2'],
        ['1', '2'],
       
      ]
    }
  }
   
    const state = this.state;
    return (
      <View >
        <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
          <Row data={state.HeadTable}  />
          <Rows data={state.DataTable} />
        </Table>
      </View>
    )
  }
