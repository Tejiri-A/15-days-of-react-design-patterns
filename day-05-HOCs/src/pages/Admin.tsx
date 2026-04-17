import withUserDataAndPermissions, { type WithUserDataProps } from "../withUserDataAndPermissions";

function AdminPage({ userData }: WithUserDataProps) {
  return (
    <div className="card bg-base-100 shadow-xl max-w-2xl mx-auto border border-error/20">
      <div className="card-body">
        <h2 className="card-title text-3xl mb-4 text-error drop-shadow-sm font-black">Admin Dashboard</h2>
        <div className="bg-error/10 text-error p-5 rounded-xl flex items-center gap-4 shadow-sm">
          <div className="p-2 bg-error rounded-full text-error-content shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl">Top Secret Area</span>
            <span className="text-sm opacity-90">Authenticated as: {userData?.name}</span>
          </div>
        </div>
        <p className="mt-6 text-base-content/80 text-lg leading-relaxed">
          This area is deeply protected. Because your account permission status is <strong className="badge badge-error badge-outline">Admin</strong>, you have been granted access to view this content!
        </p>
      </div>
    </div>
  );
}

const Admin = withUserDataAndPermissions(AdminPage, "Admin");

export default Admin;
