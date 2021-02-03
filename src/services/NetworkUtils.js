import NetInfo from '@react-native-community/netinfo';

export default class NetworkUtils {
    static async isWifi() {
        const response = await (await NetInfo.fetch()).type;

        if(response == 'wifi') {
            return true;
        } else {
            return false;
        }
    }
};