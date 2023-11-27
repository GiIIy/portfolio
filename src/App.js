import React , {useRef}from 'react';
import './App.css';
import me from './portrait.jpg';
import github from './github.png';
import linkedin from './linkedin.png';
import css from './css.png';
import html from './html.png';
import js from './javascript.png';
import react from './react.png';
import node from './nodejs.png';
import mongo from './mongo.png';
import express from './express.png';
import chess from './chessProject.png'

function App() {

  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className="container">
      <div>
        <div className="el-wrap x">
          <div className="el y">
            <img src={css} className='smallStack' style={{width: "24px", height: "32px"}} alt="CSS" />
          </div>
        </div>

        <div className="el-wrap x" style={{animationDelay: '-10s'}}>
          <div className="el y" style={{animationDelay: '-1s'}}>
            <img src={html} className='smallStack' style={{width: "28px", height: "32px"}} alt="HTML" />
          </div>
        </div>

        <div className="el-wrap x" style={{animationDelay: '-20s'}}>
          <div className="el y" style={{animationDelay: '-8s'}}>
            <img src={js} className='smallStack' style={{width: "24px", height: "32px"}} alt="JavaScript" />
          </div>
        </div>

        <div className="el-wrap x" style={{animationDelay: '-30s'}}>
          <div className="el y" style={{animationDelay: '-6s'}}>
            <img src={react} className='smallStack' style={{width: "32px", height: "32px"}} alt="React" />
          </div>
        </div>

        <div className="el-wrap x" style={{animationDelay: '-40s'}}>
          <div className="el y" style={{animationDelay: '-4s'}}>
            <img src={node} className='smallStack' style={{width: "32px", height: "24px"}} alt="NodeJS" />
          </div>
        </div>

        <div className="el-wrap x" style={{animationDelay: '-50s'}}>
          <div className="el y" style={{animationDelay: '-2s'}}>
            <img src={mongo} className='smallStack' style={{width: "32px", height: "32px"}} alt="MongoDB" />
          </div>
        </div>

        <div className="el-wrap x" style={{animationDelay: '-60s'}}>  
          <div className="el y" style={{animationDelay: '-10s'}}>
            <img src={express} className='smallStack' style={{width: "32px", height: "24px"}} alt="Express" />
          </div>
        </div>
      </div>

      <div className="Nav" >
        <a className='nameText' href='http://localhost:3000/' style={{textDecoration:"none"}}>Gill</a>

        <div className="NavContent">
        <span onClick={() => scrollToSection(homeRef)} style={{ cursor: 'pointer', marginRight: "20px", color: "#2d2e32", fontWeight: "600", fontFamily: "sans-serif", fontSize: "18px" }}>Home</span>
        <span onClick={() => scrollToSection(projectsRef)} style={{ cursor: 'pointer', marginRight: "20px", color: "#2d2e32", fontWeight: "600", fontFamily: "sans-serif", fontSize: "18px" }}>Projects</span>
        <span onClick={() => scrollToSection(contactRef)} style={{ cursor: 'pointer', marginRight: "20px", color: "#2d2e32", fontWeight: "600", fontFamily: "sans-serif", fontSize: "18px" }}>Contact</span>
        </div>
      </div>

      <div ref={homeRef} className="App">
        <div className="content">
          <div className="text">
            <h1>Full-Stack MERN</h1>
            <h2>Developer</h2>
            <br></br>
            <div className='smallText'>
              <p>Hi, I'm Jayden, a passionate Full Stack</p>
              <p>Developer based in the United Kingdom</p>
            </div>

            <div>
              <a href="https://github.com/GiIIy" target="_blank" rel="noreferrer">
                <img src={github} className='individualLogo' alt="Github" />
              </a>

              <a href="https://www.linkedin.com/in/JaydenLGill/" target='_blank' rel="noreferrer">
                <img src={linkedin} className='individualLogo' alt="Linkedin" />
              </a>  
            </div>
          </div>

          <div className="sidePhoto">
            <img src={me} alt="Jayden Gill" />
          </div>
        </div>    
      </div>

  


      <div ref={projectsRef} id="projects" className="projects-section">
        <h2 style={{fontSize:"18px", color:"blue"}}>Projects</h2>
        <h1 style={{fontSize:"28px",marginTop:"10px"}}>My favourite projects</h1>

        <div className="projects">
          <div className="project">
            <div className="project-image">
              <img src={chess} style={{height:"350px",width:"350px"}} alt="Project 1" />
            </div>
            <div className="project-info">
              <h1 style={{fontSize:"18px"}}>Chess Engine (Python)</h1>
              <p style={{fontSize:"18px", textAlign:"center",maxWidth:"30ch", marginTop:"10px", marginBottom:"10px", color:"grey"}}>A chess engine, made using python. Currently a work in progress, for my A Level Computer Science NEA</p>
              <div className='viewLinks'>
                <a href="https://github.com/GiIIy/TicTacToe" target="_blank" rel="noreferrer">View Code</a>
                <a href="https://replit.com/@JaydenGill/chessGUI"  target="_blank" rel="noreferrer">View Live</a>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="project-image">
              <img src={chess} style={{height:"350px",width:"350px"}} alt="Project 1" />
            </div>
            <div className="project-info">
              <h1 style={{fontSize:"18px"}}>Chess Engine (Python)</h1>
              <p style={{fontSize:"18px", textAlign:"center",maxWidth:"30ch", marginTop:"10px", marginBottom:"10px", color:"grey"}}>A chess engine, made using python. Currently a work in progress, for my A Level Computer Science NEA</p>
              <div className='viewLinks'>
                <a href="https://github.com/GiIIy/TicTacToe" target="_blank" rel="noreferrer">View Code</a>
                <a href="https://replit.com/@JaydenGill/chessGUI" target="_blank" rel="noreferrer">View Live</a>
              </div>
            </div>
          </div>


          <div className="project">
            <div className="project-image">
              <img src={chess} style={{height:"350px",width:"350px"}} alt="Project 1" />
            </div>
            <div className="project-info">
              <h1 style={{fontSize:"18px"}}>Chess Engine (Python)</h1>
              <p style={{fontSize:"18px", textAlign:"center",maxWidth:"30ch", marginTop:"10px", marginBottom:"10px", color:"grey"}}>A chess engine, made using python. Currently a work in progress, for my A Level Computer Science NEA</p>
              <div className='viewLinks'>
                <a href="https://github.com/GiIIy/TicTacToe" target="_blank" rel="noreferrer">View Code</a>
                <a href="https://replit.com/@JaydenGill/chessGUI" target="_blank" rel="noreferrer">View Live</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={contactRef} className="contact-section">
        <div style={{marginLeft: "30px",marginTop: "30px"}}>
          <h1 style={{color:"blue", fontSize:"18px"}}>Contact Me</h1>
          <h1 style={{fontSize:"28px"}}>Don't be a stranger!</h1>
        
  
          <div className="contact-links">
            <div className="contact-info-box">
              <p>
                Email:{" "}
                <a className="mailLink" href="mailto:littlejjgill@gmail.com" target="_blank" rel="noreferrer">
                  littlejjgill@gmail.com
                </a>
              </p>
            </div>
            <div className="contact-info-box">
              <p>
                Phone:{" "}
                <a className="mailLink" href="tel:07488345488" target="_blank" rel="noreferrer">
                  07488345488
                </a>
              </p>
            </div>
          </div>

      </div>
    </div>
    </div>
  );
}

export default App;
