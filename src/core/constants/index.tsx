import {Platform, Dimensions} from 'react-native';

export const DEVICE_HEIGHT = Dimensions.get('window').height; //983
export const DEVICE_WIDTH = Dimensions.get('window').width; //375
export const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
//export const API_ENDPOINT = 'http://bookworm-backend-dev.me-south-1.elasticbeanstalk.com';
//export const API_ENDPOINT = 'http://192.168.0.27:8000';
export const API_ENDPOINT = 'https://reqres.in/api';
