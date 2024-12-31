<<<<<<< HEAD
import React, {useEffect, useRef, useState} from 'react';
const io = require('socket.io-client/dist/socket.io');
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Platform,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import Home from '../components/Tabs/Home/Home';
import Scan from '../components/Tabs/Scan/Scan';
import Analytics from '../components/Tabs/Analytics/Analytics';
import {useNavigation} from '@react-navigation/native';
import ScanResultScreen from '../components/Screens/ScanResultScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import CategoryDetails from '../components/Screens/CategoryDetails';
import ReceiptDetails from '../components/Screens/ReceiptDetails';
import Settings from '../components/Screens/Profile/Settings';
import ProfileImage from '../components/Screens/Profile/ProfileImage';
import GeneralInfo from '../components/Screens/Profile/GeneralInfo';
import UpdatePassword from '../components/Screens/Profile/UpdatePassword';
import Privacy from '../components/Screens/Profile/Privacy';
import jwt_decode from 'jwt-decode';

const homeIconAct = require('../assets/icon/home-icon-active.png');
const homeIcon = require('../assets/icon/home-icon.png');
const anaIconAct = require('../assets/icon/ana-icon-active.png');
const anaIcon = require('../assets/icon/ana-icon.png');
const scanIcon = require('../assets/icon/scan-icon.png');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Language from '../components/Screens/Profile/Language';
import i18next from 'i18next';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import HelpCenter from '../components/Screens/Profile/HelpCenter';
import TicketDetails from '../components/Screens/Profile/TicketDetails';
import PaymentHistory from '../components/Screens/Profile/PaymentHistory';
import {BASE_URL_SOCKET} from '../utils/baseUrl';
import {hasTokenExpired, isTokenExpiringSoon} from '../utils/tokenHandler';
import {userRefreshToken} from '../utils/api';
import {store} from '../store';
import {signOut} from '../store/actions/authActions';
import {resetCategories} from '../store/actions/categoryActions';
import {resetReceipts} from '../store/actions/receiptActoins';
import {resetSubscription} from '../store/actions/subsActions';
import appleAuth from '@invertase/react-native-apple-authentication';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import TicketSubmission from '../components/Screens/Profile/TicketSubmission';
import TermsOfServices from '../components/Screens/Profile/TermsOfServices';
import SettingsFolder from '../components/Screens/Profile/SettingsFolder';
import ChooseAPlan from '../components/Screens/Profile/ChooseAPlan';
import SubscriptionFolder from '../components/Screens/Profile/SubscriptionFolder';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RouteConfigs = {
  Home: {
    name: 'Home',
    component: Home,
  },
  Scan: {
    name: 'Scan',
  },
  Analytics: {
    name: 'Analytics',
    component: Analytics,
  },
};

const TabNavigatorConfig = {
  navigationOptions: {
    header: null,
    swipeEnabled: false,
  },
  screenOptions: {
    tabBarActiveTintColor: '#000',
    style: {
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },

      shadowRadius: 6,
      shadowOpacity: 1,
    },
  },
};

const Tab = createBottomTabNavigator();

