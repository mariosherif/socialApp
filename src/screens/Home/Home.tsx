import React from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import Loading from '../../components/Loading/Loading';
import PostCard from '../../components/PostCard/PostCard';
import {COLORS} from '../../constants/Colors';
import {getPosts} from '../../services/posts';
import {styles} from './Home.styles';

const Home = () => {
  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isRefetching,
    refetch,
  } = getPosts();

  return (
    <View>
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={data?.pages?.flatMap(page => page.data)}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.errorView}>
              <Image
                source={require('../../assets/Images/error.png')}
                style={styles.errorImage}
              />
              <Text style={styles.errorMsg}>No data!</Text>
            </View>
          }
          renderItem={({item}) => (
            <PostCard id={item.id} title={item.title} content={item.body} />
          )}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={() => {
            if (hasNextPage) fetchNextPage();
          }}
          contentContainerStyle={styles.postsList}
          onRefresh={() => refetch()}
          refreshing={isRefetching}
          ListFooterComponent={
            isFetchingNextPage ? (
              <ActivityIndicator
                color={COLORS.primaryColor}
                size={'large'}
                style={styles.fetcingPagesIndicator}
              />
            ) : null
          }
        />
      )}
    </View>
  );
};

export default Home;
