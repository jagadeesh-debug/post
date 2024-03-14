import React from "react";
import './post.css'

function Post() {
    return (
        <div className="w-full h-2/6  flex justify-center items-center">
            <div className="w-11/12 md:w-3/4 lg:w-1/2 h-5/6 border m-3 border-red-700 flex justify-center items-center">
                <div className="w-full h-full border border-green-700">
                    <div className="w-full h-full flex justify-end">
                        <div className="w-full h-full flex">
                            <div className="flex justify-start items-center m-1">
                                <div className="h-20 md:h-32 lg:h-44 w-20 md:w-32 lg:w-44 border border-blue-500 rounded-full"></div>
                            </div>
                            <div className="flex flex-col">
                                <div className="text-container justify-between">
                                <strong className="text-green-600 text-3xl">IDIOT</strong>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nulla hic animi eum aperiam quidem inventore quam. Laboriosam ipsam possimus tempora aliquam quam neque, praesentium omnis distinctio repellendus officiis harum.</p>
                            <div className="flex flex-row m-2">
                             <span><strong className="text-lg"><button onClick={console.log("he have 1m followers") }>1M</button></strong> Followers</span>
                             </div>
                            </div>
                            </div>

                        </div>
                        <div className="flex w-1/6 h-1/6 m-3 border border-green-500 rounded-full mr-2 justify-center">
                            <button><box-icon name='user-plus' className="size-10 text-center"></box-icon></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
