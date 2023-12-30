
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const themeChanger = useSelector(store=>store.theme.isDark)

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen); //subscribing the store by piece by piece
  if (!isMenuOpen) return null;

  return (
    <div className={`p-5 h-screen  col-span-1 w-64 mt-[4.2rem] ${!themeChanger?'bg-white':'bg-black text-white'}`}>
      <div className=" border-b-2">
      <ul>
        <Link to={"/"}>
          {" "}
          <li className="text-center">
            {" "}
            <button className={`${!themeChanger?'hover:bg-gray-100':'hover:bg-gray-800'} w-full h-10 font-medium rounded-xl  flex items-center pl-3 `}>
              <span>
                <img className="h-6 w-6"
                  src={!themeChanger?"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgZm9jdXNhYmxlPSJmYWxzZSIgc3R5bGU9InBvaW50ZXItZXZlbnRzOiBub25lOyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsiPjxnPjxwYXRoIGQ9Ik00IDIxVjEwLjA4bDgtNi45NiA4IDYuOTZWMjFoLTZ2LTZoLTR2Nkg0eiIvPjwvZz48L3N2Zz4=":
                  "https://icon-library.com/images/white-home-icon-png/white-home-icon-png-21.jpg"}
                  alt=""
                />
              </span>
              <span className="ml-5">Home</span>
            </button>
          </li>
        </Link>
        <Link to={'/shorts'}>
        <li className="text-center">
          {" "}
          <button className={`${!themeChanger?'hover:bg-gray-100':'hover:bg-gray-800'} w-full h-10 font-medium rounded-xl  flex items-center pl-3 `}>
            <span>
              <img className="h-6 w-6"
                src={!themeChanger?"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBmb2N1c2FibGU9ImZhbHNlIiBzdHlsZT0icG9pbnRlci1ldmVudHM6IG5vbmU7IGRpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyI+PHBhdGggZD0iTTEwIDE0LjY1di01LjNMMTUgMTJsLTUgMi42NXptNy43Ny00LjMzLTEuMi0uNUwxOCA5LjA2YzEuODQtLjk2IDIuNTMtMy4yMyAxLjU2LTUuMDZzLTMuMjQtMi41My01LjA3LTEuNTZMNiA2Ljk0Yy0xLjI5LjY4LTIuMDcgMi4wNC0yIDMuNDkuMDcgMS40Mi45MyAyLjY3IDIuMjIgMy4yNS4wMy4wMSAxLjIuNSAxLjIuNUw2IDE0LjkzYy0xLjgzLjk3LTIuNTMgMy4yNC0xLjU2IDUuMDcuOTcgMS44MyAzLjI0IDIuNTMgNS4wNyAxLjU2bDguNS00LjVjMS4yOS0uNjggMi4wNi0yLjA0IDEuOTktMy40OS0uMDctMS40Mi0uOTQtMi42OC0yLjIzLTMuMjV6bS0uMjMgNS44Ni04LjUgNC41Yy0xLjM0LjcxLTMuMDEuMi0zLjcyLTEuMTQtLjcxLTEuMzQtLjItMy4wMSAxLjE0LTMuNzJsMi4wNC0xLjA4di0xLjIxbC0uNjktLjI4LTEuMTEtLjQ2Yy0uOTktLjQxLTEuNjUtMS4zNS0xLjctMi40MS0uMDUtMS4wNi41Mi0yLjA2IDEuNDYtMi41Nmw4LjUtNC41YzEuMzQtLjcxIDMuMDEtLjIgMy43MiAxLjE0LjcxIDEuMzQuMiAzLjAxLTEuMTQgMy43MkwxNS41IDkuMjZ2MS4yMWwxLjguNzRjLjk5LjQxIDEuNjUgMS4zNSAxLjcgMi40MS4wNSAxLjA2LS41MiAyLjA2LTEuNDYgMi41NnoiLz48L3N2Zz4=":
              "https://logowik.com/content/uploads/images/youtube-shorts-black3609.jpg"}
                alt=""
              />
            </span>
            <span className="ml-5">Shorts</span>
          </button>
        </li>
        </Link>
        
      </ul>
      </div>
      <div className=" border-b-2">
      {/* <ul>
        <Link to={"/"}>
          {" "}
          <li className="text-center">
            {" "}
            <button className="hover:bg-gray-100 w-full h-10 font-medium rounded-xl  flex items-center pl-3 ">
              <span>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgZm9jdXNhYmxlPSJmYWxzZSIgc3R5bGU9InBvaW50ZXItZXZlbnRzOiBub25lOyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsiPjxnPjxwYXRoIGQ9Ik00IDIxVjEwLjA4bDgtNi45NiA4IDYuOTZWMjFoLTZ2LTZoLTR2Nkg0eiIvPjwvZz48L3N2Zz4="
                  alt=""
                />
              </span>
              <span className="ml-5">Home</span>
            </button>
          </li>
        </Link>
        <li className="text-center">
          {" "}
          <button className="hover:bg-gray-100 w-full h-10 font-medium rounded-xl  flex items-center pl-3 ">
            <span>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBmb2N1c2FibGU9ImZhbHNlIiBzdHlsZT0icG9pbnRlci1ldmVudHM6IG5vbmU7IGRpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyI+PHBhdGggZD0iTTEwIDE0LjY1di01LjNMMTUgMTJsLTUgMi42NXptNy43Ny00LjMzLTEuMi0uNUwxOCA5LjA2YzEuODQtLjk2IDIuNTMtMy4yMyAxLjU2LTUuMDZzLTMuMjQtMi41My01LjA3LTEuNTZMNiA2Ljk0Yy0xLjI5LjY4LTIuMDcgMi4wNC0yIDMuNDkuMDcgMS40Mi45MyAyLjY3IDIuMjIgMy4yNS4wMy4wMSAxLjIuNSAxLjIuNUw2IDE0LjkzYy0xLjgzLjk3LTIuNTMgMy4yNC0xLjU2IDUuMDcuOTcgMS44MyAzLjI0IDIuNTMgNS4wNyAxLjU2bDguNS00LjVjMS4yOS0uNjggMi4wNi0yLjA0IDEuOTktMy40OS0uMDctMS40Mi0uOTQtMi42OC0yLjIzLTMuMjV6bS0uMjMgNS44Ni04LjUgNC41Yy0xLjM0LjcxLTMuMDEuMi0zLjcyLTEuMTQtLjcxLTEuMzQtLjItMy4wMSAxLjE0LTMuNzJsMi4wNC0xLjA4di0xLjIxbC0uNjktLjI4LTEuMTEtLjQ2Yy0uOTktLjQxLTEuNjUtMS4zNS0xLjctMi40MS0uMDUtMS4wNi41Mi0yLjA2IDEuNDYtMi41Nmw4LjUtNC41YzEuMzQtLjcxIDMuMDEtLjIgMy43MiAxLjE0LjcxIDEuMzQuMiAzLjAxLTEuMTQgMy43MkwxNS41IDkuMjZ2MS4yMWwxLjguNzRjLjk5LjQxIDEuNjUgMS4zNSAxLjcgMi40MS4wNSAxLjA2LS41MiAyLjA2LTEuNDYgMi41NnoiLz48L3N2Zz4="
                alt=""
              />
            </span>
            <span className="ml-5">Shorts</span>
          </button>
        </li>
        <li className="text-center">
          {" "}
          <button className="hover:bg-gray-100 w-full h-10 font-medium rounded-xl  flex items-center pl-3 ">
            <span>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgZm9jdXNhYmxlPSJmYWxzZSIgc3R5bGU9InBvaW50ZXItZXZlbnRzOiBub25lOyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsiPjxwYXRoIGQ9Ik0xMCAxOHYtNmw1IDMtNSAzem03LTE1SDd2MWgxMFYzem0zIDNINHYxaDE2VjZ6bTIgM0gydjEyaDIwVjl6TTMgMTBoMTh2MTBIM1YxMHoiLz48L3N2Zz4="
                alt=""
              />
            </span>
            <span className="ml-5">Subscriptions</span>
          </button>
        </li>
        <li className="text-center">
          {" "}
          <button className="hover:bg-gray-100 w-full h-10 font-medium rounded-xl  flex items-center pl-3 ">
            <span>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgZm9jdXNhYmxlPSJmYWxzZSIgc3R5bGU9InBvaW50ZXItZXZlbnRzOiBub25lOyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsiPjxwYXRoIGQ9Ik0xMCAxOHYtNmw1IDMtNSAzem03LTE1SDd2MWgxMFYzem0zIDNINHYxaDE2VjZ6bTIgM0gydjEyaDIwVjl6TTMgMTBoMTh2MTBIM1YxMHoiLz48L3N2Zz4="
                alt=""
              />
            </span>
            <span className="ml-5">Subscriptions</span>
          </button>
        </li>
        <li className="text-center">
          {" "}
          <button className="hover:bg-gray-100 w-full h-10 font-medium rounded-xl  flex items-center pl-3 ">
            <span>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgZm9jdXNhYmxlPSJmYWxzZSIgc3R5bGU9InBvaW50ZXItZXZlbnRzOiBub25lOyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsiPjxwYXRoIGQ9Ik0xMCAxOHYtNmw1IDMtNSAzem03LTE1SDd2MWgxMFYzem0zIDNINHYxaDE2VjZ6bTIgM0gydjEyaDIwVjl6TTMgMTBoMTh2MTBIM1YxMHoiLz48L3N2Zz4="
                alt=""
              />
            </span>
            <span className="ml-5">Subscriptions</span>
          </button>
        </li>
        <li className="text-center">
          {" "}
          <button className="hover:bg-gray-100 w-full h-10 font-medium rounded-xl  flex items-center pl-3 ">
            <span>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgZm9jdXNhYmxlPSJmYWxzZSIgc3R5bGU9InBvaW50ZXItZXZlbnRzOiBub25lOyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsiPjxwYXRoIGQ9Ik0xMCAxOHYtNmw1IDMtNSAzem03LTE1SDd2MWgxMFYzem0zIDNINHYxaDE2VjZ6bTIgM0gydjEyaDIwVjl6TTMgMTBoMTh2MTBIM1YxMHoiLz48L3N2Zz4="
                alt=""
              />
            </span>
            <span className="ml-5">Subscriptions</span>
          </button>
        </li>
        <li className="text-center">
          {" "}
          <button className="hover:bg-gray-100 w-full h-10 font-medium rounded-xl  flex items-center pl-3 ">
            <span>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgZm9jdXNhYmxlPSJmYWxzZSIgc3R5bGU9InBvaW50ZXItZXZlbnRzOiBub25lOyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsiPjxwYXRoIGQ9Ik0xMCAxOHYtNmw1IDMtNSAzem03LTE1SDd2MWgxMFYzem0zIDNINHYxaDE2VjZ6bTIgM0gydjEyaDIwVjl6TTMgMTBoMTh2MTBIM1YxMHoiLz48L3N2Zz4="
                alt=""
              />
            </span>
            <span className="ml-5">Subscriptions</span>
          </button>
        </li>
      </ul> */}
      </div>
      {/* <h1 className="pt-5 font-bold">Watch later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul> */}
    </div>
  );
};

export default SideBar;