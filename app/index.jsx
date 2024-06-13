import { Image, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../constants'
import CustomButton from '../components/CustomButton'
import { router } from 'expo-router'
const index = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{' '}
              <Text className="text-secondary-200 relative">Aora</Text>
            </Text>
          </View>
          <Text className="text-sm font-pregular  text-gray-200 mt-5 text-center">
            Where creativity meets innovation: embark of journey of limitless
            exploration with Aora
          </Text>
          <CustomButton
            title={'Continue with email'}
            containerStyles="w-full mt-4"
            onPress={() => router.push('/sign-in')}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light"></StatusBar>
    </SafeAreaView>
  )
}

export default index
