import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function FeaturedProjects() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    getFeaturedProducts();
  }, []);

  async function getFeaturedProducts() {
    let { data: products, error } = await supabase
      .from('Products')
      .select('*');
    if (error) console.log('Error: ', error);
    else {
      const featuredProducts = products.map(async (product) => {
        let { data: manufacturer, error } = await supabase
          .from('Manufacturers')
          .select('*')
          .eq('id', product.manufacturer_id);
        if (error) console.log('Error: ', error);
        let { data: images, error: imgError } = await supabase
          .from('product_images')
          .select('*')
          .eq('product_id', product.id);
        if (imgError) console.log('Error: ', imgError);
        return { ...product, manufacturer: manufacturer[0], images };
      });
      Promise.all(featuredProducts).then((results) => {
        setFeaturedProducts(results);
      });
    }
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {featuredProducts.map((product) => (
        <div key={product.id} className='rounded overflow-hidden shadow-lg'>
          <img className='w-full' src={product.images[0].url} alt={product.title} />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>{product.title}</div>
            <p className='text-gray-700 text-base'>{product.manufacturer.name}</p>
            <p className='text-gray-700 text-base'>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}