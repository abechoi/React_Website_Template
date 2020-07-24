import React from "react";
import blogs  from "./data/blogs";

const Blogs = () => {


  return blogs.length ? (
    <section>
      <ul className="blog-list">
        { blogs.map( blog => {
          return (
            <li key={ blog.id }>
              <h1>{ blog.title }</h1>
              <p>{ blog.body }</p>
            </li>);
        })}
      </ul>
    </section>
  ) : (
    <section>
      <p>No available blogs.</p>
    </section>
  );
}

export default Blogs;