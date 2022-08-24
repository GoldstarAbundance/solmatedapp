import {Constant} from '../config';

import {ROOT, BOTTOM_TAB_OPTION} from './Root';

const goToMain = (navigation: any) => {
  navigation.reset({index: 0, routes: [{name: ROOT.MAIN}]});
};
const goToAcceptTransaction = (navigation: any) => {
  navigation.navigate(ROOT.ACCEPT_TRANSACTOIN);
};
const goToBack = (navigation: any) => {
  navigation.goBack();
};
const goToRegister = (navigation: any) => {
  navigation.navigate(ROOT.REGISTER);
};
const goToAstrology = (navigation: any) => {
  navigation.navigate(ROOT.ASTROLOGY);
};
const goToCreateVibes = (navigation: any) => {
  navigation.navigate(BOTTOM_TAB_OPTION.Vibes);
};
const goToVibesRequest = (navigation: any, message: string) => {
  navigation.navigate(ROOT.VIBES_REQUEST, {message: message});
};
const goToMessenger = (navigation: any, message: string) => {
  navigation.navigate(ROOT.VIBES_MESSENGER, {message: message});
};
const goToSplash = (navigation: any) => {
  navigation.navigate(ROOT.SPLASH);
};

const goToSendingVibes = (navigation: any, message: string) => {
  navigation.navigate(ROOT.SENDING_VIBES, {message: message});
};
const goToStartUp = (navigate: any) => {
  navigate.reset({index: 0, routes: [{name: ROOT.START_UP}]});
};

export default {
  goToStartUp,
  goToSplash,
  goToMain,
  goToAcceptTransaction,
  goToBack,
  goToRegister,
  goToAstrology,
  goToVibesRequest,
  goToMessenger,
  goToCreateVibes,
  goToSendingVibes,
};