const TabNav = () => {
  const {t} = useTranslation();

  return (
    <Tab.Navigator
      {...TabNavigatorConfig}
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#ffffff',
          paddingVertical: 5,
          height: hp(10),
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}>
      <Tab.Screen
        {...RouteConfigs['Home']}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 24,
                flexDirection: 'row',
                height: 24,
              }}>
              <Image
                source={focused ? homeIconAct : homeIcon}
                resizeMode="contain"
                style={{
                  width: windowWidth > 800 ? 44 : 24,
                  height: windowWidth > 800 ? 44 : 24,
                }}
              />
            </View>
          ),
          title: 'Home',
          headerShown: false,
          tabBarLabel: ({focused, color, size}) => (
            <Text
              style={{
                color: focused ? '#B13D51' : '#000',
                fontSize: 15,
                marginBottom: 5,
                fontWeight: focused ? '500' : 'normal',
              }}
              className={`font-openSans ${
                windowWidth > 800 ? 'hidden' : 'block'
              }`}>
              {t('home')}
            </Text>
          ),
        }}
      />

      <Tab.Screen
        {...RouteConfigs['Scan']}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={scanIcon}
                resizeMode="contain"
                style={{
                  width: windowWidth > 800 ? 40 : 30,
                  height: windowWidth > 800 ? 40 : 30,
                }}
              />
            </View>
          ),
          title: '',
          headerShown: false,
          tabBarLabel: ({focused, color, size}) => (
            <Text
              style={{
                color: focused ? '#B13D51' : '#000',
                fontSize: 15,
                marginVertical: 1,
                fontWeight: focused ? '500' : 'normal',
              }}
              className={`font-openSans ${
                windowWidth > 800 ? 'hidden' : 'block'
              }`}>
              {t('scan')}
            </Text>
          ),
        }}>
        {props => <Scan {...props} />}
      </Tab.Screen>

      <Tab.Screen
        {...RouteConfigs['Analytics']}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={focused ? anaIconAct : anaIcon}
                resizeMode="contain"
                style={{
                  width: windowWidth > 800 ? 55 : 35,
                  height: windowWidth > 800 ? 55 : 35,
                }}
              />
            </View>
          ),
          title: 'Analytics',
          headerShown: false,
          tabBarLabel: ({focused, color, size}) => (
            <Text
              className={`font-openSans ${
                windowWidth > 800 ? 'hidden' : 'block'
              }`}
              style={{
                color: focused ? '#B13D51' : '#000',
                fontSize: 15,
                marginBottom: 5,
                fontWeight: focused ? '500' : 'normal',
              }}>
              {t('analytics')}
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const StackNavigatorConfig = {
  headerMode: 'screen',
};

const StackConfig = {
  TabNav: {
    name: 'HomeScreen',
    component: TabNav,
    options: {headerShown: false},
  },
  ScanResultScreen: {
    name: 'ScanResultScreen',
    component: ScanResultScreen,
  },
  CategoryDetails: {
    name: 'CategoryDetails',
    component: CategoryDetails,
  },
  ReceiptDetails: {
    name: 'ReceiptDetails',
    component: ReceiptDetails,
  },
  TicketDetails: {
    name: 'TicketDetails',
    component: TicketDetails,
  },
  PaymentHistory: {
    name: 'PaymentHistory',
    component: PaymentHistory,
  },
  Settings: {
    name: 'Settings',
    component: Settings,
  },
  ProfileImage: {
    name: 'ProfileImage',
    component: ProfileImage,
  },
  GeneralInfo: {
    name: 'GeneralInfo',
    component: GeneralInfo,
  },
  UpdatePassword: {
    name: 'UpdatePassword',
    component: UpdatePassword,
  },
  Privacy: {
    name: 'Privacy',
    component: Privacy,
  },
  TermsOfServices: {
    name: 'TermsOfServices',
    component: TermsOfServices,
  },
  ChooseAPlan: {
    name: 'ChooseAPlan',
    component: ChooseAPlan,
  },
  Language: {
    name: 'Language',
    component: Language,
  },
  HelpCenter: {
    name: 'HelpCenter',
    component: HelpCenter,
  },
  TicketSubmission: {
    name: 'TicketSubmission',
    component: TicketSubmission,
  },
  SettingsFolder: {
    name: 'SettingsFolder',
    component: SettingsFolder,
  },
  SubscriptionFolder: {
    name: 'SubscriptionFolder',
    component: SubscriptionFolder,
  },
};

const MainNavigation = ({route}) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const initialParams = route?.params;
  const navigation = useNavigation();
  const user = useSelector(state => state.auth.user);
  const {t} = useTranslation;
  const socket = useRef();

  const handleLogout = async () => {
    store.dispatch(signOut());
    store.dispatch(resetCategories());
    store.dispatch(resetReceipts());
    store.dispatch(resetSubscription());
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
    } catch (error) {
      console.log('Error revoking Apple access:');
    }
  };

  const revokeAccess = async () => {
    try {
      await GoogleSignin.revokeAccess();
      handleLogout();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const refreshToken = async () => {
      try {
        const resData = await userRefreshToken(user?.token, setError);
        console.log(resData.data);
        dispatch({
          type: 'SIGN_IN',
          payload: {...user, token: resData.data.token},
        });
      } catch (error) {
        console.log('Error refreshing token:', error);
      }
    };

    if (hasTokenExpired(user?.token)) {
      Alert.alert('Token expired.');
      user && user.google
        ? revokeAccess()
        : user && user.apple
        ? revokeSignInWithAppleToken()
        : handleLogout();
    } else if (isTokenExpiringSoon(user?.token)) {
      // Alert.alert('Token is going to be expired');
      refreshToken();
    }
  }, [user?.token, dispatch]);

  useEffect(() => {
    if (!socket.current) {
      socket.current = io(BASE_URL_SOCKET);
    }

    const handleConnection = () => {
      console.log('Connected to socket server');
      console.log('Socket ID:', socket.current.id);

      const userId = user?.id;
      socket.current.emit('joinRoom', {userId, socketId: socket.current.id});
    };

    const handleConnectionError = error => {
      console.log('Socket connection error:', error);
    };

    if (socket.current) {
      socket.current.on('connect', handleConnection);
      socket.current.on('connect_error', handleConnectionError);
    }

    return () => {
      if (socket.current) {
        socket.current.disconnect();
        socket.current.off('connect', handleConnection);
        socket.current.off('connect_error', handleConnectionError);
      }
    };
  }, []);

  useEffect(() => {
    i18next.changeLanguage(user?.language);
  }, []);

  return (
    <Stack.Navigator options={{...StackNavigatorConfig}}>
      <Stack.Screen name="Root" options={{headerShown: false}}>
        {props => <TabNav {...props} />}
      </Stack.Screen>

      <Stack.Screen
        component={ScanResultScreen}
        name="ScanResultScreen"
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                padding: 6,
                borderRadius: 100,
                marginLeft: 10,
                width: 48,
                height: 48,
              }}>
              <AntDesign name="arrowleft" size={22} color="#000" />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#F8F3EC',
          },
        }}
        initialParams={initialParams}
      />

      <Stack.Screen
        component={CategoryDetails}
        name="CategoryDetails"
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="arrowleft" size={22} color="#000" />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#F8F3EC',
          },
        }}
        initialParams={initialParams}
      />

      <Stack.Screen
        component={ReceiptDetails}
        name="ReceiptDetails"
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="arrowleft" size={22} color="#000" />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#F8F3EC',
          },
        }}
        initialParams={initialParams}
      />

      <Stack.Screen
        component={TicketDetails}
        name="TicketDetails"
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="arrowleft" size={22} color="#000" />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#F8F3EC',
          },
        }}
        initialParams={initialParams}
      />

      <Stack.Screen
        component={PaymentHistory}
        name="PaymentHistory"
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="arrowleft" size={22} color="#000" />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#F8F3EC',
          },
        }}
        initialParams={initialParams}
      />

      <Stack.Screen
        name="Settings"
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="arrowleft" size={22} color="#000" />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#F8F3EC',
          },
        }}>
        {props => <Settings {...props} socket={socket} />}
      </Stack.Screen>

      <Stack.Screen
        component={ProfileImage}
        name="ProfileImage"
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="arrowleft" size={22} color="#000" />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#F8F3EC',
          },
        }}
        initialParams={initialParams}
      />

      <Stack.Screen
        component={GeneralInfo}
        name="GeneralInfo"
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="arrowleft" size={22} color="#000" />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#F8F3EC',
          },
        }}
        initialParams={initialParams}
      />

      <Stack.Screen
        component={SettingsFolder}
        name="SettingsFolder"
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="arrowleft" size={22} color="#000" />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#F8F3EC',
          },
        }}
        initialParams={initialParams}
      />

      <Stack.Screen
        component={SubscriptionFolder}
        name="SubscriptionFolder"
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="arrowleft" size={22} color="#000" />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#F8F3EC',
          },
        }}
        initialParams={initialParams}
      />

      <Stack.Screen
        component={HelpCenter}
        name="HelpCenter"
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="arrowleft" size={22} color="#000" />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#F8F3EC',
          },
        }}
        initialParams={initialParams}
      />
      <Stack.Screen
        component={TicketSubmission}
        name="TicketSubmission"
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="arrowleft" size={22} color="#000" />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#F8F3EC',
          },
        }}
        initialParams={initialParams}
      />

      <Stack.Screen
        component={UpdatePassword}
        name="UpdatePassword"
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="arrowleft" size={22} color="#000" />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#F8F3EC',
          },
        }}
        initialParams={initialParams}
      />

      <Stack.Screen
        component={Privacy}
        name="Privacy"
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="arrowleft" size={22} color="#000" />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#F8F3EC',
          },
        }}
        initialParams={initialParams}
      />

      <Stack.Screen
        component={TermsOfServices}
        name="TermsOfServices"
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="arrowleft" size={22} color="#000" />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#F8F3EC',
          },
        }}
        initialParams={initialParams}
      />

      <Stack.Screen
        name="ChooseAPlan"
        options={{
          ...TransitionPresets.SlideFromRightIOS,
          animationEnabled: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="arrowleft" size={22} color="#000" />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#F8F3EC',
          },
        }}>
        {props => <ChooseAPlan {...props} socket={socket} />}
      </Stack.Screen>

      <Stack.Screen
        component={Language}
        name="Language"
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="arrowleft" size={22} color="#000" />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#F8F3EC',
          },
        }}
        initialParams={initialParams}
      />

      <Stack.Screen {...StackConfig['TabNav']} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
