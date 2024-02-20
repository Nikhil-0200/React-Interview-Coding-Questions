const Pagination = ({currentPage, totalPage, onChange}) => {

  return (
    <div>
      <button disabled={currentPage === 1} onClick={()=>onChange(currentPage -1)}>Prev</button>
        {new Array(totalPage).fill(0).map((_, index)=>(
                <button key={index} onClick={()=>onChange(index + 1)}>{index + 1}</button>
        ))}
      <button disabled={currentPage === totalPage} onClick={()=> onChange(currentPage + 1)}>Next</button>

    </div>
  )
}

export default Pagination