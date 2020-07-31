import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './partials/Navbar';
import Footer from './partials/Footer';
import Blogs from './components/Blogs';
import Docs from './components/Docs';
import About from './components/About';
import Projects from './components/Projects';
import projects from "./components/data/projects";
import ProjectDetails from "./components/ProjectDetails";

const App = () => {
  return (
    <div className="App">

      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/"><About/></Route>
          <Route path="/blogs"><Blogs/></Route>
          <Route path="/docs"><Docs/></Route>
          <Route path="/projects"><Projects/></Route>
          { projects.map((project) => (

            <Route path={project.url}>
              <ProjectDetails project={project} key={project.id}/>
            </Route>
            
          ))}
        </Switch>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
