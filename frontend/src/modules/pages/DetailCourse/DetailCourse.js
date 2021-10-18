import React from 'react'

export default function DetailCourse() {
    return (
        <>
            <div className="mdk-box bg-primary js-mdk-box mb-0" data-effects="blend-background">
                <div className="mdk-box__content">
                    <div className="hero py-64pt text-center text-sm-left">
                        <div className="container page__container">
                            <h1 className="text-white">Angular Fundamentals</h1>
                            <p className="lead text-white-50 measure-hero-lead">It’s not every day that one of the most important front-end libraries in web development gets a complete overhaul. Keep your skills relevant and up-to-date with this comprehensive introduction to Google’s popular community project.</p>
                            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-start">
                                <a href="fixed-student-lesson.html" className="btn btn-outline-white mb-16pt mb-sm-0 mr-sm-16pt">Watch trailer <i className="material-icons icon--right">play_circle_outline</i></a>
                                <a href="fixed-pricing.html" className="btn btn-white">Start your free trial</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar navbar-expand-sm navbar-light bg-white border-bottom-2 navbar-list p-0 m-0 align-items-center">
                <div className="container page__container">
                    <ul className="nav navbar-nav flex align-items-sm-center">
                        <li className="nav-item navbar-list__item">
                            <div className="media align-items-center">
                                <span className="media-left mr-16pt">
                                    <img src="assets/images/people/50/guy-6.jpg" width={40} alt="avatar" className="rounded-circle" />
                                </span>
                                <div className="media-body">
                                    <a className="card-title m-0" href="fixed-teacher-profile.html">Eddie Bryan</a>
                                    <p className="text-50 lh-1 mb-0">Instructor</p>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item navbar-list__item">
                            <i className="material-icons text-muted icon--left">schedule</i>
                            2h 46m
                    </li>
                        <li className="nav-item navbar-list__item">
                            <i className="material-icons text-muted icon--left">assessment</i>
                            Beginner
                    </li>
                        <li className="nav-item ml-sm-auto text-sm-center flex-column navbar-list__item">
                            <div className="rating rating-24">
                                <div className="rating__item"><i className="material-icons">star</i></div>
                                <div className="rating__item"><i className="material-icons">star</i></div>
                                <div className="rating__item"><i className="material-icons">star</i></div>
                                <div className="rating__item"><i className="material-icons">star</i></div>
                                <div className="rating__item"><i className="material-icons">star_border</i></div>
                            </div>
                            <p className="lh-1 mb-0"><small className="text-muted">20 ratings</small></p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="page-section border-bottom-2">
                <div className="container page__container">
                    <div className="page-separator">
                        <div className="page-separator__text">Table of Contents</div>
                    </div>
                    <div className="row mb-0">
                        <div className="col-lg-7">
                            <div className="accordion js-accordion accordion--boxed list-group-flush" id="parent">
                                <div className="accordion__item">
                                    <a href="!#" className="accordion__toggle collapsed" data-toggle="collapse" data-target="#course-toc-1" data-parent="#parent">
                                        <span className="flex">Course Overview</span>
                                        <span className="accordion__toggle-icon material-icons">keyboard_arrow_down</span>
                                    </a>
                                    <div className="accordion__menu collapse" id="course-toc-1">
                                        <div className="accordion__menu-link">
                                            {/* <span class="material-icons icon-16pt icon--left text-primary">play_circle_outline</span> */}
                                            <span className="icon-holder icon-holder--small icon-holder--dark rounded-circle d-inline-flex icon--left">
                                                <i className="material-icons icon-16pt">play_circle_outline</i>
                                            </span>
                                            <a className="flex" href="fixed-student-lesson.html">Watch Trailer</a>
                                            <span className="text-muted">1m 10s</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion__item open">
                                    <a href="!#" className="accordion__toggle" data-toggle="collapse" data-target="#course-toc-2" data-parent="#parent">
                                        <span className="flex">Getting Started with Angular</span>
                                        <span className="accordion__toggle-icon material-icons">keyboard_arrow_down</span>
                                    </a>
                                    <div className="accordion__menu collapse show" id="course-toc-2">
                                        <div className="accordion__menu-link">
                                            {/* <span class="material-icons icon-16pt icon--left text-muted">lock</span> */}
                                            <span className="icon-holder icon-holder--small icon-holder--dark rounded-circle d-inline-flex icon--left">
                                                <i className="material-icons icon-16pt">check_circle</i>
                                            </span>
                                            <a className="flex" href="fixed-student-lesson.html">Introduction</a>
                                            <span className="text-muted">8m 42s</span>
                                        </div>
                                        <div className="accordion__menu-link active">
                                            {/* <span class="material-icons icon-16pt icon--left text-muted">lock</span> */}
                                            <span className="icon-holder icon-holder--small icon-holder--primary rounded-circle d-inline-flex icon--left">
                                                <i className="material-icons icon-16pt">play_circle_outline</i>
                                            </span>
                                            <a className="flex" href="fixed-student-lesson.html">Introduction to TypeScript</a>
                                            <span className="text-muted">50m 13s</span>
                                        </div>
                                        <div className="accordion__menu-link">
                                            {/* <span class="material-icons icon-16pt icon--left text-muted">lock</span> */}
                                            <span className="icon-holder icon-holder--small icon-holder--light rounded-circle d-inline-flex icon--left">
                                                <i className="material-icons icon-16pt">lock</i>
                                            </span>
                                            <a className="flex" href="fixed-student-lesson.html">Comparing Angular to AngularJS</a>
                                            <span className="text-muted">12m 10s</span>
                                        </div>
                                        <div className="accordion__menu-link">
                                            {/* <span class="material-icons icon-16pt icon--left text-50">hourglass_empty</span> */}
                                            <span className="icon-holder icon-holder--small icon-holder--light rounded-circle d-inline-flex icon--left">
                                                <i className="material-icons icon-16pt">hourglass_empty</i>
                                            </span>
                                            <a className="flex" href="fixed-student-take-quiz.html">Quiz: Getting Started With Angular</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion__item">
                                    <a href="!#" className="accordion__toggle collapsed" data-toggle="collapse" data-target="#course-toc-3" data-parent="#parent">
                                        <span className="flex">Creating and Communicating Between Angular Components</span>
                                        <span className="accordion__toggle-icon material-icons">keyboard_arrow_down</span>
                                    </a>
                                    <div className="accordion__menu collapse" id="course-toc-3">
                                        <div className="accordion__menu-link">
                                            {/* <span class="material-icons icon-16pt icon--left text-muted">lock</span> */}
                                            <span className="icon-holder icon-holder--small icon-holder--light rounded-circle d-inline-flex icon--left">
                                                <i className="material-icons icon-16pt">lock</i>
                                            </span>
                                            <a className="flex" href="fixed-student-lesson.html">Angular Components</a>
                                            <span className="text-muted">04:23</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion__item">
                                    <a href="!#" className="accordion__toggle collapsed" data-toggle="collapse" data-target="#course-toc-4" data-parent="#parent">
                                        <span className="flex">Exploring the Angular Template Syntax</span>
                                        <span className="accordion__toggle-icon material-icons">keyboard_arrow_down</span>
                                    </a>
                                    <div className="accordion__menu collapse" id="course-toc-4">
                                        <div className="accordion__menu-link">
                                            {/* <span class="material-icons icon-16pt icon--left text-muted">lock</span> */}
                                            <span className="icon-holder icon-holder--small icon-holder--light rounded-circle d-inline-flex icon--left">
                                                <i className="material-icons icon-16pt">lock</i>
                                            </span>
                                            <a className="flex" href="fixed-student-lesson.html">Template Syntax</a>
                                            <span className="text-muted">04:23</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 justify-content-center">
                            <div className="card">
                                <div className="card-body py-16pt text-center">
                                    <span className="icon-holder icon-holder--outline-secondary rounded-circle d-inline-flex mb-8pt">
                                        <i className="material-icons">timer</i>
                                    </span>
                                    <h4 className="card-title"><strong>Unlock Library</strong></h4>
                                    <p className="card-subtitle text-70 mb-24pt">Get access to all videos in the library</p>
                                    <a href="fixed-pricing.html" className="btn btn-accent mb-8pt">Sign Up - Only $19.00/mo</a>
                                    <p className="mb-0">Have an account? <a href="fixed-login.html">Login</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-section bg-alt border-bottom-2">
                <div className="container page__container">
                    <div className="row ">
                        <div className="col-md-7">
                            <div className="page-separator">
                                <div className="page-separator__text">About this course</div>
                            </div>
                            <p className="text-70">This course will teach you the fundamentals o*f working with Angular 2. You *will learn everything you need to know to create complete applications including: components, services, directives, pipes, routing, HTTP, and even testing.</p>
                            <p className="text-70 mb-0">This course will teach you the fundamentals o*f working with Angular 2. You *will learn everything you need to know to create complete applications including: components, services, directives, pipes, routing, HTTP, and even testing.</p>
                        </div>
                        <div className="col-md-5">
                            <div className="page-separator">
                                <div className="page-separator__text bg-alt">What you’ll learn</div>
                            </div>
                            <ul className="list-unstyled">
                                <li className="d-flex align-items-center">
                                    <span className="material-icons text-50 mr-8pt">check</span>
                                    <span className="text-70">Fundamentals of working with Angular</span>
                                </li>
                                <li className="d-flex align-items-center">
                                    <span className="material-icons text-50 mr-8pt">check</span>
                                    <span className="text-70">Create complete Angular applications</span>
                                </li>
                                <li className="d-flex align-items-center">
                                    <span className="material-icons text-50 mr-8pt">check</span>
                                    <span className="text-70">Working with the Angular CLI</span>
                                </li>
                                <li className="d-flex align-items-center">
                                    <span className="material-icons text-50 mr-8pt">check</span>
                                    <span className="text-70">Understanding Dependency Injection</span>
                                </li>
                                <li className="d-flex align-items-center">
                                    <span className="material-icons text-50 mr-8pt">check</span>
                                    <span className="text-70">Testing with Angular</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-section bg-alt border-bottom-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 mb-24pt mb-md-0">
                            <h4>About the author</h4>
                            <p className="text-70 mb-24pt">Eddie Bryan is a software developer at LearnD*ash. With more than 20 years o*f software development experience, he has gained a passion for Agile software development -- especially Lean.</p>
                            <div className="page-separator">
                                <div className="page-separator__text bg-white">More from the author</div>
                            </div>
                            <div className="card card-sm mb-8pt">
                                <div className="card-body d-flex align-items-center">
                                    <a href="fixed-course.html" className="avatar avatar-4by3 mr-12pt">
                                        <img src="assets/images/paths/angular_routing_200x168.png" alt="Angular Routing In-Depth" className="avatar-img rounded" />
                                    </a>
                                    <div className="flex">
                                        <a className="card-title mb-4pt" href="fixed-course.html">Angular Routing In-Depth</a>
                                        <div className="d-flex align-items-center">
                                            <div className="rating mr-8pt">
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star_border</span></span>
                                                <span className="rating__item"><span className="material-icons">star_border</span></span>
                                            </div>
                                            <small className="text-muted">3/5</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-sm mb-16pt">
                                <div className="card-body d-flex align-items-center">
                                    <a href="fixed-course.html" className="avatar avatar-4by3 mr-12pt">
                                        <img src="assets/images/paths/angular_testing_200x168.png" alt="Angular Unit Testing" className="avatar-img rounded" />
                                    </a>
                                    <div className="flex">
                                        <a className="card-title mb-4pt" href="fixed-course.html">Angular Unit Testing</a>
                                        <div className="d-flex align-items-center">
                                            <div className="rating mr-8pt">
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star_border</span></span>
                                            </div>
                                            <small className="text-muted">4/5</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="list-group list-group-flush">
                                <div className="list-group-item px-0">
                                    <a href="!#" className="card-title mb-4pt">Angular Best Practices</a>
                                    <p className="lh-1 mb-0">
                                        <small className="text-muted mr-8pt">6h 40m</small>
                                        <small className="text-muted mr-8pt">13,876 Views</small>
                                        <small className="text-muted">13 May 2018</small>
                                    </p>
                                </div>
                                <div className="list-group-item px-0">
                                    <a href="!#" className="card-title mb-4pt">Unit Testing in Angular</a>
                                    <p className="lh-1 mb-0">
                                        <small className="text-muted mr-8pt">6h 40m</small>
                                        <small className="text-muted mr-8pt">13,876 Views</small>
                                        <small className="text-muted">13 May 2018</small>
                                    </p>
                                </div>
                                <div className="list-group-item px-0">
                                    <a href="!#" className="card-title mb-4pt">Migrating Applications from AngularJS to Angular</a>
                                    <p className="lh-1 mb-0">
                                        <small className="text-muted mr-8pt">6h 40m</small>
                                        <small className="text-muted mr-8pt">13,876 Views</small>
                                        <small className="text-muted">13 May 2018</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 pt-sm-32pt pt-md-0 d-flex flex-column align-items-center justify-content-start">
                            <div className="text-center">
                                <p className="mb-16pt">
                                    <img src="assets/images/people/110/guy-6.jpg" alt="guy-6" className="rounded-circle" width={64} />
                                </p>
                                <h4 className="m-0">Eddie Bryan</h4>
                                <p className="lh-1">
                                    <small className="text-muted">Angular, Web Development</small>
                                </p>
                                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-start">
                                    <a href="fixed-teacher-profile.html" className="btn btn-outline-primary mb-16pt mb-sm-0 mr-sm-16pt">Follow</a>
                                    <a href="fixed-teacher-profile.html" className="btn btn-outline-secondary">View Profile</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-section border-bottom-2">
                <div className="container">
                    <div className="page-headline text-center">
                        <h2>Feedback</h2>
                        <p className="lead text-70 measure-lead mx-auto">What other students turned professionals have to say about us after learning with us and reaching their goals.</p>
                    </div>
                    <div className="position-relative carousel-card col-lg-8 p-0 mx-auto">
                        <div className="row d-block js-mdk-carousel" id="carousel-feedback">
                            <a className="carousel-control-next js-mdk-carousel-control mt-n24pt" href="#carousel-feedback" role="button" data-slide="next">
                                <span className="carousel-control-icon material-icons" aria-hidden="true">keyboard_arrow_right</span>
                                <span className="sr-only">Next</span>
                            </a>
                            <div className="mdk-carousel__content">
                                <div className="col-12 col-md-6">
                                    <div className="card card-feedback card-body">
                                        <blockquote className="blockquote mb-0">
                                            <p className="text-70 small mb-0">A wonderful course on how to start. Eddie beautifully conveys all essentials of a becoming a good Angular developer. Very glad to have taken this course. Thank you Eddie Bryan.</p>
                                        </blockquote>
                                    </div>
                                    <div className="media ml-12pt">
                                        <div className="media-left mr-12pt">
                                            <a href="fixed-student-profile.html" className="avatar avatar-sm">
                                                {/* <img src="assets/images/people/110/guy-.jpg" width="40" alt="avatar" class="rounded-circle"> */}
                                                <span className="avatar-title rounded-circle">UK</span>
                                            </a>
                                        </div>
                                        <div className="media-body media-middle">
                                            <a href="fixed-student-profile.html" className="card-title">Umberto Kass</a>
                                            <div className="rating mt-4pt">
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star_border</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="card card-feedback card-body">
                                        <blockquote className="blockquote mb-0">
                                            <p className="text-70 small mb-0">A wonderful course on how to start. Eddie beautifully conveys all essentials of a becoming a good Angular developer. Very glad to have taken this course. Thank you Eddie Bryan.</p>
                                        </blockquote>
                                    </div>
                                    <div className="media ml-12pt">
                                        <div className="media-left mr-12pt">
                                            <a href="fixed-student-profile.html" className="avatar avatar-sm">
                                                {/* <img src="assets/images/people/110/guy-.jpg" width="40" alt="avatar" class="rounded-circle"> */}
                                                <span className="avatar-title rounded-circle">UK</span>
                                            </a>
                                        </div>
                                        <div className="media-body media-middle">
                                            <a href="fixed-student-profile.html" className="card-title">Umberto Kass</a>
                                            <div className="rating mt-4pt">
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star_border</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="card card-feedback card-body">
                                        <blockquote className="blockquote mb-0">
                                            <p className="text-70 small mb-0">A wonderful course on how to start. Eddie beautifully conveys all essentials of a becoming a good Angular developer. Very glad to have taken this course. Thank you Eddie Bryan.</p>
                                        </blockquote>
                                    </div>
                                    <div className="media ml-12pt">
                                        <div className="media-left mr-12pt">
                                            <a href="fixed-student-profile.html" className="avatar avatar-sm">
                                                {/* <img src="assets/images/people/110/guy-.jpg" width="40" alt="avatar" class="rounded-circle"> */}
                                                <span className="avatar-title rounded-circle">UK</span>
                                            </a>
                                        </div>
                                        <div className="media-body media-middle">
                                            <a href="fixed-student-profile.html" className="card-title">Umberto Kass</a>
                                            <div className="rating mt-4pt">
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star</span></span>
                                                <span className="rating__item"><span className="material-icons">star_border</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-section bg-alt border-bottom-2">
                <div className="container page__container">
                    <div className="page-separator">
                        <div className="page-separator__text">Student Feedback</div>
                    </div>
                    <div className="row mb-32pt">
                        <div className="col-md-3 mb-32pt mb-md-0">
                            <div className="display-1">4.7</div>
                            <div className="rating rating-24">
                                <span className="rating__item"><span className="material-icons">star</span></span>
                                <span className="rating__item"><span className="material-icons">star</span></span>
                                <span className="rating__item"><span className="material-icons">star</span></span>
                                <span className="rating__item"><span className="material-icons">star</span></span>
                                <span className="rating__item"><span className="material-icons">star_border</span></span>
                            </div>
                            <p className="text-muted mb-0">20 ratings</p>
                        </div>
                        <div className="col-md-9">
                            <div className="row align-items-center mb-8pt" data-toggle="tooltip" data-title="75% rated 5/5" data-placement="top">
                                <div className="col-md col-sm-6">
                                    <div className="progress" style={{ height: '8px' }}>
                                        <div className="progress-bar bg-secondary" role="progressbar" aria-valuenow={75} style={{ width: '75%' }} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                </div>
                                <div className="col-md-auto col-sm-6 d-none d-sm-flex align-items-center">
                                    <div className="rating">
                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center mb-8pt" data-toggle="tooltip" data-title="16% rated 4/5" data-placement="top">
                                <div className="col-md col-sm-6">
                                    <div className="progress" style={{ height: '8px' }}>
                                        <div className="progress-bar bg-secondary" role="progressbar" aria-valuenow={16} style={{ width: '16%' }} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                </div>
                                <div className="col-md-auto col-sm-6 d-none d-sm-flex align-items-center">
                                    <div className="rating">
                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center mb-8pt" data-toggle="tooltip" data-title="12% rated 3/5" data-placement="top">
                                <div className="col-md col-sm-6">
                                    <div className="progress" style={{ height: '8px' }}>
                                        <div className="progress-bar bg-secondary" role="progressbar" aria-valuenow={12} style={{ width: '12%' }} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                </div>
                                <div className="col-md-auto col-sm-6 d-none d-sm-flex align-items-center">
                                    <div className="rating">
                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center mb-8pt" data-toggle="tooltip" data-title="9% rated 2/5" data-placement="top">
                                <div className="col-md col-sm-6">
                                    <div className="progress" style={{ height: '8px' }}>
                                        <div className="progress-bar bg-secondary" role="progressbar" aria-valuenow={9} style={{ width: '9%' }} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                </div>
                                <div className="col-md-auto col-sm-6 d-none d-sm-flex align-items-center">
                                    <div className="rating">
                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center mb-8pt" data-toggle="tooltip" data-title="0% rated 0/5" data-placement="top">
                                <div className="col-md col-sm-6">
                                    <div className="progress" style={{ height: '8px' }}>
                                        <div className="progress-bar bg-secondary" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                </div>
                                <div className="col-md-auto col-sm-6 d-none d-sm-flex align-items-center">
                                    <div className="rating">
                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-16pt mb-16pt border-bottom row">
                        <div className="col-md-3 mb-16pt mb-md-0">
                            <div className="d-flex">
                                <a href="fixed-student-profile.html" className="avatar avatar-sm mr-12pt">
                                    {/* <img src="LB" alt="avatar" class="avatar-img rounded-circle"> */}
                                    <span className="avatar-title rounded-circle">LB</span>
                                </a>
                                <div className="flex">
                                    <p className="small text-muted m-0">2 days ago</p>
                                    <a href="fixed-student-profile.html" className="card-title">Laza Bogdan</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="rating mb-8pt">
                                <span className="rating__item"><span className="material-icons">star</span></span>
                                <span className="rating__item"><span className="material-icons">star</span></span>
                                <span className="rating__item"><span className="material-icons">star</span></span>
                                <span className="rating__item"><span className="material-icons">star</span></span>
                                <span className="rating__item"><span className="material-icons">star_border</span></span>
                            </div>
                            <p className="text-70 mb-0">A wonderful course on how to start. Eddie beautifully conveys all essentials of a becoming a good Angular developer. Very glad to have taken this course. Thank you Eddie Bryan.</p>
                        </div>
                    </div>
                    <div className="pb-16pt mb-16pt border-bottom row">
                        <div className="col-md-3 mb-16pt mb-md-0">
                            <div className="d-flex">
                                <a href="fixed-student-profile.html" className="avatar avatar-sm mr-12pt">
                                    {/* <img src="UK" alt="avatar" class="avatar-img rounded-circle"> */}
                                    <span className="avatar-title rounded-circle">UK</span>
                                </a>
                                <div className="flex">
                                    <p className="small text-muted m-0">2 days ago</p>
                                    <a href="fixed-student-profile.html" className="card-title">Umberto Klass</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="rating mb-8pt">
                                <span className="rating__item"><span className="material-icons">star</span></span>
                                <span className="rating__item"><span className="material-icons">star</span></span>
                                <span className="rating__item"><span className="material-icons">star</span></span>
                                <span className="rating__item"><span className="material-icons">star</span></span>
                                <span className="rating__item"><span className="material-icons">star_border</span></span>
                            </div>
                            <p className="text-70 mb-0">This course is absolutely amazing, Bryan goes* out of his way to really expl*ain things clearly I couldn't be happier, so glad I made this purchase!</p>
                        </div>
                    </div>
                    <div className="pb-16pt mb-24pt row">
                        <div className="col-md-3 mb-16pt mb-md-0">
                            <div className="d-flex">
                                <a href="fixed-student-profile.html" className="avatar avatar-sm mr-12pt">
                                    {/* <img src="AD" alt="avatar" class="avatar-img rounded-circle"> */}
                                    <span className="avatar-title rounded-circle">AD</span>
                                </a>
                                <div className="flex">
                                    <p className="small text-muted m-0">2 days ago</p>
                                    <a href="fixed-student-profile.html" className="card-title">Adrian Demian</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="rating mb-8pt">
                                <span className="rating__item"><span className="material-icons">star</span></span>
                                <span className="rating__item"><span className="material-icons">star</span></span>
                                <span className="rating__item"><span className="material-icons">star</span></span>
                                <span className="rating__item"><span className="material-icons">star</span></span>
                                <span className="rating__item"><span className="material-icons">star_border</span></span>
                            </div>
                            <p className="text-70 mb-0">This course is absolutely amazing, Bryan goes* out of his way to really expl*ain things clearly I couldn't be happier, so glad I made this purchase!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-section">
                <div className="container page__container">
                    <div className="page-heading">
                        <h4>Top Development Courses</h4>
                        <a href="fixed-library-development.html" className="ml-sm-auto text-underline">See Development Courses</a>
                    </div>
                    <div className="position-relative carousel-card">
                        <div className="js-mdk-carousel row d-block" id="carousel-courses1">
                            <a className="carousel-control-next js-mdk-carousel-control mt-n24pt" href="#carousel-courses1" role="button" data-slide="next">
                                <span className="carousel-control-icon material-icons" aria-hidden="true">keyboard_arrow_right</span>
                                <span className="sr-only">Next</span>
                            </a>
                            <div className="mdk-carousel__content">
                                <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                                    <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay mdk-reveal js-mdk-reveal " data-partial-height={44} data-toggle="popover" data-trigger="click">
                                        <a href="fixed-student-course.html" className="js-image" data-position>
                                            <img src="assets/images/paths/angular_430x168.png" alt="course" />
                                            <span className="overlay__content align-items-start justify-content-start">
                                                <span className="overlay__action card-body d-flex align-items-center">
                                                    <i className="material-icons mr-4pt">play_circle_outline</i>
                                                    <span className="card-title text-white">Preview</span>
                                                </span>
                                            </span>
                                        </a>
                                        <span className="corner-ribbon corner-ribbon--default-right-top corner-ribbon--shadow bg-accent text-white">NEW</span>
                                        <div className="mdk-reveal__content">
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    <div className="flex">
                                                        <a className="card-title" href="fixed-student-course.html">Learn Angular fundamentals</a>
                                                        <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                                                    </div>
                                                    <a href="fixed-student-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="rating flex">
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                                                    </div>
                                                    <small className="text-50">6 hours</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popoverContainer d-none">
                                        <div className="media">
                                            <div className="media-left mr-12pt">
                                                <img src="assets/images/paths/angular_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                            </div>
                                            <div className="media-body">
                                                <div className="card-title mb-0">Learn Angular fundamentals</div>
                                                <p className="lh-1 mb-0">
                                                    <span className="text-black-50 small">with</span>
                                                    <span className="text-black-50 small font-weight-bold">Elijah Murray</span>
                                                </p>
                                            </div>
                                        </div>
                                        <p className="my-16pt text-black-70">Learn the fundamentals of working with Angular and how to create basic applications.</p>
                                        <div className="mb-16pt">
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Fundamentals of working with Angular</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Create complete Angular applications</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Working with the Angular CLI</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Understanding Dependency Injection</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Testing with Angular</small></p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                <div className="d-flex align-items-center mb-4pt">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>6 hours</small></p>
                                                </div>
                                                <div className="d-flex align-items-center mb-4pt">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">assessment</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>Beginner</small></p>
                                                </div>
                                            </div>
                                            <div className="col text-right">
                                                <a href="fixed-student-course.html" className="btn btn-primary">Watch trailer</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                                    <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay mdk-reveal js-mdk-reveal " data-partial-height={44} data-toggle="popover" data-trigger="click">
                                        <a href="fixed-student-course.html" className="js-image" data-position>
                                            <img src="assets/images/paths/swift_430x168.png" alt="course" />
                                            <span className="overlay__content align-items-start justify-content-start">
                                                <span className="overlay__action card-body d-flex align-items-center">
                                                    <i className="material-icons mr-4pt">play_circle_outline</i>
                                                    <span className="card-title text-white">Preview</span>
                                                </span>
                                            </span>
                                        </a>
                                        <div className="mdk-reveal__content">
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    <div className="flex">
                                                        <a className="card-title" href="fixed-student-course.html">Build an iOS Application in Swift</a>
                                                        <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                                                    </div>
                                                    <a href="fixed-student-course.html" data-toggle="tooltip" data-title="Remove Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite</a>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="rating flex">
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                                                    </div>
                                                    <small className="text-50">6 hours</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popoverContainer d-none">
                                        <div className="media">
                                            <div className="media-left mr-12pt">
                                                <img src="assets/images/paths/swift_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                            </div>
                                            <div className="media-body">
                                                <div className="card-title mb-0">Build an iOS Application in Swift</div>
                                                <p className="lh-1 mb-0">
                                                    <span className="text-black-50 small">with</span>
                                                    <span className="text-black-50 small font-weight-bold">Elijah Murray</span>
                                                </p>
                                            </div>
                                        </div>
                                        <p className="my-16pt text-black-70">Learn the fundamentals of working with Angular and how to create basic applications.</p>
                                        <div className="mb-16pt">
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Fundamentals of working with Angular</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Create complete Angular applications</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Working with the Angular CLI</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Understanding Dependency Injection</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Testing with Angular</small></p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                <div className="d-flex align-items-center mb-4pt">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>6 hours</small></p>
                                                </div>
                                                <div className="d-flex align-items-center mb-4pt">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">assessment</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>Beginner</small></p>
                                                </div>
                                            </div>
                                            <div className="col text-right">
                                                <a href="fixed-student-course.html" className="btn btn-primary">Watch trailer</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                                    <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay mdk-reveal js-mdk-reveal " data-partial-height={44} data-toggle="popover" data-trigger="click">
                                        <a href="fixed-student-course.html" className="js-image" data-position>
                                            <img src="assets/images/paths/wordpress_430x168.png" alt="course" />
                                            <span className="overlay__content align-items-start justify-content-start">
                                                <span className="overlay__action card-body d-flex align-items-center">
                                                    <i className="material-icons mr-4pt">play_circle_outline</i>
                                                    <span className="card-title text-white">Preview</span>
                                                </span>
                                            </span>
                                        </a>
                                        <div className="mdk-reveal__content">
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    <div className="flex">
                                                        <a className="card-title" href="fixed-student-course.html">Build a WordPress Website</a>
                                                        <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                                                    </div>
                                                    <a href="fixed-student-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="rating flex">
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                                                    </div>
                                                    <small className="text-50">6 hours</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popoverContainer d-none">
                                        <div className="media">
                                            <div className="media-left mr-12pt">
                                                <img src="assets/images/paths/wordpress_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                            </div>
                                            <div className="media-body">
                                                <div className="card-title mb-0">Build a WordPress Website</div>
                                                <p className="lh-1 mb-0">
                                                    <span className="text-black-50 small">with</span>
                                                    <span className="text-black-50 small font-weight-bold">Elijah Murray</span>
                                                </p>
                                            </div>
                                        </div>
                                        <p className="my-16pt text-black-70">Learn the fundamentals of working with Angular and how to create basic applications.</p>
                                        <div className="mb-16pt">
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Fundamentals of working with Angular</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Create complete Angular applications</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Working with the Angular CLI</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Understanding Dependency Injection</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Testing with Angular</small></p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                <div className="d-flex align-items-center mb-4pt">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>6 hours</small></p>
                                                </div>
                                                <div className="d-flex align-items-center mb-4pt">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">assessment</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>Beginner</small></p>
                                                </div>
                                            </div>
                                            <div className="col text-right">
                                                <a href="fixed-student-course.html" className="btn btn-primary">Watch trailer</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                                    <div className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay mdk-reveal js-mdk-reveal " data-partial-height={44} data-toggle="popover" data-trigger="click">
                                        <a href="fixed-student-course.html" className="js-image" data-position="left">
                                            <img src="assets/images/paths/react_430x168.png" alt="course" />
                                            <span className="overlay__content align-items-start justify-content-start">
                                                <span className="overlay__action card-body d-flex align-items-center">
                                                    <i className="material-icons mr-4pt">play_circle_outline</i>
                                                    <span className="card-title text-white">Preview</span>
                                                </span>
                                            </span>
                                        </a>
                                        <div className="mdk-reveal__content">
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    <div className="flex">
                                                        <a className="card-title" href="fixed-student-course.html">Become a React Native Developer</a>
                                                        <small className="text-50 font-weight-bold mb-4pt">Elijah Murray</small>
                                                    </div>
                                                    <a href="fixed-student-course.html" data-toggle="tooltip" data-title="Add Favorite" data-placement="top" data-boundary="window" className="ml-4pt material-icons text-20 card-course__icon-favorite">favorite_border</a>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="rating flex">
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star</span></span>
                                                        <span className="rating__item"><span className="material-icons">star_border</span></span>
                                                    </div>
                                                    <small className="text-50">6 hours</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popoverContainer d-none">
                                        <div className="media">
                                            <div className="media-left mr-12pt">
                                                <img src="assets/images/paths/react_40x40@2x.png" width={40} height={40} alt="Angular" className="rounded" />
                                            </div>
                                            <div className="media-body">
                                                <div className="card-title mb-0">Become a React Native Developer</div>
                                                <p className="lh-1 mb-0">
                                                    <span className="text-black-50 small">with</span>
                                                    <span className="text-black-50 small font-weight-bold">Elijah Murray</span>
                                                </p>
                                            </div>
                                        </div>
                                        <p className="my-16pt text-black-70">Learn the fundamentals of working with Angular and how to create basic applications.</p>
                                        <div className="mb-16pt">
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Fundamentals of working with Angular</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Create complete Angular applications</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Working with the Angular CLI</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Understanding Dependency Injection</small></p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
                                                <p className="flex text-black-50 lh-1 mb-0"><small>Testing with Angular</small></p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                <div className="d-flex align-items-center mb-4pt">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>6 hours</small></p>
                                                </div>
                                                <div className="d-flex align-items-center mb-4pt">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <span className="material-icons icon-16pt text-black-50 mr-4pt">assessment</span>
                                                    <p className="flex text-black-50 lh-1 mb-0"><small>Beginner</small></p>
                                                </div>
                                            </div>
                                            <div className="col text-right">
                                                <a href="fixed-student-course.html" className="btn btn-primary">Watch trailer</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}