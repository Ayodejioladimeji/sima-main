import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
<<<<<<< HEAD
=======
  Image,
>>>>>>> f31f635 (Mobile new features)
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  checkServerConnection,
  updateUserInfo,
  userGetAllPayments,
} from '../../../utils/api';
<<<<<<< HEAD
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
=======
>>>>>>> f31f635 (Mobile new features)
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';
import moment from 'moment';
import {useIAP} from 'react-native-iap';
<<<<<<< HEAD
=======
import {ChecklistIcon, WarningIcon} from '../../../assets/icons';
>>>>>>> f31f635 (Mobile new features)

const errorLog = ({message, error}) => {
  console.log('An error happened', message, error);
};

const PaymentHistory = () => {
  const {connected, purchaseHistory, getPurchaseHistory} = useIAP();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleGetPurchaseHistory = async () => {
    try {
      setLoading(true);
      await getPurchaseHistory();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      errorLog({message: 'handleGetPurchaseHistory', error});
    }
  };

  useEffect(() => {
    handleGetPurchaseHistory();
  }, [connected]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
<<<<<<< HEAD
      className="p-4 bg-background flex-1 bg-customBg">
=======
      className="p-4 bg-background flex-1 bg-white">
>>>>>>> f31f635 (Mobile new features)
      <View className="my-1">
        {loading && <ActivityIndicator animating={true} color="#D45055" />}
        {success && (
          <View className="flex-row items-center justify-center my-2">
<<<<<<< HEAD
            <FontAwesome name="check-circle" size={14} color="green" />
=======
            <ChecklistIcon width={14} height={14} color={'#71BA65'} />
>>>>>>> f31f635 (Mobile new features)
            <Text className="text-green-800 ml-1 font-openSans">{success}</Text>
          </View>
        )}

        {error && (
          <View className="flex-row items-center justify-center my-2">
<<<<<<< HEAD
            <FontAwesome name="warning" size={14} color="#D45055" />
=======
            <WarningIcon width={14} height={14} color={'#FE0000'} />
>>>>>>> f31f635 (Mobile new features)
            <Text className="text-red-500 ml-1 font-openSans">{error}</Text>
          </View>
        )}

        {!loading && purchaseHistory?.length === 0 && (
          <View>
            <Text className="text-center text-black">History not found</Text>
          </View>
        )}

        <ScrollView>
          <View>
            {!loading &&
              purchaseHistory?.map((purchase, index) => {
                return (
                  <View
                    key={index}
<<<<<<< HEAD
                    className="shadow-md my-1 rounded-md bg-white p-2">
                    <View className="flex-row justify-between items-center my-1">
                      <Text className="font-bold capitalize text-black">
                        Plan:{' '}
                        {purchase?.productId === 'basicmonthly599'
                          ? 'Basic'
                          : purchase?.productId === 'premiummonthly999'
                          ? 'Premium'
                          : 'Unspecified'}
                      </Text>
                    </View>

                    <View className="flex-row justify-between items-center my-1">
                      <Text className="font-bold capitalize text-black">
                        Date
                      </Text>
                      <Text className="font-bold text-black">
                        {moment(purchase?.transactionDate).format(
                          'YYYY-MM-DD HH:mm:ss',
                        )}
                      </Text>
                    </View>
=======
                    className="border border-gray-200 my-1 rounded-lg bg-white p-2">
                    <TouchableOpacity key={index}>
                      <View className="flex-row justify-between items-center rounded-md p-2 mb-2">
                        <View className="justify-center items-center p-1 ">
                          <Image
                            source={require('../../../assets/img/rcpt.jpg')}
                            className="w-[75px] h-[75px] rounded-md"
                            resizeMode="cover"
                          />
                        </View>

                        <View className="flex-1 ml-3 justify-start">
                          <View className=" flex-row justify-between items-center">
                            <Text className="text-md font-InterBold text-[#313131] my-3">
                              {purchase?.productId === 'basicmonthly599'
                                ? 'Basic Plan'
                                : purchase?.productId === 'premiummonthly999'
                                  ? 'Premium'
                                  : 'Unspecified'}
                            </Text>
                          </View>
                          <View>
                            <Text className="text-xs my-1 text-[#ADADAD] font-InterRegular">
                              {moment(purchase?.transactionDate).format(
                                'YYYY-MM-DD HH:mm:ss',
                              )}
                            </Text>
                          </View>
                        </View>

                        <View className="mr-1">
                          <View>
                            <Text className="text-[#FA6E5A] text-[16px] font-InterBold">
                              {purchase?.productId === 'basicmonthly599'
                                ? '$3.99'
                                : purchase?.productId === 'premiummonthly999'
                                  ? '$6.99'
                                  : 'Unspecified'}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
>>>>>>> f31f635 (Mobile new features)
                  </View>
                );
              })}
          </View>
<<<<<<< HEAD
=======

          <View className="pb-96" />
>>>>>>> f31f635 (Mobile new features)
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default PaymentHistory;