=======
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View, TouchableOpacity, Alert, Dimensions} from 'react-native';
import Home from '../components/Tabs/Home/Home';
import Scan from '../components/Tabs/Scan/Scan';
import Analytics from '../components/Tabs/Analytics/Analytics';
import {useNavigation} from '@react-navigation/native';
import ScanResultScreen from '../components/Screens/ScanResultScreen';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import CategoryDetails from '../components/Screens/CategoryDetails';
import ReceiptDetails from '../components/Screens/ReceiptDetails';
import Settings from '../components/Screens/Profile/Settings';
import ProfileImage from '../components/Screens/Profile/ProfileImage';
import GeneralInfo from '../components/Screens/Profile/GeneralInfo';
import UpdatePassword from '../components/Screens/Profile/UpdatePassword';
import Privacy from '../components/Screens/Profile/Privacy';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Language from '../components/Screens/Profile/Language';
import i18next from 'i18next';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import HelpCenter from '../components/Screens/Profile/HelpCenter';
import TicketDetails from '../components/Screens/Profile/TicketDetails';
import PaymentHistory from '../components/Screens/Profile/PaymentHistory';
import {hasTokenExpired, isTokenExpiringSoon} from '../utils/tokenHandler';
import {userRefreshToken} from '../utils/api';
import appleAuth from '@invertase/react-native-apple-authentication';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import TicketSubmission from '../components/Screens/Profile/TicketSubmission';
import TermsOfServices from '../components/Screens/Profile/TermsOfServices';
import SettingsFolder from '../components/Screens/Profile/SettingsFolder';
import ChooseAPlan from '../components/Screens/Profile/ChooseAPlan';
import SubscriptionFolder from '../components/Screens/Profile/SubscriptionFolder';
import {
  AnalyticsIcon,
  GoBackIcon2,
  HomeIcon,
  PaymentsIcon,
  ProfileIcon,
  ScanIcon1,
} from '../assets/icons';
import Profile from '../components/Screens/Profile/Profile';
import Payments from '../components/Screens/Profile/Payments';
import ViewAll from '../components/Tabs/Home/ViewAll';
import {signIn, logOut} from '../redux/reducers/AuthSlice';
import {resetCategories} from '../redux/reducers/CategorySlice';
import {resetReceipts} from '../redux/reducers/ReceiptSlice';
import {resetSubscription} from '../redux/reducers/SubscriptionSlice';
import {Platform} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

