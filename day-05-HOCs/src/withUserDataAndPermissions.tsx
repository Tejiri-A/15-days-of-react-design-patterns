import { useEffect, useState, type ComponentType } from "react";

export type UserData = {
  name: string;
  permissionStatus: "Admin" | "User";
  age: number;
  email: string;
  reportsAccess: boolean
};

export interface WithUserDataProps {
  userData?: UserData | null;
}

function withUserDataAndPermissions<P extends WithUserDataProps>(
  WrappedComponent: ComponentType<P>,
  requiredRole: "Admin" | "User" = "Admin",
  requireReportsAccess: boolean = false
) {
  return function ProtectedRoute(props: Omit<P, keyof WithUserDataProps>) {
    const [user, setUser] = useState<UserData | null>(null);
    const [isPending, setIsPending] = useState<boolean>(true);

    const userData: UserData = {
      name: "Oghenetejiri Amrasa",
      permissionStatus: "User",
      age: 23,
      email: "oghenetejiriamrasa@gmail.com",
      reportsAccess: true
    };

    const getUser = async (): Promise<UserData> => {
      return await new Promise((resolve) => {
        setTimeout(() => {
          try {
            setUser(userData);
            resolve(userData);
          } catch (error) {
            console.error(error);
          } finally {
            setIsPending(false);
          }
        }, 2000);
      });
    };

    useEffect(() => {
      getUser();
    }, []);

    if (isPending) return (
      <div className="flex justify-center p-10">
        <span className="loading loading-spinner text-primary loading-lg"></span>
      </div>
    );

    const hasRoleAccess = requiredRole === "User" || user?.permissionStatus === "Admin";
    const hasReportsAccess = !requireReportsAccess || user?.reportsAccess;
    
    if (!hasRoleAccess || !hasReportsAccess) return (
      <div className="alert alert-error max-w-lg mx-auto mt-10 shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Access denied. You do not have permission to view this page.</span>
      </div>
    );

    return <WrappedComponent {...(props as P)} userData={user} />;
  };
}

export default withUserDataAndPermissions;
