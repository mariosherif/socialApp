import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

export const styles = StyleSheet.create({
  emptyView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  emptyText: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  commentsList: {
    alignSelf: 'center',
    paddingBottom: 15,
  },
  commentsTitle: {
    alignSelf: 'center',
    marginTop: 10,
    fontWeight: '800',
    fontSize: 15,
    color: COLORS.secondaryColor,
  },
  commentsView: {
    marginTop: 30,
  },
});
