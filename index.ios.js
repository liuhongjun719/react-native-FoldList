/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Common from './app/Common';
import MenuList from './app/MenuList';
import dataList from './app/LeftMenuData';


class FoldList extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Text style = {{textAlign: 'center',paddingTop: 30, backgroundColor: 'rgb(158, 14, 14)', color: 'white', fontSize: 18, height: 64, width: Common.window.width}}>二级列表</Text>
       <MenuList data = {dataList.sections}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },

});

AppRegistry.registerComponent('FoldList', () => FoldList);
