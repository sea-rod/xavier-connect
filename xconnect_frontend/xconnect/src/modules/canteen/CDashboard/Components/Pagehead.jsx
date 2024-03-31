import "./Pagehead.css";

function Pagehead({ names }) {
  return (
    <>
    <div id="pagehead" >
    {names.map((item, index) => (
      <h1 id="pageheadpage-name" key={index}>{item.name}</h1>
    ))}
    </div>
    </>
  )
}

export default Pagehead;
