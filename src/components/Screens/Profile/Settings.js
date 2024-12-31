import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Pressable,
  Platform,
  Image,
  Alert,
  TouchableOpacity,
<<<<<<< HEAD
=======
  SafeAreaView,
>>>>>>> f31f635 (Mobile new features)
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
<<<<<<< HEAD
import {store} from '../../../store';
import {signOut} from '../../../store/actions/authActions';
import {resetCategories} from '../../../store/actions/categoryActions';
import {resetReceipts} from '../../../store/actions/receiptActoins';
import {resetSubscription} from '../../../store/actions/subsActions';
import {checkServerConnection, userRequestReport} from '../../../utils/api';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {appleAuth} from '@invertase/react-native-apple-authentication';
import {useSelector} from 'react-redux';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
const logoutIcon = require('../../../assets/logout.png');

const Settings = () => {
=======
import {checkServerConnection, userRequestReport} from '../../../utils/api';
import {appleAuth} from '@invertase/react-native-apple-authentication';
import {useDispatch, useSelector} from 'react-redux';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {ChecklistIcon} from '../../../assets/icons';
import {signOut} from '@react-native-firebase/auth';
import {resetCategories} from '../../../redux/reducers/CategorySlice';
import {resetReceipts} from '../../../redux/reducers/ReceiptSlice';
import {resetSubscription} from '../../../redux/reducers/SubscriptionSlice';
const logoutIcon = require('../../../assets/logout.png');

const Settings = () => {
  const dispatch = useDispatch();
>>>>>>> f31f635 (Mobile new features)
  const navigation = useNavigation();
  const user = useSelector(state => state.auth.user);
  const {t} = useTranslation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '963627114564-rmvn1ajb26oo4tj3fl4vq9v2i1lvclhi.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);

  const handleLogout = async () => {
<<<<<<< HEAD
    store.dispatch(signOut());
    store.dispatch(resetCategories());
    store.dispatch(resetReceipts());
    store.dispatch(resetSubscription());
=======
    dispatch(signOut());
    dispatch(resetCategories());
    dispatch(resetReceipts());
    dispatch(resetSubscription());
>>>>>>> f31f635 (Mobile new features)
  };

  const revokeSignInWithAppleToken = async () => {
    try {
      const {authorizationCode} = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.REFRESH,
      });

      if (!authorizationCode) {
        throw new Error(
          'Apple Revocation failed - no authorizationCode returned',
        );
      } else {
        handleLogout();
      }
<<<<<<< HEAD
    } catch (error) {
=======
    } catch (err) {
>>>>>>> f31f635 (Mobile new features)
      console.log('Error revoking Apple access:');
    }
  };

  const revokeAccess = async () => {
    try {
      handleLogout();
      await GoogleSignin.signOut();
<<<<<<< HEAD
    } catch (error) {
      console.error(error);
=======
    } catch (err) {
      console.error(err);
>>>>>>> f31f635 (Mobile new features)
    }
  };

  const generateReport = async () => {
    const isServerConnected = await checkServerConnection();
    if (isServerConnected) {
      try {
        setLoading(true);
        const response = await userRequestReport(user?.token, setError);
        if (response && response?.status === 200) {
          Alert.alert(response.data.message);
        }
        setLoading(false);
<<<<<<< HEAD
      } catch (error) {
        console.log(error);
=======
      } catch (err) {
        console.log(err);
>>>>>>> f31f635 (Mobile new features)
        setLoading(false);
      }
    } else {
      const errorMessage = 'Server is busy or not connected!';
      setError(errorMessage);
    }
  };

  const showGenerateReportPrompt = () => {
    Alert.alert(
      'Generate Report',
      'Are you sure you want to generate the report?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => generateReport(),
        },
      ],
      {cancelable: false},
    );
  };

  return (
<<<<<<< HEAD
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      className="p-4 bg-background flex-1 bg-customBg">
      <View>
        {error && (
          <View className="flex-row items-center justify-center my-2">
            <FontAwesome name="warning" size={14} color="#D45055" />
            <Text className="text-red-500 ml-1 font-openSans">{error}</Text>
          </View>
        )}

        <Pressable
          onPress={() => navigation.navigate('SettingsFolder')}
          className="flex flex-row border-b border-slate-300 py-4">
          <Text className="text-slate-900 capitalize font-openSans">
            {t('settingsFolder')}
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('Language')}
          className="flex flex-row border-b border-slate-300 py-4">
          <Text className="text-slate-900 capitalize font-openSans">
            {t('language')}
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('SubscriptionFolder')}
          className="flex flex-row border-b border-slate-300 py-4">
          <Text className="text-slate-900 capitalize font-openSans">
            {t('payAsYouGo')}
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('HelpCenter')}
          className="flex flex-row border-b border-slate-300 py-4">
          <Text className="text-slate-900 capitalize font-openSans">
            {t('helpCenter')}
          </Text>
        </Pressable>

        <TouchableOpacity
          onPress={() => showGenerateReportPrompt()}
          className="flex flex-row border-b border-slate-300 py-4">
          <Text className="text-slate-900 capitalize font-openSans">
            {t('downloadReport')}
          </Text>
        </TouchableOpacity>

        <Pressable
          onPress={() => navigation.navigate('PaymentHistory')}
          className="flex flex-row border-b border-slate-300 py-4">
          <Text className="text-slate-900 capitalize font-openSans">
            {t('paymentHistory')}
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('Privacy')}
          className="flex flex-row border-b border-slate-300 py-4">
          <Text className="text-slate-900 capitalize font-openSans">
            {t('privacy')}
          </Text>
        </Pressable>

        <Pressable
          onPress={() =>
            user && user.google
              ? revokeAccess()
              : user && user.apple
              ? revokeSignInWithAppleToken()
              : handleLogout()
          }
          className="flex flex-row  py-4 justify-start items-center">
          <Image
            source={logoutIcon}
            resizeMode="contain"
            style={{
              width: 24,
              height: 24,
            }}
          />
          <Text className="text-red-500 capitalize ml-2 font-openSans">
            {t('logout')}
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
=======
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        className="p-4 bg-background flex-1 bg-white">
        <View>
          {error && (
            <View className="flex-row items-center justify-center my-2">
              <ChecklistIcon width={14} height={14} color={'#71BA65'} />
              <Text className="text-red-500 ml-1 font-openSans">{error}</Text>
            </View>
          )}

          <Pressable
            onPress={() => navigation.navigate('SettingsFolder')}
            className="flex flex-row border-b border-slate-300 py-4">
            <Text className="text-slate-900 capitalize font-openSans">
              {t('settingsFolder')}
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate('Language')}
            className="flex flex-row border-b border-slate-300 py-4">
            <Text className="text-slate-900 capitalize font-openSans">
              {t('language')}
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate('SubscriptionFolder')}
            className="flex flex-row border-b border-slate-300 py-4">
            <Text className="text-slate-900 capitalize font-openSans">
              {t('payAsYouGo')}
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate('HelpCenter')}
            className="flex flex-row border-b border-slate-300 py-4">
            <Text className="text-slate-900 capitalize font-openSans">
              {t('helpCenter')}
            </Text>
          </Pressable>

          <TouchableOpacity
            onPress={() => showGenerateReportPrompt()}
            className="flex flex-row border-b border-slate-300 py-4">
            <Text className="text-slate-900 capitalize font-openSans">
              {t('downloadReport')}
            </Text>
          </TouchableOpacity>

          <Pressable
            onPress={() => navigation.navigate('PaymentHistory')}
            className="flex flex-row border-b border-slate-300 py-4">
            <Text className="text-slate-900 capitalize font-openSans">
              {t('paymentHistory')}
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate('Privacy')}
            className="flex flex-row border-b border-slate-300 py-4">
            <Text className="text-slate-900 capitalize font-openSans">
              {t('privacy')}
            </Text>
          </Pressable>

          <Pressable
            onPress={() =>
              user && user.google
                ? revokeAccess()
                : user && user.apple
                  ? revokeSignInWithAppleToken()
                  : handleLogout()
            }
            className="flex flex-row  py-4 justify-start items-center">
            <Image
              source={logoutIcon}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
              }}
            />
            <Text className="text-red-500 capitalize ml-2 font-openSans">
              {t('logout')}
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
>>>>>>> f31f635 (Mobile new features)
  );
};

export default Settings;
