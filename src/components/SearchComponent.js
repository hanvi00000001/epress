import React, {useState, useRef} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  TextInput,
  FlatList,
  Keyboard,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../global/styles';
import {Icon} from '@rneui/themed';

export default function SearchComponent() {
  const [modalVisible, setModalVisible] = useState(false);
  const [textInputFossued, setTextInputFossued] = useState(true);
  const textInput = useRef(0);
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
        }}>
        <View style={styles.SearchArea}>
          <Icon
            name="search"
            style={styles.searchIcon}
            type="material"
            iconStyle={{marginLeft: 5}}
            size={32}
          />
          <Text style={{fontSize: 15}}>Search by keyword</Text>
        </View>
      </TouchableWithoutFeedback>

      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.view1}>
            <View style={styles.TextInPut}>
              <Animatable.View
                animation={textInputFossued ? 'fadeInRight' : 'fadeInLeft'}
                duration={400}>
                <Icon
                  name={textInputFossued ? 'arrow-back' : 'search'}
                  onPress={() => {
                    if (textInputFossued) setModalVisible(false);
                    setTextInputFossued(false);
                  }}
                  style={styles.icon2}
                  type="material"
                  iconStyle={{marginRight: 5}}
                />
              </Animatable.View>

              <TextInput
                style={{width: '90%'}}
                placeholder="Search by keyword"
                autoFocus={false}
                ref={textInput}
                onFocus={() => {
                  setTextInputFossued(true);
                }}
                onBlur={() => {
                  setTextInputFossued(false);
                }}
              />

              <Animatable.View>
                <Icon
                  name={textInputFossued ? 'cancel' : null}
                  iconStyle={{color: colors.grey3}}
                  type="material"
                  style={{marginRight: 10}}
                  onPress={() => {
                    textInput.current.clear();
                    //handleSearch();
                  }}
                />
              </Animatable.View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
  },
  text1: {
    color: colors.grey3,
    fontSize: 16,
  },
  TextInPut: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 0,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },

  SearchArea: {
    marginTop: 10,
    width: '94%',
    height: 50,
    backgroundColor: colors.headerText,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.grey4,
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchIcon: {
    fontSize: 24,
    padding: 5,
    color: colors.grey2,
  },

  view1: {
    height: 70,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  view2: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },

  icon2: {
    fontSize: 24,
    padding: 5,
    color: colors.grey2,
  },
  modal: {
    flex: 1,
  },
});
