import "./calpagehead.css";

function calpagehead({ names }) {
  return (
    <>
    <div id="calpagehead" >
    {names.map((item, index) => (
      <h1 id="calpageheadpage-name" key={index}>{item.name}</h1>
    ))}
    </div>
    </>
  )
}

export default calpagehead;