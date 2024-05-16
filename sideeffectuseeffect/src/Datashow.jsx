import React, { useEffect, useState } from "react";

const fetchData = async (url) => {
  try {
    const rawData = await fetch(url);
    const data = await rawData.json();
    return data;
  } catch (error) {
    console.log("Something went wrong while fetching data: ", error);
    throw error; // Rethrow the error to be caught by the calling function
  }
};

const Datashow = () => {
  const [post, setPost] = useState(null);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const handleUpdate = async () => {
      setLoading(true);
      try {
        const data = await fetchData(
          `https://jsonplaceholder.typicode.com/posts?id=${count}`
        );
        setPost(data[0]); // Since the API returns an array with a single object
        setLoading(false);
        console.log("Data fetched successfully");
      } catch (error) {
        console.log("Error fetching data: ", error);
        setError(true);
        setLoading(false);
      }
    };

    handleUpdate();

    return () => {
      console.log("Cleanup function called");
    };
  }, [count]);

  return (
    <div className="p-10 min-w-[300px] max-w-[500px] min-h-[400px] border-white border-2 text-2xl">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error fetching data</p>
      ) : (
        <div className="text-center">
          <h3>{post ? post.title : ""}</h3>
          <br />
          <p>{post ? post.body : ""}</p>
          <br />
          <button
            className="p-2 border-2 border-black"
            onClick={() => setCount((prevCount) => prevCount + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Datashow;
