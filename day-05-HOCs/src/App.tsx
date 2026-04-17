import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import Reports from "./pages/Reports";

function App() {
  return (
    <BrowserRouter>
      <div className="drawer lg:drawer-open">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        
        {/* Main Content */}
        <div className="drawer-content flex flex-col bg-base-100 min-h-screen">
          {/* Mobile Navbar */}
          <div className="navbar bg-base-300 w-full lg:hidden shadow-md">
            <div className="flex-none">
              <label htmlFor="dashboard-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              HOC Patterns
            </div>
          </div>

          {/* Page Content */}
          <main className="flex-1 p-6 md:p-10 transition-all duration-300">
            <header className="hidden lg:flex justify-between items-center mb-10">
              <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-sm">
                Higher Order Components
              </h1>
            </header>
            
            <div className="bg-base-200 rounded-2xl p-6 shadow-sm min-h-[70vh]">
              <Routes>
                <Route index element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/reports" element={<Reports />} />
              </Routes>
            </div>
          </main>
        </div> 

        {/* Sidebar Navigation */}
        <div className="drawer-side border-r border-base-300 z-50 shadow-xl">
          <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label> 
          <aside className="bg-base-200/90 backdrop-blur-md min-h-screen w-72 flex flex-col pt-6">
            <div className="px-6 pb-6 mb-2 border-b border-base-300">
              <h2 className="text-2xl font-black tracking-tight text-primary flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                </svg>
                Dashboard
              </h2>
            </div>
            
            <ul className="menu px-4 py-2 flex-1 gap-2 text-base font-medium">
              <li>
                <NavLink to="/" end className="hover:bg-primary/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/profile" className="hover:bg-primary/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin" className="hover:bg-primary/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Admin
                </NavLink>
              </li>
              <li>
                <NavLink to="/reports" className="hover:bg-primary/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  Reports
                </NavLink>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
