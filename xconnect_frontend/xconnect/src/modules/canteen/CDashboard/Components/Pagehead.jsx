import "./Pagehead.css";

function Pagehead({ names }) {
  return (
    <>
    <div id="pagehead" >
    {names.map((item, index) => (
      <h1 className="page-name" key={index}>{item.name}</h1>
    ))}
    </div>
    </>
  )
}

export default Pagehead;
