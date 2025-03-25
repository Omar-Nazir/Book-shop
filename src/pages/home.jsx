import Block from "../components/block";
const Home = () => {
  return (
    <div className="min-h-[85%]">
      {/* <Login/> */}
      {/* <Registration/> */}


      <div className="bg-white grid z-0 lg:grid-cols-4 grid-cols-1 md:grid-cols-2  ">
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
      </div>
    </div>
  )

};
export default Home;