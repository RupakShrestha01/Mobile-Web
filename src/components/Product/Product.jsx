import React from 'react';
import p1 from '../../assets/image/p1.jpg';
import p2 from '../../assets/image/p2.jpg';
import p3 from '../../assets/image/p3.JPG';
import p4 from '../../assets/image/p4.jpg';
import packaging from '../../assets/image/packaging.svg';
const Product = () => {
  return (
    <section id="product" class="py-12 bg-white sm:py-16 lg:py-20">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid justify-center ">
          <img src={packaging} className="mx-auto" alt="" />
          <h2 className="font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none max-w-lg mb-6">
            Our Feature Products
          </h2>
        </div>

        <div class="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
          <div class="relative group">
            <div class="overflow-hidden aspect-w-1 aspect-h-1 bg-gray-200">
              <img
                class="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                src={p1}
                alt=""
              />
            </div>
            <div class="absolute left-3 top-3">
              <p class="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full">
                New
              </p>
            </div>
            <div className="mt-2 flex justify-center">
              <h3 class="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                <a href="/" title="">
                  High Qual Wooden Case
                </a>
              </h3>
            </div>
          </div>

          <div class="relative group">
            <div class="overflow-hidden aspect-w-1 aspect-h-1 bg-gray-200">
              <img
                class="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                src={p2}
                alt=""
              />
            </div>
            <div className="mt-2 flex justify-center">
              <h3 class="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                <a href="/" title="">
                  Custom Case
                </a>
              </h3>
            </div>
          </div>
          <div class="relative group">
            <div class="overflow-hidden aspect-w-1 aspect-h-1">
              <img
                class="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                src={p3}
                alt=""
              />
            </div>
            <div class="absolute left-3 top-3">
              <p class="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-white uppercase bg-gray-900 rounded-full">
                Sale
              </p>
            </div>
            <div className="mt-2 flex justify-center">
              <h3 class="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                <a href="/" title="">
                  Keyrings
                </a>
              </h3>
            </div>
          </div>

          <div class="relative group">
            <div class="overflow-hidden aspect-w-1 aspect-h-1">
              <img
                class="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                src={p4}
                alt=""
              />
            </div>
            <div className="mt-2 flex justify-center">
              <h3 class="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                <a href="/" title="">
                  Photo Frame
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
