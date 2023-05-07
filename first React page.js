
function List(){
  return (
    <div style={{color:"green"}}>
      <header>
        <nav>
          <img src="./logo192.png" style={{width:50}}></img>
        </nav>
      </header>
      <h1>I am interested in learning react</h1>
      <ol style={{color:"red"}}>
        My List
        <li>item 1</li>
        <li>item 2</li>
        <ul>item 11</ul>
        <ul>item 12</ul>
      </ol>
      <footer>shubham bhatt development. </footer>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Lavbar></List>);
