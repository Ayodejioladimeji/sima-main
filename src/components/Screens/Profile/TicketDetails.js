import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
  Modal,
  Pressable,
  Keyboard,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import CustomInput from '../../Common/CustomInput/CustomInput';
import {
  checkServerConnection,
  updateUserInfo,
  userAddTicket,
  userGetAllTicket,
  userUpdateTicket,
} from '../../../utils/api';
<<<<<<< HEAD
import Icon from 'react-native-vector-icons/Feather';
import IconAnt from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
=======
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';
>>>>>>> f31f635 (Mobile new features)
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import moment from 'moment';
<<<<<<< HEAD
=======
import {ChecklistIcon, WarningIcon, XMarkIcon} from '../../../assets/icons';
>>>>>>> f31f635 (Mobile new features)

const TicketDetails = ({route}) => {
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const {tktId} = route.params;
  const [loading, setLoading] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);
  const [success, setSuccess] = useState('');
  const [successModal, setSuccessModal] = useState('');
  const [error, setError] = useState('');
  const [errorModal, setErrorModal] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedReason, setSelectedReason] = useState(null);
  const [message, setMessage] = useState(null);
  const [open, setOpen] = useState(false);
  const [allTickets, setAllTickets] = useState([]);

  const reasons = [
    {_id: 0, label: 'Payment Issue'},
    {_id: 1, label: 'Account Access Problem'},
    {_id: 2, label: 'Technical Support'},
    {_id: 3, label: 'Product Inquiry'},
    {_id: 4, label: 'Feedback and Suggestions'},
    {_id: 5, label: 'Other'},
  ];

  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const {control, handleSubmit, reset} = useForm();

  const getAllTicketsUser = async () => {
    const isServerConnected = await checkServerConnection();
    if (isServerConnected) {
      try {
        setLoading(true);
        const response = await userGetAllTicket(user?.token, setError);
        if (response?.status === 200) {
          setTimeout(() => {
            setAllTickets(response?.data?.tickets);
          }, 2000);
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

  useEffect(() => {
    getAllTicketsUser();
  }, []);

  const ticketDetails =
    allTickets && allTickets?.filter(ticket => ticket?._id === tktId)[0];

  const onSubmit = async () => {
    const isServerConnected = await checkServerConnection();
    if (isServerConnected) {
      const userData = {
        ticketId: ticketDetails?._id,
        messageText: message,
      };

      setErrorModal('');
      setSuccessModal('');
      try {
        setLoadingModal(true);
        const response = await userUpdateTicket(
          userData,
          user?.token,
          setError,
        );
        if (response?.status === 200) {
          setSuccessModal(response.data.message);
          setTimeout(() => {
            setSuccessModal('');
            setErrorModal('');
            setMessage(null);
            handleCloseModal();
            getAllTicketsUser();
          }, 1000);
        }
        setLoadingModal(false);
      } catch (err) {
        setLoadingModal(false);
        setSuccessModal('');
      }
    } else {
      const errorMessage = 'Server is busy or not connected!';
      setError(errorMessage);
    }
  };

  const handleReasonChange = value => {
    setSelectedReason(value);
  };

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setErrorModal('');
    setSuccessModal('');
    setSelectedReason(null);
    setMessage(null);
    setOpen(false);
    reset();
    setModalVisible(false);
  };

  return (
<<<<<<< HEAD
    <View style={{flex: 1, padding: 10}}>
      {loading && <ActivityIndicator animating={true} color="#D45055" />}
      {success && (
        <View className="flex-row items-center justify-center my-2">
          <FontAwesome name="check-circle" size={14} color="green" />
=======
    <View style={{flex: 1, padding: 10, backgroundColor: 'white'}}>
      {loading && <ActivityIndicator animating={true} color="#D45055" />}
      {success && (
        <View className="flex-row items-center justify-center my-2">
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

      <Modal
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => handleCloseModal()}
        transparent>
<<<<<<< HEAD
        <View className="flex-1 justify-center items-center z-20 w-full h-full bg-stone-100 p-3">
=======
        <View className="flex-1 justify-center items-center z-20 w-full h-full bg-white p-3">
>>>>>>> f31f635 (Mobile new features)
          <Pressable
            className="w-full h-full absolute opacity-20"
            onPress={() => handleCloseModal()}
          />
          <Pressable
            onPress={() => Keyboard.dismiss()}
            className={`relative p-6 w-full ${
              Platform.OS === 'ios' ? 'h-3/4 bottom-10' : 'h-80'
            } items-center bg-slate-100 rounded-md`}>
            <TouchableOpacity
              onPress={() => handleCloseModal()}
              className="absolute top-2 right-2 z-10">
<<<<<<< HEAD
              <IconAnt name="close" size={19} color="black" />
=======
              <XMarkIcon width={15} height={15} color={'#000'} />
>>>>>>> f31f635 (Mobile new features)
            </TouchableOpacity>

            <View>
              {loadingModal && (
                <ActivityIndicator animating={true} color="#D45055" />
              )}
              {successModal && (
                <View className="flex-row items-center justify-center my-2">
<<<<<<< HEAD
                  <FontAwesome name="check-circle" size={14} color="green" />
=======
                  <ChecklistIcon width={14} height={14} color={'#71BA65'} />
>>>>>>> f31f635 (Mobile new features)
                  <Text className="text-green-800 ml-1">{successModal}</Text>
                </View>
              )}

              {errorModal && (
                <View className="flex-row items-center justify-center my-2">
<<<<<<< HEAD
                  <FontAwesome name="warning" size={14} color="#D45055" />
=======
                  <WarningIcon width={14} height={14} color={'#FE0000'} />
>>>>>>> f31f635 (Mobile new features)
                  <Text className="text-red-500 ml-1 font-openSans">
                    {errorModal}
                  </Text>
                </View>
              )}

              <View className="flex-row">
<<<<<<< HEAD
                <Text className="text-xl my-5 font-openSans text-black">
=======
                <Text className="text-xl my-5 font-InterRegular text-black">
>>>>>>> f31f635 (Mobile new features)
                  Add new reply.
                </Text>
              </View>

              <View style={{height: 150, marginTop: 5}}>
                <ScrollView>
                  <TextInput
                    multiline
                    numberOfLines={4}
                    placeholder="Message"
                    value={message}
                    onChangeText={text => setMessage(text)}
                    style={{
                      color: '#000',
                      borderWidth: 1,
                      borderColor: 'gray',
                      borderRadius: 5,
                      padding: 10,
                      marginTop: 10,
                      minHeight: 130,
                    }}
                    className="focus:border-customRed font-openSans"
                  />
                </ScrollView>
              </View>

              <View className="flex-row my-2">
                <TouchableOpacity
                  onPress={handleSubmit(onSubmit)}
                  disabled={loadingModal}
<<<<<<< HEAD
                  className="bg-customRed rounded-lg w-full p-2 text-center my-2">
                  <Text className="text-sm text-white text-center font-openSans font-bold">
=======
                  className="bg-customRed rounded-full w-full h-[45px] p-2 justify-center items-center my-2">
                  <Text className="text-sm text-white font-InterMedium ">
>>>>>>> f31f635 (Mobile new features)
                    Submit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Pressable>
        </View>
      </Modal>

      {!loading && ticketDetails && (
        <View className="flex-1 my-2">
          <View
            style={{
              height: hp(10),
            }}>
            <View className="flex-row justify-between items-center my-1">
<<<<<<< HEAD
              <Text className="text-right text-black">Ticket</Text>
              <Text className="text-right text-black">
=======
              <Text className="text-right text-black font-InterRegular">
                Ticket
              </Text>
              <Text className="text-right text-black font-InterRegular">
>>>>>>> f31f635 (Mobile new features)
                #{ticketDetails?.ticketNumber}
              </Text>
            </View>
            <View className="flex-row justify-between items-center">
              <View className="flex-row justify-center items-center">
<<<<<<< HEAD
                <Text className="text-black">Status: </Text>
                <Text className="text-sm capitalize bg-slate-700 text-white px-3">
                  {ticketDetails?.status}
                </Text>
              </View>
              <Text className="text-slate-500">
=======
                <Text className="text-black font-InterRegular">Status: </Text>
                <Text className="text-sm capitalize bg-slate-700 rounded-2xl text-white px-4 font-InterRegular">
                  {ticketDetails?.status}
                </Text>
              </View>
              <Text className="text-slate-500 font-InterRegular">
>>>>>>> f31f635 (Mobile new features)
                Updated: {moment(ticketDetails?.updatedAt).fromNow()}
              </Text>
            </View>
            <View className="flex-row justify-between items-center">
<<<<<<< HEAD
              <Text className="text-sm text-black">
                Reason: {ticketDetails?.reason}
              </Text>
            </View>
            <Text className="text-md font-bold my-1 capitalize mb-2 text-black">
=======
              <Text className="text-sm text-black font-InterRegular">
                Reason: {ticketDetails?.reason}
              </Text>
            </View>
            <Text className="text-md my-1 capitalize mb-2 text-black font-InterBold">
>>>>>>> f31f635 (Mobile new features)
              Subject: {ticketDetails?.subject}
            </Text>
          </View>

          <View
            style={{
              height: hp(60),
              marginTop: hp(5),
            }}>
            <ScrollView
              ref={scrollViewRef}
              onContentSizeChange={() => {
                scrollViewRef?.current?.scrollToEnd({animated: true});
              }}>
              <View className="flex-1">
                {ticketDetails?.messages.map((msg, index) => (
                  <View key={index} style={{marginBottom: 10}}>
                    <View className="flex-row justify-between items-center">
                      <View className="flex-row justify-between items-center">
<<<<<<< HEAD
                        <Text className="text-md font-bold text-black">
                          From:
                        </Text>
                        <Text className="ml-1 text-black">
                          {msg?.role === 'user' ? user?.name : 'Support team'}
                        </Text>
                      </View>
                      <Text className="text-slate-500">
                        {moment(msg?.createdAt).fromNow()}
                      </Text>
                    </View>
                    <Text className="text-justify mt-1 text-black">
=======
                        <Text className="text-md text-black font-InterBold">
                          From:
                        </Text>
                        <Text className="ml-1 text-black font-InterRegular">
                          {msg?.role === 'user' ? user?.name : 'Support team'}
                        </Text>
                      </View>
                      <Text className="text-slate-500 font-InterRegular">
                        {moment(msg?.createdAt).fromNow()}
                      </Text>
                    </View>
                    <Text className="text-justify mt-1 text-black font-InterRegular">
>>>>>>> f31f635 (Mobile new features)
                      {msg?.message}
                    </Text>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>

          {(ticketDetails?.status === 'pending' ||
            ticketDetails?.status === 'waiting') && (
            <View
              style={{
                height: hp(12),
              }}>
              <View className="flex-row my-2">
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
<<<<<<< HEAD
                  disabled={loadingModal}
                  className="bg-customRed rounded-lg w-full p-2 text-center my-2">
                  <Text className="text-sm text-white text-center font-openSans font-bold">
=======
                  disabled={loading}
                  className="bg-customRed rounded-full w-full h-[45px] p-2 justify-center items-center my-2">
                  <Text className="text-sm text-white font-InterMedium ">
>>>>>>> f31f635 (Mobile new features)
                    Add new reply
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default TicketDetails;
