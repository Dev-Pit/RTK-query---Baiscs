import { useState } from "react";
import "./App.css";
import {
  useGetPostsQuery,
  useCreatePostsMutation,
} from "./services/jsonPlaceHolderApi";

function App() {
  const [post, setPost] = useState({ title: "", body: "", id: 999 });
  const { data, error, isLoading, refetch } = useGetPostsQuery();
  const [createPosts, { error: createError, isLoading: isCreateing }] =
    useCreatePostsMutation();

  if (isLoading) return <p>Loading...</p>;
  if (createError) return <p>There was error creating post</p>;

  if (error) return <p>There was error :(</p>;
  console.log(data);

  const handleCreatepost = async () => {
    await createPosts(post);
    refetch(); // it refetchs data
  };
  return (
    <>
      <h1>RTK Query</h1>
      <div>
        <input
          type="text"
          placeholder="Title..."
          onChange={(e) =>
            setPost((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="Body..."
          onChange={(e) =>
            setPost((prev) => ({ ...prev, body: e.target.value }))
          }
        />
        <button onClick={handleCreatepost} disabled={isCreateing}>
          Create Post
        </button>
      </div>
    </>
  );
}

export default App;
