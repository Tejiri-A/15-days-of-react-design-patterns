import withUserDataAndPermissions, { type WithUserDataProps } from "../withUserDataAndPermissions";

function ReportsPage({ userData }: WithUserDataProps) {
  return (
    <div className="card bg-base-100 shadow-xl max-w-4xl mx-auto border border-base-200">
      <div className="card-body">
        <h2 className="card-title text-3xl mb-6">Application Reports</h2>
        
        <div className="stats stats-vertical lg:stats-horizontal shadow mb-6 border border-base-200">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            <div className="stat-title">Total API Calls</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc font-medium">21% more than last month</div>
          </div>
          
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc font-medium">21% more than last month</div>
          </div>
          
          <div className="stat">
            <div className="stat-figure text-accent">
              <div className="avatar placeholder">
                <div className="bg-accent text-accent-content rounded-full w-14">
                  <span className="text-xl font-bold">{userData?.name?.charAt(0)}</span>
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Task Completion</div>
            <div className="stat-desc text-accent font-medium">31 tasks completed</div>
          </div>
        </div>

        <div className="alert bg-success/10 text-success border-none mt-2 flex justify-start items-center p-4">
           <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
           <span className="text-sm font-medium">You are viewing these reports securely because your user profile explicitly has <strong>reportsAccess</strong> enabled, <strong>{userData?.name}</strong>.</span>
        </div>
      </div>
    </div>
  );
}

// We require "User" role minimum, and explicit `reportsAccess` MUST be true.
const Reports = withUserDataAndPermissions(ReportsPage, "User", true);

export default Reports;