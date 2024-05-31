import {Dimensions, StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  postsList: {
    alignSelf: 'center',
    paddingBottom: 15,
  },
  errorView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  errorImage: {
    width: 80,
    height: 80,
    marginBottom: 15,
  },
  errorMsg: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  emptyData: {
    alignSelf: 'center',
  },
  fetcingPagesIndicator: {
    marginTop: 10,
  },
});
