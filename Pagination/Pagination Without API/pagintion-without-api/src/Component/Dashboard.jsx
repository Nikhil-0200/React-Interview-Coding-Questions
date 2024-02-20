import { useState } from "react";
import Pagination from "../Component/Pagination";
import DisplayData from "./DisplayData";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const dummyArray = new Array(100).fill(0).map((_, index) => {
    return {
      id: index + 1,
      name: `Product ${index + 1}`,
    };
  });


  const totalNoPages = 10;
  const indexLastItem = currentPage * totalNoPages;
  const indexFirstItem = indexLastItem - totalNoPages;

  const currentListItem = dummyArray.slice(indexFirstItem, indexLastItem);

//   console.log(dummyArray.length);

  return (
    <div>
      <h1>Dashboard Page
        {currentListItem.map((ele)=>(
            <DisplayData
            name={ele.name}
            key={ele.id}
            />
        ))}
        
      </h1>

      {<Pagination 
      currentPage={currentPage}
      totalPage={Math.ceil(dummyArray.length/totalNoPages)}
      onChange={setCurrentPage}
      />}
    </div>
  );
};

export default Dashboard;
