
const Posts = ({currentPagePosts})=>{
    return(
        <ul>
            {currentPagePosts.map((item)=>(
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    )
}
export default Posts