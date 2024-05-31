import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import {Text} from 'react-native-paper';
import CommentCard from '../../components/CommentCard/CommentCard';
import Loading from '../../components/Loading/Loading';
import PostCard from '../../components/PostCard/PostCard';
import {getComments} from '../../services/comments';
import {styles} from './PostDetails.styles';
import {PostDetailsProps} from './PostDetails.types';

const PostDetails: FC<PostDetailsProps> = ({route}) => {
  const {postId, title, content} = route?.params;
  const {
    data: commentsData,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isRefetching,
    refetch,
  } = getComments(postId);
  return (
    <View>
      <PostCard title={title} content={content} isViewing />
      <View style={styles.commentsView}>
        <Text style={styles.commentsTitle}>Comments</Text>
        {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={commentsData.pages.flatMap(page => page.data)}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <View style={styles.emptyView}>
                <Text style={styles.emptyText}>No Comments!</Text>
              </View>
            }
            renderItem={({item}) => (
              <CommentCard name={item.name} body={item.body} />
            )}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={() => {
              hasNextPage && fetchNextPage();
            }}
            contentContainerStyle={styles.commentsList}
            onRefresh={() => refetch()}
            refreshing={isRefetching}
          />
        )}
      </View>
    </View>
  );
};

export default PostDetails;
