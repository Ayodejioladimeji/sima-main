import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
<<<<<<< HEAD
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
=======
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
>>>>>>> f31f635 (Mobile new features)
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import AuthHeader from './AuthHeader';
import CustomInput from '../Common/CustomInput/CustomInput';
import {
  checkServerConnection,
  userSignup,
  userSignupComplete,
} from '../../utils/api';
import {useDispatch} from 'react-redux';
import {StatusBar} from 'react-native';
import {KeyboardAvoidingView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SocialAuth from './SocialAuth';
import {baseUrl} from '../../utils/baseUrl';
<<<<<<< HEAD
=======
import {
  ChecklistIcon,
  CheckMarkIcon,
  EyeIcon3,
  EyeIcon4,
  WarningIcon,
} from '../../assets/icons';
import {fetchCategories} from '../../redux/reducers/CategorySlice';
import {fetchReceipts} from '../../redux/reducers/ReceiptSlice';
import {fetchSubscription} from '../../redux/reducers/SubscriptionSlice';
import {signIn} from '../../redux/reducers/AuthSlice';
>>>>>>> f31f635 (Mobile new features)

const googleIcon = require('../../assets/google.png');
const appleIcon = require('../../assets/apple.png');

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const codeInputs = Array(6).fill('');
let newInputCodeIndex = 0;

const {width} = Dimensions.get('window');
const inputCodeWidth = Math.round(width / 8);

const Signup = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const inputCodeRef = useRef();
  const [isChecked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState({0: '', 1: '', 2: '', 3: '', 4: '', 5: ''});
  const [nextInputCodeIndex, setNextInputCodeIndex] = useState(0);
  const [otpError, setOtpError] = useState('');
  const [otpEmail, setOtpEmail] = useState('');

  const {control, handleSubmit, reset} = useForm();

  const signUpSubmit = async data => {
    const isServerConnected = await checkServerConnection();
    if (isServerConnected) {
      if (!isChecked) {
        return setError('You must agree with terms and conditions');
      }
      const {name, email, password} = data;

      const userData = {
        name,
        email,
        password,
      };
      setError('');
      setSuccess('');
      try {
        setLoading(true);
        const response = await userSignup(userData, setError);
        setSuccess(response.data.message);
        setOtpEmail(email);
        reset();
        setStep(2);
        setTimeout(() => {
          setSuccess('');
          setError('');
        }, 4000);
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

  const handleCheckboxToggle = () => {
    setChecked(!isChecked);
  };

  const handleSteps = () => {
    switch (step) {
      case 1:
        return (
          <View>
<<<<<<< HEAD
            <Text className="mt-2">Name</Text>
=======
            <Text className="mt-2 font-InterRegular text-custom-black-500">
              Name
            </Text>
>>>>>>> f31f635 (Mobile new features)
            <CustomInput
              name="name"
              control={control}
              placeholder="Name"
              rules={{
                required: 'Name is required',
                minLength: {
                  value: 3,
                  message: 'Name should be at least 3 characters long',
                },
                maxLength: {
                  value: 24,
                  message: 'Name should be max 24 characters long',
                },
              }}
            />
<<<<<<< HEAD
            <Text className="mt-2">Email</Text>
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

            <View>
<<<<<<< HEAD
              <Text className="mt-2 font-openSans">Password</Text>
=======
              <Text className="mt-2 font-InterRegular text-custom-black-500">
                Password
              </Text>
>>>>>>> f31f635 (Mobile new features)
              <CustomInput
                name="password"
                control={control}
                placeholder="Password"
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
<<<<<<< HEAD
                  Platform.OS === 'ios' ? 'top-[45px]' : 'top-[44px]'
                } right-3`}>
                <Icon
                  name={showPassword ? 'eye' : 'eye-off'}
                  size={20}
                  color="#263238B2"
                />
=======
                  Platform.OS === 'ios' ? 'top-[51px]' : 'top-[52px]'
                } right-3`}>
                {showPassword ? (
                  <EyeIcon3 width={22} height={22} color={'#999DA3'} />
                ) : (
                  <EyeIcon4 width={22} height={22} color={'#999DA3'} />
                )}
>>>>>>> f31f635 (Mobile new features)
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={handleCheckboxToggle}
              className="flex-row justify-center items-center my-1">
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 2,
                  borderWidth: 1,
                  borderColor: isChecked ? '#000' : '#999',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
<<<<<<< HEAD
                {isChecked && <Icon name="check" size={16} color="#000" />}
              </View>
              <View className="flex-row">
                <Text style={{color: '#34495e'}} className="font-openSans">
=======
                {isChecked && (
                  <CheckMarkIcon width={12} height={12} color="#000" />
                )}
              </View>
              <View className="flex-row py-3">
                <Text style={{color: '#000000'}} className="font-InterRegular">
>>>>>>> f31f635 (Mobile new features)
                  I have read and agree
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('TermsAndConditions')}>
<<<<<<< HEAD
                  <Text className="ml-1 font-openSans">terms & conditions</Text>
=======
                  <Text className="ml-1 font-InterRegular text-[#707070]">
                    terms & conditions
                  </Text>
>>>>>>> f31f635 (Mobile new features)
                </TouchableOpacity>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleSubmit(signUpSubmit)}
              disabled={loading}
              className={`${
<<<<<<< HEAD
                loading ? 'bg-slate-400' : 'bg-customRed'
              } rounded-lg w-full p-2 text-center my-2`}>
              <Text className="text-sm text-white text-center font-openSans font-bold">
=======
                loading ? 'bg-slate-400' : 'bg-custom-red-500'
              } rounded-2xl w-full p-4 text-center my-2`}>
              <Text className="text-sm text-white text-center font-InterMedium">
>>>>>>> f31f635 (Mobile new features)
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        );
      case 2:
        return (
          <>
            <Text className="text-left my-4">
              Please enter verification code for email verification
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
<<<<<<< HEAD
                loading ? 'bg-slate-400' : 'bg-customRed'
=======
                loading ? 'bg-slate-400' : 'bg-custom-red-500'
>>>>>>> f31f635 (Mobile new features)
              } rounded-lg w-full p-2 text-center my-2`}>
              <Text className="text-sm text-white text-center font-openSans font-bold">
                Verify account
              </Text>
            </TouchableOpacity>
          </>
        );
      default:
        return null;
    }
  };

  const otpSubmit = async () => {
    setOtpError('');
    setSuccess('');
    setError('');
    let val = '';
    Object.values(otp).forEach(v => {
      val += v;
    });
    setLoading(true);

    if (val.length < 6) {
      setOtpError('Please fill all OTP fields');
      setLoading(false);
    } else {
      if (isObjValid(otp)) {
        let val = '';
        Object.values(otp).forEach(v => {
          val += v;
        });

        if (!val) {
          setOtpError('Please enter the code');
          setLoading(false);
          return;
        }
        setOtpError('');
        const regData = {
          email: otpEmail,
          verifyOtp: val,
        };

        try {
          const res = await userSignupComplete(regData, setOtpError);
          if (res && res?.status === 200) {
            setLoading(false);
            setSuccess('Account successfully verified!');
            setTimeout(() => {
              setOtpError('');
              setOtp({0: '', 1: '', 2: '', 3: '', 4: '', 5: ''});
              setOtpEmail('');
              setStep(1);

<<<<<<< HEAD
              dispatch({
                type: 'FETCH_CATEGORIES',
                payload: res?.data?.categories,
              });

              dispatch({
                type: 'FETCH_RECEIPTS',
                payload: res?.data?.receipts,
              });

              dispatch({
                type: 'FETCH_SUBSCRIPTION',
                payload: res?.data?.subscription,
              });

              dispatch({type: 'SIGN_IN', payload: res.data.user});
            }, 2000);
          }
        } catch (error) {
          console.log(error);
=======
              dispatch(fetchCategories(res?.data?.categories));
              dispatch(fetchReceipts(res?.data?.receipts));
              dispatch(fetchSubscription(res?.data?.subscription));
              dispatch(signIn(res?.data?.user));
            }, 2000);
          }
        } catch (err) {
          console.log(err);
>>>>>>> f31f635 (Mobile new features)
          setLoading(false);
        }
        setLoading(false);
      }
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

        {otpError && (
          <View className="flex-row items-center justify-center my-2">
            <FontAwesome name="warning" size={14} color="#D45055" />
            <Text className="text-red-500 ml-1 font-openSans">{otpError}</Text>
          </View>
        )}

        {handleSteps()}

        <View className="flex justify-center items-center">
          <Text className="text-center text-gray-800 my-2 text-lg font-openSans font-semibold">
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
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text className="text-gray-800 font-openSans font-bold pl-1">
                SIGN IN
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
          <AuthHeader loading={loading} />

          {success && (
            <View className="flex-row items-center justify-center my-2">
              <ChecklistIcon width={14} height={14} color={'#71BA65'} />

              <Text className="text-green-800 ml-1 font-openSans">
                {success}
              </Text>
            </View>
          )}

          {error && (
            <View className="flex-row items-center justify-center my-2">
              <WarningIcon width={14} height={14} color={'#FE0000'} />
              <Text className="text-red-500 ml-1 font-openSans">{error}</Text>
            </View>
          )}

          {otpError && (
            <View className="flex-row items-center justify-center my-2">
              <WarningIcon width={14} height={14} color={'#FE0000'} />
              <Text className="text-red-500 ml-1 font-openSans">
                {otpError}
              </Text>
            </View>
          )}

          {handleSteps()}

          <View className="flex justify-center items-center">
            {/* <View className="flex-row  items-center justify-center py-3">
              <View className="w-[100px] h-[1px] bg-slate-400 mr-2" />
              <View>
                <Text className="text-center text-[#707070] my-3 text-sm font-InterRegular">
                  or sign up with
                </Text>
              </View>

              <View className="w-[100px] h-[1px] bg-slate-400 ml-2" />
            </View> */}

            {/* <SocialAuth
              setLoading={setLoading}
              loading={loading}
              success={success}
              setSuccess={setSuccess}
              error={error}
              setError={setError}
            /> */}

            <View className="flex flex-row mt-10">
              <Text className="font-InterMedium text-[#252525]">
                Already have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text className="text-[#DE725E] pl-1 font-InterBold">
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
>>>>>>> f31f635 (Mobile new features)
  );
};

export default Signup;
