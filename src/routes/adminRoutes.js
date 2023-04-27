import AdminLayout from "../Layout/AdminLayout";
import AdminMoviePage from "../Pages/AdminMoviePage/AdminMoviePage";
import AdminUserPage from "../Pages/AdminUserPage/AdminUserPage";

export const adminRoutes = [
    {
        url: '/',
        component: <AdminLayout Component={AdminUserPage} />,
    },
    {
        url: '/admin-user',
        component: <AdminLayout Component={AdminUserPage} />,
    },
    {
        url: '/admin-movie',
        component: <AdminLayout Component={AdminMoviePage} />,
    },
]