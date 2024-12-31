import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Platform,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
<<<<<<< HEAD
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Feather';

=======
>>>>>>> f31f635 (Mobile new features)
import {useNavigation} from '@react-navigation/native';
import AuthHeader from './AuthHeader';
import {StatusBar} from 'react-native';
import CustomInput from '../Common/CustomInput/CustomInput';
import {useForm} from 'react-hook-form';
import {
  checkServerConnection,
  userForgotPasswordCheckOtp,
  userForgotPasswordCheckUpdate,
  userForgotPasswordRequest,
} from '../../utils/api';
import {KeyboardAvoidingView} from 'react-native';
import {baseUrl} from '../../utils/baseUrl';
<<<<<<< HEAD
=======
import {
  ChecklistIcon,
  EyeIcon3,
  EyeIcon4,
  WarningIcon,
} from '../../assets/icons';
>>>>>>> f31f635 (Mobile new features)

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const codeInputs = Array(6).fill('');
let newInputCodeIndex = 0;

const {width} = Dimensions.get('window');
const inputCodeWidth = Math.round(width / 8);

const ForgotPassword = () => {
  const inputCodeRef = useRef();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState({0: '', 1: '', 2: '', 3: '', 4: '', 5: ''});
  const [nextInputCodeIndex, setNextInputCodeIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const {control, handleSubmit, reset, watch} = useForm();
  const {control: controlPassword, handleSubmit: handleSubmitPassword} =
    useForm();
  const email = watch('email');

  const handleChangeCodeText = (text, index) => {
    const value = text.replace(/\D/g, '');
    const newOtp = {...otp};
    newOtp[index] = value;
    setOtp(newOtp);

    const lastInputCodeIndex = codeInputs.length - 1;

    if (!value) newInputCodeIndex = index === 0 ? 0 : index - 1;
    else
      newInputCodeIndex =
        index === codeInputs.length - 1 ? lastInputCodeIndex : index + 1;

    setNextInputCodeIndex(newInputCodeIndex);
  };

  useEffect(() => {
    inputCodeRef?.current?.focus();
  }, [newInputCodeIndex]);

  const isObjValid = obj => {
    return Object.values(obj).every(val => val.trim());
  };

  const handleEmail = async formData => {
    const isServerConnected = await checkServerConnection();
    if (isServerConnected) {
      const {email} = formData;

      const userData = {
        email,
      };
      setError('');
      setSuccess('');
      try {
        setLoading(true);
        const response = await userForgotPasswordRequest(userData, setError);
        setSuccess(response.data.message);
        setStep(2);
        setTimeout(() => {
          setSuccess('');
          setError('');
        }, 2000);
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

  const otpSubmit = async () => {
    setSuccess('');
    setError('');
    let val = '';
    Object.values(otp).forEach(v => {
      val += v;
    });
    setLoading(true);

    if (val.length < 6) {
      setError('Please fill all OTP fields');
      setLoading(false);
    } else {
      if (isObjValid(otp)) {
        let val = '';
        Object.values(otp).forEach(v => {
          val += v;
        });

        if (!val) {
          setError('Please enter the code');
          setLoading(false);
          return;
        }
        setError('');
        const forgotPassData = {
          email,
          verifyOtp: val,
        };

        try {
          const res = await userForgotPasswordCheckOtp(
            forgotPassData,
            setError,
          );
          if (res && res?.status === 200) {
            setLoading(false);
            setSuccess(res.data.message);
            setTimeout(() => {
              setError('');
              setSuccess('');
              setStep(3);
            }, 2000);
          }
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
        setLoading(false);
      }
    }
  };

  const handleUpdatePassword = async formDataPass => {
    const {password} = formDataPass;

    setSuccess('');
    setError('');
    let val = '';
    Object.values(otp).forEach(v => {
      val += v;
    });
    setLoading(true);

    if (val.length < 6) {
      setError('Please fill all OTP fields');
      setLoading(false);
    } else {
      if (isObjValid(otp)) {
        let val = '';
        Object.values(otp).forEach(v => {
          val += v;
        });

        if (!val) {
          setError('Please enter the code');
          setLoading(false);
          return;
        }
        setError('');
        const forgotPassData = {
          email,
          verifyOtp: val,
          password,
        };

        try {
          const res = await userForgotPasswordCheckUpdate(
            forgotPassData,
            setError,
          );
          if (res && res?.status === 200) {
            setLoading(false);
            setSuccess(res.data.message);
            setTimeout(() => {
              setError('');
              setSuccess('');
              setOtp({0: '', 1: '', 2: '', 3: '', 4: '', 5: ''});
              setStep(1);
              navigation.navigate('Login');
            }, 2000);
          }
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
        setLoading(false);
      }
    }
  };

  const handleSteps = () => {
    switch (step) {
      case 1:
        return (
          <View className="mt-5">
<<<<<<< HEAD
            <Text className="mt-2 text-black">Email</Text>
=======
            <Text className="mt-2 font-InterRegular text-custom-black-500">
              Email
            </Text>
>>>>>>> f31f635 (Mobile new features)
            <CustomInput
              name="email"
              control={control}
              placeholder="Email"
              rules={{
                required: 'Email is required',
                pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
              }}
            />

            <TouchableOpacity
              onPress={handleSubmit(handleEmail)}
              disabled={loading}
              className={`${
<<<<<<< HEAD
                loading ? 'bg-slate-400' : 'bg-customRed'
              } rounded-lg w-full p-2 text-center my-2`}>
              <Text className="text-sm text-white text-center font-avenir font-bold">
=======
                loading ? 'bg-slate-400' : 'bg-custom-red-500'
              } rounded-2xl w-full p-4 text-center my-2`}>
              <Text className="text-sm text-white text-center font-InterMedium">
>>>>>>> f31f635 (Mobile new features)
                Reset password
              </Text>
            </TouchableOpacity>
          </View>
        );
      case 2:
        return (
          <>
            <Text className="text-left my-4 text-black">
              Please enter verification code for resetting password.
            </Text>

            <View className="flex flex-row items-center justify-center mt-5">
              {codeInputs.map((inp, index) => (
                <View
                  className={`flex justify-center items-center mx-1`}
                  key={index}>
                  <TextInput
                    style={{
                      width: inputCodeWidth,
                      height: inputCodeWidth,
                      borderWidth: 1,
                      borderColor: 'gray',
                      textAlign: 'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 3,
                      fontSize: 20,
                    }}
                    value={otp[index]}
                    placeholder="-"
                    name="vcode"
                    keyboardType="numeric"
                    maxLength={1}
                    onChangeText={text => handleChangeCodeText(text, index)}
                    ref={nextInputCodeIndex === index ? inputCodeRef : null}
                    placeholderTextColor="#cccccc"
                  />
                </View>
              ))}
            </View>

            <View
              style={{
                width: '90%',
                height: 1,
                backgroundColor: '#ddd',
                alignSelf: 'center',
                marginVertical: 20,
              }}></View>

            <TouchableOpacity
              onPress={otpSubmit}
              disabled={loading}
              className={`${
                loading ? 'bg-slate-400' : 'bg-customRed'
              } rounded-lg w-full p-2 text-center my-2`}>
<<<<<<< HEAD
              <Text className="text-sm text-white text-center font-avenir font-bold">
=======
              <Text className="text-sm text-white text-center font-Avenir font-bold">
>>>>>>> f31f635 (Mobile new features)
                Verify
              </Text>
            </TouchableOpacity>
          </>
        );
      case 3:
        return (
          <>
            <View>
              <Text className="mt-2">New password</Text>
              <CustomInput
                name="password"
                control={controlPassword}
                placeholder="New password"
                secureTextEntry={!showPassword}
                rules={{
                  required: 'Password is required',
                  minLength: {
                    value: 4,
                    message: 'Password should be at least 4 characters long',
                  },
                }}
              />

              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                className={`absolute ${
                  Platform.OS === 'ios' ? 'top-[42px]' : 'top-[44px]'
                } right-3`}>
<<<<<<< HEAD
                <Icon
                  name={showPassword ? 'eye' : 'eye-off'}
                  size={20}
                  color="#263238B2"
                />
=======
                {showPassword ? (
                  <EyeIcon3 width={22} height={22} color={'#999DA3'} />
                ) : (
                  <EyeIcon4 width={22} height={22} color={'#999DA3'} />
                )}
>>>>>>> f31f635 (Mobile new features)
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={handleSubmitPassword(handleUpdatePassword)}
              disabled={loading}
              className={`${
<<<<<<< HEAD
                loading ? 'bg-slate-400' : 'bg-customRed'
              } rounded-lg w-full p-2 text-center my-2`}>
              <Text className="text-sm text-white text-center font-avenir font-bold">
=======
                loading ? 'bg-slate-400' : 'bg-custom-red-500'
              } rounded-lg w-full p-2 text-center my-2`}>
              <Text className="text-sm text-white text-center font-Avenir font-bold">
>>>>>>> f31f635 (Mobile new features)
                Change password
              </Text>
            </TouchableOpacity>
          </>
        );
      default:
        return null;
    }
  };

  return (
<<<<<<< HEAD
    <KeyboardAvoidingView
      className="bg-customBg"
      behavior={Platform.OS == 'ios' ? 'height' : 'height'}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#fff'} />
      <View className="p-5 ">
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

        {handleSteps()}

        <View className="flex justify-center items-center my-10">
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text className="text-gray-800 font-bold font-openSans">
              SIGN IN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
=======
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        className="flex-1 bg-white"
        behavior={Platform.OS == 'ios' ? 'height' : 'height'}>
        <StatusBar barStyle={'light-content'} backgroundColor={'#fff'} />
        <View className="p-5 ">
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
            <View className="flex-row items-center justify-center my-4">
              <WarningIcon width={14} height={14} color={'#FE0000'} />
              <Text className="text-red-500 ml-1 font-InterRegular ">
                {error}
              </Text>
            </View>
          )}

          {handleSteps()}

          <View className="flex justify-center items-center my-10">
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text className="text-[#DE725E] pl-1 font-InterBold">
                SIGN IN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
>>>>>>> f31f635 (Mobile new features)
  );
};

export default ForgotPassword;
