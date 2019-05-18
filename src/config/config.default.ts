export = (appInfo: any) => {
  const config: any = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1558148021189_2346';

  // add your config here
  config.middleware = [
  ];

  return config;
};
