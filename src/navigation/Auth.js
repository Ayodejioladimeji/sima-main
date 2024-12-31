<<<<<<< HEAD
import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnBoarding from '../components/OnBoarding/OnBoarding';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';
import ForgotPassword from '../components/Auth/ForgotPassword';
import TermsAndConditions from '../components/Screens/Terms/TermsAndConditions';

const StackAuth = createNativeStackNavigator();

const AuthNavigation = () => {
  const [isFirstTimeVisit, setIsFirstTimeVisit] = useState(null);

  useEffect(() => {
    const checkAppFirstLaunch = async () => {
      await AsyncStorage.getItem('isAppFirstLaunched').then(value => {
        if (value === null) {
          AsyncStorage.setItem('isAppFirstLaunched', 'true');
          setIsFirstTimeVisit(true);
        } else {
          setIsFirstTimeVisit(false);
        }
      });
    };

    checkAppFirstLaunch();
  }, []);

  if (isFirstTimeVisit !== null) {
    return (
      <StackAuth.Navigator screenOptions={{headerShown: false}}>
        {isFirstTimeVisit && (
          <StackAuth.Screen name="OnBoarding" component={OnBoarding} />
        )}

        <StackAuth.Screen name="Login" component={Login} />
        <StackAuth.Screen name="Signup" component={Signup} />
        <StackAuth.Screen name="ForgotPassword" component={ForgotPassword} />
        <StackAuth.Screen
          name="TermsAndConditions"
          component={TermsAndConditions}
        />
      </StackAuth.Navigator>
    );
  }
};

export default AuthNavigation;
=======
import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnBoarding from '../components/OnBoarding/OnBoarding';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';
import ForgotPassword from '../components/Auth/ForgotPassword';
import TermsAndConditions from '../components/Screens/Terms/TermsAndConditions';

const StackAuth = createNativeStackNavigator();

const AuthNavigation = () => {
  const [isFirstTimeVisit, setIsFirstTimeVisit] = useState(null);

  useEffect(() => {
    const checkAppFirstLaunch = async () => {
      await AsyncStorage.getItem('isAppFirstLaunched').then(value => {
        if (value === null) {
          AsyncStorage.setItem('isAppFirstLaunched', 'true');
          setIsFirstTimeVisit(true);
        } else {
          setIsFirstTimeVisit(false);
        }
      });
    };

    checkAppFirstLaunch();
  }, []);

  if (isFirstTimeVisit !== null) {
    return (
      <StackAuth.Navigator screenOptions={{headerShown: false}}>
        {isFirstTimeVisit && (
          <StackAuth.Screen name="OnBoarding" component={OnBoarding} />
        )}

        <StackAuth.Screen name="Login" component={Login} />
        <StackAuth.Screen name="Signup" component={Signup} />
        <StackAuth.Screen name="ForgotPassword" component={ForgotPassword} />
        <StackAuth.Screen
          name="TermsAndConditions"
          component={TermsAndConditions}
        />
      </StackAuth.Navigator>
    );
  }
};

export default AuthNavigation;
>>>>>>> f31f635 (Mobile new features)
