import { useState } from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';

import { COLORS, NFTData } from '../../Constants';
import { Header, FocusedStatusBar, NTFCard } from './Components';

const renderItem = ({ item }) => <NTFCard data={item} />;

const Home = () => {
  return (
    <SafeAreaView >
      <FocusedStatusBar background={COLORS.primary} />
      <View >
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<Header />}
          />
        </View>

        <View style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1,
        }}>
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />

        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home;