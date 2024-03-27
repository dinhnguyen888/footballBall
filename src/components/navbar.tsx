import React from "react";
import { ReactComponent as SvgSmiley } from "../img/5951065.svg";
const Navbar = () => {
    return (
        <nav className="w-full fixed top-0 left-0 right-0 bg-blue-950 text-white z-20 opacity-90">
            <div className="container mx-auto px-4">
                {/* Logo */}
                <div className="flex items-center justify-between py-4 ">
                    <a href="/" className="text-xl font-bold">
                    <SvgSmiley style={{ fill: "green", height:"16px", width:"200px" }} />
                    </a>
                    <ul className="flex space-x-4 ml-96 text-sm ">
                        <li><a href="/" className="navbar-link">TRANG CHỦ</a></li>
                        <li className=" navbar-dropdown">
                            
                                <p className="navbar-link">NỘI QUY GIẢI ĐẤU ~ </p>
							<div className="dropdown-content bg-blue-950 z-10 ">
                                   
                                    <a href="/dieukienthamdu">Điều kiện tham dự</a>
                                    <a href="/noiquy">Nội quy</a>
                                    <a href="/quydinh">Quy định đội hình</a>
                                
								
                            </div>
                        </li>
                     
                        <li className=" navbar-dropdown">
                            
                            <p  className="navbar-link">QBFC SUNDAY ~ </p>
                        <div className="dropdown-content bg-blue-950 z-10 ">
                               
                                <a href="/tieudiem">Tiêu diểm</a>
                                <a href="/danhsachhlv">Danh sách HLV</a>
                            
                            
                        </div>
                    </li>
                        <li className=" navbar-dropdown">    
                        <p  className="navbar-link">PHÒNG TRUYỀN THÔNG ~ </p>
							<div className="dropdown-content bg-blue-950 z-10 ">
                                   
                                    <a href="/topcacmua">top 3 các mùa</a>
                                    <a href="/xephang">bản xếp hạng mọi thời đại</a>
                                
								
                            </div>
                        </li>
                        <li className=" navbar-dropdown">
                            
                                <p  className="navbar-link">LIÊN HỆ ~ </p>
							<div className="dropdown-content bg-blue-950 z-10 ">
                                   
                                    <a href="/cacnhomgiai">Các nhóm giải</a>
                                    <a href="/admin">Admin</a>
                                
								
                            </div>
                        </li>
                    </ul>
                    <div>
                        {/* <input type="text" placeholder="Tìm kiếm..." /> */}
                        {/* <a href="/" className="">🔍</a> */}
                    </div>
                </div>
         
            </div>
        </nav>
    )
}

export default Navbar;
