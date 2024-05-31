import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

export const styles = StyleSheet.create({
  card: {
    margin: 15,
  },
  cardTitle: {
    fontWeight: 'bold',
    justifyContent: 'center',
    marginTop: 7,
    color: COLORS.primaryColor,
  },
  postTitle: {
    fontWeight: 'bold',
  },
});
