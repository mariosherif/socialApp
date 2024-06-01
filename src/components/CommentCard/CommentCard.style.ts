import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

export const styles = StyleSheet.create({
  commentsCard: {
    marginHorizontal: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: COLORS.secondaryColor,
    backgroundColor: COLORS.background,
  },
  title: {
    fontWeight: 'bold',
    color: COLORS.secondaryColor,
    marginTop: 10,
  },
});
