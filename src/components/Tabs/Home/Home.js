<<<<<<< HEAD
=======
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
>>>>>>> f31f635 (Mobile new features)
import {
  ScrollView,
  Text,
  View,
  Image,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  FlatList,
  Pressable,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
<<<<<<< HEAD
  TextInput,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React, {useState} from 'react';
import {signOut} from '../../../store/actions/authActions';
import {store, persistor} from '../../../store';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import randomcolor from 'randomcolor';
import {addCategory} from '../../../store/actions/categoryActions';
=======
  ActivityIndicator,
  TextInput,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import randomcolor from 'randomcolor';
>>>>>>> f31f635 (Mobile new features)
const folderIcon = require('../../../assets/icon/folder.png');
import moment from 'moment';

import {useForm} from 'react-hook-form';
import CustomInput from '../../Common/CustomInput/CustomInput';
import {
  checkServerConnection,
<<<<<<< HEAD
  userCategoryAdd,
  userRequestReport,
} from '../../../utils/api';
import {ActivityIndicator} from 'react-native';
=======
  updateUserCategory,
  userCategoryAdd,
  userCategoryDelete,
  userRequestReport,
} from '../../../utils/api';
>>>>>>> f31f635 (Mobile new features)

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
<<<<<<< HEAD
import {addReceipt} from '../../../store/actions/receiptActoins';
import {useTranslation} from 'react-i18next';

const Home = () => {
=======
import {useTranslation} from 'react-i18next';

import {format} from 'date-fns';
import {
  ChecklistIcon,
  DeleteIcon,
  FolderIcon,
  NavigationMenuVerticalIcon,
  OfficeFolderIcon,
  SearchIcon,
  WarningIcon,
  XMarkIcon,
} from '../../../assets/icons';
import {
  addCategory,
  fetchCategories,
  updateCategory,
} from '../../../redux/reducers/CategorySlice';
import {signOut} from '@react-native-firebase/auth';
import {fetchReceipts} from '../../../redux/reducers/ReceiptSlice';

const Home = () => {
  const dispatch = useDispatch();
>>>>>>> f31f635 (Mobile new features)
  const navigation = useNavigation();
  const {t} = useTranslation();
  const {control, handleSubmit, reset} = useForm();
  const user = useSelector(state => state.auth.user);
<<<<<<< HEAD
=======
  const [category, setCategory] = useState({});

>>>>>>> f31f635 (Mobile new features)
  const categories = useSelector(state => state.cats.categories);
  const receipts = useSelector(state => state.receipts.receipts);
  const subscription = useSelector(state => state.subs.subscription);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredReceipts, setFilteredReceipts] = useState([]);
<<<<<<< HEAD
  const [modalVisible, setModalVisible] = useState(false);
=======

  const [modalVisible, setModalVisible] = useState(false);
  const [modalUpdateVisible, setUpdateModalVisible] = useState(false);

>>>>>>> f31f635 (Mobile new features)
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

<<<<<<< HEAD
=======
  const {
    control: folderControl,
    handleSubmit: folderHandleSubmit,
    reset: folderReset,
    setValue,
  } = useForm({
    defaultValues: {
      name: category?.name,
    },
  });

  useEffect(() => {
    setValue('name', category.name?.toString());
  }, [category]);

>>>>>>> f31f635 (Mobile new features)
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
<<<<<<< HEAD
=======
    setUpdateModalVisible(false);
>>>>>>> f31f635 (Mobile new features)
    setError('');
    setSuccess('');
    reset();
  };

