import React from 'react'


export default function Navber() {
    function gotoprojects(){
        window.location.assign("/projects")
    }
  return (
     <>
     <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{ margin : "0px", padding: "0px"}}>
  <div class="container-fluid" style={{backgroundColor: 'rgb(254 202 202)'}} >
    <a class="navbar-brand" href="/" style={{fontSize: "30px", textDecoration: "bold", border: "1px solid rgb(220 38 38)", boxShadow:  "-1px 1px rgb(220 38 38), -2px 2px rgb(220 38 38), -3px 3px rgb(220 38 38), -4px 4px rgb(220 38 38), -5px 5px rgb(220 38 38)"}}>Mandeep Garhwal</a>
    <button class="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <button onClick={gotoprojects}>Projects</button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
   
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
      
        <li class="nav-item" style = {{zIndex : "2"}}>
          {/* <a class="nav-link active" aria-current="page" href="/projects" style={{color: "black"}}>Projects</a> */}
          
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/technologies">Technologies</a>
        </li>
        </ul>


    </div>
  </div>
</nav>
     </>
  )
}
