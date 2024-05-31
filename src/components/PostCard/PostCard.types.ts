interface PostCardProps {
  postId?: number | undefined;
  title: string;
  content: string;
  isViewing?: boolean;
  onPostPress?: (postId: number, title: string, content: string) => void;
}

export type {PostCardProps};
