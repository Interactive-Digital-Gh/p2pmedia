/* eslint-disable no-unused-vars */
/* src/components/Partners.jsx */
import React from 'react'
import "./Main.css"
import client1 from '../../assets/partners/part1.png'
import client2 from '../../assets/partners/part2.webp'
import client3 from '../../assets/partners/part3.jpg'
import client4 from '../../assets/partners/part5.jpg'
import client5 from '../../assets/partners/part7.png'


const logos = [
    { src: client1, alt: 'NOVA' },
    { src: client2, alt: 'Belle Vista' },
    { src: client3, alt: 'Niobe' },
    { src: client4, alt: 'DSTRKT4' },
    { src: client5, alt: 'client 6b' },

]

export default function Partners() {


    return (
        <div className="overflow-hidden w-full py-6 md:py-10 px-4">
            <div className='py-5'>
                <div className="wrapper">
                    <img src={client1} alt="brand" className="item item1" loading="lazy" />
                    <img src={client2} alt="brand" className=" item item2 " loading="lazy" />
                    <img src={client3} alt="brand" className=" item item3 " loading="lazy" />
                    <img src={client4} alt="brand" className=" item item4 " loading="lazy" />
                    <img src={client5} alt="brand" className=" item item5 " loading="lazy" />
                </div>
            </div>
        </div>
    )
}
