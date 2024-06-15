import { View, Text, ScrollView, Image } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'
const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = () => {}

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6 ">
          <Image
            source={images.logo}
            resizeMode="contain"
            className={'w-[115px] h-[35px]'}
          />
          <Text className="text-3xl text-white text-semibold font-psemibold mt-10">
            Log in to Aora
          </Text>
          <FormField
            title={'Email'}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e })}
            styles="mt-7"
            keyboardType="email"
          />
          <FormField
            title={'Password'}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e })}
            styles="mt-7"
          />
          <CustomButton
            onPress={onSubmit}
            title={'Sign in'}
            containerStyles={'mt-7'}
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link
              className="text-lg text-secondary-100 font-psemibold"
              href={'sign-up'}
            >
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
