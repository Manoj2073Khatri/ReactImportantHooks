import React,{useState,useEffect} from  'react'

 const NewsApp=()=>{

    const [news, setNews] = useState([])
    const [searchQuery,setSearchQuery]=useState('react')
    const[url,setUrl]=useState('https://hn.algolia.com/api/v1/search?query=react')
    const[loading,setLoading]=useState(false)
 
    const fetchNews=()=>{
        setLoading(true)
         fetch(url)
         .then(result=>result.json())
         .then(data=>(setNews(data.hits),setLoading(false)))
         .catch(error=>console.log(error))
    }

    useEffect(()=>
    {fetchNews()},[url]
      )
    const handleChange=(e)=>{
         setSearchQuery(e.target.value)
    }
    const handleSubmit=e=>{
        e.preventDefault()
        setUrl(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`)
    }

    const showLoading=()=>(
        loading?<h2>Loading...</h2>:""
    )


    const searchForm=()=>(
            <form onSubmit={handleSubmit}>
                <input type='text' value={searchQuery} onChange={handleChange} ></input>
                <button>search</button>
            </form>
    )

    const showNews=()=> (
             news.map((newsInfo,index)=>(
            <p key={index}>{newsInfo.title}</p>
            )
    ))
    return(
        <div>

            <h1>News</h1>
            {showLoading()}
        
            {searchForm()}
          
             {showNews()}
    
          </div>
    )
}
export default NewsApp