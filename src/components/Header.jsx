import React from 'react';

export default function Header({setModalStatus}) {
  return (
    <>
        <div className='nav-head'>
            <div className="logo font-serif text-lg text-orange-400 p-[7px]">Amazon</div>
            <div>
                <input></input>
                <button>search</button>

            </div>
            <div>
                <ul className="flex gap-[20px] font-medium text-white">
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About Us</a></li>
                    <li><a href='#'>Contact Us</a></li>
                    <li><a href='#'>Services</a></li>
                    <li><a href="#">wishList</a></li>
                    <li><a href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            setModalStatus(true);
                        }}
                    >Hello,Sign in</a></li>
                </ul>
            </div>
        </div>
    </>

  );
}
