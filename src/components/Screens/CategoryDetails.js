import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Platform,
  Modal,
  Pressable,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
<<<<<<< HEAD
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
const folderIcon = require('../../assets/icon/folder.png');
=======
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
>>>>>>> f31f635 (Mobile new features)
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
<<<<<<< HEAD
import AntDesign from 'react-native-vector-icons/AntDesign';
=======
>>>>>>> f31f635 (Mobile new features)
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../Common/CustomInput/CustomInput';
import {useForm} from 'react-hook-form';
import {checkServerConnection, updateUserCategory} from '../../utils/api';
<<<<<<< HEAD
import {
  UPDATE_CATEGORY,
  updateCategory,
} from '../../store/actions/categoryActions';
import {store} from '../../store';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
=======

import {
  ChecklistIcon,
  FolderIcon,
  WarningIcon,
  XMarkIcon,
} from '../../assets/icons';
import {updateCategory} from '../../redux/reducers/CategorySlice';
>>>>>>> f31f635 (Mobile new features)

const CategoryDetails = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const {category} = route.params;
  const categories = useSelector(state => state.cats.categories);
  const receipts = useSelector(state => state.receipts.receipts);
  const [dateArrow, setDateArrow] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const filteredCategory = categories?.find(cat => cat?._id === category?._id);

  const {control, handleSubmit, reset} = useForm({
    defaultValues: {
      name: filteredCategory?.name || '',
    },
  });

  const categoryReceipts = receipts?.filter(
    receipt => receipt.selectedCategory === category._id,
  );

  const uniqueDates = [
    ...new Set(
      categoryReceipts.map(receipt =>
        moment(receipt.date).format('YYYY-MM-DD'),
      ),
    ),
  ];

  const getCategoryColorById = categoryId => {
    const category = categories?.find(cat => cat._id === categoryId);
    return category ? category.color : 'rgba(0,0,0,0.1)';
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const filteredReceipts = selectedDate
    ? categoryReceipts.filter(
        receipt =>
          moment(receipt?.date).format('MMM D, YYYY') ===
          moment(selectedDate).format('MMM D, YYYY'),
      )
    : categoryReceipts;

  const handleCloseModal = () => {
    setModalVisible(false);
    setError('');
    setSuccess('');
  };

  const updateSubmit = async formData => {
    const isServerConnected = await checkServerConnection();
    if (isServerConnected) {
      const {name} = formData;

      const userData = {
        name,
      };
      setError('');
      setSuccess('');
      try {
        setLoading(true);
        const response = await updateUserCategory(
          userData,
          category._id,
          user?.token,
          setError,
        );
        if (response && response?.status === 200) {
          setSuccess(response.data.message);
<<<<<<< HEAD
          store.dispatch(updateCategory(response?.data?.category));
=======
          dispatch(updateCategory(response?.data?.category));
>>>>>>> f31f635 (Mobile new features)
          setTimeout(() => {
            setSuccess('');
            setError('');
            handleCloseModal();
          }, 2000);
          setLoading(false);
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

  return (
<<<<<<< HEAD
    <View className="flex-1 bg-customBg p-4">
=======
    <View className="flex-1 bg-white p-4">
>>>>>>> f31f635 (Mobile new features)
      <Modal
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => handleCloseModal()}
        transparent>
        <View className="justify-center items-center z-1000 w-full h-full p-3 ">
          <Pressable
            className="w-full h-full absolute bg-white opacity-20"
            onPress={() => handleCloseModal()}
          />
          <Pressable
            onPress={() => Keyboard.dismiss()}
            className={`relative p-6 w-full ${
              Platform.OS === 'ios' ? 'h-2/5 bottom-10' : 'h-80'
            } items-center bg-slate-100 rounded-md`}>
            <TouchableOpacity
              onPress={() => handleCloseModal()}
              className="absolute top-2 right-2 z-10">
<<<<<<< HEAD
              <Icon name="close" size={19} color="black" />
=======
              <XMarkIcon width={15} height={15} color={'#000'} />
>>>>>>> f31f635 (Mobile new features)
            </TouchableOpacity>

            <View className="absolute flex justify-center items-center top-5">
              {loading && (
                <ActivityIndicator animating={true} color="#D45055" />
              )}

              {success && (
                <View className="flex-row items-center justify-center my-2">
<<<<<<< HEAD
                  <FontAwesome name="check-circle" size={14} color="green" />
=======
                  <ChecklistIcon width={14} height={14} color={'#71BA65'} />
>>>>>>> f31f635 (Mobile new features)
                  <Text className="text-green-800 ml-1 font-openSans">
                    {success}
                  </Text>
                </View>
              )}

              {error && (
                <View className="flex-row items-center justify-center my-2">
<<<<<<< HEAD
                  <FontAwesome name="warning" size={14} color="#D45055" />
=======
                  <WarningIcon width={14} height={14} color={'#FE0000'} />

>>>>>>> f31f635 (Mobile new features)
                  <Text className="text-red-500 ml-1 font-openSans">
                    {error}
                  </Text>
                </View>
              )}
            </View>

            <View className="flex-1 justify-center">
              <View className="flex-row">
                <Text className="text-xl my-5 font-openSans text-black">
                  Update category
                </Text>
              </View>

              <CustomInput
                name="name"
                control={control}
                placeholder="Category name"
                rules={{
                  required: 'Category name is required',
                  minLength: {
                    value: 3,
                    message:
                      'Category name should be at least 3 characters long',
                  },
                  maxLength: {
                    value: 24,
                    message: 'Category name should be max 24 characters long',
                  },
                }}
              />

              <View className="flex-row my-2">
                <TouchableOpacity
                  onPress={handleSubmit(updateSubmit)}
                  disabled={loading}
                  className="bg-customRed rounded-lg w-full p-2 text-center my-2">
                  <Text className="text-sm text-white text-center font-openSans font-bold">
                    Update
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Pressable>
        </View>
      </Modal>

      <View className="flex-row justify-between items-center mb-2">
<<<<<<< HEAD
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          className="flex-row justify-center items-center">
          <Text className="text-center text-lg font-bold text-black ml-2 font-openSans">
            {filteredCategory.name}
          </Text>
          <View className="flex-row justify-between items-center ml-2">
            <MaterialIcons name="edit" color="red" size={15} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setDateArrow(!dateArrow) || setSelectedDate(null)}>
          <Text className="text-md text-slate-600">
            {!selectedDate
              ? 'Date'
              : moment(selectedDate).format('MMM D, YYYY')}{' '}
            {dateArrow ? <AntDesign name="up" /> : <AntDesign name="down" />}
          </Text>
        </TouchableOpacity>
=======
        <View className="w-full flex-row justify-between">
          <View className="ml-2">
            <Text className="text-lg text-black font-InterBold">
              {filteredCategory?.name}
            </Text>
            <View className="flex-row">
              <Text className="text-xs my-1 text-slate-500">
                {moment(filteredCategory?.date).format('MMM D, YYYY')}
              </Text>
              <Text className="text-xs my-1 text-slate-500 ml-2">
                {categoryReceipts?.length}
                {categoryReceipts?.length === 1 ? ' File' : ' Files'}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Scan')}
            className="flex-row justify-between items-center ml-2">
            <FolderIcon width={21} height={21} color={'#2E75FF'} />
            <Text className="pl-2 text-[#2E75FF]">Add File</Text>
          </TouchableOpacity>
        </View>
>>>>>>> f31f635 (Mobile new features)
      </View>

      {dateArrow && (
        <View
          style={{
            height: hp(20),
            position: 'absolute',
            top: 43,
            right: 17,
            zIndex: 1000,
            backgroundColor: 'white',
            elevation: 3,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }}>
          <ScrollView>
            {uniqueDates?.map((date, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() => {
                    setSelectedDate(date);
                    setDateArrow(!dateArrow);
                  }}
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 2,
                  }}
                  className={`flex-row justify-between items-center ${
                    i !== uniqueDates.length - 1
                      ? 'border-b border-stone-200 py-1'
                      : 'py-1'
                  }`}>
                  <Text className="font-openSans text-black">
                    {moment(date).format('MMM D, YYYY')}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      )}

      {categoryReceipts && categoryReceipts?.length > 0 ? (
        <View
          style={{
            height: Platform.OS === 'ios' ? hp(78) : hp(85),
          }}>
          <ScrollView>
            {filteredReceipts?.map((rcpt, i) => (
              <TouchableOpacity
                key={i}
                onPress={() =>
                  navigation.navigate('ReceiptDetails', {receipt: rcpt})
                }>
<<<<<<< HEAD
                <View
                  className={`flex-row justify-between items-center ${
                    i !== filteredReceipts.length - 1
                      ? 'border-b border-stone-200 py-1'
                      : 'py-1'
                  }`}>
                  <View
                    style={{
                      backgroundColor: getCategoryColorById(
                        rcpt?.selectedCategory,
                      ),
                    }}
                    className="w-8 h-8 justify-center items-center rounded-full p-5">
                    <Image
                      source={folderIcon}
                      resizeMode="contain"
                      className="w-5 h-5"
                    />
                  </View>

                  <View className="flex-1 ml-3">
                    <Text className="text-md font-semibold font-openSans text-black">
                      {rcpt?.supplierName}
                    </Text>
                    <Text className="text-xs my-1 text-slate-500">
                      {moment(rcpt?.date).format('MMM D, YYYY')},{' '}
                      {moment(rcpt?.time, 'HH:mm:ss').format('hh:mm A')}
                    </Text>
                  </View>
                  <Text className="font-medium text-slate-900 font-openSans">
                    ${rcpt?.totalAmount}
                  </Text>
=======
                <View className="flex-row justify-between items-center rounded-md p-2 mb-2 border border-[#e6e6e6]">
                  <View className="justify-center items-center p-1">
                    <Image
                      source={require('../../assets/img/rcpt.jpg')}
                      className="w-[75px] h-[75px] rounded-md"
                      resizeMode="cover"
                    />
                  </View>

                  <View className="flex-1 ml-3 justify-start">
                    <View className="flex-row justify-between items-center">
                      <Text className="text-xs text-[#313131] font-InterMedium my-3">
                        {rcpt?.supplierName}
                      </Text>
                    </View>
                    <View>
                      <Text className="text-xs my-1 text-[#ADADAD] font-InterRegular">
                        {moment(rcpt?.date).format('MMM D, YYYY')},
                        {moment(rcpt?.time, 'HH:mm:ss').format('hh:mm A')}
                      </Text>
                    </View>
                  </View>

                  <View>
                    <Text className="text-[#313131] text-[12px] font-InterMedium mt-0 mr-1">
                      ${rcpt?.totalAmount}
                    </Text>
                  </View>
>>>>>>> f31f635 (Mobile new features)
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      ) : (
        <View
<<<<<<< HEAD
          className="flex justify-center items-center bg-customBg"
=======
          className="flex justify-center items-center bg-white"
>>>>>>> f31f635 (Mobile new features)
          style={{
            height: Platform.OS === 'ios' ? hp(81) : hp(85),
          }}>
          <Text className="text-center text-xl text-slate-600 font-openSans">
            No receipts found.
          </Text>
        </View>
      )}
    </View>
  );
};

export default CategoryDetails;
