import { useState } from "react";
import AppleHome from "./AppleHome";

function App() {
  const [list, setList] = useState([
    { id: 1001, name: "Vue" },
    { id: 1002, name: "React" },
    { id: 1003, name: "Angular" },
  ]);
  const [id, setId] = useState(1004);
  const msg = "Ye!!!s";
  const isLogin = true;
  const articleType = "spo2rts";
  function getAge() {
    return 12;
  }
  function getArticle(type) {
    if (type === "politics") {
      return "POLITICS";
    } else if (type === "sports") {
      return "SPORTS";
    } else {
      return "None";
    }
  }
  const clickHandler = () => {
    setList([...list, { id: id, name: "Avalonia" + id }]);
    setId(id + 1);
  };
  return (
    <>
      <AppleHome />
      <div>Hello!!</div>
      <div>{msg}</div>
      <div>{getAge()}</div>
      <div>
        <ul>
          {list.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div>{isLogin ? <div>login</div> : <div>not login</div>}</div>
      <div>This is a {getArticle(articleType)} passage.</div>
      <button onClick={() => clickHandler()}>Click me</button>
      <div>
        <button>asc</button>
        <button>des</button>
      </div>
    </>
  );
}

export default App;
