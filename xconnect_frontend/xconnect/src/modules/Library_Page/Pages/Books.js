import LibraryPagehead from "../Components/pagehead/LibraryPagehead";
import './Books.css';

  function Books() {
    return (
    <>
      <LibraryPagehead name={"BOOKS"}/>
      <div id="booksinventory">
        <h1 id="booksinventory-name">
            <span className="entry">The Great Gatsby</span>
            <span className="entry">ISBN ID: 6742567425084</span>
            <span className="entry">Fiction</span>
        </h1>
        <h1 id="booksinventory-name">
            <span className="entry">Introuduction to Python</span>
            <span className="entry">ISBN ID: 6742567425084</span>
            <span className="entry">Educational</span>
        </h1>
    </div>
    </>
  )
}

export default Books;
