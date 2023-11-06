const Feed = () => {
  const getTweet = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: "give me one tweet in the style of elon musk",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await fetch("http://localhost:8000/TweetGPT", options);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <button id="submit" onClick={getTweet}>
        New Tweet
      </button>
    </div>
  );
};

export default Feed;
