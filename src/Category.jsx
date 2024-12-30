import React from 'react';

const categories = ["smartphones", "laptops", "fragrances", "skincare","groceries","home decoration","furniture","tops","women-dresses","women-shoes","mens-shirt","mens-shoes","mens-watches","womens-watches","womens-bags","womens-jewellary","sunglasses","automotive","motocycle","lighting"];

export default function Category({setCategoryName}) {
  
  return (
    <div>
      {/* <h1 className='text-center p-[10px]'>Categories</h1> */}
      <ul>
        {categories.map((v, i) => (
          <li key={i} onClick={()=> setCategoryName(v)} className='bg-[#ccc] p-[7px] mb-2 font-serif cursor-pointer'>
            {v}
          </li>
        ))}
      </ul>
    </div>
  );
}
