import { useState } from "react";
import Link from "next/link";
import { FaGithubAlt } from "react-icons/fa";
import Image from "next/image";
import CodeHighlight from "./codehighlight";


const Blog = () => {
  const [showCode, setShowCode] = useState(false);

    return ( 
        <div className="card oilAppBox">
  <h2 className="title">Codys Blog site</h2>
        <h4 className="subTitle">
         React TypeScript NEXT.JS CRUD APP with a seperate JSON server for backend Data
        </h4>
        <div className="oilImgandDis center">
        {showCode ? (
       <div className="card  codeBox">
       <pre>
         <code className="language-javascript">
         {`
'use client'
import { useState, ChangeEvent } from "react"; // Add the missing import statement for ChangeEvent
import { Modal } from "../Modal";
import { addBlog } from "@/app/pages/api";
import { useRouter } from "next//navigation"; // Replace the incorrect import statement for useRouter
import { v4 as uuidv4 } from "uuid";

type ChangeType = {
  target: {
    name: string,
    value: string
  } & ({ // The discriminated union
    type?: "text";
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} | {
    type: "textarea";
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
})
}

const AddBlog = () => {
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);
  const [blog, setBlog] = useState({
    date: "",
    title: "",
    para: ""
  });

  const handleChange = (e: any) => {
 
  setBlog({
    ...blog,
    [e.target.name]: e.target.value
  })
}

  const handleSubmitNewBlog = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addBlog({
      id: uuidv4(),
      date: blog.date,
      title: blog.title,
      para: blog.para
    })
    setBlog({
      date: "",
      title: "",
      para: ""
    })
    setModalOpen(false)
    router.refresh();

  }

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full"
      >
        Start new Blog
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewBlog}>
          <div className="modal-action">
            <input
              name="title"
              onChange={handleChange}
              type="text"
              placeholder="BLOG Title"
              className="input input-bordered w-full"
              value={blog.title}
            />
            <input
              name="date"
              onChange={handleChange} // Update the type of the event handler
              type="date"
              placeholder="date"
              className="input input-bordered w-full"
              value={blog.date}

            />
            <textarea
              name="para"
              onChange={handleChange} // Update the type of the event handler
              // type="textrea"
              placeholder="How is you're day?"
              className="input input-bordered w-full"
              value={blog.para}

            />
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default AddBlog;
         `}
              </code>
        </pre>
        <CodeHighlight />

        </div>
        ):
<Image
        className="oilAppImg"
        src="/blog.png"
        width={500}
        height={500}
        alt="blog screen shot"
        />
      }
        <div className="Oillinks center">
        <button onClick={() => setShowCode(!showCode)}>{showCode ?  "Show Picture":"Show Code" }</button>

        <div className="oilLinkLive">
          <Link href="https://blog-gamma-sand-84.vercel.app/">Deployed on</Link>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 353 64"
              >
                 <path
                fill="white"
                d="M141 16c-11 0-19 7-19 18s9 18 20 18c7 0 13-3 16-7l-7-5c-2 3-6 4-9 4-5 0-9-3-10-7h28v-3c0-11-8-18-19-18zm-9 15c1-4 4-7 9-7s8 3 9 7h-18zm117-15c-11 0-19 7-19 18s9 18 20 18c6 0 12-3 16-7l-8-5c-2 3-5 4-8 4-5 0-9-3-11-7h28l1-3c0-11-8-18-19-18zm-10 15c2-4 5-7 10-7s8 3 9 7h-19zm-39 3c0 6 4 10 10 10 4 0 7-2 9-5l8 5c-3 5-9 8-17 8-11 0-19-7-19-18s8-18 19-18c8 0 14 3 17 8l-8 5c-2-3-5-5-9-5-6 0-10 4-10 10zm83-29v46h-9V5h9zM37 0l37 64H0L37 0zm92 5-27 48L74 5h10l18 30 17-30h10zm59 12v10l-3-1c-6 0-10 4-10 10v15h-9V17h9v9c0-5 6-9 13-9z"
                />
                </svg>
                </div>
          <div id="githubLink" className="oilLinkGit">
            <FaGithubAlt />
            <Link href="https://github.com/WoollyCoyote/Blog">
              Github
            </Link>
            </div>
          </div>
        </div>
</div>
     );
}
 
export default Blog;