import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog,handleAddToBookmarks }) => {
    const { cover, title, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div className="mb-20">
            <img src={cover} alt={`cover picture of the title ${title}`} />
            <div className="flex justify-between items-center">
                <div className="flex mt-4 mb-4 ">
                    <img className="w-14" src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex">
                    <p>{reading_time} min read</p>
                    <button onClick={handleAddToBookmarks} className="ml-2 text-2xl text-red-500">
                        <FaBookmark/></button>
                </div>
            </div>
            <h1 className="text-4xl">{title}</h1>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href="">#{hash}</a> </span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes =
{
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired
}
export default Blog;