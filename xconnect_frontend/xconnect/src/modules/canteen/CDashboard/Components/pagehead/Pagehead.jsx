import "./Pagehead.css";

function Pagehead({ names }) {
  return (
    <>
      <div id="pagehead">
        <h1 id="pageheadpage-name">{names}</h1>
      </div>
    </>
  );
}

export default Pagehead;
