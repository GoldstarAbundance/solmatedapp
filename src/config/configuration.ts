const APIUrl = {
  BaseUrlStaging: '',
  BaseUrlProduction: '',
};
const Env = {
  STAGING: '0',
  PRODUCTION: '1',
};
const getUrl = (env: string) => {
  return Env.PRODUCTION == env
    ? APIUrl.BaseUrlProduction
    : APIUrl.BaseUrlStaging;
};

export const Configurations = {
  BASE_URL: getUrl(Env.STAGING),
};

export default {
  Configurations,
  getUrl,
};
