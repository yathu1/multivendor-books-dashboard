import { AiOutlineDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaUserTimes, FaUsers } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { FaCodePullRequest } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { MdViewList } from "react-icons/md";
import { BsCartCheck } from "react-icons/bs"; 
import { CgProfile } from "react-icons/cg";

export const allNav = [
    {
        id : 1,
        title : 'Dashboard',
        icon : <AiOutlineDashboard />,
        role : 'admin',
        path: '/admin/dashboard'
    },
    {
        id : 2,
        title : 'Orders',
        icon : <AiOutlineShoppingCart />,
        role : 'admin',
        path: '/admin/dashboard/orders'
    },
    {
        id : 3,
        title : 'Category',
        icon : <BiCategory  />,
        role : 'admin',
        path: '/admin/dashboard/category'
    },
    {
        id : 4,
        title : 'Sellers',
        icon : <FaUsers   />,
        role : 'admin',
        path: '/admin/dashboard/sellers'
    },
    {
        id : 5,
        title : 'Payment Request',
        icon : <MdPayment />,
        role : 'admin',
        path: '/admin/dashboard/payment-request'
    },
    {
        id : 6,
        title : 'Deactive Sellers',
        icon : <FaUserTimes />,
        role : 'admin',
        path: '/admin/dashboard/deactive-sellers'
    },
    {
        id : 7,
        title : 'Seller Request',
        icon : <FaCodePullRequest />,
        role : 'admin',
        path: '/admin/dashboard/sellers-request'
    },
    {
        id : 9,
        title : 'Dashboard',
        icon : <AiOutlineDashboard />,
        role : 'seller',
        path: '/seller/dashboard'
    },
    {
        id : 10,
        title : 'Add Book',
        icon : <IoMdAdd />,
        role : 'seller',
        path: '/seller/dashboard/add-product'
    },     
    {
        id : 11,
        title : 'All Books',
        icon : <MdViewList />,
        role : 'seller',
        path: '/seller/dashboard/products'
    },
    {
        id : 13,
        title : 'Orders',
        icon : <BsCartCheck />,
        role : 'seller',
        path: '/seller/dashboard/orders'
    },
    {
        id : 14,
        title : 'Payments',
        icon : <MdPayment />,
        role : 'seller',
        path: '/seller/dashboard/payments'
    },
    {
        id : 17,
        title : 'Profile',
        icon : <CgProfile />,
        role : 'seller',
        path: '/seller/dashboard/profile'
    }



]