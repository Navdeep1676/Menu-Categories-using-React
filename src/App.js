import items from './data'
import './App.css';
import { useState } from 'react';
import Categories from './Categories';
import Menu from './Menu'
const allCategories=['All',...new Set(items.map(item=>item.category))]

const App=()=> {
  const [menuItems,setMenuItems]=useState(items);
  const [categories,setCategories]=useState(allCategories);

  const filterItems=(category)=>{
    if(category==='All'){
      setMenuItems(items);
      return
    }
   const newItems=items.filter((i)=>i.category===category);
  setMenuItems(newItems)
  }
console.log(categories);
  return (
    <div className='container'>
      <div className="row">
        <div className="col-12">
          <h1 className='text-center'>Menu</h1>
          <Categories categ={categories} filter={filterItems }/>
          <Menu items={menuItems}/>
        </div>
      </div>
    </div>
  );
}

export default App;