console.log(windowHeight, windowWidth);

const RouteConfigs = {
  Home: {
    name: 'Home',
    component: Home,
  },
  Scan: {
    name: 'Scan',
  },
  Analytics: {
    name: 'Analytics',
    component: Analytics,
  },
  Profile: {
    name: 'Profile',
    component: Profile,
  },
};

const TabNavigatorConfig = {
  navigationOptions: {
    header: null,
    swipeEnabled: false,
  },
  screenOptions: {
    tabBarActiveTintColor: '#000',
    style: {
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },

      shadowRadius: 6,
      shadowOpacity: 1,
    },
  },
};

const Tab = createBottomTabNavigator();

const TabNav = () => {
  const {t} = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#ffffff',
          borderRadius: 20,
          borderTopWidth: 1,
          borderTopColor: '#fff',
          marginTop: 10,
          marginBottom: 20,
          marginHorizontal: 20,
          height: Platform.OS === 'ios' ? hp(8) : hp(8),
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          shadowOffset: {width: 0, height: 3},
          shadowRadius: 6,
          shadowOpacity: 1,
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 100,
                alignItems: 'center',
                justifyContent: 'center',
                transform: [
                  {
                    translateY:
                      windowHeight > 667 && Platform.OS === 'ios' ? 15 : 1,
                  },
                ],
              }}>
              <HomeIcon
                width={20}
                height={20}
                color={focused ? '#FE0000' : '#6F6F6F'}
              />

              <Text
                style={{
                  color: focused ? '#FE0000' : '#6F6F6F',
                  fontSize: 10,
                  marginBottom: 5,
                  fontWeight: focused ? '500' : 'normal',
                  marginTop: 5,
                }}>
                {t('home')}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Analytics"
        component={Analytics}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 110,
                alignItems: 'center',
                justifyContent: 'center',
                transform: [
                  {
                    translateY:
                      windowHeight > 667 && Platform.OS === 'ios' ? 15 : 1,
                  },
                ],
              }}>
              <AnalyticsIcon
                width={20}
                height={20}
                color={focused ? '#FE0000' : '#6F6F6F'}
              />

              <Text
                style={{
                  color: focused ? '#FE0000' : '#6F6F6F',
                  fontSize: 10,
                  marginBottom: 5,
                  fontWeight: focused ? '500' : 'normal',
                  marginTop: 5,
                }}>
                {t('analytics')}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={Scan}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1,
                transform: [
                  {
                    translateY:
                      windowWidth > 430
                        ? -50
                        : windowWidth > 1024
                          ? -50
                          : Platform.OS === 'ios'
                            ? -25
                            : -38,
                  },
                ],
              }}>
              <ScanIcon1 color="#fff" width={68} height={68} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Payments"
        component={Payments}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 110,
                alignItems: 'center',
                justifyContent: 'center',
                transform: [
                  {
                    translateY:
                      windowHeight > 667 && Platform.OS === 'ios' ? 15 : 1,
                  },
                ],
              }}>
              <PaymentsIcon
                width={20}
                height={20}
                color={focused ? '#FE0000' : '#6F6F6F'}
              />

              <Text
                style={{
                  color: focused ? '#FE0000' : '#6F6F6F',
                  fontSize: 10,
                  marginBottom: 5,
                  fontWeight: focused ? '500' : 'normal',
                  marginTop: 5,
                }}>
                {t('payments')}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 110,
                alignItems: 'center',
                justifyContent: 'center',
                transform: [
                  {
                    translateY:
                      windowHeight > 667 && Platform.OS === 'ios' ? 15 : 1,
                  },
                ],
              }}>
              <ProfileIcon
                width={20}
                height={20}
                color={focused ? '#FE0000' : '#6F6F6F'}
              />

              <Text
                style={{
                  color: focused ? '#FE0000' : '#6F6F6F',
                  fontSize: 10,
                  marginBottom: 5,
                  fontWeight: focused ? '500' : 'normal',
                  marginTop: 5,
                }}>
                {t('profile')}
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const StackNavigatorConfig = {
  headerMode: 'screen',
};

