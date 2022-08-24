import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import useTheme from '../../hooks/useTheme';

import {globalStyleSheet, styleSheet} from './stylesheet';
import {Constant, ImageUri} from '../../config';
import {FlatList} from 'react-native-gesture-handler';
import {MessageItem} from '../../components/ListItem/MessageItem';
import {Message} from '../../interface';
import {BackButton} from './../../components/Buttons/BackButton';
import {Navigation} from '../../navigation';
export const VibesMessenger = (props: any) => {
  const {colors} = useTheme();

  const [reverseMsg, setAllMsgReverse] = useState<Message[]>([]);

  const [allMsgs, setAllMsgs] = useState<Message[]>([
    {
      key: 1,
      msg: props.route.params.message,
      sendByMe: false,
    },
  ]);
  const [newMsg, setNewMsg] = useState('');

  const onPressSend = () => {
    newMsg.length > 0
      ? setAllMsgs([
          ...allMsgs,
          {key: allMsgs.length + 1, msg: newMsg, sendByMe: true},
        ])
      : null;
    setNewMsg('');
  };
  useEffect(() => {
    // allMsgs.length > 0 ? setAllMsgReverse(allMsgs.reverse()) : null;
  }, [allMsgs]);

  return (
    <>
      <KeyboardAvoidingView
        keyboardVerticalOffset={40}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          ...globalStyleSheet.mainContainer,
          backgroundColor: colors.primaryBackground,
        }}>
        <View style={{...styleSheet.container}}>
          <FlatList
            inverted
            disableVirtualization
            showsVerticalScrollIndicator={false}
            data={allMsgs.sort((a, b) => (a.key < b.key ? 1 : -1))}
            style={{...styleSheet.chatContainer}}
            renderItem={({item, index}) => {
              return <MessageItem item={item} />;
            }}
          />
          <View style={{...styleSheet.sendContainer}}>
            <Text
              style={{
                ...styleSheet.sendNftContainer,
                color: colors.secondaryOne,
              }}>
              SEND A NFT OR SPL TOKEN
            </Text>
            <View
              style={{
                ...styleSheet.inputMsgContainer,
                backgroundColor: colors.secondaryBackGround,
              }}>
              <TextInput
                selectionColor={colors.secondaryOne}
                multiline={true}
                value={newMsg}
                style={{
                  ...styleSheet.inputMsg,
                  backgroundColor: colors.secondaryBackGround,
                  color: colors.primaryText,
                }}
                onChangeText={text => {
                  setNewMsg(text);
                }}
              />
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  onPressSend();
                }}
                style={{
                  ...styleSheet.sendBtn,
                  backgroundColor: colors.tertiaryOne,
                }}>
                <Text
                  style={{
                    ...globalStyleSheet.titleMedium12,
                    color: colors.primaryBackground,
                  }}>
                  Send
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
      <BackButton
        onPress={() => {
          Navigation.goToBack(props.navigation);
        }}
      />
    </>
  );
};
