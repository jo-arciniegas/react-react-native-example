import Button from '@components/Button';
import React, {useContext} from 'react';
import {View} from 'react-native';
import {ProductsContext} from 'src/contexts/productsProvider';

interface Props {}

const Search = ({navigation: {navigate}}: Props) => {
  return (
    <View style={{flex: 1}}>
      <Button
        title="Go TO video Player"
        onPress={() => navigate('VideoPlayer')}
      />
      <Button
        title="Go TO Animation Page"
        onPress={() => navigate('Animate')}
      />
    </View>
  );
};

export default Search;
