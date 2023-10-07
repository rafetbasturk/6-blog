type Meta = {
  id: string;
  title: string;
  date: string;
  tags: string[];
};

type PostProps = {
  params: {
    postId: string;
  };
};

type TagProps = {
  params: {
    tag: string;
  };
};

type BlogPost = {
  meta: Meta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};