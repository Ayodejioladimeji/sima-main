import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, ScrollView, Alert} from 'react-native';
import {useSelector} from 'react-redux';

import {checkServerConnection, userGetAllTicket} from '../../../utils/api';

<<<<<<< HEAD
import FontAwesome from 'react-native-vector-icons/FontAwesome';
=======
>>>>>>> f31f635 (Mobile new features)
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';

import moment from 'moment';
<<<<<<< HEAD
=======
import {ChecklistIcon, WarningIcon} from '../../../assets/icons';
>>>>>>> f31f635 (Mobile new features)

const HelpCenter = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [allTickets, setAllTickets] = useState([]);
  const user = useSelector(state => state.auth.user);

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
    if (isFocused) {
      getAllTicketsUser();
    }
  }, [isFocused]);

  const navigateToTicketSubmission = () => {
    navigation.navigate('TicketSubmission');
  };

  return (
    <View
      style={{flex: 1, padding: 15}}
<<<<<<< HEAD
      className="bg-customBg"
=======
      className="bg-white"
>>>>>>> f31f635 (Mobile new features)
      enableOnAndroid={true}>
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

<<<<<<< HEAD
      <View>
        {!loading && (
          <TouchableOpacity
            className={`${
              loading ? 'bg-slate-400' : 'bg-customRed'
            } rounded-lg w-full p-2 text-center my-2`}
            onPress={navigateToTicketSubmission}>
            <Text className="text-sm text-white text-center font-openSans font-bold">
=======
      <View className="justify-center items-center">
        {!loading && (
          <TouchableOpacity
            onPress={navigateToTicketSubmission}
            disabled={loading}
            className={`${
              loading ? 'bg-slate-400' : 'bg-customRed'
            } rounded-full w-[222px] h-[45px] p-2 justify-center items-center my-2`}>
            <Text className="text-sm text-white  font-InterMedium ">
>>>>>>> f31f635 (Mobile new features)
              Submit a ticket
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {!loading && allTickets?.length > 0 && (
        <View style={{flex: 1, marginTop: 10}}>
          <ScrollView>
            {allTickets.map(ticket => (
              <TouchableOpacity
                key={ticket.ticketNumber}
                onPress={() =>
                  navigation.navigate('TicketDetails', {tktId: ticket?._id})
                }
                className="bg-white my-2 p-3 rounded-md border border-slate-200">
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
                    #{ticket?.ticketNumber}
                  </Text>
                </View>
                <View className="flex-row justify-between items-center">
<<<<<<< HEAD
                  <Text className="text-xs text-black">
                    Created at: {moment(ticket?.createdAt).fromNow(true)}
                  </Text>
                  <Text className="text-xs text-black">
=======
                  <Text className="text-xs text-black font-InterRegular">
                    Created at: {moment(ticket?.createdAt).fromNow(true)}
                  </Text>
                  <Text className="text-xs text-black font-InterRegular">
>>>>>>> f31f635 (Mobile new features)
                    Updated at: {moment(ticket?.updatedAt).fromNow(true)}
                  </Text>
                </View>

<<<<<<< HEAD
                <Text className="text-md font-bold my-1 capitalize text-black">
                  Subject: {ticket?.subject}
                </Text>
                <View className="flex-row justify-between items-center">
                  <Text className="text-sm text-black">
=======
                <Text className="text-md  my-1 capitalize text-black font-InterBold">
                  Subject: {ticket?.subject}
                </Text>
                <View className="flex-row justify-between items-center">
                  <Text className="text-sm text-black font-InterRegular">
>>>>>>> f31f635 (Mobile new features)
                    Reason: {ticket.reason}
                  </Text>
                </View>

                <View className="flex-row justify-between items-center my-1">
<<<<<<< HEAD
                  <Text className="text-sm capitalize text-black">Status:</Text>
                  <Text className="text-sm bg-slate-700 text-white px-3">
=======
                  <Text className="text-sm capitalize text-black font-InterRegular">
                    Status:
                  </Text>
                  <Text className="text-[12px] bg-slate-700 text-white px-4 py-2 font-InterMedium rounded-2xl ">
>>>>>>> f31f635 (Mobile new features)
                    {ticket?.status === 'pending'
                      ? 'Pending'
                      : ticket?.status === 'waiting'
                      ? 'Awaiting your response'
                      : 'Solved'}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default HelpCenter;
