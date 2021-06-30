import classes from "./post-content.module.css";
import PostHeader from "./post-header";


const dummy_post = {
    title: 'Test post two, another one.',
    slug: 'test-post',
    image: 'the_crowe.jpg',
    date:'2022-06-2021',
    content: "# This is high quality content."
}

const PostContent = () => {
    const imagePath = `/images/posts/${dummy_post.image}`

  return (
    <article className={classes.content}>
      <PostHeader title={dummy_post.title} image={imagePath} />
      {dummy_post.content}
    </article>
  );
};

export default PostContent;
