import React, { useEffect, useState } from 'react'
import { YOUTUBE_SHORTS_API } from '../Utils/constant'

const ShortsContainer = () => {
  const [shortVideos,setShortVideos] = useState([])

  const getShorts = async () => {
   try {
    const data = await fetch(YOUTUBE_SHORTS_API)
   if(data){
    const response = await data.json()
   console.log("shorts",response.items)
   setShortVideos(response.items)
   }
   } catch (error) {
    console.log("error",error.message)
   }
  }

   useEffect(() => {
    getShorts()
  }, []);
  console.log("shorts container")
  return (
    <div className='w-full flex flex-col mt-44 '>
  
    {shortVideos?.map((video, index) => (
      <div key={index} className="flex items-center justify-center mt-5">
        <div className="w-[326px] h-[579px] bg-black rounded-2xl">
          <iframe
            className='rounded-2xl'
            width="326"
            height="579" 
            
            src={`https://www.youtube.com/embed/${video?.id?.videoId}`}
            title="This is too good-looking, invincible🤯3D Special Effects | 3D Animation #shorts"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-340 h-[579px] ml-2 flex flex-col ">
          <button className='p-2 rounded-full bg-gray-200 mt-60'>
          <img className='h-6 w-6 m-2' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgZm9jdXNhYmxlPSJmYWxzZSIgc3R5bGU9InBvaW50ZXItZXZlbnRzOiBub25lOyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjUuODQxMSAxMS45OTc3QzI2LjY3NzggMTEuOTk3NyAyNy40NTk3IDEyLjQxNCAyNy45MjY4IDEzLjEwODJDMjguNjk1MSAxNC4yNDk4IDI4LjY4NzYgMTUuNzQ1IDI3LjkwOCAxNi44Nzg5TDI3LjE3OTYgMTcuOTM4M0wyNy44NTQ2IDE5LjUwMzdDMjguMjU3IDIwLjQzNjggMjguMTU5NyAyMS41MTAyIDI3LjU5NiAyMi4zNTU4TDI2LjQ5OTkgMjRWMjUuOTk3N0MyNi40OTk5IDI3LjEwMjMgMjUuNjA0NCAyNy45OTc3IDI0LjQ5OTkgMjcuOTk3N0wxMS45OTk5IDI3Ljk5NzZDMTAuODk1MyAyNy45OTc2IDkuOTk5ODcgMjcuMTAyMiA5Ljk5OTg3IDI1Ljk5NzZWMTIuODI2NEM5Ljk5OTg3IDExLjk5MjcgMTAuMjYwNCAxMS4xNzk5IDEwLjc0NDkgMTAuNTAxNUwxNS44NjMyIDMuMzM1ODZDMTYuMDc3NiAzLjAzNTY5IDE2LjQ3MjEgMi45MjUzMSAxNi44MTEyIDMuMDcwNjJDMTguNTc2MiAzLjgyNzA2IDE5LjUzNDcgNS43NDk1NSAxOS4wNzY2IDcuNjE0NEwxNy45OTk5IDExLjk5NzZMMjUuODQxMSAxMS45OTc3Wk01IDEzLjQ5OTlDMy44OTU0MyAxMy40OTk5IDMgMTQuMzk1NCAzIDE1LjQ5OTlWMjUuOTk5OUMzIDI3LjEwNDUgMy44OTU0MyAyNy45OTk5IDUgMjcuOTk5OUg4VjEzLjQ5OTlINVoiLz48L3N2Zz4=" alt="" />

          </button>
          <button className='p-2 rounded-full bg-gray-200 mt-4'>
          <img className='h-6 w-6 m-2' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgZm9jdXNhYmxlPSJmYWxzZSIgc3R5bGU9InBvaW50ZXItZXZlbnRzOiBub25lOyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNi4xNTg5NSAyMC4wMDIzQzUuMzIyMjEgMjAuMDAyMyA0LjU0MDMxIDE5LjU4NiA0LjA3MzE3IDE4Ljg5MThDMy4zMDQ5MiAxNy43NTAyIDMuMzEyNDEgMTYuMjU1IDQuMDkyMDUgMTUuMTIxMUw0LjgyMDQ1IDE0LjA2MTdMNC4xNDUzOCAxMi40OTYzQzMuNzQyOTcgMTEuNTYzMiAzLjg0MDMxIDEwLjQ4OTggNC40MDM5OSA5LjY0NDI0TDUuNTAwMTMgOC4wMDAwNEw1LjUwMDEzIDYuMDAyMzFDNS41MDAxMyA0Ljg5Nzc0IDYuMzk1NTcgNC4wMDIzMSA3LjUwMDE0IDQuMDAyMzJMMjAuMDAwMSA0LjAwMjM5QzIxLjEwNDcgNC4wMDI0IDIyLjAwMDEgNC44OTc4MyAyMi4wMDAxIDYuMDAyNEwyMi4wMDAxIDE5LjE3MzZDMjIuMDAwMSAyMC4wMDczIDIxLjczOTYgMjAuODIwMSAyMS4yNTUxIDIxLjQ5ODVMMTYuMTM2OCAyOC42NjQxQzE1LjkyMjQgMjguOTY0MyAxNS41Mjc5IDI5LjA3NDcgMTUuMTg4OCAyOC45Mjk0QzEzLjQyMzggMjguMTcyOSAxMi40NjUzIDI2LjI1MDQgMTIuOTIzNCAyNC4zODU2TDE0LjAwMDEgMjAuMDAyNEw2LjE1ODk1IDIwLjAwMjNaTTI3IDE4LjUwMDFDMjguMTA0NiAxOC41MDAxIDI5IDE3LjYwNDYgMjkgMTYuNTAwMUwyOSA2LjAwMDA2QzI5IDQuODk1NDkgMjguMTA0NiA0LjAwMDA2IDI3IDQuMDAwMDZMMjQgNC4wMDAwNkwyNCAxOC41MDAxTDI3IDE4LjUwMDFaIi8+PC9zdmc+" alt="" />

          </button>
          <button className='p-2 rounded-full bg-gray-200 mt-4'>
          <img className='h-6 w-6 m-2' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgZm9jdXNhYmxlPSJmYWxzZSIgc3R5bGU9InBvaW50ZXItZXZlbnRzOiBub25lOyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS41IDNDNC4xMTkyOSAzIDMgNC4xMTkyOSAzIDUuNVYyMS41QzMgMjIuODgwNyA0LjExOTI5IDI0IDUuNSAyNEgyMi41TDI2Ljc0NzQgMjguNTc0MUMyNy41NTEzIDI5LjQzOTkgMjkgMjguODcxIDI5IDI3LjY4OTVWMjRWNS41QzI5IDQuMTE5MjkgMjcuODgwNyAzIDI2LjUgM0g1LjVaTTggMTAuNUM4IDkuNjcxNTcgOC42NzE1NyA5IDkuNSA5SDIyLjVDMjMuMzI4NCA5IDI0IDkuNjcxNTcgMjQgMTAuNUMyNCAxMS4zMjg0IDIzLjMyODQgMTIgMjIuNSAxMkg5LjVDOC42NzE1NyAxMiA4IDExLjMyODQgOCAxMC41Wk04IDE2LjVDOCAxNS42NzE2IDguNjcxNTcgMTUgOS41IDE1SDE4LjVDMTkuMzI4NCAxNSAyMCAxNS42NzE2IDIwIDE2LjVDMjAgMTcuMzI4NCAxOS4zMjg0IDE4IDE4LjUgMThIOS41QzguNjcxNTcgMTggOCAxNy4zMjg0IDggMTYuNVoiLz48L3N2Zz4=" alt="" />

          </button>
          <button className='p-2 rounded-full bg-gray-200 mt-4'>
          <img className='h-6 w-6 m-2' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgZm9jdXNhYmxlPSJmYWxzZSIgc3R5bGU9InBvaW50ZXItZXZlbnRzOiBub25lOyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS41IDNDNC4xMTkyOSAzIDMgNC4xMTkyOSAzIDUuNVYyMS41QzMgMjIuODgwNyA0LjExOTI5IDI0IDUuNSAyNEgyMi41TDI2Ljc0NzQgMjguNTc0MUMyNy41NTEzIDI5LjQzOTkgMjkgMjguODcxIDI5IDI3LjY4OTVWMjRWNS41QzI5IDQuMTE5MjkgMjcuODgwNyAzIDI2LjUgM0g1LjVaTTggMTAuNUM4IDkuNjcxNTcgOC42NzE1NyA5IDkuNSA5SDIyLjVDMjMuMzI4NCA5IDI0IDkuNjcxNTcgMjQgMTAuNUMyNCAxMS4zMjg0IDIzLjMyODQgMTIgMjIuNSAxMkg5LjVDOC42NzE1NyAxMiA4IDExLjMyODQgOCAxMC41Wk04IDE2LjVDOCAxNS42NzE2IDguNjcxNTcgMTUgOS41IDE1SDE4LjVDMTkuMzI4NCAxNSAyMCAxNS42NzE2IDIwIDE2LjVDMjAgMTcuMzI4NCAxOS4zMjg0IDE4IDE4LjUgMThIOS41QzguNjcxNTcgMTggOCAxNy4zMjg0IDggMTYuNVoiLz48L3N2Zz4=" alt="" />

          </button>
          <button className='p-2 rounded-full bg-gray-200 mt-4'>
          <img className='h-6 w-6 m-2' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBmb2N1c2FibGU9ImZhbHNlIiBzdHlsZT0icG9pbnRlci1ldmVudHM6IG5vbmU7IGRpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyI+PHBhdGggZD0iTTcuNSAxMmMwIC44My0uNjcgMS41LTEuNSAxLjVzLTEuNS0uNjctMS41LTEuNS42Ny0xLjUgMS41LTEuNSAxLjUuNjcgMS41IDEuNXptNC41LTEuNWMtLjgzIDAtMS41LjY3LTEuNSAxLjVzLjY3IDEuNSAxLjUgMS41IDEuNS0uNjcgMS41LTEuNS0uNjctMS41LTEuNS0xLjV6bTYgMGMtLjgzIDAtMS41LjY3LTEuNSAxLjVzLjY3IDEuNSAxLjUgMS41IDEuNS0uNjcgMS41LTEuNS0uNjctMS41LTEuNS0xLjV6Ii8+PC9zdmc+" alt="" />

          </button>
        </div>
      </div>
    ))
  }
</div>
     
      
      
   
  )
}

export default ShortsContainer