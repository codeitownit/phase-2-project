import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function Search({art, setSearch}) {
  const[input, setInput]=useState("")

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