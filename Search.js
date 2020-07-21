import React from 'react';
import { StyleSheet, View, Search } from 'react-native';
import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default Searchbar;