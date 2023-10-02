const Pagination = ({numOfPages,onPageNumberClick})=>{
    const pageNumbers = [];
    for (let  i=1;i<numOfPages;i++){
        pageNumbers.push(i);
    }
    return(<div>
        <ul>
            {
                pageNumbers.map((item)=>(
                    <li key={item} onClick={()=>onPageNumberClick(item)}>{item}</li>
                ))
            }
        </ul>
        
    </div>)
    
}
export default Pagination