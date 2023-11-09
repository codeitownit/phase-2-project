import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function Search({art, setSearch}) {
  const[input, setInput]=useState("")

  // function handleSearch(input){
   
  //           const artName =input.split(" ").join("")
  //           console.log(artName)
  //           fetch("https://api.artic.edu/api/v1/artworks/search?q="+artName)
  //           .then(response => response.json())
  //           .then(data =>{
  //               let allSearchData = data;
  //               allSearchData.data.forEach(item =>{
  //                   let artLink= item.api_link;
  //                   fetch(artLink)
  //                   .then(response => response.json())
  //                   .then(data =>{
  //                    let searchData= data;
  //                    let info = searchData.data
  //                    console.log(info);
                    
  //                   });
  //               })
  //           })
           
        
  // }

  return (
    <div>
        <Form className="d-flex"onSubmit={(e)=>{
    e.preventDefault()
    setSearch(input)
}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>setInput(e.target.value)}
            />
            <Button type="submit"variant="outline-dark">Search</Button>
          </Form>
    </div>
  )
}

export default Search