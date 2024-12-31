import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Controller} from 'react-hook-form';

const SettingsInput = ({
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
              className="border-b border-[#CCCC] w-full h-15 my-4 pb-3 mt-2 pl-0 focus:border-customRed font-InterRegular text-[#070821B2]"
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
            <Text className="text-red-400 -mt-3">
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  );
};

export default SettingsInput;