const StackConfig = {
  TabNav: {
    name: 'HomeScreen',
    component: TabNav,
    options: {headerShown: false},
  },
  ScanResultScreen: {
    name: 'ScanResultScreen',
    component: ScanResultScreen,
  },
  CategoryDetails: {
    name: 'CategoryDetails',
    component: CategoryDetails,
  },
  ReceiptDetails: {
    name: 'ReceiptDetails',
    component: ReceiptDetails,
  },
  TicketDetails: {
    name: 'TicketDetails',
    component: TicketDetails,
  },
  PaymentHistory: {
    name: 'PaymentHistory',
    component: PaymentHistory,
  },
  Settings: {
    name: 'Settings',
    component: Settings,
  },
  ProfileImage: {
    name: 'ProfileImage',
    component: ProfileImage,
  },
  GeneralInfo: {
    name: 'GeneralInfo',
    component: GeneralInfo,
  },
  UpdatePassword: {
    name: 'UpdatePassword',
    component: UpdatePassword,
  },
  Privacy: {
    name: 'Privacy',
    component: Privacy,
  },
  TermsOfServices: {
    name: 'TermsOfServices',
    component: TermsOfServices,
  },
  ChooseAPlan: {
    name: 'ChooseAPlan',
    component: ChooseAPlan,
  },
  Language: {
    name: 'Language',
    component: Language,
  },
  HelpCenter: {
    name: 'HelpCenter',
    component: HelpCenter,
  },
  TicketSubmission: {
    name: 'TicketSubmission',
    component: TicketSubmission,
  },
  SettingsFolder: {
    name: 'SettingsFolder',
    component: SettingsFolder,
  },
  SubscriptionFolder: {
    name: 'SubscriptionFolder',
    component: SubscriptionFolder,
  },
  ViewAll: {
    name: 'ViewAll',
    component: ViewAll,
  },
};

