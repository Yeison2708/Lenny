import React from 'react';
import { motion } from 'framer-motion';

const items=[
  {name:'Faja Deluxe', img:'/img/1.jpeg'},
  {name:'Brasier Comfort', img:'/img/2.jpeg'},
  {name: 'Short Modelador', img: '/img/3.jpeg' },
  {name:'Faja ', img:'/img/4.jpeg'},
  {name:'Brasier Comfort', img:'/img/5.jpeg'},
  {name: 'Short Modelador', img: '/img/6.jpeg'},
  // {name:'Fajas', img:'/img/7.jpeg'},
  {name:'Brasier Comfort', img:'/img/8.jpeg'},
];

export default function Products(){
  return (
    <section className='products'>
      <h2>Productos Destacados</h2>
      <div className='grid'>
        {items.map((p,i)=>(
          <motion.div 
            key={i}
            className='card'
            whileHover={{ scale:1.05 }}
          >
            <img src={p.img}/>
            <h3>{p.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
