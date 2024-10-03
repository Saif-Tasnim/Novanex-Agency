import PageBanner from "../../component/PageBanner/PageBanner";
import img from "../../assets/blogs.jpg";
import SectionHeading from "../../component/SectionHeading/SectionHeading";
import { BLOG } from "../../static/blog";
import SingleCard from "../../component/SingleCard/SingleCard";

const Blog = () => {
  return (
    <>
      <PageBanner content="blogs" img={img} />
      <div className="my-28 overflow-x-hidden">
        <SectionHeading content="All Blogs" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-6 my-20">
          {BLOG.map((blog) => (
            <SingleCard
              key={blog.blog_no}
              title={blog.blog_title}
              description={blog.blog_description}
              link="/"
            />
          ))}
        </div>
      </div>{" "}
    </>
  );
};

export default Blog;
