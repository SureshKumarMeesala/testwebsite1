import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BrowserRouter, Link } from 'react-router-dom';

import '../home/home.css';
import '../../assets/css/bootstrap.min.css';
// import '../../assets/css/aos.css';
import '../../assets/css/line-awesome.min.css';
import '../../assets/css/style.css';

import person from '../../assets/images/person.jpg';
import projectone from '../../assets/images/project-1.jpg';
import projecttwo from '../../assets/images/project-2.png';
import projectthree from '../../assets/images/project-3.png';
import projectfour from '../../assets/images/project-4.png';
import blogpostone from '../../assets/images/blog-post-1.jpg';
import blogposttwo from '../../assets/images/blog-post-2.jpg';
import blogpostthree from '../../assets/images/blog-post-3.jpg';






export default function Home() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_2hi73p9', 'template_5w5j9ih', form.current, 'Ihus0Qj65tKulpvCG')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    
  return (
    <>
    <BrowserRouter>
      {/* <!-- NAVBAR --> */}

      <p>test</p>
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container flex-lg-column">
            <Link className="navbar-brand mx-lg-auto mb-lg-4" to=' '>
                <span className="h3 fw-bold d-block d-lg-none">Jon Carter</span>
                <img src={person} className="d-none d-lg-block rounded-circle" alt="" />
                    
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto flex-lg-column text-lg-center">

                    <li className="nav-item">
                        <Link className="nav-link" to="#home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#services">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#work">Work</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#reviews">Reviews</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#contact">Contact</Link>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
    {/* <!-- //NAVBAR -->

    <!-- CONTENT WRAPPER --> */}
    <div id="content-wrapper">

        {/* <!-- HOME --> */}
        <section id="home" className="full-height px-lg-5">

            <div className="container">
                <div className="row">
                    <div className="col-lg-10">
                        <h1 className="display-4 fw-bold" data-aos="fade-up">I'M A <span className="text-brand">UI/UX
                                WEB DEELOPER </span> FROM VIZAG, INDIA</h1>
                        <p className="lead mt-2 mb-4" data-aos="fade-up" data-aos-delay="300">I am Suresh Kumar M, And I craft
                            high-performing and delightful experiences tailored and conversion-focused</p>
                        <div data-aos="fade-up" data-aos-delay="600">
                            <Link href="#work" className="btn btn-brand me-3">Explore My Work</Link>
                            <Link href="#" className="link-custom">Call: +91 749 644 5564</Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        {/* <!-- //HOME -->

        <!-- SERVICES --> */}
        <section id="services" className="full-height px-lg-5">
            <div className="container">

                <div className="row pb-4" data-aos="fade-up">
                    <div className="col-lg-8">
                        <h6 className="text-brand">SERVICES</h6>
                        <h1>Services That I Provide</h1>
                    </div>
                </div>

                <div className="row gy-4">

                    <div className="col-md-4 service-col" data-aos="fade-up">
                        <div className="service p-4 bg-base rounded-4 shadow-effect">
                            <div className="iconbox rounded-4">
                                <i className="las la-feather"></i>
                            </div>
                            <h5 className="mt-4 mb-2">UI UX Developement</h5>
                            <p>I craft high-performing and delightful experiences tailored and conversion-focused</p>
                            <Link href="#" className="link-custom">Read More</Link>
                        </div>
                    </div>

                    <div className="col-md-4 service-col" data-aos="fade-up" data-aos-delay="300">
                        <div className="service p-4 bg-base rounded-4 shadow-effect">
                            <div className="iconbox rounded-4">
                                <i className="las la-pencil-ruler"></i>
                            </div>
                            <h5 className="mt-4 mb-2">Web Development</h5>
                            <p>Expert web development services, building responsive and user-friendly websites. Utilizing cutting-edge technologies to deliver seamless digital solutions that elevate your online presence.</p>
                            <Link href="#" className="link-custom">Read More</Link>
                        </div>
                    </div>

                    <div className="col-md-4 service-col" data-aos="fade-up" data-aos-delay="600">
                        <div className="service p-4 bg-base rounded-4 shadow-effect">
                            <div className="iconbox rounded-4">
                                <i className="las la-laptop-code"></i>
                            </div>
                            <h5 className="mt-4 mb-2">SEO / Digital Marketing</h5>
                            <p>Empowering businesses with SEO and Digital Marketing expertise. Crafted with precision and creativity, I drive results that exceed expectations and amplify online presence.</p>
                            <Link href="#" className="link-custom">Read More</Link>
                        </div>
                    </div>

                    <div className="col-md-4 service-col" data-aos="fade-up" data-aos-delay="600">
                        <div className="service p-4 bg-base rounded-4 shadow-effect">
                            <div className="iconbox rounded-4">
                                <i className="las la-laptop-code"></i>
                            </div>
                            <h5 className="mt-4 mb-2">Open Source CRM/ERP</h5>
                            <p>Unlock business potential with Open Source CRM/ERP solutions. Streamlined operations, seamless integration, and cost-effective tools for efficient management and growth acceleration.</p>
                            <Link href="#" className="link-custom">Read More</Link>
                        </div>
                    </div>

                </div>

            </div>
        </section>
        {/* <!-- SERVICES -->

        <!-- WORK --> */}
        <section id="work" className="full-height px-lg-5">
            <div className="container">

                <div className="row pb-4" data-aos="fade-up">
                    <div className="col-lg-8">
                        <h6 className="text-brand">WORK</h6>
                        <h1>My Recent Projects</h1>
                    </div>
                </div>

                <div className="row gy-4">

                    <div className="col-md-6" data-aos="fade-up">
                        <div className="card-custom rounded-4 bg-base shadow-effect">
                            <div className="card-custom-image rounded-4">
                                <img className="rounded-4" src={projectone} alt="" />
                            </div>
                            <div className="card-custom-content p-4">
                                <h4>Startup Landing Page</h4>
                                <p>Innovation that exceeds expectations. Astra is a true template equiqed with all the elements you could ever need to put together</p>
                                <Link href="#" className="link-custom">Read More</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="card-custom rounded-4 bg-base shadow-effect">
                            <div className="card-custom-image rounded-4">
                                <img className="rounded-4" src={projecttwo} alt="" />
                            </div>
                            <div className="card-custom-content p-4">
                                <h4>Startup Landing Page</h4>
                                <p>Innovation that exceeds expectations. Astra is a true template equiqed with all the elements you could ever need to put together</p>
                                <Link href="#" className="link-custom">Read More</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6" data-aos="fade-up">
                        <div className="card-custom rounded-4 bg-base shadow-effect">
                            <div className="card-custom-image rounded-4">
                                <img className="rounded-4" src={projectthree} alt="" />
                            </div>
                            <div className="card-custom-content p-4">
                                <h4>Startup Landing Page</h4>
                                <p>Innovation that exceeds expectations. Astra is a true template equiqed with all the elements you could ever need to put together</p>
                                <Link href="#" className="link-custom">Read More</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="card-custom rounded-4 bg-base shadow-effect">
                            <div className="card-custom-image rounded-4">
                                <img className="rounded-4" src={projectfour} alt="" />
                            </div>
                            <div className="card-custom-content p-4">
                                <h4>Startup Landing Page</h4>
                                <p>Innovation that exceeds expectations. Astra is a true template equiqed with all the elements you could ever need to put together</p>
                                <Link href="#" className="link-custom">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        {/* <!-- //WORK -->

        <!-- ABOUT --> */}
        <section id="about" className="full-height px-lg-5">
            <div className="container">

                <div className="row pb-4" data-aos="fade-up">
                    <div className="col-lg-8">
                        <h6 className="text-brand">ABOUT</h6>
                        <h1>My Education & Experiance</h1>
                    </div>
                </div>

                <div className="row gy-5">
                    <div className="col-lg-6">

                        <h3 className="mb-4" data-aos="fade-up" data-aos-delay="300">Education</h3>
                        <div className="row gy-4">

                            <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                                <div className="bg-base p-4 rounded-4 shadow-effect">
                                    <h4>Graduate in BCom</h4>
                                    <p className="text-brand mb-2">GITAM University (2015)</p>
                                    <p className="mb-0">All we are more and design lorem ipsum dolor creativity sit amet consectetur adipisicing elit</p>
                                </div>
                            </div>

                            <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                                <div className="bg-base p-4 rounded-4 shadow-effect">
                                    <h4>CS50x</h4>
                                    <p className="text-brand mb-2">Cambridge, Massachusetts (2022)</p>
                                    <p className="mb-0">All we are more and design lorem ipsum dolor creativity sit amet consectetur adipisicing elit</p>
                                </div>
                            </div>

                            <h3 className="mb-4" data-aos="fade-up" data-aos-delay="300">Non IT Experiance</h3>

                            <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                                <div className="bg-base p-4 rounded-4 shadow-effect">
                                    <h4>Business Development Manager</h4>
                                    <p className="text-brand mb-2">Taashee Linux Services (May 2017 to Dec 2018)</p>
                                    <p className="mb-0">All we are more and design lorem ipsum dolor creativity sit amet consectetur adipisicing elit</p>
                                </div>
                            </div>

                            <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                                <div className="bg-base p-4 rounded-4 shadow-effect">
                                    <h4>Business Development Executive</h4>
                                    <p className="text-brand mb-2">Mastek Systems (Sept 2015 to May 2017)</p>
                                    <p className="mb-0">All we are more and design lorem ipsum dolor creativity sit amet consectetur adipisicing elit</p>
                                </div>
                            </div>

                

                        </div>

                    </div>

                    <div className="col-lg-6">

                        <h3 className="mb-4" data-aos="fade-up" data-aos-delay="300">Software Experiance</h3>
                        <div className="row gy-4">

                            <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                                <div className="bg-base p-4 rounded-4 shadow-effect">
                                    <h4>Sr Web Developer</h4>
                                    <p className="text-brand mb-2">Oz Digital Pvt Ltd ( Part Time ) (May 2023 - Present)</p>
                                    <p className="mb-0">All we are more and design lorem ipsum dolor creativity sit amet consectetur adipisicing elit</p>
                                </div>
                            </div>

                            <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                                <div className="bg-base p-4 rounded-4 shadow-effect">
                                    <h4>UI/UX Developer</h4>
                                    <p className="text-brand mb-2">Solid Online International (April 2022 to Jan 2023)</p>
                                    <p className="mb-0">All we are more and design lorem ipsum dolor creativity sit amet consectetur adipisicing elit</p>
                                </div>
                            </div>

                            <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                                <div className="bg-base p-4 rounded-4 shadow-effect">
                                    <h4>Web Developer</h4>
                                    <p className="text-brand mb-2">Taashee Linux Services Pvt Ltd (Jan 2019 to Feb 2022)</p>
                                    <p className="mb-0">All we are more and design lorem ipsum dolor creativity sit amet consectetur adipisicing elit</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
        {/* <!-- //ABOUT -->

        <!-- REVIEWS --> */}
        <section id="reviews" className="full-height px-lg-5">
            <div className="container">

                <div className="row pb-4" data-aos="fade-up">
                    <div className="col-lg-8">
                        <h6 className="text-brand">REVIEWS</h6>
                        <h1>What our subscribers say</h1>
                    </div>
                </div>

                <div className="row gy-4">

                    <div className="col-md-4" data-aos="fade-up">

                        <div className="review shadow-effect bg-base p-4 rounded-4">
                            <div className="text-brand h5">
                                <i className="las la-star"></i>
                                <i className="las la-star"></i>
                                <i className="las la-star"></i>
                                <i className="las la-star"></i>
                                <i className="las la-star"></i>
                            </div>
                            <p className="my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quae facilis fugiat molestias ab illum excepturi, qui optio modi asperiores, delectus maiores!</p>
                            <div className="person">
                                <h5 className="mb-0">Jon Doe</h5>
                                <p className="mb-0">Twitter</p>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">

                        <div className="review shadow-effect bg-base p-4 rounded-4">
                            <div className="text-brand h5">
                                <i className="las la-star"></i>
                                <i className="las la-star"></i>
                                <i className="las la-star"></i>
                                <i className="las la-star"></i>
                                <i className="las la-star"></i>
                            </div>
                            <p className="my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quae facilis fugiat molestias ab illum excepturi, qui optio modi asperiores, delectus maiores!</p>
                            <div className="person">
                                <h5 className="mb-0">Jon Doe</h5>
                                <p className="mb-0">Twitter</p>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">

                        <div className="review shadow-effect bg-base p-4 rounded-4">
                            <div className="text-brand h5">
                                <i className="las la-star"></i>
                                <i className="las la-star"></i>
                                <i className="las la-star"></i>
                                <i className="las la-star"></i>
                                <i className="las la-star"></i>
                            </div>
                            <p className="my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quae facilis fugiat molestias ab illum excepturi, qui optio modi asperiores, delectus maiores!</p>
                            <div className="person">
                                <h5 className="mb-0">Jon Doe</h5>
                                <p className="mb-0">Twitter</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
        {/* <!-- //REVIEWS -->

        <!-- BLOG --> */}
        <section id="blog" className="full-height px-lg-5">
            <div className="container">

                <div className="row pb-4" data-aos="fade-up">
                    <div className="col-lg-8">
                        <h6 className="text-brand">BLOG</h6>
                        <h1>My BLog Posts</h1>
                    </div>
                </div>

                <div className="row gy-4">

                    <div className="col-md-4" data-aos="fade-up">
                        <div className="card-custom rounded-4 bg-base shadow-effect">
                            <div className="card-custom-image rounded-4">
                                <img className="rounded-4" src={blogpostone} alt="" />
                            </div>
                            <div className="card-custom-content p-4">
                                <p className="text-brand mb-2">20 Dec, 2022</p>
                                <h5 className="mb-4">Design a creative landing page using Bootstrap 5</h5>
                                <Link href="#" className="link-custom">Read More</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                        <div className="card-custom rounded-4 bg-base shadow-effect">
                            <div className="card-custom-image rounded-4">
                                <img className="rounded-4" src={blogposttwo} alt="" />
                            </div>
                            <div className="card-custom-content p-4">
                                <p className="text-brand mb-2">20 Dec, 2022</p>
                                <h5 className="mb-4">Design a creative landing page using Bootstrap 5</h5>
                                <Link href="#" className="link-custom">Read More</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
                        <div className="card-custom rounded-4 bg-base shadow-effect">
                            <div className="card-custom-image rounded-4">
                                <img className="rounded-4" src={blogpostthree} alt="" />
                            </div>
                            <div className="card-custom-content p-4">
                                <p className="text-brand mb-2">20 Dec, 2022</p>
                                <h5 className="mb-4">Design a creative landing page using Bootstrap 5</h5>
                                <Link href="#" className="link-custom">Read More</Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
        {/* <!-- //BLOG -->

        <!-- CONTACT --> */}
        <section id="contact" className="full-height px-lg-5">
            <div className="container">

                <div className="row justify-content-center text-center">
                    <div className="col-lg-8 pb-4" data-aos="fade-up">
                        <h6 className="text-brand">CONTACT</h6>
                        <h1>Interested in working together? Let's talk
                        </h1>
                    </div>

                    <div className="col-lg-8" data-aos="fade-up" data-aos-delay="300">
                        <form action="#" className="row g-lg-3 gy-3" ref={form} onSubmit={sendEmail}>
                            <div className="form-group col-md-6">
                                <input type="text" name="user_name" className="form-control" placeholder="Enter your name" />
                            </div>
                            <div className="form-group col-md-6">
                                <input type="email" name="user_email" className="form-control" placeholder="Enter your email" />
                            </div>
                            <div className="form-group col-12">
                                <input type="text" className="form-control" placeholder="Enter subject" />
                            </div>
                            <div className="form-group col-12">
                                <textarea name="message" rows="4" className="form-control" placeholder="Enter your message"></textarea>
                            </div>
                            <div className="form-group col-12 d-grid">
                                <button type="submit" value="Send" className="btn btn-brand">Contact me</button>
                            </div>
                        </form>
                    </div>
                </div>

             


            </div>
        </section>
        {/* <!-- //CONTACT -->

        <!-- FOOTER --> */}
        <footer className="py-5 px-lg-5">
            <div className="container">
                <div className="row gy-4 justify-content-between">
                    <div className="col-auto">
                        <p className="mb-0">Developed by <Link href="#" className="fw-bold">Suresh Kumar M</Link></p>
                    </div>
                    <div className="col-auto">
                        <div className="social-icons">
                            <Link href="#"><i className="lab la-twitter"></i></Link>
                            <Link href="#"><i className="lab la-instagram"></i></Link>
                            <Link href="#"><i className="lab la-dribbble"></i></Link>
                            <Link href="#"><i className="lab la-github"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        {/* <!-- //FOOTER --> */}

    </div>
    {/* <!-- //CONTENT WRAPPER --> */}
    
    </BrowserRouter>
    </>
  )
}

