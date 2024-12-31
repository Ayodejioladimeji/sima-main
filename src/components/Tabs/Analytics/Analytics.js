<<<<<<< HEAD
=======
/* eslint-disable react-native/no-inline-styles */
>>>>>>> f31f635 (Mobile new features)
import {
  ScrollView,
  Text,
  View,
  Image,
  SafeAreaView,
<<<<<<< HEAD
  Modal,
  TouchableOpacity,
  FlatList,
  Pressable,
  Keyboard,
  Platform,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, {useCallback, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import MonthPicker from 'react-native-month-year-picker';
=======
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import RBSheet from 'react-native-raw-bottom-sheet';
>>>>>>> f31f635 (Mobile new features)
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
<<<<<<< HEAD
  VictoryLine,
  VictoryTooltip,
  VictoryClipContainer,
  VictoryLabel,
  VictoryArea,
  VictoryAxis,
  VictoryGroup,
  VictoryScatter,
  VictoryPie,
} from 'victory-native';

import {useForm} from 'react-hook-form';
import {ActivityIndicator} from 'react-native';
import {Dimensions} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const folderIcon = require('../../../assets/icon/folder.png');
import moment from 'moment';
import {checkServerConnection, userRequestReport} from '../../../utils/api';
import {useTranslation} from 'react-i18next';

const Analytics = () => {
=======
  VictoryAxis,
  VictoryGroup,
  VictoryTooltip,
} from 'victory-native';
import {format} from 'date-fns';
import {checkServerConnection, userRequestReport} from '../../../utils/api';
import {useTranslation} from 'react-i18next';
import moment from 'moment';

import {Dimensions} from 'react-native';

import {ProgressChart} from 'react-native-chart-kit';
import {DownArrowIcon, DownloadIcon, WarningIcon} from '../../../assets/icons';
import {Alert} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const Analytics = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const years = Array.from(
    {length: new Date().getFullYear() - 2022 + 1},
    (_, i) => 2022 + i,
  );

  const bottomSheetRef = useRef(null);
>>>>>>> f31f635 (Mobile new features)
  const [showPieChart, setShowPieChart] = useState(false);
  const navigation = useNavigation();
  const {t} = useTranslation();
  const user = useSelector(state => state.auth.user);
<<<<<<< HEAD
  const categories = useSelector(state => state.cats.categories);
=======
>>>>>>> f31f635 (Mobile new features)
  const receipts = useSelector(state => state.receipts.receipts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [datePicked, setDatePicked] = useState(new Date());
<<<<<<< HEAD
  const [show, setShow] = useState(false);

  const showPicker = useCallback(value => {
    setShow(value);
  }, []);
=======

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleYearChange = year => {
    setSelectedYear(year);
    setIsDropdownVisible(false); // Close dropdown after selection
  };
>>>>>>> f31f635 (Mobile new features)

  const toggleChart = () => {
    setShowPieChart(!showPieChart);
  };
<<<<<<< HEAD
  const onValueChange = useCallback(
    (event, newDate) => {
      const selectedDate = newDate || datePicked;

      showPicker(false);
      setDatePicked(selectedDate);
    },
    [datePicked, showPicker],
  );
=======
>>>>>>> f31f635 (Mobile new features)

  const totalAmountForMonth = receipts
    ?.filter(
      receipt =>
        moment(receipt.date).format('MMMM YYYY') ===
        moment(datePicked).format('MMMM YYYY'),
    )
    ?.reduce((accumulator, receipt) => accumulator + receipt.totalAmount, 0);

<<<<<<< HEAD
  const getCategoryColorById = categoryId => {
    const category = categories?.find(cat => cat._id === categoryId);
    return category ? category.color : 'rgba(0,0,0,0.1)';
  };

  const receiptsByDay = receipts.reduce((result, receipt) => {
    const dateKey = moment(receipt.date).format('ddd');
    if (!result[dateKey]) {
      result[dateKey] = [];
    }
    result[dateKey].push(receipt);
    return result;
  }, {});

  const dailyTotalAmounts = Object.keys(receiptsByDay).map(day => ({
    day,
    totalAmount: receiptsByDay[day].reduce(
      (total, receipt) => total + receipt.totalAmount,
      0,
    ),
  }));

  const generateAllDatesInMonth = () => {
    const datesInMonth = [];
    const daysInMonth = moment(datePicked, 'MMMM YYYY').daysInMonth();

    for (let day = 1; day <= daysInMonth; day++) {
      datesInMonth.push(day);
    }

    return datesInMonth;
  };

  const selectedMonthFormatted = moment(datePicked).format('MMMM YYYY');

  const filteredReceipts =
    receipts &&
    receipts?.filter(
      receipt =>
        moment(receipt.date).format('MMMM YYYY') === selectedMonthFormatted,
    );

  const totalAmount = filteredReceipts?.reduce(
    (accumulator, receipt) => accumulator + receipt.totalAmount,
    0,
  );

  const generateMonthlyData = () => {
    const monthData = [];
    const filteredDates = generateAllDatesInMonth().filter(date =>
      filteredReceipts.some(
        receipt => moment(receipt.date).format('D') === date.toString(),
      ),
    );

    for (const date of filteredDates) {
      const totalAmount = filteredReceipts
        .filter(receipt => moment(receipt.date).format('D') === date.toString())
        .reduce((accumulator, receipt) => accumulator + receipt.totalAmount, 0);

      monthData.push({day: date.toString(), totalAmount});
    }

    return monthData;
  };

  const tickValues = generateAllDatesInMonth().filter(date =>
    receipts.some(
      receipt =>
        moment(receipt.date).format('MMMM YYYY') ===
          moment(datePicked, 'MMMM YYYY').format('MMMM YYYY') &&
        moment(receipt.date).format('D') === date.toString(),
    ),
  );

  const maxChartWidth = Math.floor(Dimensions.get('window').width) * 1;
  const availableDatesCount = tickValues.length;
  const minBarWidth = 4;
  const totalBarWidth = availableDatesCount * minBarWidth;

  const chartWidth =
    totalBarWidth > maxChartWidth ? totalBarWidth : maxChartWidth;

=======
>>>>>>> f31f635 (Mobile new features)
  const generateReport = async () => {
    const isServerConnected = await checkServerConnection();
    if (isServerConnected) {
      try {
        setLoading(true);
        const response = await userRequestReport(user?.token, setError);
        if (response && response?.status === 200) {
          Alert.alert(response.data.message);
<<<<<<< HEAD
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
=======
          bottomSheetRef.current.close();
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
>>>>>>> f31f635 (Mobile new features)
        setLoading(false);
      }
    } else {
      const errorMessage = 'Server is busy or not connected!';
      setError(errorMessage);
    }
  };

<<<<<<< HEAD
  const pieChartData = generateAllDatesInMonth().map(date => {
    const totalAmount = filteredReceipts
      .filter(receipt => moment(receipt.date).format('D') === date.toString())
      .reduce((accumulator, receipt) => accumulator + receipt.totalAmount, 0);

    return {
      x: date.toString(),
      y: totalAmount,
    };
  });

  const colors = [
    '#FE0002',
    'orange',
    'gold',
    'cyan',
    'navy',
    'red',
    'green',
    'blue',
    'yellow',
    'purple',
    'pink',
    'teal',
    'brown',
    'maroon',
    'olive',
    'coral',
    'indigo',
    'violet',
    'magenta',
    'lime',
    'skyblue',
    'tan',
    'slategray',
    'tomato',
    'chocolate',
    'salmon',
    'peru',
    'darkseagreen',
    'dodgerblue',
    'mediumorchid',
  ];

  return (
    <SafeAreaView className=" flex-1 bg-customBg">
      <ScrollView>
        {error && (
          <View className="flex-row items-center justify-center my-2">
            <FontAwesome name="warning" size={14} color="#D45055" />
            <Text className="text-red-500 ml-1 font-openSans">{error}</Text>
          </View>
        )}
        <View className="p-3">
          <View className="flex-row items-center justify-end mb-1">
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
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

          <View className="flex-row justify-between items-center">
            <Text className="text-md text-slate-700 font-normal font-openSans">
              Total amount recorded
            </Text>

            <TouchableOpacity
              onPress={showPicker}
              className="h-12 rounded-md flex justify-center items-center">
              <Text className="font-openSans text-black">
                {moment(datePicked).format('MMMM, YYYY')}
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center justify-between">
            <View className="flex-row  my-2 items-center">
              <Text className="text-md text-slate-900 font-openSans">
                {moment(datePicked).format('MMMM, YYYY')} :
              </Text>
              <Text className="text-md text-slate-900 font-bold ml-1 font-openSans">
                ${totalAmountForMonth?.toFixed(0)}
              </Text>
            </View>
            <TouchableOpacity
              className="bg-customRed px-3 py-1 rounded-md flex-row justify-center items-center"
              onPress={toggleChart}>
              <Text className="text-white">
                {showPieChart ? 'Bar Chart' : 'Pie Chart'}
              </Text>
            </TouchableOpacity>
          </View>

          {showPieChart ? (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <VictoryPie
                data={pieChartData}
                colorScale={colors}
                width={250}
                height={250}
                labels={({datum}) => {
                  return datum.y !== 0 ? `(${datum.x}) \n $${datum.y}` : '';
                }}
                labelComponent={<VictoryLabel textAnchor={'end'} angle={45} />}
                theme={VictoryTheme.material}
              />
            </View>
          ) : (
            <View className="flex-row items-center mb-1">
              <ScrollView horizontal>
                <VictoryChart
                  width={chartWidth}
                  height={250}
                  theme={VictoryTheme.grayscale}>
                  <VictoryGroup>
                    <VictoryBar
                      style={{
                        data: {
                          fill: '#FE0002',
                        },
                      }}
                      barWidth={12}
                      data={generateMonthlyData()}
                      x="day"
                      y="totalAmount"
                    />
                  </VictoryGroup>
                  <VictoryAxis
                    tickValues={tickValues.map(date => date.toString())}
                  />
                </VictoryChart>
              </ScrollView>
            </View>
          )}

          <View className="flex-row justify-center items-center mb-6">
            <Text>Monthly expenses</Text>
          </View>

          {filteredReceipts && filteredReceipts?.length === 0 ? (
            <View
              className="flex justify-center items-center"
              style={{
                height: '35%',
              }}>
=======
  const currentDate = format(new Date(), 'EEEE, dd MMM');

  const currentMonthIndex = new Date().getMonth();
  const allMonths = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const monthsToShow = allMonths.slice(0, currentMonthIndex + 1);

  const monthlyData = monthsToShow.reduce((acc, month) => {
    acc[month] = 0;
    return acc;
  }, {});

  receipts?.forEach(receipt => {
    const receiptDate = moment(receipt.date);
    const receiptYear = receiptDate.year();
    const receiptMonth = receiptDate.format('MMM');

    if (
      receiptYear === selectedYear &&
      monthlyData.hasOwnProperty(receiptMonth)
    ) {
      monthlyData[receiptMonth] += receipt.totalAmount;
    }
  });

  // console.log('Aggregated Monthly Data:', monthlyData);

  const chartDataBar = monthsToShow.map(month => ({
    x: month,
    y: monthlyData[month] || 0,
  }));

  const lastFourMonthsData = receipts
    ?.filter(
      receipt =>
        moment(receipt.date).year() === selectedYear &&
        moment(receipt.date).isSameOrAfter(
          moment().subtract(showPieChart ? 3 : 12, 'months'),
          'month',
        ),
    )
    ?.reduce((acc, receipt) => {
      const month = moment(receipt.date).format('MMM');

      if (!acc[month]) {
        acc[month] = {
          totalAmount: 0,
          uniqueDays: new Set(),
        };
      }

      acc[month].totalAmount += receipt.totalAmount;
      acc[month].uniqueDays.add(moment(receipt.date).format('YYYY-MM-DD'));

      return acc;
    }, {});

  if (!lastFourMonthsData || Object.keys(lastFourMonthsData).length === 0) {
  }
  const months = Object.keys(lastFourMonthsData);

  const totalAmounts = months.map(month =>
    Number(lastFourMonthsData[month].totalAmount.toFixed(2)),
  );

  const chartData = months
    .map((month, index) => ({x: month, y: totalAmounts[index]}))
    .slice(-7);

  const maxChartWidth = Math.floor(Dimensions.get('window').width) * 1;

  const progressData = months.map(month => {
    const daysCount = lastFourMonthsData[month].uniqueDays.size;
    const daysInMonth = moment(month, 'MMM').daysInMonth();
    const percentage = daysCount / daysInMonth;
    return percentage;
  });

  const data = {
    labels: months,
    data: progressData,
  };

  // console.log(receipts);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        {loading && <Spinner visible={loading} />}

        {error && (
          <View className="flex-row items-center justify-center my-2">
            <WarningIcon width={14} height={14} color={'#FE0000'} />
            <Text className="text-red-500 ml-1 font-openSans">{error}</Text>
          </View>
        )}
        <View className="p-3 ">
          <View className="flex-row justify-start items-center mb-2">
            <Image
              source={{uri: user?.img}}
              style={{
                width: 40,
                height: 40,
                borderRadius: 100,
              }}
            />
            <View className="ml-3">
              <Text className="text-lg font-openSans font-bold text-black">
                {user?.name}
              </Text>
              <Text className="text-sm font-openSans text-custom-black-russian-500">
                {currentDate}
              </Text>
            </View>
          </View>

          <View className="flex-row items-center justify-between">
            <View className="flex-row my-4 items-center">
              <Text className="text-lg text-[#191919] font-InterBold">
                {t('analytics')}
              </Text>
            </View>

            <View className="flex-row items-center justify-center">
              <TouchableOpacity
                className="px-2 py-1 rounded-md flex-row justify-center items-center"
                onPress={toggleChart}>
                <Text className="text-[#737C97] font-InterMedium">
                  {showPieChart ? t('barChart') : t('pieChart')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleChart}>
                <DownArrowIcon width={14} height={8} color={'#737C97'} />
              </TouchableOpacity>
            </View>
          </View>

          <View className="flex-row justify-end items-center my-2">
            <TouchableOpacity
              onPress={toggleDropdown}
              className="flex-row items-center">
              <Text className="text-md text-black mr-1">{selectedYear}</Text>
              <DownArrowIcon width={14} height={8} color={'#737C97'} />
            </TouchableOpacity>

            {isDropdownVisible && (
              <View className="absolute right-1 top-full bg-white border border-slate-100 rounded-md mt-2 z-50">
                {years?.map(year => (
                  <TouchableOpacity
                    key={year}
                    onPress={() => handleYearChange(year)}
                    className="p-2 border-b border-gray-200">
                    <Text className="text-md text-black">{year}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {showPieChart ? (
            <View>
              {!lastFourMonthsData ||
              Object.keys(lastFourMonthsData)?.length === 0 ? (
                <View
                  className="justify-center items-center"
                  style={{height: 250}}>
                  <Text className="text-sm font-InterRegular text-black">
                    No data for the last four months
                  </Text>
                </View>
              ) : (
                <ProgressChart
                  data={data}
                  width={maxChartWidth}
                  height={250}
                  strokeWidth={8}
                  radius={32}
                  chartConfig={{
                    backgroundGradientFrom: '#FFF',
                    backgroundGradientTo: '#FFF',
                    color: (opacity = 1) => `rgba(254, 0, 0, ${opacity})`,
                  }}
                  hideLegend={false}
                />
              )}
            </View>
          ) : (
            <VictoryChart
              width={maxChartWidth}
              height={250}
              theme={VictoryTheme.material}
              domainPadding={{x: 20}}
              style={{
                parent: {backgroundColor: '#fff'},
              }}>
              <VictoryAxis
                tickValues={chartDataBar?.map(data => data.x)}
                style={{
                  tickLabels: {fontSize: 12, padding: 8, angle: -45},
                  axisLabel: {fontSize: 14, padding: 20},
                }}
              />
              <VictoryAxis
                dependentAxis
                tickFormat={y => `$${y}`}
                style={{
                  tickLabels: {fontSize: 12, padding: 8},
                }}
              />
              <VictoryGroup>
                <VictoryBar
                  data={chartDataBar}
                  style={{
                    data: {
                      fill: '#FE0002',
                      width: 18,
                    },
                  }}
                  cornerRadius={8}
                  labels={({datum}) => `${datum.x}: $${datum.y}`}
                  labelComponent={
                    <VictoryTooltip
                      renderInPortal={false}
                      style={{fontFamily: 'InterRegular', fontSize: 12}}
                      flyoutPadding={5}
                    />
                  }
                />
              </VictoryGroup>
            </VictoryChart>
          )}

          {receipts.length === 0 ? (
            <View
              className="flex justify-center items-center"
              style={{height: '35%'}}>
>>>>>>> f31f635 (Mobile new features)
              <Text className="text-center text-xl text-slate-600 font-openSans">
                No receipts found.
              </Text>
            </View>
          ) : (
<<<<<<< HEAD
            <View
              style={{
                height: '55%',
              }}>
=======
            <View style={{height: '55%'}}>
>>>>>>> f31f635 (Mobile new features)
              <View className="flex-row justify-between items-center mb-4">
                <Text className="text-md font-openSans text-black">
                  History
                </Text>
<<<<<<< HEAD

                <TouchableOpacity
                  disabled={loading}
                  onPress={() => generateReport()}
                  className={` ${
                    loading ? 'bg-slate-800' : 'bg-customRed'
                  } px-3 py-1 rounded-md flex-row justify-center items-center`}>
=======
                <TouchableOpacity
                  disabled={loading}
                  className={`px-3 py-1 rounded-md flex-row justify-center items-center`}>
>>>>>>> f31f635 (Mobile new features)
                  {loading ? (
                    <ActivityIndicator
                      animating={true}
                      color="#fff"
                      size={16}
                    />
                  ) : (
                    <View className="flex-row justify-center items-center">
<<<<<<< HEAD
                      <AntDesign name="filetext1" color="#fff" />
                      <Text className="text-md text-white ml-1 font-openSans font-bold">
                        {t('downloadReport')}
                      </Text>
=======
                      <TouchableOpacity
                        onPress={() => bottomSheetRef?.current?.open()}>
                        <Text className="text-md text-[#FE0000] ml-1 font-InterMedium">
                          View
                        </Text>
                      </TouchableOpacity>
>>>>>>> f31f635 (Mobile new features)
                    </View>
                  )}
                </TouchableOpacity>
              </View>

              <ScrollView contentContainerStyle={{paddingBottom: 232}}>
<<<<<<< HEAD
                {filteredReceipts &&
                  filteredReceipts
                    ?.filter(
                      rcpt =>
                        moment(rcpt.date).format('MMMM YYYY') ===
                        selectedMonthFormatted,
                    )
                    ?.sort(
                      (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
                    )
                    ?.map((rcpt, i) => (
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
                              {rcpt?.supplierName}
                            </Text>
                            <Text className="text-xs my-1 text-slate-500 font-openSans">
                              {moment(rcpt?.date).format('MMM D, YYYY')},{' '}
                              {moment(rcpt?.time, 'HH:mm:ss').format('hh:mm A')}
                            </Text>
                          </View>
                          <Text className="font-medium text-slate-900 text-sm font-openSans">
                            ${rcpt?.totalAmount}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    ))}
=======
                {receipts
                  .filter(
                    rcpt =>
                      moment(rcpt.date).format('MMMM YYYY') ===
                      moment(datePicked).format('MMMM YYYY'),
                  )
                  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                  .map((rcpt, i) => (
                    <TouchableOpacity
                      key={i}
                      onPress={() =>
                        navigation.navigate('ReceiptDetails', {receipt: rcpt})
                      }>
                      <View className="flex-row justify-between items-center rounded-md p-2 bg-gray-50 mb-2">
                        <View className="justify-center items-center p-1 ">
                          <Image
                            source={require('../../../assets/img/rcpt.jpg')}
                            className="w-[75px] h-[75px]"
                            resizeMode="cover"
                          />
                        </View>
                        <View className="flex-1 ml-3">
                          <Text className="text-xs text-[#313131] font-InterMedium">
                            {rcpt?.supplierName}
                          </Text>
                          <Text className="text-xs my-1 text-[#ADADAD] font-InterRegular">
                            {moment(rcpt?.date).format('MMM D, YYYY')},
                            {moment(rcpt?.time, 'HH:mm:ss').format('hh:mm A')}
                          </Text>
                        </View>
                        <Text className="text-[#313131] font-InterMedium ">
                          ${rcpt?.totalAmount}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ))}

                <View className="pb-96" />
>>>>>>> f31f635 (Mobile new features)
              </ScrollView>
            </View>
          )}
        </View>
<<<<<<< HEAD
      </ScrollView>

      <View className="relative bottom-96 ">
        {show && (
          <View className="flex-1 justify-center items-center">
            <MonthPicker
              autoTheme={false}
              onChange={onValueChange}
              value={datePicked}
              minimumDate={new Date(2000, 0)}
              maximumDate={new Date()}
              locale="en"
            />
          </View>
        )}
      </View>
=======

        <RBSheet ref={bottomSheetRef} className="flex-1">
          <View className="p-8 pt-1">
            <View className="flex-row justify-between items-center pt-10">
              <Text className="text-lg font-openSans text-black">
                {t('downloadReport')}
              </Text>
              <TouchableOpacity onPress={generateReport}>
                <DownloadIcon width={20} height={20} color={'#FE0000'} />
              </TouchableOpacity>
            </View>
          </View>
        </RBSheet>

        <View className="pb-44" />
      </ScrollView>
>>>>>>> f31f635 (Mobile new features)
    </SafeAreaView>
  );
};

export default Analytics;
