import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {FlatList, TouchableOpacity, View, Text} from 'react-native';
import moment from 'moment';

import {
  NavigationMenuVerticalIcon,
  OfficeFolderIcon,
} from '../../../assets/icons';

const CategoryList = ({navigation}) => {
  const categories = useSelector(state => state.cats.categories);

  const renderCategory = useCallback(
    ({item}) => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('CategoryDetails', {category: item})
        }>
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            backgroundColor: item.color,
            width: 156,
            height: 152,
            marginRight: 10,
            borderRadius: 8,
          }}>
          <View className="flex-row justify-between my-8 ml-3 mt-5 items-center">
            <View
              className="p-2 rounded-full w-10"
              style={{backgroundColor: 'white'}}>
              <OfficeFolderIcon width={24} height={24} color="#dadada" />
            </View>
            <TouchableOpacity
              onPress={() => handleManageCategory(item)}
              className="mr-4">
              <NavigationMenuVerticalIcon
                width={18}
                height={18}
                color="#737C97"
              />
            </TouchableOpacity>
          </View>

          <Text className="text-sm text-[#111111] font-InterMedium ml-3">
            {item?.name}
          </Text>

          <View className="my-2 ml-3 flex-row">
            <Text className="text-[12px] text-[#8f9699] font-InterRegular">
              {item?.lastReceiptDate
                ? moment(item.lastReceiptDate).format('DD, MM YYYY')
                : 'N/A'}
            </Text>
            <Text className="text-[12px] text-[#8f9699] font-InterRegular ml-2">
              {item?.receiptCount} files
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    ),
    [navigation],
  );

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      keyExtractor={item => item?._id?.toString()}
      renderItem={renderCategory}
    />
  );
};

export default React.memo(CategoryList);
