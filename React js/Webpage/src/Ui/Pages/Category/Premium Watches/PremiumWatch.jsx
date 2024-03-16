import React from 'react';
import Header from '../../../Component/Header/Header';
import SubHeader from '../../../Component/Header/SubHeader';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import book from "../../../Image/book.svg"
import buy from "../../../Image/buywith.svg"
import store from "../../../Image/store.webp"
import preWatch from "../Premium Watches/Images/preWatch.webp"
import img1 from "../Premium Watches/Images/img1.webp"
import img2 from "../Premium Watches/Images/img2.webp"
import img3 from "../Premium Watches/Images/img3.webp"
import img4 from "../Premium Watches/Images/img4.webp"
import img5 from "../Premium Watches/Images/img5.webp"
import img6 from "../Premium Watches/Images/img6.webp"
import img7 from "../Premium Watches/Images/img7.webp"
import img8 from "../Premium Watches/Images/img8.webp"
import img9 from "../Premium Watches/Images/img9.webp"
import img10 from "../Premium Watches/Images/img10.webp"
import img11 from "../Premium Watches/Images/img11.webp"
import img12 from "../Premium Watches/Images/img12.webp"
import img13 from "../Premium Watches/Images/img13.webp"
import img14 from "../Premium Watches/Images/img14.webp"
import img15 from "../Premium Watches/Images/img15.webp"
import img16 from "../Premium Watches/Images/img16.jpg"
import img17 from "../Premium Watches/Images/img17.webp"
import img18 from "../Premium Watches/Images/img18.webp"
import img19 from "../Premium Watches/Images/img19.webp"
import img20 from "../Premium Watches/Images/img20.webp"


import Footer from '../../../Component/Footer/Footer';
import Section7 from '../../../Component/Sections/Section7';
import Section5 from '../../../Component/Sections/Section5';

let items = [
    { img: img1, content: "Titan Neo Splash Blue Dial Quartz Multifunction Stainless Steel Strap watch for Men ", category: "Women's Watch", price: "₹ 8,255" },
    { img: img2, content: "Titan Neo Splash Blue Dial Quartz Multifunction Stainless Steel Strap watch for Men ", category: "Women's Watch", price: "₹ 6,995" },
    { img: img3, content: "Titan Men's Maritime Pro Lateen Sail Chronograph Watch", category: "Women's Watch", price: "₹ 15,545" },
    { img: img4, content: "Titan Neo Splash Quartz Multifunction Black Dial Stainless Steel Strap Watch for Men", category: "Women's Watch", price: "₹ 6,345" },
    { img: img5, content: "Titan Neo Splash Quartz Multifunction Black Dial Stainless Steel Strap Watch for Men", category: "Unisex Watch", price: "₹ 3,995" },
    { img: img6, content: "Titan Regalia Opulent Analog With Day And Date Black Dial Watch For Men", category: "Unisex Watch", price: "₹ 7,295" },
    { img: img7, content: "Titan Grandmaster Brown Dial Analog Stainless Steel Strap Watch For Men", category: "Women's Watch", price: "₹ 10,045" },
    { img: img8, content: "Titan Regalia Premium Green Chrono Stainless Steel Strap Watch For Men", category: "Women's Watch", price: "₹ 11,995" },
    { img: img9, content: "Titan Regalia Premium Green Chrono Stainless Steel Strap Watch For Men", category: "Women's Watch", price: "₹ 6,755" },
    { img: img10, content: "Titan Regalia Premium Green Chrono Stainless Steel Strap Watch For Men", category: "Women's Watch", price: "₹ 5,515" },
    { img: img11, content: "Titan Regalia Premium Green Chrono Stainless Steel Strap Watch For Men", category: "Women's Watch", price: "₹ 5,515" },
    { img: img12, content: "Titan Regalia Premium Green Chrono Stainless Steel Strap Watch For Men", category: "Women's Watch", price: "₹ 10,395" },
    { img: img13, content: "Titan Regalia Premium Green Chrono Stainless Steel Strap Watch For Men", category: "Women's Watch", price: "₹ 4,905" },
    { img: img14, content: "Titan Regalia Premium Green Chrono Stainless Steel Strap Watch For Men", category: "Women's Watch", price: "₹ 5,855" },
    { img: img15, content: "Titan Regalia Premium Green Chrono Stainless Steel Strap Watch For Men", category: "Unisex Watch", price: "₹ 9,520" },
    { img: img16, content: "Titan Regalia Premium Green Chrono Stainless Steel Strap Watch For Men", category: "Women's Watch", price: "₹ 12,500" },
    { img: img17, content: "Titan Regalia Premium Green Chrono Stainless Steel Strap Watch For Men", category: "Women's Watch", price: "₹ 7,950" },
    { img: img18, content: "Titan Regalia Premium Green Chrono Stainless Steel Strap Watch For Men", category: "Women's Watch", price: "₹ 6,850" },
    { img: img19, content: "Titan Regalia Premium Green Chrono Stainless Steel Strap Watch For Men", category: "Women's Watch", price: "₹ 9,780" },
    { img: img20, content: "Titan Regalia Premium Green Chrono Stainless Steel Strap Watch For Men", category: "Women's Watch", price: "₹ 2,995" }
]

