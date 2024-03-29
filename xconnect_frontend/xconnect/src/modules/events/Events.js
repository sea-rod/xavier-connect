import React from "react";

export default function Events() {
    return (
        <>
            <main class="container">
                <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body">
                    <div class="col-lg-6 px-0">
                        <h1 class="display-4 fst-italic">Explore, Engage, Experience <br /> Vibrant Campus Events</h1>
                        <p class="lead my-3">Immerse yourself in a world of knowledge, creativity, and excitement.
                            Join us in making every moment on campus memorable.</p>
                        <p class="lead mb-0"><a href="/" class="text-body-emphasis fw-bold">Continue reading...</a></p>
                    </div>
                </div>

                <div class="row mb-2">
                    <div class="col-md-6">
                        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-body">
                            <div class="col p-4 d-flex flex-column position-static">
                                <strong class="d-inline-block mb-2 text-primary-emphasis">Dept. of BCA presents</strong>
                                <h3 class="mb-0">Techlipse</h3>
                                <div class="mb-1 text-body-secondary">Feb 3</div>
                                <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a href="/" class="icon-link gap-1 icon-link-hover stretched-link mt-2">
                                Events List
                                </a>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="/55595c"></rect><text x="50%" y="50%" fill="/eceeef" dy=".3em">Thumbnail</text></svg>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-body">
                            <div class="col p-4 d-flex flex-column position-static">
                                <strong class="d-inline-block mb-2 text-success-emphasis">Dept of Mass Comm.</strong>
                                <h3 class="mb-0">MediaScope</h3>
                                <div class="mb-1 text-body-secondary">Oct 15</div>
                                <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a href="/" class="icon-link gap-1 icon-link-hover stretched-link mt-2">
                                    Events List
                                </a>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="/55595c"></rect><text x="50%" y="50%" fill="/eceeef" dy=".3em">Thumbnail</text></svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row g-5">
                </div>
            </main>
        </>
    );
}