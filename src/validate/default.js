/**
 * gameanalytics-node-sdk
 * Copyright (c) 2018, GoldFire Studios, Inc.
 * https://goldfirestudios.com
 */

/**
 * Default event validation data.
 */
module.exports = {
  v: {
    type: 'number',
    required: true,
    minimum: 2,
    maximum: 2,
  },
  user_id: {
    type: 'string',
    required: true,
  },
  ios_idfa: {
    type: 'string',
    required: false,
  },
  ios_idfv: {
    type: 'string',
    required: false,
  },
  google_aid: {
    type: 'string',
    required: false,
  },
  android_id: {
    type: 'string',
    required: false,
  },
  googleplus_id: {
    type: 'string',
    required: false,
  },
  facebook_id: {
    type: 'string',
    required: false,
  },
  limit_ad_tracking: {
    type: 'boolean',
    enum: [true],
    required: false,
  },
  logon_gamecenter: {
    type: 'boolean',
    enum: [true],
    required: false,
  },
  logon_googleplay: {
    type: 'boolean',
    enum: [true],
    required: false,
  },
  gender: {
    type: 'string',
    required: false,
    enum: [
      'male',
      'female',
    ],
  },
  birth_year: {
    type: 'number',
    pattern : /^[0-9]{4}$/,
    required: false,
  },
  custom_01: {
    type: 'string',
    maxLength : 32,
    required: false,
  },
  custom_02: {
    type: 'string',
    maxLength : 32,
    required: false,
  },
  custom_03: {
    type: 'string',
    maxLength : 32,
    required: false,
  },
  client_ts: {
    type: 'number',
    pattern: /^([0-9]{10,11})$/,
    required: false,
  },
  sdk_version: {
    type: 'string',
    required: true,
    pattern: /^(((ios|android|unity|unreal|corona|marmalade|xamarin|gamemaker|flash|cocos2d|javascript|tvos|uwp|wsa|buildbox|defold|cpp|mono|lumberyard|stingray|frvr|air|uwp_cpp|tizen|construct|godot|stencyl|fusion|nativescript) [0-9]{0,5}(\.[0-9]{0,5}){0,2})|rest api v2)$/,
  },
  engine_version: {
    type: 'string',
    required: false,
    pattern: /^(unity|unreal|corona|marmalade|xamarin|xamarin.ios|xamarin.android|xamarin.mac|gamemaker|flash|cocos2d|monogame|stingray|cryengine|buildbox|defold|lumberyard|frvr|construct|godot|stencyl|fusion|nativescript) [0-9]{0,5}(\.[0-9]{0,5}){0,2}$/,
  },
  os_version: {
    type: 'string',
    pattern: /^(ios|android|windows|windows_phone|blackberry|roku|tizen|nacl|mac_osx|tvos|webplayer|ps4|xboxone|uwp_mobile|uwp_desktop|uwp_console|uwp_iot|uwp_surfacehub|webgl|xbox360|ps3|psm|vita|wiiu|samsung_tv|linux|watch_os) [0-9]{0,5}(\.[0-9]{0,5}){0,2}$/,
    required: true,
  },
  manufacturer: {
    type: 'string',
    maxLength : 64,
    required: true,
  },
  device: {
    type: 'string',
    maxLength : 64,
    required: true,
  },
  platform: {
    type: 'string',
    required: true,
    enum: [
      'ios',
      'android',
      'windows',
      'windows_phone',
      'blackberry',
      'roku',
      'tizen',
      'nacl',
      'mac_osx',
      'tvos',
      'webplayer',
      'ps4',
      'xboxone',
      'uwp_mobile',
      'uwp_desktop',
      'uwp_console',
      'uwp_iot',
      'uwp_surfacehub',
      'webgl',
      'xbox360',
      'ps3',
      'psm',
      'vita',
      'wiiu',
      'samsung_tv',
      'linux',
      'watch_os',
    ],
  },
  session_id: {
    type: 'string',
    pattern: /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/,
    required: true,
  },
  build: {
    type: 'string',
    maxLength : 32,
    required: false,
  },
  session_num: {
    type: 'number',
    minimum: 1,
    required: true,
  },
  connection_type: {
    type: 'string',
    enum: ['offline', 'wwan', 'wifi', 'lan'],
    required: false,
  },
  jailbroken: {
    type: 'boolean',
    enum: [true],
    required: false,
  },
};
