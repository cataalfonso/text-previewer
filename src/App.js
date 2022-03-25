import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        Use this MarkDown Previewer!
      </header>
      <main>
        <div class="wrapper">
        <div class="textbox-header">
        <i class="far fa-keyboard"></i>
          <p>Editor</p>
          <button><i class="far fa-window-maximize"></i></button>
          </div>  
        <textarea id="editor">MyDummyText</textarea>
       </div>
       <div class="wrapper">
       <div class="textbox-header">
       <i class="fab fa-markdown"></i>
          <p>Previewer</p>
          <button><i class="far fa-window-maximize"></i></button>
          </div>  
        <div id="preview">MyDummyText2</div>
      </div>
        </main>  
    </div>
  );
}

export default App;
