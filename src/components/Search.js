import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function Search({handleSearch}) {
  return (
    <div>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button onClick={handleSearch} variant="outline-dark">Search</Button>
          </Form>
    </div>
  )
}

export default Search