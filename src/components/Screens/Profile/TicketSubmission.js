import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';

import {checkServerConnection, userAddTicket} from '../../../utils/api';

<<<<<<< HEAD
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
<<<<<<< HEAD
=======
import {
  ChecklistIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  WarningIcon,
} from '../../../assets/icons';
>>>>>>> f31f635 (Mobile new features)

const TicketSubmission = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const [selectedReason, setSelectedReason] = useState(null);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

  const reasons = [
    {_id: 0, label: 'Payment Issue'},
    {_id: 1, label: 'Account Access Problem'},
    {_id: 2, label: 'Technical Support'},
    {_id: 3, label: 'Product Inquiry'},
    {_id: 4, label: 'Feedback and Suggestions'},
    {_id: 5, label: 'Other'},
  ];

  const user = useSelector(state => state.auth.user);
  const {control, handleSubmit, reset} = useForm();

  const onSubmit = async data => {
    const isServerConnected = await checkServerConnection();
    if (isServerConnected) {
      if (!subject) {
        Alert.alert('Subject should not be empty');
        return;
      }
      const userData = {
        subject,
        reason: selectedReason?.label,
        messageText: message,
      };

      setLoading(false);
      setSuccess('');
      try {
        setLoading(true);
        const response = await userAddTicket(userData, user?.token, setError);
        if (response?.status === 200) {
          setSuccess(response.data.message);
          setTimeout(() => {
            setSuccess('');
            setError('');
            reset();
            navigation.goBack();
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

  const handleReasonChange = value => {
    setSelectedReason(value);
  };

  return (
<<<<<<< HEAD
    <View style={{flex: 1, padding: 15}} className="bg-customBg">
=======
    <View style={{flex: 1, padding: 15}} className="bg-white">
>>>>>>> f31f635 (Mobile new features)
      <View className="absolute right-0 left-0 top-4">
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
      </View>

      <KeyboardAwareScrollView enableOnAndroid={true}>
        <View className="flex-1 mt-5">
          <View className="flex-row">
<<<<<<< HEAD
            <Text className="text-xl my-5 font-openSans text-black">
=======
            <Text className="text-xl my-5 font-InterRegular text-black">
>>>>>>> f31f635 (Mobile new features)
              Submit new support ticket.
            </Text>
          </View>

          <TextInput
            multiline
            numberOfLines={1}
            placeholder="Subject"
            value={subject}
            onChangeText={text => setSubject(text)}
            style={{
              color: '#000',
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 5,
              marginVertical: 15,
              paddingVertical: 8,
              paddingLeft: 10,
              paddingTop: 8,
            }}
<<<<<<< HEAD
            className="focus:border-customRed font-openSans"
=======
            className="focus:border-customRed font-InterRegular"
>>>>>>> f31f635 (Mobile new features)
          />

          <TouchableOpacity
            onPress={() => {
              setOpen(!open);
            }}
            className="p-2 rounded-md flex flex-row justify-between items-center"
            style={{
              borderWidth: 1,
              borderColor: `${selectedReason ? '#000' : '#FE0002'}`,
            }}>
            <Text
<<<<<<< HEAD
              className="font-openSans"
=======
              className="font-InterRegular"
>>>>>>> f31f635 (Mobile new features)
              style={{
                color: '#000',
              }}>
              {selectedReason ? selectedReason?.label : 'Reason'}
            </Text>
<<<<<<< HEAD
            <FontAwesome
              name={open ? 'chevron-up' : 'chevron-down'}
              color="#000"
            />
=======
            {open ? (
              <ChevronUpIcon width={20} height={20} color="#000" />
            ) : (
              <ChevronDownIcon width={20} height={20} color="#000" />
            )}
>>>>>>> f31f635 (Mobile new features)
          </TouchableOpacity>

          {open && (
            <View
              style={{
                height: hp(30),
                position: 'absolute',
                width: '100%',
                right: 0,
                left: 0,
                top: '45%',
                zIndex: 100,
              }}>
              <ScrollView>
                {reasons?.map(dt => {
                  const matched = dt?.label === selectedReason?.label;
                  return (
                    <TouchableOpacity
                      key={dt?._id}
                      style={{
                        backgroundColor: '#fff',
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}
                      onPress={() => {
                        handleReasonChange(dt);
                        setOpen(false);
                      }}>
<<<<<<< HEAD
                      <Text className="text-slate-900 font-openSans">
                        {dt?.label}
                      </Text>
                      {matched && (
                        <Feather
                          name="check-circle"
                          size={14}
                          color="#D45055"
=======
                      <Text className="text-slate-900 font-InterRegular">
                        {dt?.label}
                      </Text>
                      {matched && (
                        <ChecklistIcon
                          width={14}
                          height={14}
                          color={'#71BA65'}
>>>>>>> f31f635 (Mobile new features)
                        />
                      )}
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          )}

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
<<<<<<< HEAD
                className="focus:border-customRed font-openSans"
=======
                className="focus:border-customRed font-InterRegular"
>>>>>>> f31f635 (Mobile new features)
              />
            </ScrollView>
          </View>

          <View className="flex-row my-2">
            <TouchableOpacity
              onPress={handleSubmit(onSubmit)}
              disabled={loading}
<<<<<<< HEAD
              className="bg-customRed rounded-lg w-full p-2 text-center my-2">
              <Text className="text-sm text-white text-center font-openSans font-bold">
=======
              className={`${
                loading ? 'bg-slate-400' : 'bg-customRed'
              } rounded-full w-full h-[45px] p-2 justify-center items-center my-2`}>
              <Text className="text-sm text-white  font-InterMedium ">
>>>>>>> f31f635 (Mobile new features)
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default TicketSubmission;
