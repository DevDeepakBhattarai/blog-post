import Link from "next/link";
import Image from "next/image";
import Copy from "./clientComponents/Copy";
import { increment } from "@/store/dataSlice";
import { useSelector } from 'react-redux'
import { store } from "@/store/store";
export default function Home() {
  return (
    <>
      <div className="mx-auto my-0 lg:w-[60vw] lg:p-0 w-[auto] p-4">

        <div className="">
          <span className="block">
            Jan,23 2023 / <Link href={"/deepak"}>Blog#1</Link>
          </span>
          <div className="text-4xl font-bold  font-sans">
            How to make a simple blog post with Next js
          </div>
          <div className="my-4">
            <img src="/deepak.jpg" className="h-16 rounded inline aspect-square" alt="" />
            <span> By Deepak Bhattarai</span>{" "}
          </div>
          <img
            className="h-[35rem] w-full aspect-video rounded"
            alt=""
            src={"/computer.jpg"}
          />
        </div>

        <div className="text-base font-serif font-semibold mt-4">
          Using Next.js to create a simple blog post is a simple procedure that can be finished in a few steps. In this tutorial, we&apos;ll go through the fundamentals of building a Next.js project, creating a new page for our blog post, and populating that page with information.

          Before we begin, you must have Node.js and npm (the Node.js package manager) installed on your machine. Node.js may be downloaded from the official website and installed just like any other piece of software. Once Node.js is installed, start a terminal and execute the command &quot;npm -v&quot;to see if node has been installed or not

          <br />
          <br />
          First, we will create a new Next.js project. Open a terminal and navigate to the directory where you want to create the project. Then, run the following command:
        </div>


        <div className="w-1/2 my-4">
          <div className="w-full shadow-2xl subpixel-antialiased rounded h-16 bg-black border-black mx-auto">
            <div className="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black" id="headerTerminal">
              <div className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3" id="closebtn">
              </div>
              <div className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" id="minbtn">
              </div>
              <div className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
              </div>
              <div className="mx-auto pr-16" id="terminaltitle">
                <p className="text-center text-sm">Terminal</p>

              </div>
              <Copy color={'text-gray-700'} text="npx create-next-app my-blog" ></Copy>

            </div>
            <div className="pl-1 pt-1 h-auto  text-green-200 font-mono text-xs bg-black" id="console">
              <p className="pb-1"><b>$</b> npx create-next-app my-blog
              </p>
            </div>
          </div>
        </div>

        <div

          className="text-base font-serif font-semibold mt-4">

          This script will create a new directory named &quot;my-blog&quot; in which the basic structure of a Next.js project will be stored. When the command is done, enter the new directory by running:

        </div>


        <div className="w-1/2 my-4">
          <div className="w-full shadow-2xl subpixel-antialiased rounded h-16 bg-black border-black mx-auto">
            <div className="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black" id="headerTerminal">
              <div className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3" id="closebtn">
              </div>
              <div className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" id="minbtn">
              </div>
              <div className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
              </div>
              <div className="mx-auto pr-16" id="terminaltitle">
                <p className="text-center text-sm">Terminal</p>

              </div>
              <Copy color={'text-gray-700'} text="cd my-blog" ></Copy>

            </div>
            <div className="pl-1 pt-1 h-auto  text-green-200 font-mono text-xs bg-black" id="console">
              <p className="pb-1"><b>$</b> cd my-blog
              </p>
            </div>
          </div>

        </div>



        <div

          className="text-base font-serif font-semibold mt-4">
          Then we&apos;ll make a new page for our blog post. Pages in Next.js are React components that are rendered automatically when a user navigates to a specified URL. To add a new page, create a new directory named &quot;pages&quot; at the root of your project and a file called &quot;post.js&quot; within it.

          <br />
          The post.js file should look like this:


        </div>

        <div className="lg:w-max my-4 bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
          <div id="header-buttons" className="py-3 px-4 flex items-center justify-between">
            <div className="flex">
              <div className="rounded-full w-3 h-3 bg-red-500 mr-2"></div>
              <div className="rounded-full w-3 h-3 bg-yellow-500 mr-2"></div>
              <div className="rounded-full w-3 h-3 bg-green-500"></div>
            </div>
            <Copy color={'text-white'} text={
              `import React from 'react'
const Post = () => {
    return (
        <div>
             <h1>My First Blog Post</h1>
             <p>Welcome to my first blog post!</p>
        </div>)
}

export default Post`
            }></Copy>
          </div>

          <div id="code-area" className="py-2 px-4 mt-1 lg:whitespace-pre whitespace-pre-line text-white text-xl">

            {
              `import React from 'react'
const Post = () => {
    return (
        <div>
             <h1>My First Blog Post</h1>
             <p>Welcome to my first blog post!</p>
        </div>)
}

export default Post`}
          </div>
        </div>
        <div className="text-base font-serif font-semibold mt-4">

          This is a basic React component that will be rendered when a user navigates to the /post URL.

          Finally, we will add some content to our blog post. Open the post.js file and add some text between the &lt;p&gt; tags.
        </div>


        <div className="lg:w-max my-4 bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
          <div id="header-buttons" className="py-3 px-4 flex items-center justify-between">
            <div className="flex">
              <div className="rounded-full w-3 h-3 bg-red-500 mr-2"></div>
              <div className="rounded-full w-3 h-3 bg-yellow-500 mr-2"></div>
              <div className="rounded-full w-3 h-3 bg-green-500"></div>
            </div>
            <Copy color={'text-white'} text={
              `import React from 'react'

              const Post = () => {
                  return (
                      <div>
                          <h1>My First Blog Post</h1>
                          <p>Welcome to my first blog post! This is where I will be sharing my thoughts and ideas about various topics. I'm really excited to get started and I hope you'll enjoy reading my posts as much as I enjoy writing them.</p>
                      </div>
                  )
              }
              
              export default Post`
            }></Copy>
          </div>

          <div id="code-area" className="py-2 px-4 mt-1 lg:whitespace-pre whitespace-pre-line text-white text-xl">

            {
              `import React from 'react'

              const Post = () => {
                  return (
                      <div>
                          <h1>My First Blog Post</h1>
                          <p>Welcome to my first blog post! This is where I will
                           be sharing my thoughts and ideas about various 
                          topics. I'm really excited to get started
                           and I hope you'll enjoy reading my posts as much as I enjoy 
                          writing them.</p>
                      </div>
                  )
              }
              
              export default Post`}
          </div>
        </div>


        <div className="text-base font-serif font-semibold mt-4">
          Now that your simple blog post is complete, you can launch the development server by running:
        </div>


        <div className="w-1/2 my-4">
          <div className="w-full shadow-2xl subpixel-antialiased rounded h-16 bg-black border-black mx-auto">
            <div className="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black" id="headerTerminal">
              <div className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3" id="closebtn">
              </div>
              <div className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" id="minbtn">
              </div>
              <div className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
              </div>
              <div className="mx-auto pr-16" id="terminaltitle">
                <p className="text-center text-sm">Terminal</p>

              </div>
              <Copy color={'text-gray-700'} text="npm run dev" ></Copy>

            </div>
            <div className="pl-1 pt-1 h-auto  text-green-200 font-mono text-xs bg-black" id="console">
              <p className="pb-1"><b>$</b> npm run dev
              </p>
            </div>
          </div>

        </div>
        <div className="text-base font-serif font-semibold mt-4">
          You should be able to read your blog post if you go to http://localhost:3000/post.To summarize, making a simple blog
          post with Next.js is a simple procedure that can be finished in a few steps. You can easily set up a new project,
          create a new page, and add content to that page with Next.js. Have fun blogging!s
        </div>


      </div>

    </>
  );
}
