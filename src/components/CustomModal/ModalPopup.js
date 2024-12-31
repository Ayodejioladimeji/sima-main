/* eslint-disable react-native/no-inline-styles */
import {Modal, View} from 'react-native';
import React from 'react';

const ModalPopup = ({visible, children}) => {
  return (
    <Modal transparent visible={visible}>
      <View
        className="flex-1 justify-center items-center"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
        <View className="bg-white px-5 py-4 w-11/12 rounded-lg">
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default ModalPopup;
