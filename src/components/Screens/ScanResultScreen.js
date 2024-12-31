<<<<<<< HEAD
=======
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
>>>>>>> f31f635 (Mobile new features)
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Alert,
  ActivityIndicator,
  Keyboard,
<<<<<<< HEAD
=======
  Platform,
>>>>>>> f31f635 (Mobile new features)
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import randomcolor from 'randomcolor';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
<<<<<<< HEAD
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
=======
import {useDispatch, useSelector} from 'react-redux';
>>>>>>> f31f635 (Mobile new features)
import {TouchableOpacity} from 'react-native';
import {
  checkServerConnection,
  userCategoryAdd,
  userSavedReceipt,
} from '../../utils/api';
<<<<<<< HEAD
import {store} from '../../store';
import {addReceipt} from '../../store/actions/receiptActoins';
=======

>>>>>>> f31f635 (Mobile new features)
import LottieView from 'lottie-react-native';
import {Modal} from 'react-native';
import {Pressable} from 'react-native';
import CustomInput from '../Common/CustomInput/CustomInput';
import {useForm} from 'react-hook-form';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
<<<<<<< HEAD
import {addCategory} from '../../store/actions/categoryActions';

const ScanResultScreen = () => {
=======

import {
  AddIcon2,
  ChecklistIcon,
  CheckMarkIcon2,
  ChevronDownIcon,
  ChevronUpIcon,
  EditIcon3,
  WarningIcon,
  XMarkIcon,
} from '../../assets/icons';
import {addCategory, fetchCategories} from '../../redux/reducers/CategorySlice';
import {addReceipt} from '../../redux/reducers/ReceiptSlice';

const ScanResultScreen = () => {
  const dispatch = useDispatch();
>>>>>>> f31f635 (Mobile new features)
  const {control, handleSubmit, reset} = useForm();
  const {
    control: controlTax,
    handleSubmit: handleSubmitTax,
    reset: resetTax,
  } = useForm();
  const {
    control: controlCategory,
    handleSubmit: handleCatSubmit,
    reset: resetCat,
  } = useForm();
  const navigation = useNavigation();
  const lottieRef = useRef(null);
  const user = useSelector(state => state.auth.user);
  const categories = useSelector(state => state.cats.categories);
  const [lineItems, setLineItems] = useState([]);
  const [newTaxes, setNewTaxes] = useState(0);
  const [newTotal, setNewTotal] = useState(0);
  const [newSupplierName, setNewSupplierName] = useState('');
  const [newSupplierAddress, setNewSupplierAddress] = useState('');
  const [newSupplierPhone, setNewSupplierPhone] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [datePicked, setDatePicked] = useState(new Date());
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [timePicked, setTimePicked] = useState(new Date());

  const route = useRoute();
  const {responseText} = route?.params;
  const data = JSON.parse(responseText);
  const [open, setOpen] = useState(false);
  const [categoryVal, setCategoryVal] = useState(null);
  const [selectedCat, setSelectedCat] = useState(null);

  const [loading, setLoading] = useState(false);
  const [loadingCat, setLoadingCat] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

<<<<<<< HEAD
  const [editingItem, setEditingItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
=======
  const [comment, setComment] = useState('');
  const [editingItem, setEditingItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleComment, setmodalVisibleComment] = useState(false);

>>>>>>> f31f635 (Mobile new features)
  const [catModalVisible, setCatModalVisible] = useState(false);
  const [modalVisibleTaxes, setModalVisibleTaxes] = useState(false);
  const [modalVisibleTotal, setModalVisibleTotal] = useState(false);
  const [modalVisibleSupplier, setModalVisibleSupplier] = useState(false);
  const [modalVisibleAddress, setModalVisibleAddress] = useState(false);
  const [modalVisiblePhone, setModalVisiblePhone] = useState(false);
  const [modalVisibleNewItem, setModalVisibleNewItem] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setDatePicked(date);
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmTime = time => {
    setTimePicked(time);
    hideTimePicker();
  };

  const initializeStateFromData = data => {
    const lineItemsData =
      data?.document?.inference?.prediction?.line_items || [];
    setLineItems(lineItemsData);

    const taxesData =
      data?.document?.inference?.prediction?.taxes[0]?.value || 0;
    setNewTaxes(taxesData);

    const itemTotal =
      data?.document?.inference?.prediction?.total_amount?.value || 0;
    setNewTotal(itemTotal);

    const supplierName =
      data?.document?.inference?.prediction?.supplier_name?.value || '';
    setNewSupplierName(supplierName);

    const supplierAddress =
      data?.document?.inference?.prediction?.supplier_address?.value || '';
    setNewSupplierAddress(supplierAddress);

    const supplierPhone =
      data?.document?.inference?.prediction?.supplier_phone_number?.value || '';
    setNewSupplierPhone(supplierPhone);
  };

  useEffect(() => {
    initializeStateFromData(data);
  }, [route.params]);

  const resetState = () => {
    setLineItems([]);
    setNewTotal(0);
    setNewTaxes(0);
    setNewSupplierName('');
    setNewSupplierAddress('');
    setNewSupplierPhone('');
    setCategoryVal(null);
    setSelectedCat(null);
    setDatePicked(new Date());
    setTimePicked(new Date());
    setError('');
    setSuccess('');
  };

  const handleCloseModal = () => {
    setEditingItem(null);
    setModalVisible(false);
    setError('');
    setSuccess('');
    reset();
  };

  const handleEditItem = item => {
    setEditingItem(item);
    setModalVisible(!modalVisible);
  };

  const handleCloseTotalModal = () => {
    setModalVisibleTotal(false);
    setError('');
    setSuccess('');
    reset();
  };

  const handleTotalEditItem = item => {
    setNewTotal(item);
    setModalVisibleTotal(!modalVisibleTotal);
  };

  const handleTotalTaxItem = item => {
    setNewTaxes(item);
    setModalVisibleTaxes(!modalVisibleTaxes);
  };

  const handleCloseTaxModal = () => {
    setModalVisibleTaxes(false);
    setError('');
    setSuccess('');
    reset();
  };

  const handleCloseSupplier = () => {
    setModalVisibleSupplier(false);
    setError('');
    setSuccess('');
    reset();
  };

  const handleEditAddress = item => {
    setNewSupplierAddress(item);
    setModalVisibleAddress(!modalVisibleAddress);
  };

  const handleCloseAddress = () => {
    setModalVisibleAddress(false);
    setError('');
    setSuccess('');
    reset();
  };

  const handleEditSupplier = item => {
    setNewSupplierName(item);
    setModalVisibleSupplier(!modalVisibleSupplier);
  };

  const handleUpdateItem = handleSubmit(data => {
    const updatedLineItems = lineItems.map(item => {
      if (item === editingItem) {
        return {
          ...item,
          description: data?.description,
          total_amount: parseFloat(data?.total_amount) || 0,
        };
      }
      return item;
    });

    setLineItems(updatedLineItems);
    handleCloseModal();
  });

  const handleDeleteItem = () => {
    if (editingItem) {
      if (lineItems?.length > 1) {
        const updatedLineItems = lineItems.filter(item => item !== editingItem);
        setLineItems(updatedLineItems);
      } else {
        Alert.alert('Cannot Delete', 'At least one item must be present');
      }
      handleCloseModal();
    }
  };

  const handleCloseModalNewItem = () => {
    reset();
    setModalVisibleNewItem(false);
    setError('');
    setSuccess('');
  };

<<<<<<< HEAD
=======
  const handleCloseModalComment = () => {
    reset();
    setmodalVisibleComment(false);
    setError('');
    setSuccess('');
  };

>>>>>>> f31f635 (Mobile new features)
  const handleAddNewItem = handleSubmit(data => {
    const {description, total_amount} = data;

    if (!description || !total_amount) {
      Alert.alert('Please enter both item description and amount');
      return;
    }

    const newItem = {
      description,
      total_amount: parseFloat(total_amount) || 0,
    };

    setLineItems(prevLineItems => [...prevLineItems, newItem]);

    handleCloseModalNewItem();
    handleCloseModal();
  });

<<<<<<< HEAD
=======
  const handleAddComment = handleSubmit(data => {
    setComment(data.comment);
    handleCloseModalComment();
  });

  console.log(comment);

>>>>>>> f31f635 (Mobile new features)
  const handleUpdateItemTotal = handleSubmit(data => {
    setNewTotal(parseFloat(data?.total_amount));
    handleCloseTotalModal();
  });

  const handleUpdateItemTaxes = handleSubmit(data => {
    setNewTaxes(parseFloat(data?.tax_total));
    handleCloseTaxModal();
  });

  const handleUpdateSupplierName = handleSubmit(data => {
    setNewSupplierName(data?.supplier_name);
    handleCloseSupplier();
  });

  const handleUpdateSupplierAddress = handleSubmit(data => {
    setNewSupplierAddress(data?.supplier_address);
    handleCloseAddress();
  });

  const handleCloseNumber = () => {
    setModalVisiblePhone(false);
    setError('');
    setSuccess('');
    reset();
  };

  const handleEditNumber = item => {
    setNewSupplierPhone(item);
    setModalVisiblePhone(!modalVisiblePhone);
  };

  const handleUpdateSupplierNumber = handleSubmit(data => {
    setNewSupplierPhone(data.supplier_phone_number);
    handleCloseNumber();
  });

  const sendDataToBackend = async () => {
    const isServerConnected = await checkServerConnection();
    if (isServerConnected) {
      if (!selectedCat) {
        return Alert.alert('Category required!');
      }

      if (
        data &&
        data?.document &&
        data?.document?.inference &&
        data?.document?.inference?.prediction
      ) {
        const updatedLineItems = lineItems?.map(item => {
          if (item === editingItem) {
            return {
              ...item,
              description: editingItem?.description,
              total_amount: editingItem?.total_amount,
            };
          }
          return item;
        });

        const requestData = {
          supplierName: newSupplierName,
          totalAmount: newTotal,
          taxAmount: newTaxes,
          supplierAddress: newSupplierAddress,
          supplierPhoneNumber: newSupplierPhone,
          line_items: updatedLineItems,
          selectedCat,
          date: moment(datePicked).format('MM-DD-YYYY'),
          time: moment(timePicked).format('HH:mm:ss A'),
<<<<<<< HEAD
=======
          comment,
>>>>>>> f31f635 (Mobile new features)
        };

        setError('');

        try {
          setLoading(true);
          const response = await userSavedReceipt(
            requestData,
            user?.token,
            setError,
          );
          if (response && response?.status === 200) {
            setSuccess(response?.data?.message);
<<<<<<< HEAD
            store.dispatch(addReceipt(response?.data?.receipt));
=======
            dispatch(addReceipt(response?.data?.receipt));
            dispatch(fetchCategories(response?.data?.categories));

>>>>>>> f31f635 (Mobile new features)
            setSuccess('Added');

            setTimeout(() => {
              setError('');
              setLoading(false);
              setSuccess('');
              resetState();
<<<<<<< HEAD
              // navigation.setParams({responseText: null});
              navigation.navigate('HomeScreen');
            }, 2000);
          }
          setLoading(false);
        } catch (error) {
          console.log(error);
=======
              setComment('');
              navigation.navigate('HomeScreen');
            }, 100);
          }
          setLoading(false);
        } catch (err) {
          console.log(err);
>>>>>>> f31f635 (Mobile new features)
          setLoading(false);
          setError('');
          setSuccess('');
        }
      }
    } else {
      const errorMessage = 'Server is busy or not connected!';
      setError(errorMessage);
    }
  };

  const handleCatCloseModal = () => {
    setCatModalVisible(false);
    setError('');
    setSuccess('');
    reset();
  };

  const addNewCategory = async data => {
    const isServerConnected = await checkServerConnection();
    if (isServerConnected) {
      const {name} = data;

      const userData = {
        name,
        color: randomcolor({luminosity: 'light', format: 'hsla', alpha: 0.5}),
      };

      setError('');
      setSuccess('');
      try {
        setLoadingCat(true);
        const response = await userCategoryAdd(userData, user?.token, setError);

        if (response && response?.status === 200) {
          setSuccess(response.data.message);

<<<<<<< HEAD
          store.dispatch(addCategory(response.data.category));
=======
          dispatch(addCategory(response.data.category));
>>>>>>> f31f635 (Mobile new features)
          resetCat();
          setTimeout(() => {
            setSuccess('');
            setError('');
            setLoadingCat(false);
            handleCatCloseModal();
          }, 2000);
        }
        setLoadingCat(false);
      } catch (err) {
        setLoadingCat(false);
        setSuccess('');
      }
    } else {
      const errorMessage = 'Server is busy or not connected!';
      setError(errorMessage);
    }
  };

  if (success === 'Added') {
    return (
<<<<<<< HEAD
      <View className="flex-1 justify-center items-center bg-customBg">
=======
      <View className="flex-1 justify-center items-center bg-white">
>>>>>>> f31f635 (Mobile new features)
        <LottieView
          ref={lottieRef}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 190,
            height: hp(20),
          }}
          source={require('../../assets/animation/added.json')}
          autoPlay
          loop={false}
        />
        {success === 'Added' && (
          <Text className="text-lg text-slate-700 font-openSans">Added</Text>
        )}
      </View>
    );
  } else if (
    data &&
    data?.document &&
    data?.document?.inference &&
    data?.document?.inference?.prediction
  ) {
    return (
<<<<<<< HEAD
      <View className="flex-1 bg-customBg">
=======
      <View className="flex-1 bg-white">
>>>>>>> f31f635 (Mobile new features)
        <View
          className="p-4"
          style={{
            height: hp(60),
          }}>
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

                <View className="flex-1 justify-center">
                  <View className="flex-row justify-between items-center">
                    <Text className="text-xl my-5 font-openSans text-black">
                      Update
                    </Text>
                    <TouchableOpacity
                      onPress={handleDeleteItem}
                      className="bg-customRed p-2 text-center rounded-md">
                      <Text className="text-xs text-white text-center font-openSans font-bold">
                        Delete
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <CustomInput
                    name="description"
                    control={control}
                    placeholder="Item description"
                    rules={{
                      required: 'Item description is required',
                      minLength: {
                        value: 3,
                        message: 'Should be at least 3 characters long',
                      },
                      maxLength: {
                        value: 24,
                        message: 'Should be max 24 characters long',
                      },
                    }}
                    defaultValue={editingItem ? editingItem.description : ''}
                  />

                  <CustomInput
                    name="total_amount"
                    control={control}
                    placeholder="Amount"
                    rules={{
                      required: 'Amount is required',
                    }}
                    defaultValue={
                      editingItem ? editingItem.total_amount.toString() : ''
                    }
                  />

                  <View className="flex-row my-2">
                    <TouchableOpacity
                      onPress={handleUpdateItem}
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

          <Modal
            animationType="fade"
            visible={modalVisibleTotal}
            onRequestClose={() => handleCloseTotalModal()}
            transparent>
            <View className="justify-center items-center z-1000 w-full h-full p-3 ">
              <Pressable
                className="w-full h-full absolute bg-white opacity-20"
                onPress={() => handleCloseTotalModal()}
              />
              <Pressable
                onPress={() => Keyboard.dismiss()}
                className={`relative p-6 w-full ${
                  Platform.OS === 'ios' ? 'h-2/5 bottom-10' : 'h-80'
                } items-center bg-slate-100 rounded-md`}>
                <TouchableOpacity
                  onPress={() => handleCloseTotalModal()}
                  className="absolute top-2 right-2 z-10">
<<<<<<< HEAD
                  <Icon name="close" size={19} color="black" />
=======
                  <XMarkIcon width={15} height={15} color={'#000'} />
>>>>>>> f31f635 (Mobile new features)
                </TouchableOpacity>

                <View className="flex-1 justify-center">
                  <View className="flex-row">
                    <Text className="text-xl my-5 font-openSans text-black">
                      Update total amount
                    </Text>
                  </View>

                  <CustomInput
                    name="total_amount"
                    control={control}
                    placeholder="Amount"
                    rules={{
                      required: 'Amount is required',
                    }}
                    defaultValue={newTotal ? newTotal.toString() : ''}
                  />

                  <View className="flex-row my-2">
                    <TouchableOpacity
                      onPress={handleUpdateItemTotal}
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

          <Modal
            animationType="fade"
            visible={modalVisibleTaxes}
            onRequestClose={() => handleCloseTaxModal()}
            transparent>
            <View className="justify-center items-center z-1000 w-full h-full p-3 ">
              <Pressable
                className="w-full h-full absolute bg-white opacity-20"
                onPress={() => handleCloseTaxModal()}
              />
              <Pressable
                onPress={() => Keyboard.dismiss()}
                className={`relative p-6 w-full ${
                  Platform.OS === 'ios' ? 'h-2/5 bottom-10' : 'h-80'
                } items-center bg-slate-100 rounded-md`}>
                <TouchableOpacity
                  onPress={() => handleCloseTaxModal()}
                  className="absolute top-2 right-2 z-10">
<<<<<<< HEAD
                  <Icon name="close" size={19} color="black" />
=======
                  <XMarkIcon width={15} height={15} color={'#000'} />
>>>>>>> f31f635 (Mobile new features)
                </TouchableOpacity>

                <View className="flex-1 justify-center">
                  <View className="flex-row">
                    <Text className="text-xl my-5 font-openSans text-black">
                      Update tax amount
                    </Text>
                  </View>

                  <CustomInput
                    name="tax_total"
                    control={control}
                    placeholder="Amount"
                    rules={{
                      required: 'Amount is required',
                    }}
                    defaultValue={newTaxes ? newTaxes.toString() : ''}
                  />

                  <View className="flex-row my-2">
                    <TouchableOpacity
                      onPress={handleUpdateItemTaxes}
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

          <Modal
            animationType="fade"
            visible={modalVisibleSupplier}
            onRequestClose={() => handleCloseSupplier()}
            transparent>
            <View className="justify-center items-center z-1000 w-full h-full p-3 ">
              <Pressable
                className="w-full h-full absolute bg-white opacity-20"
                onPress={() => handleCloseSupplier()}
              />
              <Pressable
                onPress={() => Keyboard.dismiss()}
                className={`relative p-6 w-full ${
                  Platform.OS === 'ios' ? 'h-2/5 bottom-10' : 'h-80'
                } items-center bg-slate-100 rounded-md`}>
                <TouchableOpacity
                  onPress={() => handleCloseSupplier()}
                  className="absolute top-2 right-2 z-10">
<<<<<<< HEAD
                  <Icon name="close" size={19} color="black" />
=======
                  <XMarkIcon width={15} height={15} color={'#000'} />
>>>>>>> f31f635 (Mobile new features)
                </TouchableOpacity>

                <View className="flex-1 justify-center">
                  <View className="flex-row">
                    <Text className="text-xl my-5 font-openSans text-black">
                      Update supplier name
                    </Text>
                  </View>

                  <CustomInput
                    name="supplier_name"
                    control={control}
                    placeholder="Supplier name"
                    rules={{
                      required: 'Supplier name is required',
                    }}
                    defaultValue={
                      newSupplierName ? newSupplierName.toString() : ''
                    }
                  />

                  <View className="flex-row my-2">
                    <TouchableOpacity
                      onPress={handleUpdateSupplierName}
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

          <Modal
            animationType="fade"
            visible={modalVisibleAddress}
            onRequestClose={() => handleCloseAddress()}
            transparent>
            <View className="justify-center items-center z-1000 w-full h-full p-3 ">
              <Pressable
                className="w-full h-full absolute bg-white opacity-20"
                onPress={() => handleCloseAddress()}
              />
              <Pressable
                onPress={() => Keyboard.dismiss()}
                className={`relative p-6 w-full ${
                  Platform.OS === 'ios' ? 'h-2/5 bottom-10' : 'h-80'
                } items-center bg-slate-100 rounded-md`}>
                <TouchableOpacity
                  onPress={() => handleCloseAddress()}
                  className="absolute top-2 right-2 z-10">
<<<<<<< HEAD
                  <Icon name="close" size={19} color="black" />
=======
                  <XMarkIcon width={15} height={15} color={'#000'} />
>>>>>>> f31f635 (Mobile new features)
                </TouchableOpacity>

                <View className="flex-1 justify-center">
                  <View className="flex-row">
                    <Text className="text-xl my-5 font-openSans text-black">
                      Update supplier address
                    </Text>
                  </View>

                  <CustomInput
                    name="supplier_address"
                    control={control}
                    placeholder="Supplier address"
                    rules={{
                      required: 'Supplier address is required',
                    }}
                    defaultValue={
                      newSupplierAddress ? newSupplierAddress.toString() : ''
                    }
                  />

                  <View className="flex-row my-2">
                    <TouchableOpacity
                      onPress={handleUpdateSupplierAddress}
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

          <Modal
            animationType="fade"
            visible={modalVisiblePhone}
            onRequestClose={() => handleCloseNumber()}
            transparent>
            <View className="justify-center items-center z-1000 w-full h-full p-3 ">
              <Pressable
                className="w-full h-full absolute bg-white opacity-20"
                onPress={() => handleCloseNumber()}
              />
              <Pressable
                onPress={() => Keyboard.dismiss()}
                className={`relative p-6 w-full ${
                  Platform.OS === 'ios' ? 'h-2/5 bottom-10' : 'h-80'
                } items-center bg-slate-100 rounded-md`}>
                <TouchableOpacity
                  onPress={() => handleCloseNumber()}
                  className="absolute top-2 right-2 z-10">
<<<<<<< HEAD
                  <Icon name="close" size={19} color="black" />
=======
                  <XMarkIcon width={15} height={15} color={'#000'} />
>>>>>>> f31f635 (Mobile new features)
                </TouchableOpacity>

                <View className="flex-1 justify-center">
                  <View className="flex-row">
                    <Text className="text-xl my-5 font-openSans text-black">
                      Update supplier phone number
                    </Text>
                  </View>

                  <CustomInput
                    name="supplier_phone_number"
                    control={control}
                    placeholder="Supplier phone number"
                    rules={{
                      required: 'Supplier phone number is required',
                    }}
                    defaultValue={
                      newSupplierPhone ? newSupplierPhone.toString() : ''
                    }
                  />

                  <View className="flex-row my-2">
                    <TouchableOpacity
                      onPress={handleUpdateSupplierNumber}
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

          <Modal
            animationType="fade"
            visible={modalVisibleNewItem}
            onRequestClose={() => handleCloseModalNewItem()}
            transparent>
            <View className="justify-center items-center z-1000 w-full h-full p-3 ">
              <Pressable
                className="w-full h-full absolute bg-white opacity-20"
                onPress={() => handleCloseModalNewItem()}
              />
              <Pressable
                onPress={() => Keyboard.dismiss()}
                className={`relative p-6 w-full ${
                  Platform.OS === 'ios' ? 'h-2/5 bottom-10' : 'h-80'
                } items-center bg-slate-100 rounded-md`}>
                <TouchableOpacity
                  onPress={() => handleCloseModalNewItem()}
                  className="absolute top-2 right-2 z-10">
<<<<<<< HEAD
                  <Icon name="close" size={19} color="black" />
=======
                  <XMarkIcon width={15} height={15} color={'#000'} />
>>>>>>> f31f635 (Mobile new features)
                </TouchableOpacity>

                <View className="flex-1 justify-center">
                  <View className="flex-row justify-between items-center">
                    <Text className="text-xl my-5 font-openSans text-black">
                      Add new item
                    </Text>
                  </View>

                  <CustomInput
                    name="description"
                    control={control}
                    placeholder="Item description"
                    rules={{
                      required: 'Item description is required',
                      minLength: {
                        value: 3,
                        message: 'Should be at least 3 characters long',
                      },
                      maxLength: {
                        value: 24,
                        message: 'Should be max 24 characters long',
                      },
                    }}
                    defaultValue={editingItem ? editingItem.description : ''}
                  />

                  <CustomInput
                    name="total_amount"
                    control={control}
                    placeholder="Amount"
                    rules={{
                      required: 'Amount is required',
                    }}
                    defaultValue={
                      editingItem ? editingItem.total_amount.toString() : ''
                    }
                  />

                  <View className="flex-row my-2">
                    <TouchableOpacity
                      onPress={handleAddNewItem}
                      className="bg-customRed rounded-lg w-full p-2 text-center my-2">
                      <Text className="text-sm text-white text-center font-openSans font-bold">
                        Add item
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Pressable>
            </View>
          </Modal>

          <Modal
            animationType="fade"
<<<<<<< HEAD
=======
            visible={modalVisibleComment}
            onRequestClose={() => handleCloseModalComment()}
            transparent>
            <View className="justify-center items-center z-1000 w-full h-full p-3 ">
              <Pressable
                className="w-full h-full absolute bg-white opacity-20"
                onPress={() => handleCloseModalComment()}
              />
              <Pressable
                onPress={() => Keyboard.dismiss()}
                className={`relative p-6 w-full ${
                  Platform.OS === 'ios' ? 'h-2/5 bottom-10' : 'h-80'
                } items-center bg-slate-100 rounded-md`}>
                <TouchableOpacity
                  onPress={() => handleCloseModalComment()}
                  className="absolute top-2 right-2 z-10">
                  <XMarkIcon width={15} height={15} color={'#000'} />
                </TouchableOpacity>

                <View className="flex-1 justify-center">
                  <View className="flex-row justify-between items-center">
                    <Text className="font-openSans text-xl my-5 text-black">
                      Add comment
                    </Text>
                  </View>

                  <CustomInput
                    name="comment"
                    control={control}
                    placeholder="Comment"
                    rules={{
                      required: 'Comment is required',
                      minLength: {
                        value: 3,
                        message: 'Should be at least 3 characters long',
                      },
                      maxLength: {
                        value: 24,
                        message: 'Should be max 24 characters long',
                      },
                    }}
                    defaultValue={comment}
                  />

                  <View className="flex-row my-2">
                    <TouchableOpacity
                      onPress={handleAddComment}
                      className="bg-customRed rounded-xl w-full h-[45px] p-2 justify-center items-center my-2">
                      <Text className="text-sm text-white text-center font-InterBold">
                        Add comment
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Pressable>
            </View>
          </Modal>

          <Modal
            animationType="fade"
>>>>>>> f31f635 (Mobile new features)
            visible={catModalVisible}
            onRequestClose={() => handleCatCloseModal()}
            transparent>
            <View className="justify-center items-center z-1000 w-full h-full p-3 ">
              <Pressable
                className="w-full h-full absolute bg-white opacity-20"
                onPress={() => handleCatCloseModal()}
              />
              <Pressable
                onPress={() => Keyboard.dismiss()}
                className={`relative p-6 w-full ${
                  Platform.OS === 'ios' ? 'h-2/5 bottom-10' : 'h-80'
                } items-center bg-slate-100 rounded-md`}>
                <TouchableOpacity
                  onPress={() => handleCatCloseModal()}
                  className="absolute top-2 right-2 z-10">
<<<<<<< HEAD
                  <Icon name="close" size={19} color="black" />
=======
                  <XMarkIcon width={15} height={15} color={'#000'} />
>>>>>>> f31f635 (Mobile new features)
                </TouchableOpacity>

                <View className="flex-1 justify-center">
                  {loadingCat && (
                    <ActivityIndicator animating={true} color="#D45055" />
                  )}
                  {success && (
                    <View className="flex-row items-center justify-center my-2">
<<<<<<< HEAD
                      <FontAwesome
                        name="check-circle"
                        size={14}
                        color="green"
                      />
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

                  <View className="flex-row">
                    <Text className="text-xl my-5 font-openSans text-black">
                      Add new category
                    </Text>
                  </View>

                  <CustomInput
                    name="name"
                    control={controlCategory}
                    placeholder="Category name"
                    rules={{
                      required: 'Category name is required',
                      minLength: {
                        value: 3,
                        message: 'Should be at least 3 characters long',
                      },
                      maxLength: {
                        value: 24,
                        message: 'Should be max 24 characters long',
                      },
                    }}
                  />

                  <View className="flex-row my-2">
                    <TouchableOpacity
                      onPress={handleCatSubmit(addNewCategory)}
                      className="bg-customRed rounded-lg w-full p-2 text-center my-2">
                      <Text className="text-sm text-white text-center font-openSans font-bold">
                        Add category
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Pressable>
            </View>
          </Modal>

          <ScrollView>
            {newSupplierName && (
              <TouchableOpacity
                onPress={() => handleEditSupplier(newSupplierName)}
                className="flex-row justify-center items-center">
                <View className="flex-row justify-between items-center">
<<<<<<< HEAD
                  <MaterialIcons name="edit" color="red" />
=======
                  <EditIcon3 width={14} height={14} color={'#D45055'} />
>>>>>>> f31f635 (Mobile new features)
                </View>
                <Text className="text-center text-lg font-bold text-black ml-2 font-openSans">
                  {newSupplierName}
                </Text>
              </TouchableOpacity>
            )}

            {newSupplierAddress && (
              <TouchableOpacity
                onPress={() => handleEditAddress(newSupplierAddress)}
                className="flex-row justify-center items-center my-1">
<<<<<<< HEAD
                <Text className="text-center text-xs text-slate-700 capitalize w-3/4 mb-1 font-openSans">
                  <MaterialIcons name="edit" color="red" /> {newSupplierAddress}
                </Text>
=======
                <View className="items-center">
                  <View className="flex-row">
                    <EditIcon3 width={14} height={14} color={'#D45055'} />
                    <Text className="font-openSans text-center text-xs text-slate-700 capitalize w-3/4 mb-1 ml-1">
                      {newSupplierAddress}
                    </Text>
                  </View>
                </View>
>>>>>>> f31f635 (Mobile new features)
              </TouchableOpacity>
            )}

            {newSupplierPhone && (
              <TouchableOpacity
                onPress={() => handleEditNumber(newSupplierPhone)}
                className="flex-row justify-center items-center my-1">
                <Text className="text-center text-xs text-slate-700 capitalize mb-1 font-openSans">
<<<<<<< HEAD
                  <MaterialIcons name="edit" color="red" /> {newSupplierPhone}
=======
                  <EditIcon3 width={14} height={14} color={'#D45055'} />
                  {newSupplierPhone}
>>>>>>> f31f635 (Mobile new features)
                </Text>
              </TouchableOpacity>
            )}

<<<<<<< HEAD
            <TouchableOpacity
              onPress={() => setModalVisibleNewItem(!modalVisibleNewItem)}
              className="flex-row justify-center items-center mb-3">
              <View className="border border-red-300 flex justify-center items-center py-1 px-2 rounded">
                <Text className="text-center text-xs text-slate-700 capitalize font-openSans">
                  <MaterialCommunityIcons name="plus" color="red" /> Add Item
                </Text>
              </View>
            </TouchableOpacity>
=======
            <View className="flex-row justify-center items-center">
              <TouchableOpacity
                onPress={() => setModalVisibleNewItem(!modalVisibleNewItem)}
                className="flex-row justify-center items-center mb-3">
                <View className="flex-row border border-red-300 flex justify-center items-center py-1 px-2 rounded ">
                  <View>
                    <AddIcon2 width={8} height={8} color={'#D45055'} />
                  </View>
                  <Text className="font-openSans text-center text-xs text-slate-700 capitalize ml-2">
                    Add Item
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setmodalVisibleComment(!modalVisibleComment)}
                className="flex-row justify-center items-center mb-3 mx-3">
                <View className="border border-red-300 flex justify-center items-center py-1 px-2 rounded">
                  <Text className="font-openSans text-center text-xs text-slate-700 capitalize">
                    Comment
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
>>>>>>> f31f635 (Mobile new features)

            {lineItems && (
              <View className="mb-1">
                {lineItems.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleEditItem(item)}>
                    <View className="my-2 flex-row justify-between items-center">
<<<<<<< HEAD
                      <MaterialIcons name="edit" color="red" />
                      <Text className="text-slate-950 w-3/4 text-left ml-2 font-openSans">
                        {item.description}
                      </Text>
                      <Text className="text-slate-950 w-1/4 text-right pr-5 font-openSans">
=======
                      <EditIcon3 width={14} height={14} color={'#D45055'} />
                      <Text className="text-slate-950 w-3/4 text-left ml-2 font-openSans">
                        {item.description}
                      </Text>
                      <Text className="text-slate-950 w-1/4 text-right pr-7 font-openSans">
>>>>>>> f31f635 (Mobile new features)
                        ${item.total_amount?.toFixed(2)}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            <TouchableOpacity
              onPress={() => handleTotalTaxItem(newTaxes)}
              className="flex-row justify-between items-center mb-2">
              <View className="flex-row justify-between items-center">
<<<<<<< HEAD
                <MaterialIcons name="edit" color="red" />
=======
                <EditIcon3 width={14} height={14} color={'#D45055'} />

>>>>>>> f31f635 (Mobile new features)
                <Text className="text-slate-900 text-sm ml-2 font-openSans">
                  Tax
                </Text>
              </View>
<<<<<<< HEAD
              <Text className="text-slate-900 text-sm font-openSans">
=======
              <Text className="text-slate-900 text-sm font-openSans pr-1">
>>>>>>> f31f635 (Mobile new features)
                ${newTaxes}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleTotalEditItem(newTotal)}
              className="flex-row justify-between items-center">
              <View className="flex-row justify-between items-center">
<<<<<<< HEAD
                <MaterialIcons name="edit" color="red" />
=======
                <EditIcon3 width={14} height={14} color={'#D45055'} />
>>>>>>> f31f635 (Mobile new features)
                <Text className="text-slate-900 text-md font-bold ml-2 font-openSans">
                  Total
                </Text>
              </View>
<<<<<<< HEAD
              <Text className="text-slate-900 text-md font-bold font-openSans">
=======
              <Text className="text-slate-900 text-md font-bold font-openSans pr-1">
>>>>>>> f31f635 (Mobile new features)
                ${newTotal}
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

<<<<<<< HEAD
        <View className="px-4">
=======
        <ScrollView className="px-4">
          {comment && (
            <Text className="text-slate-900 text-sm my-4 ml-3 font-openSans">
              Comment: {comment}
            </Text>
          )}
>>>>>>> f31f635 (Mobile new features)
          <TouchableOpacity
            onPress={() => {
              setOpen(!open);
            }}
            className="p-2 rounded-md flex flex-row justify-between items-center"
            style={{
              borderWidth: 1,
              borderColor: '#D45055',
            }}>
            <Text
              className="font-openSans"
              style={{
                color: '#000',
              }}>
              {categoryVal ? categoryVal : 'Category'}
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
                height: hp(25),
              }}>
              <ScrollView>
                <TouchableOpacity
                  onPress={() => {
                    setCatModalVisible(!catModalVisible);
                    setOpen(false);
                  }}
                  className="bg-white px-2 pt-2 pb-1 flex justify-between items-center flex-row">
                  <Text className="text-slate-900 font-openSans">
                    Add category
                  </Text>
<<<<<<< HEAD
                  <Feather name="plus" size={14} color="#D45055" />
=======

                  <AddIcon2 width={8} height={8} color={'#D45055'} />
>>>>>>> f31f635 (Mobile new features)
                </TouchableOpacity>
                {categories?.map(ct => {
                  const matched = ct?.name === categoryVal;

                  return (
                    <TouchableOpacity
                      key={ct?._id}
                      style={{
                        backgroundColor: '#fff',
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}
                      onPress={() => {
                        setCategoryVal(ct?.name);
                        setSelectedCat(ct?._id);
                        setOpen(false);
                      }}>
                      <Text className="text-slate-900 font-openSans">
                        {ct?.name}
                      </Text>
                      {matched && (
<<<<<<< HEAD
                        <Feather
                          name="check-circle"
                          size={14}
                          color="#D45055"
=======
                        <CheckMarkIcon2
                          width={18}
                          height={20}
                          color={'#D45055'}
>>>>>>> f31f635 (Mobile new features)
                        />
                      )}
                    </TouchableOpacity>
                  );
                })}
<<<<<<< HEAD
=======

                <View className="pb-24" />
>>>>>>> f31f635 (Mobile new features)
              </ScrollView>
            </View>
          )}

          <View className="w-1/2 flex-row justify-between items-center h-5 mt-7">
            <Text className="font-openSans text-black">Select Date:</Text>
            <TouchableOpacity
              onPress={showDatePicker}
              className="h-12 rounded-md flex justify-center items-center w-full">
              <Text className="font-openSans text-black">
                {moment(datePicked).format('MM-DD-YYYY')}
              </Text>
            </TouchableOpacity>

            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              maximumDate={new Date()}
            />
          </View>

          <View className="w-1/2 flex-row justify-between items-center h-5 mt-4">
            <Text className="font-openSans text-black">Select Time:</Text>
            <TouchableOpacity
              onPress={showTimePicker}
              className="h-12 rounded-md flex justify-center items-center w-full">
              <Text className="font-openSans text-black">
                {moment(timePicked).format('hh:mm A')}
              </Text>
            </TouchableOpacity>

            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={handleConfirmTime}
              onCancel={hideTimePicker}
            />
          </View>

          {!open && (
            <TouchableOpacity
              onPress={() => sendDataToBackend()}
              disabled={loading}
              className={` ${
                !loading ? 'bg-customRed' : 'bg-slate-600'
              } rounded-lg w-full p-2 text-center my-6`}>
              <Text className="text-sm text-white text-center font-openSans font-bold">
                Save
              </Text>
            </TouchableOpacity>
          )}

          {loading && (
            <ActivityIndicator size={30} animating={true} color="#D45055" />
          )}

          {error && (
            <View className="flex-row items-center justify-center my-2">
<<<<<<< HEAD
              <FontAwesome name="warning" size={14} color="#D45055" />
              <Text className="text-red-500 ml-1 font-openSans">{error}</Text>
            </View>
          )}
        </View>
=======
              <WarningIcon width={14} height={14} color={'#FE0000'} />
              <Text className="text-red-500 ml-1 font-openSans">{error}</Text>
            </View>
          )}

          <View className="pb-24" />
        </ScrollView>
>>>>>>> f31f635 (Mobile new features)
      </View>
    );
  }

  return (
<<<<<<< HEAD
    <View className="bg-customBg">
=======
    <View className="bg-white">
>>>>>>> f31f635 (Mobile new features)
      <ScrollView style={{flex: 1}}>
        <View style={{padding: 16}}>
          <Text className="font-openSans text-black">
            Error: Data not found
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ScanResultScreen;
