import withUserDataAndPermissions, { type WithUserDataProps } from "../withUserDataAndPermissions";

function ProfilePage({ userData }: WithUserDataProps) {
  return (
    <div className="card bg-base-100 shadow-xl max-w-2xl mx-auto border border-base-200">
      <div className="card-body">
        <h2 className="card-title text-3xl mb-2">User Profile</h2>
        <div className="bg-primary/10 text-primary p-4 rounded-xl flex items-center gap-4 mb-4 mt-2 shadow-sm">
          <div className="avatar placeholder">
            <div className="bg-primary text-primary-content rounded-full w-14 shadow-md">
              <span className="text-2xl font-bold">{userData?.name?.charAt(0)}</span>
            </div>
          </div>
          <span className="font-semibold text-xl tracking-tight">Hi there, {userData?.name}!</span>
        </div>
        
        <p className="text-base-content/70 text-sm mb-4">
          This data is gracefully injected using the High Order Component.
        </p>

        <div className="overflow-x-auto rounded-xl border border-base-200 shadow-sm">
          <table className="table table-zebra table-md">
            <tbody>
              <tr>
                <th className="w-1/3 bg-base-200/50 font-semibold text-base-content/80">Full Name</th>
                <td className="font-medium text-base">{userData?.name}</td>
              </tr>
              <tr>
                <th className="bg-base-200/50 font-semibold text-base-content/80">Email Address</th>
                <td className="text-base">{userData?.email}</td>
              </tr>
              <tr>
                <th className="bg-base-200/50 font-semibold text-base-content/80">Permission Status</th>
                <td>
                  <span className={`badge badge-md shadow-sm ${userData?.permissionStatus === 'Admin' ? 'badge-secondary' : 'badge-primary'}`}>
                    {userData?.permissionStatus}
                  </span>
                </td>
              </tr>
              <tr>
                <th className="bg-base-200/50 font-semibold text-base-content/80">Age</th>
                <td className="text-base">{userData?.age}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const Profile = withUserDataAndPermissions(ProfilePage, "User");

export default Profile;