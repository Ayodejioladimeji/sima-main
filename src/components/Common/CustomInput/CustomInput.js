import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Controller} from 'react-hook-form';

const CustomInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
  defaultValue,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              'bg-white',
              'w-full',
              error ? 'border-red-500' : 'border-gray-300',
              'border',
              'rounded-md',
              'px-4',
              'py-2',
              'my-1',
            ]}>
            <TextInput
              value={value}
              onChangeText={text =>
                name === 'email' ? onChange(text.toLowerCase()) : onChange(text)
              }
              onBlur={onBlur}
              placeholder={placeholder}
<<<<<<< HEAD
              className="border border-gray-800 w-full h-10  my-4 mt-2 rounded-lg pl-2 focus:border-customRed font-openSans text-black"
=======
              className="border border-[#CCCC] w-full h-14  my-4 mt-2  rounded-2xl pl-4 focus:border-customRed font-InterRegular text-black"
>>>>>>> f31f635 (Mobile new features)
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
<<<<<<< HEAD
            <Text className="text-red-500 -mt-3">
=======
            <Text className="text-red-400 -mt-3">
>>>>>>> f31f635 (Mobile new features)
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  );
};

export default CustomInput;
