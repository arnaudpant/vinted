const Box = () => {
    return (
      <div className="grid grid-cols-4 grid-rows-2 gap-1 w-6/12 m-auto">
        <div className="col-span-2 row-span-2 bg-red-500">10</div>
        <div className="bg-blue-500">11</div>
        <div className="col-start-2 row-start-2 bg-green-500">12</div>
        <div className="col-start-3 row-start-2 bg-yellow-500">13</div>
        <div className="col-start-3 row-start-1 bg-purple-500">14</div>
      </div>
    );
  };
  
  export default Box;