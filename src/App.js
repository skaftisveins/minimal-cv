import React, { useEffect } from 'react';
import Header from './components/layouts/Header';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <div className="App">
      <Header />
      <div className="container">
        <h4>About</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <h4>Skills</h4>
        <p>Python - A Byte of Python | hoppogskopp</p>
        <p>C# Unity</p>
        <p>Photoshop | InDesign</p>
        <p>C# SQL WPF</p>
        <p>Source control - git.ntv GitHub</p>
        <p>HTML CSS JavaScript | Angular Node | Web API | Linux</p>
        <p>Xamarin | React</p>
        <h4>Education</h4>
        <p>Programming Course, ntv school </p>
        <small>Sep, 2018 - Jan, 2020</small>
        <h4>References</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>This is the Footer</p>
      </div>
    </div>
  );
};

export default App;
