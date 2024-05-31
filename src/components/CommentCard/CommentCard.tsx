import React, {FC} from 'react';
import {Avatar, Card, Text} from 'react-native-paper';
import {styles} from './CommentCard.style';
import {CommentCardProps} from './CommentCard.types';

const CommentCard: FC<CommentCardProps> = ({
  name = 'Anonymous',
  body = 'No Content',
}) => {
  return (
    <Card style={styles.card} disabled={true}>
      <Card.Title
        title={name}
        titleVariant="bodyMedium"
        titleStyle={styles.cardTitle}
        left={() => (
          <Avatar.Image size={35} source={{uri: 'https://picsum.photos/100'}} />
        )}
      />
      <Card.Content>
        <Text variant="bodyMedium">{body}</Text>
      </Card.Content>
    </Card>
  );
};

export default CommentCard;
