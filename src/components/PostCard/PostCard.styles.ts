import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

export const styles = StyleSheet.create({
  card: {
    marginHorizontal: 15,
    marginVertical: 10,
    borderWidth: 1.5,
    borderColor: COLORS.primaryColor,
    backgroundColor: COLORS.background,
  },
  cardTitle: {
    fontWeight: '800',
    justifyContent: 'center',
    marginTop: 7,
    color: COLORS.primaryColor,
  },
  postTitle: {
    fontWeight: 'bold',
    marginBottom: 15,
  },
});
