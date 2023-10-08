import React from 'react'

const Footer = () => {
    return (
        <footer className='container bg-black text-slate-400 p-10 font-mono'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                <div className='leading-8 '>
                <h3 className='text-xl font-bold text-white'>Nike</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta harum nihil,  voluptatibus.</p>
                    <i className="bi bi-instagram m-2 text-2xl text-orange-500 "></i>
                    <i className="bi bi-facebook m-2 text-2xl text-orange-500"></i>
                    <i className="bi bi-twitter-x m-2 text-2xl text-orange-500"></i>

                </div>
                <div className='leading-10 '>
                    <h3 className='text-xl font-bold text-white'>Products</h3>
                    <p>Air Force 1</p>
                    <p>Air Max 1</p>
                    <p>Air Jarden 1</p>
                    <p>Nike Racer</p>
                    <p>Nike Cortez</p>
                </div>
                <div className='leading-loose '>
                    <h3 className='text-xl font-bold text-white'>Help</h3>
                    <p>About us</p>
                    <p>FAQs</p>
                    <p>How it works</p>
                    <p>Payment Policy</p>
                    <p>Privacy Policy</p>
                </div>
                <div className='overflow-hidden'>
                    <h3 className='text-xl font-bold text-white'>Get In Touch</h3>
                    <p>rahulverma281202@gmail.com</p>
                    <p>+91-9956298858</p>
                </div>
            </div>
            <hr className='px-3 text-white my-3' />
            <p className='text-center'>Copyright claim &#162;. Al rights reserved.</p>
        </footer>

    )
}

export default Footer
