import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

const FormField = ({
  title,
  onChange,
  styles,
  value,
  keyboardType,
  placeholder,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${styles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="w-full flex-row h-16 border-2 border-black-100 px-4 items-center bg-black-100 rounded-2xl focus:border-secondary-100">
        <TextInput
          className="flex-1 text-white w-full font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor={'#7B7B8B'}
          onChangeText={onChange}
          secureTextEntry={title === 'Password' && !showPassword}
        />
        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              resizeMode="contain"
              source={showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField
