import React from "react";
function posts() {
    return (
        <div className="  h-full w-full flex  m-0">{/*screen div*/}
            <div className='flex h-1/2 w-full flex-col items-center '>{/*to make two divs to get in one div in column manner */}
                <div className="flex border border-green-800 h-1/2 w-1/2 m-1 flex-col ">{/*div 1*/}
                    <div className="h-5/6 w-full flex flex-row  ">
                        <div className="h-1/2 w-full  flex flex-row">
                            <div className="h-8 md:h-16 lg:h-16 w-12 md:w-16 lg:w-16 border border-blue-500 rounded-full m-3 flex items-center"></div>
                            <div className="flex "><strong className="text-green-600"> USER </strong> </div>
                        </div>
                        <div className="m-2">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta debitis sunt atque, ut tempora odit nam, officia voluptatem iusto consequuntur nesciunt sed porro corporis expedita laborum voluptates asperiores, deleniti nulla?</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 divide-x">
                        <div><button><box-icon name='like' ></box-icon></button></div>
                        <div><button><box-icon name='comment' ></box-icon></button></div>
                        <div><button><box-icon name='repost' ></box-icon></button></div>
                    </div>

                </div>
                <div className="flex border border-black h-1/2 w-1/2 m-1 flex-col">{/*div 1*/}
                    <div className="h-5/6 w-full flex ">
                        <div className="h-1/2 w-full  flex flex-row">
                            <div className="h-8 md:h-16 lg:h-16 w-12 md:w-16 lg:w-16 border border-blue-500 rounded-full m-3 flex items-center"></div>
                            <div className="flex "><strong className="text-green-600"> USER </strong>  </div>
                        </div>
                        <div className="m-2">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta debitis sunt atque, ut tempora odit nam, officia voluptatem iusto consequuntur nesciunt sed porro corporis expedita laborum voluptates asperiores, deleniti nulla?</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 divide-x">
                        <div><button><box-icon name='like' ></box-icon></button></div>
                        <div><button><box-icon name='comment' ></box-icon></button></div>
                        <div><button><box-icon name='repost' ></box-icon></button></div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default posts;