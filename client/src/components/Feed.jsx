import Post from "./Post";

const Feed = () => {
  //TEMPORARY
  const posts = [
    {
      id: 0,
      name: "John Doe",
      userId: 0,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 1,
      name: "Jane Doe",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
    {
      id: 2,
      name: "Thomas Flex",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores explicabo doloribus ipsa, neque, eaque id consequatur molestias, repellendus beatae odio ullam facilis quae libero inventore similique provident distinctio dignissimos! Ullam!",
      img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 3,
      name: "Emma Stone",
      userId: 3,
      profilePic:
        "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, similique. Facere, asperiores quaerat eaque voluptas non obcaecati doloribus amet illo sit tempore earum maxime quidem vitae nemo laborum doloremque delectus?",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      name: "Emma Stone",
      userId: 3,
      profilePic:
        "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quaerat minima eaque, distinctio placeat nostrum, sit cum quasi repellendus sint, laborum non. Cupiditate et dolores temporibus nesciunt provident facere? Tenetur?",
    },
  ];

  return (
    <div className="feed">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Feed;
