import { Text, Image, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { CircleButton, RectButton, SubInfo } from './'

import { COLORS, SIZES, SHADOWS, assets } from '../../../Constants'
import { NftTitle } from './SubInfo'

const NTFCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark
    }}>
      <View style={{ width: '100%', height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }} />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
      <SubInfo />

      <View style={{
        width: '100%',
        padding: SIZES.font,

      }}>
        <NftTitle title={data.name} subTitle={data.creator} titleSize={SIZES.large} subTitleSize={SIZES.small} />
      </View>
    </View>
  )
}

export default NTFCard;
