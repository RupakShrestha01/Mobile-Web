import React from 'react';
import home from '../../assets/image/icons/house.svg';
import phone from '../../assets/image/icons/phone.svg';
import gmail from '../../assets/image/icons/gmail.svg';
const Contact = () => {
  return (
    <section
      id="contact"
      class="  px-4 py-16 mx-auto sm:max-w-xl md:max-w-full text-white lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div class="container mx-auto">
        <div class="-mx-4 flex flex-wrap lg:justify-between">
          <div class="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div class="mb-12 max-w-[570px] lg:mb-0">
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-orange-500">
                Contact Us
              </p>
              <h2 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
                Get in
                <br className="hidden md:block" />
                Touch <span className="inline-block text-white">with Us</span>
              </h2>
              <p class="text-body-color mb-9 text-base leading-relaxed">
                We're always happy to hear from our customers, so if you have
                any questions or comments about our mobile merchandise and
                mobile cover printing services, please don't hesitate to get in
                touch.
              </p>
              <div class="mb-8 flex w-full max-w-[370px]">
                <div class="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden  bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                  <img src={home} className="w-18 h-18" alt="" />
                </div>
                <div class="w-full">
                  <h4 class="text-dark mb-1 text-xl font-bold">Our Location</h4>
                  <p class="text-body-color text-base">Kathmandu, Nepal</p>
                </div>
              </div>
              <div class="mb-8 flex w-full max-w-[370px]">
                <div class="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden  bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                  <img src={phone} className="w-18 h-18" alt="" />
                </div>
                <div class="w-full">
                  <h4 class="text-dark mb-1 text-xl font-bold">Phone Number</h4>
                  <p class="text-body-color text-base">(+977) 984-3494500</p>
                </div>
              </div>
              <div class="mb-8 flex w-full max-w-[370px]">
                <div class="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden  bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                  <img src={gmail} className="w-18 h-18" alt="" />
                </div>
                <div class="w-full">
                  <h4 class="text-dark mb-1 text-xl font-bold">
                    Email Address
                  </h4>
                  <p class="text-body-color text-base">info@yourdomain.com</p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div class="relative rounded-lg bg-white text-black p-8 shadow-lg sm:p-12">
              <form>
                <div class="mb-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    class="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="email"
                    placeholder="Your Email"
                    class="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="text"
                    placeholder="Your Phone"
                    class="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                  />
                </div>
                <div class="mb-6">
                  <textarea
                    rows="6"
                    placeholder="Your Message"
                    class="text-body-color border-[f0f0f0] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    class="bg-orange-500 border-primary w-full rounded border p-3 text-white transition hover:bg-opacity-90"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
