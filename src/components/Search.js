import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom';




function Search({setSearch}) {
  const[input, setInput]=useState("")

  const navigate = useNavigate();


  return (
    <div>
        <Form className="d-flex"onSubmit={(e)=>{
    e.preventDefault()
    setSearch(input)
    navigate(`/artworks`)
   
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