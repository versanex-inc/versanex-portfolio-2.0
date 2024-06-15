import AdminNavbar from "@/Components/Admin/adminNavbar/adminNavbar";

export const metadata = {
  title: "VersaNex - Admin",
};

export default function RootLayout({ children }) {

  return (
    <div>
        <AdminNavbar/>
        {children}
    </div>
  );
}
