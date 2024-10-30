// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/anandkumar-co")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  const data = useLoaderData();
  return (
    <>
      <div className="flex flex-col bg-blue-400  m-auto shadow-xl w-7/12 h-full p-4 my-3">
        <img
          src={data.avatar_url}
          className="rounded-3xl aspect-square"
          width={250}
          alt={data.name}
        />
        <div className="shadow-rose-950 text-center rounded-lg w-full ">
          Github Followers:{data.followers}
        </div>
        <div className=" shadow-rose-950 text-center rounded-lg w-full ">
          Github Name:{data.Name}
        </div>
        <div className=" shadow-rose-950 text-center rounded-lg w-full ">
          Bio :{data.bio}
        </div>
      </div>
    </>
  );
}
export default Github;

export const githubinfo = async () => {
  const response = await fetch("https://api.github.com/users/anandkumar-co");
  return response.json();
};
