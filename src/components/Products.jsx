import React from 'react';
import { motion } from 'framer-motion';

const items=[
  {name:'Faja Deluxe', img:''},
  {name:'Brasier Comfort', img:''},
  { name: 'Short Modelador', img: '' },
  {name:'Faja ', img:''},
  {name:'Brasier Comfort', img:''},
  { name: 'Short Modelador', img: '' },
  {name:'Fajas', img:''},
  {name:'Brasier Comfort', img:''},
  {name:'Short Modelador', img:''}
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