export default function PremiumWatch() {

    let navigate = useNavigate()
    return (
        <>
            <Header />
            <SubHeader />
            <div className='flex gap-3 items-center ps-16 pb-3 pt-3'>
                <h6 onClick={() => navigate("/")} role='button' className=' m-0 font-normal text-sm text-gray-400 ' >Home</h6>
                <span className='p-0 m-0 pt-1'><ChevronRight size={15} strokeWidth={2} /></span>
                <h6 className='font-normal text-sm m-0'>Premium Watches</h6>
            </div>
            <div>
                <img src={preWatch} alt="" />
            </div>
            <div className='pb-4 pt-4 flex justify-between ps-36 pe-36' style={{ backgroundColor: "#fafafa" }}>
                <div className='flex items-center gap-3'>
                    <img src={book} alt="" />
                    <h6>Book An Appointment</h6>
                </div>
                <div className='flex items-center gap-3'>
                    <img src={buy} alt="" />
                    <h6>Buy With No Cost EMI</h6>
                </div>
                <div className='flex items-center gap-3'>
                    <img className='h-7 w-7 text-gray-400 opacity-50' src={store} alt="" />
                    <h6 className=' opacity-40'>Pickup At The Store</h6>
                </div>
            </div>
            <div className='strap pb-4 mt-4 pt-4 flex gap-5 sticky-top z-10 ' style={{ top: "80px" }}>
                <div className='ps-20 z-10'>
                    <h6 className='text-xs pb-0 mb-0 font-normal'>Filter By</h6>
                    <h6>Brands</h6>
                </div>
                <div>
                    <button className='btn me-2'>Titan</button>
                    <button className='btn me-2'>Nebula</button>
                    <button className='btn me-2'>Xylys</button>
                </div>
            </div>
            <div className='pt-4 pb-4 ps-20'>
                <h4>Premium Watches <span className='font-light ps-3'>573 items</span></h4>
            </div>

            <div className="grid grid-cols-4 gap-3 ps-20">
                {items.map((item, index) => (
                    <div key={index}>
                        <div className='relative overflow-hidden'>
                            <img src={item.img} className=" mb-2" />
                            <div className='absolute ps-3 h-full w-full bg-black/0 flex justify-start items-end -bottom-20 hover:-bottom-3  hover:opacity-100 opacity-20 transition-all duration-500'>
                                <h5 className='pb-4 text-black'>{item.price}</h5>
                                <div className='absolute h-full w-full bg-black/0 flex justify-end  items-start -top-20 hover:-top-3 pe-8 pt-3 hover:opacity-100 opacity-20 transition-all duration-700'>
                                    <span><Heart strokeWidth={1} color='Red' /></span>
                                </div>
                            </div>
                        </div>
                        <h6 className="line-clamp-2 hover:underline">{item.content}</h6>
                        <p className=" text-gray-500 pb-3">{item.category}</p>
                    </div>
                ))}

            </div>
            <Section5 />
            <Section7 />
            <Footer />


        </>
    );
}
