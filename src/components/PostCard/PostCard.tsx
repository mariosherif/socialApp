import React, {FC} from 'react';
import {Image, View} from 'react-native';
import {styles} from './PostCard.styles';
import {Avatar, Button, Card, Text} from 'react-native-paper';
import reactotron from 'reactotron-react-native';
import {PostCardProps} from './PostCard.types';

const PostCard: FC<PostCardProps> = ({
  id,
  title = 'No Title',
  content = 'No Content',
}) => {
  return (
    <Card style={styles.card} onPress={() => {}}>
      <Card.Title
        title={'Anonymous'}
        titleVariant="bodyLarge"
        titleStyle={styles.cardTitle}
        left={props => (
          <Avatar.Image
            {...props}
            size={40}
            source={{uri: 'https://picsum.photos/200'}}
          />
        )}
      />
      <Card.Content>
        <Text variant="titleSmall" style={styles.postTitle}>
          {title}
        </Text>
        <Text variant="bodyMedium">{content}</Text>
      </Card.Content>
    </Card>
  );
};

export default PostCard;
