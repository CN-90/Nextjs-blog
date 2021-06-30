import { Fragment } from "react";

import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POSTS = [
  {
    title: '"This" in javascript',
    slug: 'this-in-javascript',
    image: 'the_crowe.jpg',
    excerpt: 'What is "this" in javascript?',
    date:'2041-12-10'
  },
  {
    title: 'Test post',
    slug: 'test-post',
    image: 'the_crowe.jpg',
    excerpt: 'Please dont panic, this is only a test.',
    date:'2022-06-2021'
  },
  {
    title: 'Test post two, another one.',
    slug: 'test-post',
    image: 'the_crowe.jpg',
    excerpt: 'Please dont panic, this is only a test.',
    date:'2022-06-2021'
  }
]

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
};

export default HomePage;
