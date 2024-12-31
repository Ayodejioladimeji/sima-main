import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import {GoBackIcon2} from '../../../assets/icons';
import {Image} from 'react-native';

const ViewAll = () => {
  const receipts = useSelector(state => state.receipts.receipts);
  const navigation = useNavigation();

  const groupedReceipts = receipts.reduce((acc, receipt) => {
    const receiptDate = moment(receipt.date);
    const today = moment();
    const yesterday = moment().subtract(1, 'days');

    if (receiptDate.isSame(today, 'day')) {
      acc.Today = acc.Today || [];
      acc.Today.push(receipt);
    } else if (receiptDate.isSame(yesterday, 'day')) {
      acc.Yesterday = acc.Yesterday || [];
      acc.Yesterday.push(receipt);
    } else {
      const monthYear = receiptDate.format('MMMM YYYY');
      acc[monthYear] = acc[monthYear] || [];
      acc[monthYear].push(receipt);
    }

    return acc;
  }, {});

  const sortedSections = [
    ...(groupedReceipts.Today?.length ? ['Today'] : []),
    ...(groupedReceipts.Yesterday?.length ? ['Yesterday'] : []),
    ...Object.keys(groupedReceipts)
      .filter(key => key !== 'Today' && key !== 'Yesterday')
      .sort((a, b) =>
        moment(b, 'MMMM YYYY').isBefore(moment(a, 'MMMM YYYY')) ? -1 : 1,
      ),
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-white p-4">
        <View className="mb-3">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <GoBackIcon2 width={20} height={16} color={'#000'} />
          </TouchableOpacity>
        </View>

        <ScrollView>
          {sortedSections?.map((section, index) => (
            <View key={index}>
              <Text className="text-lg font-InterBold text-black mt-4 mb-2">
                {section}
              </Text>

              {groupedReceipts[section]?.map((receipt, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() =>
                    navigation.navigate('ReceiptDetails', {receipt})
                  }
                  className="flex-row justify-between items-center rounded-md p-2 mb-2 border border-[#e6e6e6]">
                  <Image
                    source={require('../../../assets/img/rcpt.jpg')}
                    className="w-[75px] h-[75px]"
                    resizeMode="cover"
                  />

                  <View className="flex-1 ml-3">
                    <Text className="text-xs text-[#313131] font-InterMedium my-3">
                      {receipt.supplierName}
                    </Text>
                    <Text className="text-xs text-[#ADADAD] font-InterRegular">
                      {moment(receipt.date).format('MMM D, YYYY')},
                      {moment(receipt.time, 'HH:mm:ss').format('hh:mm A')}
                    </Text>
                  </View>
                  <View>
                    <Text className="text-[#313131] text-[12px] font-InterMedium mr-1">
                      ${receipt.totalAmount}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ViewAll;