const MainNavigation = ({route}) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const initialParams = route?.params;
  const navigation = useNavigation();
  const user = useSelector(state => state.auth.user);
  const {t} = useTranslation;

  const handleLogout = async () => {
    dispatch(logOut());
    dispatch(resetCategories());
    dispatch(resetReceipts());
    dispatch(resetSubscription());
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
    } catch (err) {
      console.log('Error revoking Apple access:');
    }
  };

  const revokeAccess = async () => {
    try {
      await GoogleSignin.revokeAccess();
      handleLogout();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const refreshToken = async () => {
      try {
        const resData = await userRefreshToken(user?.token, setError);
        console.log(resData.data);

        dispatch(
          signIn({
            ...user,
            token: resData?.data?.token,
          }),
        );
      } catch (error) {
        console.log('Error refreshing token:', error);
      }
    };

    if (hasTokenExpired(user?.token)) {
      Alert.alert('Token expired.');
      user && user.google
        ? revokeAccess()
        : user && user.apple
          ? revokeSignInWithAppleToken()
          : handleLogout();
    } else if (isTokenExpiringSoon(user?.token)) {
      // Alert.alert('Token is going to be expired');
      refreshToken();
    }
  }, [user?.token, dispatch]);

  useEffect(() => {
    i18next.changeLanguage(user?.language);
  }, []);

  return (
    <Stack.Navigator options={{...StackNavigatorConfig}}>
      <Stack.Screen name="Root" options={{headerShown: false}}>
        {props => <TabNav {...props} />}
      </Stack.Screen>

      <Stack.Screen
        component={ScanResultScreen}
        name="ScanResultScreen"
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                padding: 6,
                borderRadius: 100,
                marginLeft: 10,
                width: 48,
                height: 48,
              }}>
              <GoBackIcon2 width={20} height={16} color={'#000'} />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
        initialParams={initialParams}
      />

      <Stack.Screen
        component={CategoryDetails}
        name="CategoryDetails"
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <GoBackIcon2 width={20} height={16} color={'#000'} />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
        initialParams={initialParams}
      />

      <Stack.Screen
        component={ReceiptDetails}
        name="ReceiptDetails"
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <GoBackIcon2 width={20} height={16} color={'#000'} />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
        initialParams={initialParams}
      />

      <Stack.Screen
        component={TicketDetails}
        name="TicketDetails"
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <GoBackIcon2 width={20} height={16} color={'#000'} />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
        initialParams={initialParams}
      />

      <Stack.Screen
        component={PaymentHistory}
        name="PaymentHistory"
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <GoBackIcon2 width={20} height={16} color={'#000'} />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
        initialParams={initialParams}
      />

      <Stack.Screen
        name="Settings"
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <GoBackIcon2 width={20} height={16} color={'#000'} />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}>
        {props => <Settings {...props} />}
      </Stack.Screen>

      <Stack.Screen
        component={ProfileImage}
        name="ProfileImage"
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <GoBackIcon2 width={20} height={16} color={'#000'} />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
        initialParams={initialParams}
      />

      <Stack.Screen
        component={GeneralInfo}
        name="GeneralInfo"
        options={{
          headerShown: false,
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
        initialParams={initialParams}
      />

      <Stack.Screen
        component={SettingsFolder}
        name="SettingsFolder"
        options={{
          headerShown: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <GoBackIcon2 width={20} height={16} color={'#000'} />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
        initialParams={initialParams}
      />

      <Stack.Screen
        component={SubscriptionFolder}
        name="SubscriptionFolder"
        options={{
          headerShown: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <GoBackIcon2 width={20} height={16} color={'#000'} />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
        initialParams={initialParams}
      />

      <Stack.Screen
        component={ViewAll}
        name="ViewAll"
        options={{
          headerShown: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <GoBackIcon2 width={20} height={16} color={'#000'} />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
        initialParams={initialParams}
      />

      <Stack.Screen
        component={HelpCenter}
        name="HelpCenter"
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <GoBackIcon2 width={20} height={16} color={'#000'} />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
        initialParams={initialParams}
      />
      <Stack.Screen
        component={TicketSubmission}
        name="TicketSubmission"
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <GoBackIcon2 width={20} height={16} color={'#000'} />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
        initialParams={initialParams}
      />

      <Stack.Screen
        component={UpdatePassword}
        name="UpdatePassword"
        options={{
          headerShown: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <GoBackIcon2 width={20} height={16} color={'#000'} />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
        initialParams={initialParams}
      />

      <Stack.Screen
        component={Privacy}
        name="Privacy"
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <GoBackIcon2 width={20} height={16} color={'#000'} />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
        initialParams={initialParams}
      />

      <Stack.Screen
        component={TermsOfServices}
        name="TermsOfServices"
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <GoBackIcon2 width={20} height={16} color={'#000'} />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
        initialParams={initialParams}
      />

      <Stack.Screen
        name="ChooseAPlan"
        options={{
          ...TransitionPresets.SlideFromRightIOS,
          animationEnabled: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <GoBackIcon2 width={20} height={16} color={'#000'} />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}>
        {props => <ChooseAPlan {...props} />}
      </Stack.Screen>

      <Stack.Screen
        component={Language}
        name="Language"
        options={{
          headerShown: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <GoBackIcon2 width={20} height={16} color={'#000'} />
            </TouchableOpacity>
          ),
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
        initialParams={initialParams}
      />

      <Stack.Screen {...StackConfig['TabNav']} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
>>>>>>> f31f635 (Mobile new features)
