import store from "../zustand/store";
function Feed() {
  const { count, inc, dec } = store();
  return (
    <div>
      {count} <div onClick={() => inc()}>increase</div>{" "}
      <div onClick={() => dec()}>decrease</div>
    </div>
  );
}

export default Feed;
