import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
<<<<<<< HEAD
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
=======

>>>>>>> f31f635 (Mobile new features)
import {useNavigation} from '@react-navigation/native';
import AuthHeader from './AuthHeader';
import {useForm} from 'react-hook-form';
import CustomInput from '../Common/CustomInput/CustomInput';
import {useDispatch, useSelector} from 'react-redux';
import {checkServerConnection, userLogin} from '../../utils/api';
import {KeyboardAvoidingView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {baseUrl} from '../../utils/baseUrl';
import SocialAuth from './SocialAuth';
<<<<<<< HEAD

const googleIcon = require('../../assets/google.png');
const appleIcon = require('../../assets/apple.png');
=======
import {ActivityIndicator} from 'react-native';
import {
  ChecklistIcon,
  EyeIcon3,
  EyeIcon4,
  WarningIcon,
} from '../../assets/icons';
import {fetchCategories} from '../../redux/reducers/CategorySlice';
import {fetchReceipts} from '../../redux/reducers/ReceiptSlice';
import {fetchSubscription} from '../../redux/reducers/SubscriptionSlice';
import {signIn} from '../../redux/reducers/AuthSlice';
>>>>>>> f31f635 (Mobile new features)

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {control, handleSubmit, reset} = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const loginSubmit = async data => {
    const isServerConnected = await checkServerConnection();
    if (isServerConnected) {
      const {email, password} = data;

      const userData = {
        email,
        password,
      };

      setError('');
      setSuccess('');

      try {
        setLoading(true);
        const response = await userLogin(userData, setError);
<<<<<<< HEAD
        if (response) {
          if (response?.status === 200) {
            dispatch({
              type: 'FETCH_CATEGORIES',
              payload: response?.data?.categories,
            });

            dispatch({
              type: 'FETCH_RECEIPTS',
              payload: response?.data?.receipts,
            });

            dispatch({
              type: 'FETCH_SUBSCRIPTION',
              payload: response?.data?.subscription,
            });

            dispatch({type: 'SIGN_IN', payload: response.data.user});
=======

        if (response) {
          if (response?.status === 200) {
            dispatch(fetchCategories(response?.data?.categories));
            dispatch(fetchReceipts(response?.data?.receipts));
            dispatch(fetchSubscription(response?.data?.subscription));
            dispatch(signIn(response.data.user));
>>>>>>> f31f635 (Mobile new features)
            setLoading(false);
            setSuccess('Login successful');
            reset();
            setTimeout(() => {
              setSuccess('');
              setError('');
            }, 1000);
          }
        }
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setSuccess('');
      }
    } else {
      const errorMessage = 'Server is busy or not connected!';
      setError(errorMessage);
    }
  };

  return (
<<<<<<< HEAD
    <KeyboardAwareScrollView
      style={{flex: 1, padding: 15}}
      className="bg-customBg"
      enableOnAndroid={true}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#fff'} />
      <View className="p-5">
        <AuthHeader loading={loading} />

        {success && (
          <View className="flex-row items-center justify-center my-2">
            <FontAwesome name="check-circle" size={14} color="green" />
            <Text className="text-green-800 ml-1 font-openSans">{success}</Text>
          </View>
        )}

        {error && (
          <View className="flex-row items-center justify-center my-2">
            <FontAwesome name="warning" size={14} color="#D45055" />
            <Text className="text-red-500 ml-1 font-openSans">{error}</Text>
          </View>
        )}

        <Text className="mt-2 font-openSans">Email</Text>

        <CustomInput
          name="email"
          control={control}
          placeholder="Email"
          rules={{
            required: 'Email is required',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
        />

        <View>
          <Text className="mt-2 font-openSans">Password</Text>
          <CustomInput
            name="password"
            control={control}
            placeholder="Password"
            secureTextEntry={!showPassword}
            rules={{
              required: 'Password is required',
            }}
          />

          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className={`absolute ${
              Platform.OS === 'ios' ? 'top-[45px]' : 'top-[44px]'
            } right-3`}>
            <Icon
              name={showPassword ? 'eye' : 'eye-off'}
              size={20}
              color="#263238B2"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text className="text-right my-2 text-gray-600 font-openSans font-semibold">
            Forgot password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSubmit(loginSubmit)}
          className="bg-customRed rounded-lg w-full p-2 text-center my-2">
          <Text className="text-sm text-white text-center font-openSans font-bold">
            Sign in
          </Text>
        </TouchableOpacity>

        <View className="flex justify-center items-center">
          <Text className="text-center text-gray-800 my-5 text-lg font-openSans">
            Or
          </Text>

          <SocialAuth
            setLoading={setLoading}
            loading={loading}
            success={success}
            setSuccess={setSuccess}
            error={error}
            setError={setError}
          />

          <View className="flex flex-row my-3">
            <Text className="font-openSans font-semibold text-black">
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text className="text-gray-800 font-bold pl-1 font-openSans">
                SIGN UP
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
=======
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAwareScrollView
        style={{flex: 1, padding: 15}}
        className="bg-white"
        enableOnAndroid={true}>
        <StatusBar barStyle={'light-content'} backgroundColor={'#fff'} />
        <View className="p-5">
          <View className="relative">
            <View className="absolute mx-auto justify-center items-center min-h-[20px] w-full ">
              <AuthHeader loading={loading} />

              {success && (
                <View className="flex-row items-center justify-center my-2">
                  <ChecklistIcon width={14} height={14} color={'#71BA65'} />
                  <Text className="text-green-800 ml-1 font-InterRegular">
                    {success}
                  </Text>
                </View>
              )}

              {error && (
                <View className="flex-row items-center justify-center my-2">
                  <WarningIcon width={14} height={14} color={'#FE0000'} />
                  <Text className="text-[#FE0000] ml-1 font-InterRegular">
                    {error}
                  </Text>
                </View>
              )}
            </View>
          </View>

          <View className="mt-32">
            <Text className="mt-2 font-InterRegular text-custom-black-500">
              Email
            </Text>

            <CustomInput
              name="email"
              control={control}
              placeholder="Email"
              rules={{
                required: 'Email is required',
                pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
              }}
            />

            <View>
              <Text className="mt-2 font-InterRegular text-custom-black-500">
                Password
              </Text>
              <CustomInput
                name="password"
                control={control}
                placeholder="Password"
                secureTextEntry={!showPassword}
                rules={{
                  required: 'Password is required',
                }}
              />

              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                className={`absolute ${
                  Platform.OS === 'ios' ? 'top-[51px]' : 'top-[52px]'
                } right-3`}>
                {showPassword ? (
                  <EyeIcon3 width={22} height={22} color={'#999DA3'} />
                ) : (
                  <EyeIcon4 width={22} height={22} color={'#999DA3'} />
                )}
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text className="text-right my-2 text-[#2E75FF] font-InterMedium">
                Forgot password?
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleSubmit(loginSubmit)}
              className="bg-custom-red-500 rounded-2xl w-full p-4 text-center my-5">
              <Text className="text-sm text-white text-center font-InterMedium">
                Login
              </Text>
            </TouchableOpacity>

            <View className="flex justify-center items-center">
              {/* <View className="flex-row  items-center justify-center">
                <View className="w-[100px] h-[1px] bg-slate-400 mr-2" />
                <View>
                  <Text className="text-center text-[#707070] my-3 text-sm font-InterRegular">
                    or sign in with
                  </Text>
                </View>

                <View className="w-[100px] h-[1px] bg-slate-400 ml-2" />
              </View> */}

              {/* <View className="py-4">
                <SocialAuth
                  setLoading={setLoading}
                  loading={loading}
                  success={success}
                  setSuccess={setSuccess}
                  error={error}
                  setError={setError}
                />
              </View> */}

              <View className="flex flex-row mt-10">
                <Text className="font-InterMedium text-[#252525]">
                  New Member?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                  <Text className="text-[#DE725E] pl-1 font-InterBold">
                    Register now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
>>>>>>> f31f635 (Mobile new features)
  );
};

export default Login;