<<<<<<< HEAD
  const logout = async () => {
    store.dispatch(signOut());
=======
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
          dispatch(updateCategory(response?.data?.category));
          setTimeout(() => {
            setSuccess('');
            setError('');
            handleCloseModal();
            setCategory({});
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

  const logout = async () => {
    dispatch(signOut());
>>>>>>> f31f635 (Mobile new features)
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
        setLoading(true);
        const response = await userCategoryAdd(userData, user?.token, setError);

        if (response && response?.status === 200) {
          setSuccess(response.data.message);

<<<<<<< HEAD
          store.dispatch(addCategory(response.data.category));
=======
          dispatch(addCategory(response.data.category));
>>>>>>> f31f635 (Mobile new features)
          reset();
          setTimeout(() => {
            setSuccess('');
            setError('');
            setLoading(false);
            handleCloseModal();
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

  const getCategoryColorById = categoryId => {
    const category = categories?.find(cat => cat._id === categoryId);
    return category ? category.color : 'rgba(0,0,0,0.1)';
  };

  const handleSearch = text => {
    setSearchQuery(text);
<<<<<<< HEAD
    const filtered = receipts.filter(rcpt =>
=======
    const filtered = receipts?.filter(rcpt =>
>>>>>>> f31f635 (Mobile new features)
      rcpt?.supplierName.toLowerCase().includes(text?.toLowerCase()),
    );
    setFilteredReceipts(filtered);
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
<<<<<<< HEAD
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-customBg">
      <View className="p-3">
=======
      setLoading(false);
    }
  };

  const currentDate = format(new Date(), 'EEEE, dd MMMM');

  const handleManageCategory = async item => {
    console.log(item);
    setCategory(item);
    setUpdateModalVisible(!modalUpdateVisible);
  };

  const handleDeleteCategory = async categoryId => {
    return Alert.alert('', 'Are you sure you want to delete?', [
      {
        text: 'Yes',
        onPress: async () => {
          try {
            const isServerConnected = await checkServerConnection();
            if (isServerConnected) {
              setLoading(true);
              const response = await userCategoryDelete(
                categoryId,
                user?.token,
                setError,
              );
              // console.log(response);
              if (response && response?.status === 200) {
                setSuccess(response?.data?.message);
                dispatch(fetchReceipts(response?.data?.receipts));
                dispatch(fetchCategories(response?.data?.categories));
                setSuccess('');

                setTimeout(() => {
                  setUpdateModalVisible(false);
                }, 500);
              }
              setLoading(false);
            } else {
              const errorMessage = 'Server is busy or not connected!';
              setError(errorMessage);
              setLoading(false);
            }
          } catch (err) {
            console.log(err);
            setLoading(false);
          }
        },
      },
      {
        text: 'No',
        onPress: () => {},
      },
    ]);
  };

  const dateTotals = receipts?.reduce((acc, receipt) => {
    const dateKey = moment(receipt.date).format('YYYY-MM-DD');
    if (!acc[dateKey]) acc[dateKey] = 0;
    acc[dateKey] += receipt.totalAmount;
    return acc;
  }, {});

  const lastThreeDaysTotals = Object?.entries(dateTotals)
    .sort((a, b) => moment(b[0]).diff(moment(a[0])))
    .slice(0, 3)
    .map(([date, total], index) => ({
      id: date,
      source: require('../../../assets/img/rcpt.jpg'),
      description: moment(date).calendar(null, {
        sameDay: '[Today]',
        lastDay: '[Yesterday]',
        lastWeek: 'MMM D',
        sameElse: 'MMM D',
      }),
      price: `$${total.toFixed(0)}`,
      width: 215 - index * 41,
      height: 183 - index * 34,
    }));

  const renderReceipt = (item, index) => {
    let fontSize = 12;
    let zIndex = 1;
    let marginLeft = index > 0 ? -item.width * 0.5 : 0;

    if (item.width === 215) {
      fontSize = 12;
      zIndex = 3;
    } else if (item.width === 174) {
      fontSize = 11;
      zIndex = 2;
      marginLeft = -item.width / 2;
    } else if (item.width === 138) {
      fontSize = 10;
      zIndex = 1;
      marginLeft = -item.width / 2;
    }

    return (
      <View
        key={item.id}
        className="rounded-xl overflow-hidden"
        style={{
          width: item.width,
          height: item.height,
          zIndex: zIndex,
          marginLeft: marginLeft,
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: '#E5E5E5',
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 2,
        }}>
        <View className="justify-center items-center">
          <Image
            source={item.source}
            style={{
              height: item.height - 17,
              width: item.width - 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            resizeMode="stretch"
          />
        </View>

        <View className="p-1 bg-white w-full flex justify-center my-4 absolute -bottom-2">
          <View className="flex-row justify-between items-center">
            <Text
              className="text-[#000] mx-4 font-InterRegular"
              style={{fontSize}}>
              {item.description}
            </Text>

            <Text
              className={`text-[#000] font-InterRegular ${index === 2 ? 'mr-5' : 'mr-2'}`}
              style={{fontSize}}>
              {item.price}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white ">
      <View className="p-3 flex-1">
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

              <View className="flex-1 justify-center">
                {loading && (
                  <ActivityIndicator animating={true} color="#D45055" />
                )}
                {success && (
                  <View className="flex-row items-center justify-center my-2">
<<<<<<< HEAD
                    <FontAwesome name="check-circle" size={14} color="green" />
                    <Text className="text-green-800 ml-1 font-openSans">
=======
                    <ChecklistIcon width={14} height={14} color={'#71BA65'} />
                    <Text className="text-green-800 ml-1 font-openSans text-xs">
>>>>>>> f31f635 (Mobile new features)
                      {success}
                    </Text>
                  </View>
                )}

                {error && (
                  <View className="flex-row items-center justify-center my-2">
<<<<<<< HEAD
                    <FontAwesome name="warning" size={14} color="#D45055" />
                    <Text className="text-red-500 ml-1 font-openSans">
=======
                    <WarningIcon width={14} height={14} color={'#FE0000'} />
                    <Text className="text-red-500 ml-1 font-openSans text-xs">
>>>>>>> f31f635 (Mobile new features)
                      {error}
                    </Text>
                  </View>
                )}

                <View className="flex-row">
<<<<<<< HEAD
                  <Text className="text-xl my-5 font-openSans text-black">
                    Add new category
=======
                  <Text className="text-xl my-5 font-InterRegular text-black">
                    Add new folder
>>>>>>> f31f635 (Mobile new features)
                  </Text>
                </View>

                <CustomInput
                  name="name"
                  control={control}
<<<<<<< HEAD
                  placeholder="Category name"
                  rules={{
                    required: 'Category name is required',
=======
                  placeholder="Folder name"
                  rules={{
                    required: 'Folder name is required',
>>>>>>> f31f635 (Mobile new features)
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
                    onPress={handleSubmit(addNewCategory)}
<<<<<<< HEAD
                    className="bg-customRed rounded-lg w-full p-2 text-center my-2">
                    <Text className="text-sm text-white text-center font-openSans font-bold">
                      Add category
=======
                    className="bg-customRed rounded-xl w-full h-[45px] p-2 justify-center items-center my-2">
                    <Text className="text-sm text-white font-InterBold">
                      Add folder
>>>>>>> f31f635 (Mobile new features)
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Pressable>
          </View>
        </Modal>
<<<<<<< HEAD
        <View
          style={{
            height: Platform.OS === 'ios' ? hp(24) : hp(24),
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View className="flex-row items-center mb-4 -mt-10">
            <TouchableOpacity
              className="flex-row justify-between"
              onPress={() => navigation.navigate('Settings')}>
              <Text className="flex-1 text-lg font-openSans font-bold text-customChoc">
                {t('welcome')}, {user?.name}
              </Text>
              <Image
                source={{uri: user?.img}}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                }}
              />
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center">
            <View className="mr-3">
              <TouchableOpacity
                onPress={() => handleOpenModal()}
                className="w-14 h-14 bg-green-100 rounded-full flex justify-center items-center">
                <Icon name="plus" size={20} color="black" />
              </TouchableOpacity>
            </View>
            <FlatList
              horizontal
              data={categories}
              keyExtractor={item => item._id.toString()}
=======

        <Modal
          animationType="fade"
          visible={modalUpdateVisible}
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
                className="absolute top-3 right-3 z-10">
                <XMarkIcon width={15} height={15} color={'#000'} />
              </TouchableOpacity>

              <View className="absolute w-10/12 flex justify-center items-center top-5 mb-2">
                <View className="top-3">
                  {loading && (
                    <ActivityIndicator animating={true} color="#D45055" />
                  )}
                </View>

                {success && (
                  <View className="flex-row items-center justify-center my-2">
                    <ChecklistIcon width={14} height={14} color={'#71BA65'} />
                    <Text className="text-center text-green-800 ml-1 font-openSans text-xs">
                      {success}
                    </Text>
                  </View>
                )}

                {error && (
                  <View className="flex-row items-center justify-center my-2">
                    <WarningIcon width={14} height={14} color={'#FE0000'} />
                    <Text className="text-red-500 ml-1 font-openSans text-xs">
                      {error}
                    </Text>
                  </View>
                )}
              </View>

              <View className="flex-1 justify-start mt-5">
                <View className="flex-row justify-between">
                  <Text className="text-lg my-5 font-InterRegular text-black">
                    Update Folder
                  </Text>

                  <TouchableOpacity
                    onPress={() => handleDeleteCategory(category._id)}>
                    <View className="flex-row items-center">
                      <View>
                        <Text className="text-sm my-5 font-InterRegular mt-6 text-black">
                          Delete Folder
                        </Text>
                      </View>

                      <View className="mt-1 ml-2">
                        <DeleteIcon width={14} height={14} color={'red'} />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>

                <CustomInput
                  name="name"
                  control={folderControl}
                  placeholder="Folder name"
                  rules={{
                    required: 'Folder name is required',
                    minLength: {
                      value: 3,
                      message:
                        'Folder name should be at least 3 characters long',
                    },
                    maxLength: {
                      value: 24,
                      message: 'Folder name should be max 24 characters long',
                    },
                  }}
                />

                <View className="flex-row my-2">
                  <TouchableOpacity
                    onPress={folderHandleSubmit(updateSubmit)}
                    disabled={loading}
                    className="bg-customRed rounded-xl w-full h-[45px] p-2 justify-center items-center my-2">
                    <Text className="text-sm text-white font-InterBold">
                      Update
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Pressable>
          </View>
        </Modal>

        <View className="flex-row justify-start items-center mb-2">
          <Image
            source={{
              uri: user?.img
                ? user?.img
                : 'https://res.cloudinary.com/dwn02nfdv/image/upload/v1661767397/user_e33pcx.png',
            }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 100,
            }}
          />
          <View className="ml-3">
            <Text className="text-lg font-openSans font-bold text-black">
              {t('Hi')} {user?.name}
            </Text>

            <Text className="text-sm font-openSans text-custom-black-russian-500 ">
              {currentDate}
            </Text>
          </View>
        </View>

        <View className=" bg-gray-50 p-2 rounded-2xl my-2">
          <View className="flex-row justify-start items-center">
            <View className="pl-2">
              <SearchIcon width={14} height={14} color={'#070821'} />
            </View>

            <TextInput
              placeholder={t('search...')}
              value={searchQuery}
              onChangeText={handleSearch}
              className={`text-black w-full flex justify-center items-center text-md font-openSans mx-3 ${
                Platform.OS === 'ios' ? 'py-1' : 'py-0'
              }`}
              name="search"
              placeholderTextColor="#070821"
            />
          </View>
        </View>

        {searchQuery && filteredReceipts.length > 0 && (
          <View
            className={`h-40 w-full z-50 rounded-xl absolute ${
              Platform.OS === 'ios' ? 'top-[120px] left-3' : 'top-32 left-3'
            } bg-slate-50`}>
            <ScrollView>
              {filteredReceipts.map((rcpt, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() =>
                    navigation.navigate('ReceiptDetails', {receipt: rcpt})
                  }
                  className={`flex-row justify-between items-center ${
                    i !== filteredReceipts.length - 1
                      ? 'border-b border-slate-200 py-1 px-3'
                      : 'py-1 px-3'
                  }`}>
                  <Text className="font-openSans text-black">
                    {rcpt?.supplierName}
                  </Text>
                  <Text className="text-xs my-1 text-slate-500 font-InterRegular">
                    {moment(rcpt?.date).format('MMM D, YYYY')},
                    {moment(rcpt?.time, 'HH:mm:ss').format('hh:mm A')}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}

        <View className="flex-row justify-between items-center my-2">
          <Text className="text-[16px] text-[#737C97]">{t('folders')}</Text>

          <TouchableOpacity
            onPress={() => handleOpenModal()}
            className="w-35 h-14 flex-row justify-center items-center">
            <FolderIcon width={21} height={21} color={'#2E75FF'} />
            <Text className="text-sm font-InterMedium ml-1 text-[#2E75FF]">
              {t('newfolder')}
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={(() => {
                const uncategorized = categories.find(
                  item => item.name === 'Uncategorized',
                );
                const otherCategories = categories.filter(
                  item => item.name !== 'Uncategorized',
                );

                const sortedCategories = otherCategories.sort(
                  (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
                );

                return [...sortedCategories, uncategorized].filter(Boolean);
              })()}
              keyExtractor={item => item?._id?.toString()}
>>>>>>> f31f635 (Mobile new features)
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('CategoryDetails', {category: item})
                  }>
                  <View
                    style={{
<<<<<<< HEAD
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: item.color,
                      width: 100,
                      height: 90,
                      marginRight: 10,
                      borderRadius: 8,
                    }}>
                    <Text className="text-center text-lg text-black font-openSans">
                      {item?.name}
                    </Text>
=======
                      justifyContent: 'start',
                      alignItems: 'start',
                      backgroundColor: item.color,
                      width: 156,
                      height: 152,
                      marginRight: 10,
                      borderRadius: 8,
                    }}>
                    <View className="flex-row w-full justify-between my-8 ml-3 mt-5 items-center">
                      <View
                        className={`p-2 rounded-full w-10`}
                        style={{
                          backgroundColor: 'white',
                        }}>
                        <OfficeFolderIcon
                          width={24}
                          height={24}
                          color={'#dadada'}
                        />
                      </View>
                      {item?.name !== 'Uncategorized' && (
                        <TouchableOpacity
                          onPress={() => handleManageCategory(item)}
                          className="pr-5">
                          <NavigationMenuVerticalIcon
                            width={18}
                            height={18}
                            color={'#737C97'}
                          />
                        </TouchableOpacity>
                      )}
                    </View>

                    <Text className="text-sm text-[#111111] font-InterMedium ml-3">
                      {item?.name}
                    </Text>

                    <View className="my-2 ml-3 flex-row justify-between">
                      <Text className="text-[11px] text-[#8f9699] font-InterRegular">
                        {item?.lastReceiptDate
                          ? moment(item?.lastReceiptDate).isSame(
                              moment(),
                              'month',
                            )
                            ? moment(item?.lastReceiptDate).format(
                                'DD, MMM YYYY',
                              )
                            : `Created: ${moment(item?.lastReceiptDate).format('MMM YYYY')}`
                          : 'N/A'}
                      </Text>

                      <Text className="text-[11px] text-[#8f9699] font-InterRegular mr-2">
                        ({item?.receiptCount}) files
                      </Text>
                    </View>
>>>>>>> f31f635 (Mobile new features)
                  </View>
                </TouchableOpacity>
              )}
            />
<<<<<<< HEAD
          </View>
        </View>

        {receipts && receipts?.length === 0 ? (
          <View
            className="flex justify-center items-center"
            style={{
              height: Platform.OS === 'ios' ? hp(60) : hp(63),
            }}>
            <Text className="text-center text-xl text-slate-600 font-openSans">
              No receipts found.
            </Text>
          </View>
        ) : (
          <View
            style={{
              height: '75%',
            }}>
            <View className="flex-row justify-center items-center p-1 border-2 border-red-200 rounded-full mt-2 mb-4">
              <FontAwesome
                style={{
                  marginHorizontal: 10,
                  marginTop: Platform.OS === 'ios' ? 0 : 0,
                  marginLeft: 40,
                }}
                name="search"
                size={15}
                color="#999"
              />
              <TextInput
                placeholder={t('search')}
                value={searchQuery}
                onChangeText={handleSearch}
                className={`text-black w-full flex justify-center items-center text-md font-openSans ${
                  Platform.OS === 'ios' ? 'py-1' : 'py-0'
                }`}
                name="search"
                placeholderTextColor="#777"
              />
            </View>

            {searchQuery && filteredReceipts.length > 0 && (
              <View
                className={`h-40 w-full absolute ${
                  Platform.OS === 'ios' ? 'top-12 right-0' : 'top-12'
                } bg-white z-10`}>
                <ScrollView>
                  {filteredReceipts.map((rcpt, i) => (
                    <TouchableOpacity
                      key={i}
                      onPress={() =>
                        navigation.navigate('ReceiptDetails', {receipt: rcpt})
                      }
                      className={`flex-row justify-between items-center ${
                        i !== filteredReceipts.length - 1
                          ? 'border-b border-slate-200 py-1 px-3'
                          : 'py-1 px-3'
                      }`}>
                      <Text className="font-openSans text-black">
                        {rcpt?.supplierName}
                      </Text>
                      <Text className="text-xs my-1 text-slate-500 font-openSans">
                        {moment(rcpt?.date).format('MMM D, YYYY')},{' '}
                        {moment(rcpt?.time, 'HH:mm:ss').format('hh:mm A')}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            )}

            {filteredReceipts.length === 0 && searchQuery && (
              <View
                className={`h-40 w-full absolute ${
                  Platform.OS === 'ios' ? 'top-12' : 'top-12'
                } bg-white z-10 text-center flex justify-center items-center`}>
                <Text className="font-openSans">No results found</Text>
              </View>
            )}

            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-md font-openSans font-bold text-customChoc">
=======

            <View className="flex-row justify-between items-center my-2">
              <Text className="text-[16px] text-[#737C97]">
>>>>>>> f31f635 (Mobile new features)
                {t('recentlyScanned')}
              </Text>

              <TouchableOpacity
<<<<<<< HEAD
=======
                onPress={() => navigation.navigate('ViewAll')}
                className="w-35 h-14 flex-row justify-center items-center">
                <Text className="text-sm font-InterMedium ml-1 text-[#2E75FF]">
                  {t('viewAll')}
                </Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row justify-end items-center mb-5">
              <TouchableOpacity
>>>>>>> f31f635 (Mobile new features)
                disabled={loading}
                onPress={() => generateReport()}
                className={` ${
                  loading ? 'bg-slate-800' : 'bg-customRed'
<<<<<<< HEAD
                } px-3 py-1 rounded-md flex-row justify-center items-center`}>
=======
                } px-3 py-1 rounded-md flex-row justify-center items-center w-[150px]`}>
>>>>>>> f31f635 (Mobile new features)
                {loading ? (
                  <ActivityIndicator animating={true} color="#fff" size={16} />
                ) : (
                  <View className="flex-row justify-center items-center">
<<<<<<< HEAD
                    <AntDesign name="filetext1" color="#fff" />
=======
>>>>>>> f31f635 (Mobile new features)
                    <Text className="text-md text-white ml-1 font-openSans font-bold">
                      {t('downloadReport')}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
<<<<<<< HEAD
            <ScrollView
              contentContainerStyle={{paddingBottom: 232}}
              style={{
                flex: 1,
              }}>
              {receipts?.slice(0, 50)?.map((rcpt, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() =>
                    navigation.navigate('ReceiptDetails', {receipt: rcpt})
                  }>
                  <View
                    className={`flex-row justify-between items-center ${
                      i !== receipts.length - 1
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
                      <Text className="text-xs font-medium text-slate-900 font-openSans">
                        {rcpt.supplierName
                          ? rcpt?.supplierName
                          : 'Unknown supplier'}
                      </Text>
                      <Text className="text-xs my-1 text-slate-500 font-openSans">
                        {moment(rcpt?.date).format('MMM D, YYYY')},{' '}
                        {moment(rcpt?.time, 'hh:mm:ss').format('hh:mm A')}
                      </Text>
                    </View>
                    <Text className="font-medium text-slate-900 text-sm font-openSans">
                      ${rcpt?.totalAmount}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
=======

            {receipts && receipts.length === 0 ? (
              <View
                className="flex justify-center items-center"
                style={{
                  height: Platform.OS === 'ios' ? hp(60) : hp(63),
                }}>
                <Text className="text-center text-xl text-slate-600 font-openSans">
                  No receipts found.
                </Text>
              </View>
            ) : (
              <View>
                {filteredReceipts.length === 0 && searchQuery && (
                  <View
                    className={`h-40 w-full absolute ${
                      Platform.OS === 'ios' ? 'top-12' : 'top-12'
                    } bg-white z-10 text-center flex justify-center items-center`}>
                    <Text className="font-openSans">No results found</Text>
                  </View>
                )}
                <View className="flex-row justify-center items-center">
                  {lastThreeDaysTotals.map((item, index) =>
                    renderReceipt(item, index),
                  )}
                </View>
              </View>
            )}
            <View className="mb-48" />
          </View>
        </ScrollView>
>>>>>>> f31f635 (Mobile new features)
      </View>
    </SafeAreaView>
  );
};

export default Home;
