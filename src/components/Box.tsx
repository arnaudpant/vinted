const Box = () => {
    return (
      <div className="grid grid-cols-4 grid-rows-2 gap-1 w-5/12 h-[600px] m-auto">
        <div className=" bg-red-500  row-span-2 col-span-2">10</div>
        <div className="bg-blue-500">11</div>
        <div className=" bg-green-500">12</div>
        <div className=" bg-yellow-500">13</div>
        <div className=" bg-purple-500">14</div>
      </div>
    );
  };
  
  export default Box;