import Dropdown from "./Dropdown";

function App() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Dropdown>
        {() => (
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <button type="button">Edit</button>
            </li>
            <li>
              <button type="button">Delete</button>
            </li>
          </ul>
        )}
      </Dropdown>
    </main>
  );
}

export default App;
