import React from "react"
import Banner from "../components/banner"
import Footer from "../components/footer";

import Body from "../components/body";
import BigText from "../components/bigtext";
import TextMain from "../components/text";
const Giaithuong = () => {
	return (	

		<>	
			<Banner text=""/>
			<Body>
				<div className="flex flex-col justify-center h-full">
			 <BigText customClass=" mx-44 text-xl my-5 text-blue-900    " string="NHÁNH THẮNG:"/>

			 <TextMain customClass="mx-44 text-base" string="
			     VÔ ĐỊCH: 450<br>
				 GIẢI NHÌ: 300<br>
				 HẠNG 3: 150<br>
				 HẠNG TƯ: 100<br>" />
			 
			 <BigText customClass="mx-44 text-xl my-5 text-red-500     " string="NHÁNH THUA:"/>
			 <TextMain customClass="mx-44  text-base" string="
				 VÔ ĐỊCH: 120<br>
				 HẠNG NHÌ: 60<br>
			 " />
					</div>
					</Body>
			<Footer />
		</>
		)
        }
        export default Giaithuong