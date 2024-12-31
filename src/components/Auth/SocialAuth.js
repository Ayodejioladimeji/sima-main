import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, Platform} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {
  appleLoginUser,
  checkServerConnection,
  googleLoginUser,
} from '../../utils/api';
import {useDispatch} from 'react-redux';
import {
  AppleButton,
  appleAuth,
} from '@invertase/react-native-apple-authentication';
import auth from '@react-native-firebase/auth';
<<<<<<< HEAD

const googleIcon = require('../../assets/google.png');
const appleIcon = require('../../assets/apple.png');
=======
import {AppleIcon, GoogleIcon} from '../../assets/icons';
import {fetchCategories} from '../../redux/reducers/CategorySlice';
import {fetchReceipts} from '../../redux/reducers/ReceiptSlice';
import {fetchSubscription} from '../../redux/reducers/SubscriptionSlice';
import {signIn} from '../../redux/reducers/AuthSlice';
import {useRoute} from '@react-navigation/native';
>>>>>>> f31f635 (Mobile new features)

const SocialAuth = ({
  setLoading,
  loading,
  success,
  setSuccess,
  error,
  setError,
}) => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
<<<<<<< HEAD
        '963627114564-rmvn1ajb26oo4tj3fl4vq9v2i1lvclhi.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);

=======
        '963627114564-qm7lf3sgebn4qqkadto2ollib3ov5abt.apps.googleusercontent.com',
      offlineAccess: true,
      scopes: ['profile', 'email'],
    });
  }, []);

  const routes = useRoute();

>>>>>>> f31f635 (Mobile new features)
  const dispatch = useDispatch();

  const googleLogin = async () => {
    setError('');
    setSuccess('');
    const isServerConnected = await checkServerConnection();
    if (isServerConnected) {
      try {
        setLoading(true);
        await GoogleSignin.hasPlayServices();

        const userInfo = await GoogleSignin.signIn();

        if (userInfo && userInfo?.user?.id) {
          const newData = {
            email: userInfo?.user?.email,
            name:
              userInfo?.user?.name ||
              userInfo?.user?.givenName ||
              userInfo?.user?.familyName,
          };

          const response = await googleLoginUser(newData, setError);
          if (response && response.status === 200) {
<<<<<<< HEAD
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
            dispatch(fetchCategories(response?.data?.categories));
            dispatch(fetchReceipts(response?.data?.receipts));
            dispatch(fetchSubscription(response?.data?.subscription));
            dispatch(signIn(response.data.user));
>>>>>>> f31f635 (Mobile new features)
            setLoading(false);
            setSuccess('Login successful');
            setTimeout(() => {
              setSuccess('');
              setError('');
            }, 1000);
          }
        }

        setLoading(false);

        // Handle user information here, e.g., dispatch an action to store the user data.
<<<<<<< HEAD
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          console.log('Sign in canceled');
        } else if (error.code === statusCodes.IN_PROGRESS) {
          console.log('Sign in already in progress');
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          console.log('Play services not available');
        } else {
          console.error('Google Sign-In error:', error);
=======
      } catch (err) {
        if (err.code === statusCodes.SIGN_IN_CANCELLED) {
          console.log('Sign in canceled');
        } else if (err.code === statusCodes.IN_PROGRESS) {
          console.log('Sign in already in progress');
        } else if (err.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          console.log('Play services not available');
        } else {
          console.log('Google Sign-In error:', err);
>>>>>>> f31f635 (Mobile new features)
        }
        setLoading(false);
      }
    } else {
      const errorMessage = 'Server is busy or not connected!';
      setError(errorMessage);
    }
  };

  const appleLogin = async () => {
    const isServerConnected = await checkServerConnection();
    if (isServerConnected) {
      setError('');
      setSuccess('');
      try {
        setLoading(true);
        const appleAuthRequestResponse = await appleAuth.performRequest({
          requestedOperation: appleAuth.Operation.LOGIN,
          requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
        });

        if (!appleAuthRequestResponse.identityToken) {
          throw new Error('Apple Sign-In failed - no identity token returned');
        }

        const {identityToken, nonce} = appleAuthRequestResponse;
        const appleCredential = auth.AppleAuthProvider.credential(
          identityToken,
          nonce,
        );

<<<<<<< HEAD
        const userCredential = await auth().signInWithCredential(
          appleCredential,
        );
=======
        const userCredential =
          await auth().signInWithCredential(appleCredential);
>>>>>>> f31f635 (Mobile new features)
        const user = userCredential.user;

        const newData = {
          email: user?.email,
          name: !user?.displayName ? 'User' : user?.displayName,
        };

        const response = await appleLoginUser(newData, setError);

        if (response && response.status === 200) {
<<<<<<< HEAD
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
          dispatch(fetchCategories(response?.data?.categories));
          dispatch(fetchReceipts(response?.data?.receipts));
          dispatch(fetchSubscription(response?.data?.subscription));
          dispatch(signIn(response.data.user));
>>>>>>> f31f635 (Mobile new features)
          setLoading(false);
          setSuccess('Login successful');
          setTimeout(() => {
            setSuccess('');
            setError('');
          }, 1000);
        }
        setLoading(false);
<<<<<<< HEAD
      } catch (error) {
        setLoading(false);
        setError('Apple login cancelled');
=======
      } catch (err) {
        setLoading(false);
        // setError('Apple login cancelled');
>>>>>>> f31f635 (Mobile new features)
      }
    } else {
      const errorMessage = 'Server is busy or not connected!';
      setError(errorMessage);
    }
  };

<<<<<<< HEAD
  return (
    <View className="flex flex-row justify-center items-center">
      <TouchableOpacity onPress={googleLogin}>
        <Image
          source={googleIcon}
          className="w-10 h-10 mx-3"
          resizeMode="contain"
        />
      </TouchableOpacity>
      {Platform.OS === 'ios' && (
        <TouchableOpacity onPress={appleLogin}>
          <Image
            source={appleIcon}
            className="w-10 h-10 mx-3"
            resizeMode="contain"
          />
=======
  const isLoginPage = routes?.name === 'Login' ? true : false;
  // console.log(routes?.name);

  return (
    <View className="flex flex-col justify-center items-center">
      <TouchableOpacity
        onPress={googleLogin}
        className="border border-[#4285F4] px-4 h-[38px] rounded-md my-1 w-[220px] flex-row justify-center items-center">
        <GoogleIcon height={20} width={20} />
        <Text className="text-black ml-2">
          {isLoginPage ? 'Sign in with Google' : 'Sign up with Google'}
        </Text>
      </TouchableOpacity>
      {Platform.OS === 'ios' && (
        <TouchableOpacity
          onPress={appleLogin}
          className="bg-[#000000] w-[220px]  px-4 h-[38px]  rounded-md mt-2 flex-row justify-center items-center">
          <AppleIcon height={20} width={20} color={'#fff'} />
          <Text className="text-white ml-2">
            {isLoginPage ? 'Sign in with Apple' : 'Sign up with Apple'}
          </Text>
>>>>>>> f31f635 (Mobile new features)
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SocialAuth;
