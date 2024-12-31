import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Auth from './Auth';
import Main from './Main';
import {useDispatch, useSelector} from 'react-redux';

import LoadingView from '../components/LoadingView';
import {StatusBar} from 'react-native';
import {userLoad} from '../utils/api';
<<<<<<< HEAD
=======
import {fetchCategories} from '../redux/reducers/CategorySlice';
import {fetchReceipts} from '../redux/reducers/ReceiptSlice';
import {fetchSubscription} from '../redux/reducers/SubscriptionSlice';
import {
  updateLanguage,
  updateProfileImage,
  updateProfileName,
} from '../redux/reducers/AuthSlice';
>>>>>>> f31f635 (Mobile new features)

const ReduxNavigation = ({scanKey, appStoreShared}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const [showLoader, setShowLoader] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await userLoad(user?.token, setError);
<<<<<<< HEAD

        if (response?.status === 200 && user) {
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

          dispatch({
            type: 'UPDATE_PROFILE_IMAGE',
            img: response?.data?.userData[0]?.profile_image,
          });

          dispatch({
            type: 'UPDATE_PROFILE_NAME',
            name: response?.data?.userData[0]?.name,
          });

          dispatch({
            type: 'UPDATE_LANGUAGE',
            language: response?.data?.userData[0]?.language,
          });
        }
        setShowLoader(false);
      } catch (error) {
        console.log('Error fetching data:', error);
=======
        // console.log(response.data.userData);

        if (response?.status === 200 && user) {
          dispatch(fetchCategories(response?.data?.categories));
          dispatch(fetchReceipts(response?.data?.receipts));
          dispatch(fetchSubscription(response?.data?.subscription));
          dispatch(updateProfileImage(response?.data?.userData?.profile_image));
          dispatch(updateProfileName(response?.data?.userData?.name));
          dispatch(updateLanguage(response?.data?.userData?.language));
        }
        setShowLoader(false);
      } catch (err) {
        console.log('Error fetching data:', err);
>>>>>>> f31f635 (Mobile new features)
        setShowLoader(false);
      }
    };
    if (user && user?.token) {
      fetchData();
    }
  }, []);

  if (user) {
    if (user && user.token)
      return (
        <>
          <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
          <Main />
        </>
      );
    return <LoadingView />;
  }
  return <Auth />;
};

const InitNavigation = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  return (
    <NavigationContainer>
      <ReduxNavigation />
    </NavigationContainer>
  );
};

export default InitNavigation;
