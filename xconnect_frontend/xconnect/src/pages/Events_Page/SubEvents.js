import React from "react";
import "../Events_Page/SubEvents.css"
// Have to get subevent-img class here in every img tag
export default function SubEvents() {
    // const imageData = [
    //     { id: 1, imagePath: 'images/canteen1.jpg', cardTitle: 'Canteen', cardDescription: 'With supporting text below as a natural lead-in to additional content.', pagePath: "/Canteen" },
    //     { id: 2, imagePath: 'images/library1.jpg', cardTitle: 'Library', cardDescription: 'With supporting text below as a natural lead-in to additional content.', pagePath: "/Library" },
    //     { id: 3, imagePath: 'images/calendar3.jpg', cardTitle: 'Calendar', cardDescription: 'With supporting text below as a natural lead-in to additional content.' },
    //     { id: 4, imagePath: 'images/stuhelp1.jpg', cardTitle: 'Student Helpline', cardDescription: 'With supporting text below as a natural lead-in to additional content.' },
    //   ];
    // <img src={process.env.PUBLIC_URL + '/images/Library/library.jpg'} alt="Library" />
    // const subEventsData = [
    //     { id: 1, imagePath: '', eventTitle: 'Reel', eventDescription: 'Step into the world of storytelling with our Reel Challenge. Unleash your creativity and showcase your filmmaking prowess in this exciting competition. Craft a reel that takes the audience on a captivating journey, leaving them spellbound with your storytelling magic.', judgingCriteria:'', contact:'', },
    //     { id: 2, imagePath: '', eventTitle: '', eventDescription: '', judgingCriteria:'', contact:'', },
    //     { id: 3, imagePath: '', eventTitle: '', eventDescription: '', judgingCriteria:'', contact:'', },
    //     { id: 4, imagePath: '', eventTitle: '', eventDescription: '', judgingCriteria:'', contact:'', },
    //     { id: 5, imagePath: '', eventTitle: '', eventDescription: '', judgingCriteria:'', contact:'', },
    //     { id: 6, imagePath: '', eventTitle: '', eventDescription: '', judgingCriteria:'', contact:'', },
    //     { id: 7, imagePath: '', eventTitle: '', eventDescription: '', judgingCriteria:'', contact:'', },
    //     { id: 8, imagePath: '', eventTitle: '', eventDescription: '', judgingCriteria:'', contact:'', },
    //     { id: 9, imagePath: '', eventTitle: '', eventDescription: '', judgingCriteria:'', contact:'', },
    //     { id: 10, imagePath: '', eventTitle: '', eventDescription: '', judgingCriteria:'', contact:'', },
    //     { id: 11, imagePath: '', eventTitle: '', eventDescription: '', judgingCriteria:'', contact:'', },
    //     { id: 12, imagePath: '', eventTitle: '', eventDescription: '', judgingCriteria:'', contact:'', },
    //     { id: 13, imagePath: '', eventTitle: '', eventDescription: '', judgingCriteria:'', contact:'', },
    //     { id: 14, imagePath: '', eventTitle: '', eventDescription: '', judgingCriteria:'', contact:'', },
    //     { id: 15, imagePath: '', eventTitle: '', eventDescription: '', judgingCriteria:'', contact:'', },
    //     { id: 16, imagePath: '', eventTitle: '', eventDescription: '', judgingCriteria:'', contact:'', },

    //   ];
    return (
        <>
            <div class="container">
            <h1 id="events-header">SUB EVENTS</h1>
                <div class="row">
                    <div class="card border-success mb-3 card-margin">
                        <img src={process.env.PUBLIC_URL + '/images/Events/Reel.jpg'} class="card-img-top " alt="Reel" />
                        <div>
                            <h5 class="card-title event-font">Reel</h5>
                            <p class="card-text description-font mb-3">
                                Step into the world of storytelling with our Reel Challenge.
                                Unleash your creativity and showcase your filmmaking prowess
                                in this exciting competition. Craft a reel that takes the audience
                                on a captivating journey, leaving them spellbound with your
                                storytelling magic.
                            </p>
                        </div>

                        <div>
                            <h6 class="event-font">Contact Student Coordinator</h6>
                            <p class="description-font"><strong>LUDWIG</strong><span class="text-primary"
                                style={{ textDecoration: "underline", marginLeft: "20px" }}>9689464763</span>
                            </p>
                            <p class="description-font"><strong>OMKAR</strong><span class="text-primary"
                                style={{ textDecoration: "underline", marginLeft: "20px" }}>9607245631</span>
                            </p>
                            <details className="description-font" id="details1">
                                <summary>Read More</summary>
                                <h6>Rules</h6>
                                <ol>
                                    <li>Theme : “Time Travel Tales” (Explore the concept of time travel in your reel.
                                        Craft a narrative that takes characters on a journey through different eras,
                                        showcasing the challenges and joys of navigating the past and future)</li>
                                    <li>Reel should be between 1 to 5 minutes</li>
                                    <li>Be a trailblazer! Create a storyline that is entirely unique and has never been seen
                                        before.</li>
                                    <li>Language: English</li>
                                    <li>Reel should be of the highest quality possible.
                                    </li>
                                    <li>Any use of inappropriate content or props will result in immediate
                                        disqualification.
                                    </li>
                                    <li>Submit the reel in MP4 format for easy viewing and evaluation.</li>
                                    <li>Each team is allowed one entry</li>
                                    <li>The reel must be submitted on a pen-drive on the day of the event during
                                        registration.</li>
                                </ol>
                                <h6>JUDGING CRITERIA:</h6>
                                <ol>
                                    <li>Relevance to the theme.</li>
                                    <li>Storytelling: The effectiveness of the narrative, character development, and
                                        overall storytelling technique.</li>
                                    <li>Creativity and Originality</li>
                                    <li>Technical Excellence ( Cinematography, editing, sound design, and overall
                                        production quality)
                                    </li>
                                    <li>Overall Presentation: How well the elements come together to create a cohesive
                                        and memorable cinematic experience.</li>
                                </ol>
                            </details>
                        </div>
                    </div>

                    <div class="card border-success mb-3 card-margin">
                        <img src={process.env.PUBLIC_URL + '/images/Events/Meme.jpg'} class="card-img-top" alt="Meme" />
                        <div>
                            <h5 class="card-title event-font">Meme</h5>
                            <p class="card-text description-font mb-3">
                                Prepare for a meme showdown like never before in the "AI vs
                                The World Meme Battle." In this solo competition, participants
                                are invited to unleash their creativity and wit to create healthy
                                memes that humorously explore the clash between AI and the
                                world around us . Dive into the realm of artificial intelligence and
                                its interactions with the world. Explore the humorous side of AI's
                                encounters with everyday situations, people, or anything that
                                sparks your creative genius
                            </p>
                        </div>
                        <div>

                            <h6 class="event-font">Contact Student Coordinator</h6>
                            <p class="description-font"><strong>LUDWIG</strong><span class="text-primary"
                                style={{ textDecoration: "underline", marginLeft: "20px" }}>9689464763</span>
                            </p>
                            <p class="description-font"><strong>LAXMAN</strong><span class="text-primary"
                                style={{ textDecoration: "underline", marginLeft: "20px" }}>9764858445</span>
                            </p>
                            <details className="description-font" id="details2">
                                <summary>Read More</summary>
                                <h6>Rules</h6>
                                <ol>
                                    <li>Theme: “AI vs The World”</li>
                                    <li>Language: English.</li>
                                    <li>This battle is a solo endeavor.</li>
                                    <li>Participants must create memes that are free from any form of abuse,
                                        disrespect towards any religion, or sentiments of individuals.
                                    </li>
                                    <li>Create and submit your memes in image or GIF format.

                                    </li>
                                    <li>Ensure your images or GIFs are clear.
                                    </li>
                                    <li>Participant to submit only ONE meme.
                                    </li>
                                    <li>The meme must be submitted on a pen-drive on the day of the event during
                                        registration.</li>
                                </ol>
                                <h6>JUDGING CRITERIA:</h6>
                                <ol>
                                    <li>Humor</li>
                                    <li>Uniqueness and originality in presenting comedic ideas related to AI vs The
                                        World.</li>
                                    <li>Relevance</li>
                                    <li>The quality of images or GIFs and their overall aesthetic appeal.
                                    </li>
                                    <li>Adherence to the rule of creating healthy memes without any form of abuse
                                        or disrespect</li>
                                </ol>
                            </details>
                        </div>
                    </div>
                    <div class="card border-success mb-3 card-margin">
                        <img src={process.env.PUBLIC_URL + '/images/Events/Runway.png'} class="card-img-top" alt="Tech Runway.img" />
                            <div>
                                <h5 class="card-title event-font">TECH RUNWAY</h5>
                                <p class="card-text description-font mb-3">
                                    Welcome to a captivating journey where style meets spectacle.
                                    Unveiling the latest trends, our runway will be adorned with
                                    cutting-edge designs and the epitome of fashion innovation.
                                    Join us for an evening of glamour, sophistication, and a
                                    celebration of individual expression. Welcome to a world where
                                    fashion takes center stage, and every step down the runway is a
                                    statement of elegance and originality.
                                </p>
                            </div>
                            <div>
                                <h6 class="event-font">Contact Event Coordinators</h6>
                                <p class="description-font"><strong>MANUJA</strong><span class="text-primary"
                                    style={{ textDecoration: "underline", marginLeft: "20px" }}>8208892153</span>
                                </p>
                                <p class="description-font"><strong>WHITNEY</strong><span class="text-primary"
                                    style={{ textDecoration: "underline", marginLeft: "20px" }}>7620483329</span>
                                </p>
                                <details className="description-font" id="details3">
                                    <summary>Read More</summary>
                                    <h6>RULES:</h6>
                                    <ol>
                                        <li>Theme: “Evolution Of IT”</li>
                                        <li>Each team should consist of 5 members.</li>
                                        <li>Participants have to dress according to the theme mentioned above.</li>
                                        <li>Participants should carry their own music on a pen drive.</li>
                                        <li>Each team will be given a maximum time limit of 8 minutes on stage with the additional 2
                                            minutes for startup and 2 minutes for clearance.</li>
                                        <li>Negative markings if participants exceed the time limit.</li>
                                        <li>Any type of vulgarity of action and in the costume, vulgar words in the/vulgar music will lead
                                            to disqualification of the team.</li>
                                    </ol>
                                    <h6>JUDGING CRITERIA:</h6>
                                    <ul>
                                        <li>Creativity</li>
                                        <li>Attitude</li>
                                        <li>Costume</li>
                                        <li>Overall look and appearance</li>
                                    </ul>
                                </details>
                            </div>
                    </div>

                    <div class="card border-success mb-3 card-margin">
                        <img src={process.env.PUBLIC_URL + '/images/Events/Fusion.jpg'} class="card-img-top" alt="Techfusion Groove" />
                            <div>
                                <h5 class="card-title event-font">TECHFUSION GROOVE</h5>
                                <p class="card-text description-font mb-3">
                                    Embark on a captivating journey of rhythm and movement with our dance program. Immerse yourself in the
                                    artistry of dance as we celebrate diversity, creativity, and expression through a myriad of dance
                                    styles. Join us in creating unforgettable moments where passion meets the dance floor, and let the
                                    language of dance speak volumes in every graceful step.
                                </p>
                            </div>
                            <div>
                                <h6 class="event-font">Contact Event Coordinators</h6>
                                <p class="description-font"><strong>VANSHITA</strong><span class="text-primary"
                                    style={{ textDecoration: "underline", marginLeft: "20px" }}>7420988489</span>
                                </p>
                                <p class="description-font"><strong>ZAINAB</strong><span class="text-primary"
                                    style={{ textDecoration: "underline", marginLeft: "20px" }}>9049945441</span>
                                </p>
                                <details className="description-font" id="details4">
                                    <summary>Read More</summary>
                                    <h6>RULES:</h6>
                                    <ol>
                                        <li>3-5 participants.</li>
                                        <li>Time limit: 3-5 minutes.</li>
                                        <li>The use of hazardous materials, such as water and fire, is strictly banned. However, the
                                            utilization of technology-related props will win the team additional points.</li>
                                        <li>The team's soundtrack should be carried on a pen-drive and submitted at registration.</li>
                                        <li>Indecent attire is absolutely prohibited in order to maintain the college campus decorum.</li>
                                    </ol>
                                    <h6>JUDGING CRITERIA:</h6>
                                    <ul>
                                        <li>Creativity</li>
                                        <li>Costume</li>
                                        <li>Use of props</li>
                                        <li>Facial expressions</li>
                                        <li>Energy and synchronisation</li>
                                    </ul>
                                </details>
                            </div>
                    </div>

                    <div class="card border-success mb-3 card-margin">
                        <img src={process.env.PUBLIC_URL + '/images/Events/Beats.jpg'} class="card-img-top" alt="Mix Beats" />
                            <div>
                                <h5 class="card-title event-font">MIX BEATS</h5>
                                <p class="card-text description-font mb-3">
                                    Step into the electrifying realm of DJ Mixing with our cutting-edge program. Explore the art of
                                    seamlessly blending beats, creating a symphony of sound that transforms any event into an
                                    unforgettable experience. Join us and embark on a musical journey where each mix becomes a masterpiece.
                                </p>
                            </div>
                            <div>
                                <h6 class="event-font">Contact Event Coordinators</h6>
                                <p class="description-font"><strong>CONRAD</strong><span class="text-primary"
                                    style={{ textDecoration: "underline", marginLeft: "20px" }}>7057941148</span>
                                </p>
                                <p class="description-font"><strong>JONATHAN</strong><span class="text-primary"
                                    style={{ textDecoration: "underline", marginLeft: "20px" }}>9307552946</span>
                                </p>
                                <details className="description-font" id="details5">
                                    <summary>Read More</summary>
                                    <h6>RULES:</h6>
                                    <ol>
                                        <li>One Participant per team.</li>
                                        <li>Only Virtual DJ software is allowed.</li>
                                        <li>Each participant is required to bring their own music on a pen-drive as well as their laptops.
                                        </li>
                                        <li>Music must be mixed on stage.</li>
                                        <li>Minimum of five songs.</li>
                                        <li>Songs containing foul language are not permitted.</li>
                                        <li>Pre-mixed music will result in disqualification.</li>
                                    </ol>
                                </details>
                            </div>
                    </div>

                    <div class="card border-success mb-3 card-margin">
                        <img src={process.env.PUBLIC_URL + '/images/Events/CD paint.jpg'} class="card-img-top" alt="CD Painting" />
                            <div>
                                <h5 class="card-title event-font">CD PAINTING</h5>
                                <p class="card-text description-font mb-3">
                                    Discover the artistry within each note with our CD Painting collection. Immerse yourself in a symphony
                                    of
                                    colors and creativity as we transform ordinary CDs into vibrant canvases. Each piece is a unique fusion
                                    of music and visual art, bringing a harmonious blend of aesthetics to your space. Explore the rhythm of
                                    expression and elevate your surroundings with our exclusive CD Painting creations – where every stroke
                                    tells a story, and every disc becomes a masterpiece.
                                </p>
                            </div>
                            <div>
                                <h6 class="event-font">Contact Event Coordinator</h6>
                                <p class="description-font"><strong>SUSANNA</strong><span class="text-primary"
                                    style={{ textDecoration: "underline", marginLeft: "20px" }}>7972408450</span>
                                </p>
                                <details className="description-font" id="details6">
                                    <summary>Read More</summary>
                                    <h6>RULES:</h6>
                                    <ol>
                                        <li>CD will be provided.</li>
                                        <li>Participants must carry their own stationary.</li>
                                        <li>Duration for painting: 30 minutes.</li>
                                        <li>No use of mobile or internet is allowed during the event.</li>
                                    </ol>
                                    <h6>JUDGING CRITERIA:</h6>
                                    <ul>
                                        <li>Creativity</li>
                                        <li>Relevance to the theme and caption</li>
                                    </ul>
                                </details>
                            </div>
                    </div>

                    <div class="card border-success mb-3 card-margin">
                        <img src={process.env.PUBLIC_URL + '/images/Events/Treasure.jpg'} class="card-img-top" alt="Tech Treasure Trail" />
                            <div>
                                <h5 class="card-title event-font">TECH TREASURE TRAIL</h5>
                                <p class="card-text description-font mb-3">
                                    Join fellow enthusiasts in a Tech Treasure Trail that blends intellect, teamwork, and digital prowess.
                                    Navigate through the campus as you decipher cryptic clues, unraveling a tapestry of hidden knowledge.
                                    Engage in challenges that test your coding finesse and problem-solving skills, forging camaraderie and
                                    unforgettable memories. Don your explorer’s hat, lace up your boots, and let the adventure begin!
                                </p>
                            </div>
                            <div>
                                <h6 class="event-font">Contact Event Coordinators</h6>
                                <p class="description-font"><strong>ROOSEVELT</strong><span class="text-primary"
                                    style={{ textDecoration: "underline", marginLeft: "20px" }}>7391935336</span>
                                </p>
                                <p class="description-font"><strong>MANOJ</strong><span class="text-primary"
                                    style={{ textDecoration: "underline", marginLeft: "20px" }}>9021543870</span>
                                </p>
                                <details className="description-font" id="details7">
                                    <summary>Read More</summary>
                                    <h6>RULES:</h6>
                                    <ol>
                                        <li>2 players per team.</li>
                                        <li>No use of personal mobile phones for deciphering clues unless absolutely needed.</li>
                                        <li>Use of computer lab may be allowed in certain cases.</li>
                                        <li>HSS compound and other restricted areas should not be entered.</li>
                                        <li>Players cannot leave the college premises.</li>
                                        <li>Do not break or misplace anything that does not aid in the treasure hunt.</li>
                                        <li>Do not pick multiple clues from a place if there are multiple present.</li>
                                        <li>All clues that a team gets must be returned back to the coordinator.</li>
                                    </ol>
                                </details>
                            </div>
                    </div>
                    <div class="card border-success mb-3 card-margin">
                        <img src={process.env.PUBLIC_URL + '/images/Events/Photography.jpg'} class="card-img-top" alt="Mobile Photography" />
                            <div>
                                <h5 class="card-title event-font">MOBILE PHOTOGRAPHY</h5>
                                <p class="card-text description-font mb-3">
                                    Trying to capture a moment or an emotion is a very good exercise for photographers to do all the time,
                                    and the best ones do it very well. This is a type of contest that can really show off a photographer's
                                    skill not just as a technician but as an artist. The task is to go capture a moment which best suits the
                                    theme.
                                </p>
                            </div>
                            <div>
                                <h6 class="event-font">Contact Event Coordinators</h6>
                                <p class="description-font"><strong>AARON</strong><span class="text-primary"
                                    style={{ textDecoration: "underline", marginLeft: "20px" }}>73106 34096</span>
                                </p>
                                <p class="description-font"><strong>AVINASH</strong><span class="text-primary"
                                    style={{ textDecoration: "underline", marginLeft: "20px" }}>8208184068</span>
                                </p>
                                <details className="description-font" id="details8">
                                    <summary>Read More</summary>
                                    <h6>RULES:</h6>
                                    <ol>
                                        <li>One Entry per team.</li>
                                        <li>Participants have to use only mobile phones.</li>
                                        <li>Editing of photos is not allowed.</li>
                                        <li>The original photo has to be submitted to the event head.</li>
                                        <li>Each participant has to send only one photo.</li>
                                        <li>A relevant caption along with the photo must be submitted.</li>
                                    </ol>
                                    <h6>JUDGING CRITERIA:</h6>
                                    <ul>
                                        <li>The decision of the judges is final and binding.</li>
                                        <li>Relevance to the theme.</li>
                                        <li>Creativity, Composition, and Originality</li>
                                    </ul>
                                </details>
                            </div>
                    </div>

                    <div class="card border-success mb-3 card-margin">
                        <img src={process.env.PUBLIC_URL + '/images/Events/Trivia.jpg'} class="card-img-top" alt="Tech Trivia Showdown" />
                            <div>
                                <h5 class="card-title event-font">TECH TRIVIA SHOWDOWN</h5>
                                <p class="card-text description-font mb-3">
                                    The Tech Trivia Showdown is a quiz competition designed to test participants' knowledge across various
                                    domains of technology. This fast-paced event aims to challenge, entertain, and celebrate tech
                                    enthusiasts'
                                    expertise. Teams will face off in a battle of wits, answering a diverse range of tech-related questions.
                                    Whether you're a coding connoisseur or a hardware wizard, this quiz promises to challenge your knowledge
                                    and
                                    keep you on the edge of your seat. Join us for an evening of tech-packed fun and the chance to claim the
                                    title of Tech Trivia Champions!
                                </p>
                            </div>
                            <div>
                                <h6 class="event-font">Contact Event Coordinators</h6>
                                <p class="description-font"><strong>JOHANN</strong><span class="text-primary"
                                    style={{ textDecoration: "underline", marginLeft: "20px" }}>8767202131</span>
                                </p>
                                <p class="description-font"><strong>DANIELA</strong><span class="text-primary"
                                    style={{ textDecoration: "underline", marginLeft: "20px" }}>8767545825</span>
                                </p>
                                <details className="description-font" id="details9">
                                    <summary>Read More</summary>
                                    <h6>RULES:</h6>
                                    <ol>
                                        <li>Teams consist of 2 participants each.</li>
                                        <li>Questions cover a broad spectrum of technology, including software, hardware, programming
                                            languages, emerging technologies, and historical milestones.</li>
                                        <li>Multiple-choice questions and true/false statements.</li>
                                        <li>Teams submit written answers within a specified time limit.</li>
                                        <li>30 seconds per question.</li>
                                        <li>15 seconds to discuss and submit written answers.</li>
                                        <li>Correct answers earn points; incorrect or unanswered questions result in no points.</li>
                                        <li>Bonus rounds for challenging questions.</li>
                                        <li>Initial warm-up round with general tech knowledge questions.</li>
                                        <li>Themed rounds exploring specific tech domains.</li>
                                        <li>Lightning round for rapid-fire questions.</li>
                                        <li>A quizmaster reads questions, keeps time, and maintains order.</li>
                                        <li>In case of a tie, a sudden-death round with escalating difficulty determines the winner.</li>
                                    </ol>
                                </details>
                            </div>
                    </div>

                    <div class="card border-success mb-3 card-margin">
                        <img src={process.env.PUBLIC_URL + '/images/Events/Jigsaw.jpg'} class="card-img-top" alt="JigSaw" />
                            <div>
                                <h5 class="card-title event-font">JIGSAW - USING HTML/CSS</h5>
                                <p class="card-text description-font mb-3">
                                    Get ready to embark on a creative journey as we present to you the Image Puzzle Challenge! In this
                                    exciting event, you will be given a set of separate image pieces, and your task is to skillfully arrange
                                    them to reconstruct the original image. This challenge not only tests your HTML and CSS skills but also
                                    your ability to visualize and assemble a puzzle in a virtual space.
                                </p>
                            </div>
                            <div>
                                <h6 class="event-font">Contact Event Coordinator</h6>
                                <p class="description-font"><strong>SEAMUS</strong><span class="text-primary"
                                    style={{ textDecoration: "underline", marginLeft: "20px" }}>7517710481</span>
                                </p>
                                <details className="description-font" id="details10">
                                    <summary>Read More</summary>
                                    <h6>RULES:</h6>
                                    <ol>
                                        <li><strong>Puzzle Pieces:</strong>
                                            <ul>
                                                <li>Each participant will be provided with individual pieces of an image.</li>
                                                <li>The pieces must be arranged using HTML and CSS to reconstruct the original image.</li>
                                            </ul>
                                        </li>
                                        <li><strong>HTML and CSS Only:</strong> Participants are only allowed to use HTML and CSS to create
                                            the puzzle layout and arrange the pieces.</li>
                                        <li><strong>Original Image Dimensions:</strong> The original image dimensions and arrangement will
                                            be provided to maintain accuracy.</li>
                                        <li><strong>Time Limit:</strong> Participants will be given 1 hour to complete the challenge.</li>
                                        <li><strong>No External Resources:</strong> Participants should not use external resources or
                                            libraries. The challenge is focused on your coding skills.</li>
                                    </ol>
                                    <h6>JUDGING CRITERIA:</h6>
                                    <ul>
                                        <li>Accuracy: The correctness of the arrangement in comparison to the original image.</li>
                                        <li>Creativity: Innovative approaches to enhancing the visual appeal of the reconstructed image.</li>
                                        <li>Code Quality: Well-structured and clean HTML and CSS code.</li>
                                        <li>Efficiency: How efficiently the participant achieves the puzzle reconstruction within the given
                                            time.</li>
                                    </ul>
                                </details>
                            </div>
                    </div>

                    <div class="card border-success mb-3 card-margin">
                        <img src={process.env.PUBLIC_URL + '/images/Events/Coding.jpg'} class="card-img-top" alt="Coding" />
                            <div>
                                <h5 class="card-title event-font">CODING SERIES</h5>
                                <p class="card-text description-font mb-3">
                                    Welcome to the Coding Series - an exhilarating event designed to test your coding prowess and typing
                                    skills! In this unique competition, participants will form teams of two and navigate through two
                                    distinct
                                    tasks that promise to challenge and enhance your coding abilities.
                                </p>
                            </div>
                            <div>
                                <h6 class="event-font">Contact Event Coordinator</h6>
                                <p class="description-font"><strong>DANIEL</strong><span class="text-primary"
                                    style={{ textDecoration: "underline", marginLeft: "20px" }}>76663 11560</span>
                                </p>
                                <details className="description-font" id="details11">
                                    <summary>Read More</summary>
                                    <h6>TASKS:</h6>
                                    <ul>
                                        <li><strong>Blind Paragraph Typing (Task 1):</strong>
                                            <ol>
                                                <li>Participants will be presented with a paragraph that must be typed in a specified format
                                                    using MS Word.</li>
                                                <li>The twist? The display must remain off throughout the task, testing participants'
                                                    ability to type accurately without visual feedback.</li>
                                            </ol>
                                        </li>
                                        <li><strong>C Language Coding Challenge (Task 2):</strong>
                                            <ol>
                                                <li>Participants will be given a coding pattern to implement using the C language in Code
                                                    Blocks.</li>
                                                <li>The challenge lies in crafting efficient and error-free code within the given time
                                                    frame.</li>
                                            </ol>
                                        </li>
                                    </ul>
                                    <h6>TASK ROTATION:</h6>
                                    <ul>
                                        <li>Participants will switch between the tasks every 20 minutes.</li>
                                        <li>Only 30 seconds are allotted for communication during the task switch.</li>
                                        <li>Time Limit: The entire competition spans 1 hour, with participants navigating through both
                                            tasks.</li>
                                    </ul>
                                    <h6>RULES:</h6>
                                    <ol>
                                        <li>Participants must refrain from leaving any markings on the papers provided.</li>
                                        <li>Communication between participants is restricted during the tasks, except for the designated
                                            30-second swap period.</li>
                                        <li>For Task 1, participants are strictly prohibited from turning on the display.</li>
                                        <li>No access to the internet is allowed throughout the competition.</li>
                                    </ol>
                                    <h6>JUDGING CRITERIA:</h6>
                                    <ul>
                                        <li>Time: The speed at which participants complete each task.</li>
                                        <li>Correctness of Typed Content (Task 1): Accuracy in typing the provided paragraph without visual
                                            feedback.</li>
                                        <li>Correctness of Code (Task 2): Accuracy and functionality of the implemented code.</li>
                                        <li>Efficiency of Code (Task 2): The effectiveness and optimization of the coded solution.</li>
                                    </ul>
                                </details>
                            </div>
                    </div>
                    <div class="card border-success mb-3 card-margin">
                        <img src={process.env.PUBLIC_URL + '/images/Events/gaming.jpg'} class="card-img-top" alt="Gaming" />
                            <div>
                                <h5 class="card-title event-font">GAMING</h5>
                                <h6 class="event-font">Contact Event Coordinator</h6>
                                <p class="description-font"><strong>TUSHAR</strong><span class="text-primary"
                                    style={{ textDecoration: "underline", marginLeft: "20px" }}>9022286517</span>
                                </p>
                                <p class="description-font"><strong>IRFAN</strong><span class="text-primary"
                                    style={{ textDecoration: "underline", marginLeft: "20px" }}>9284598162</span>
                                </p>
                            </div>
                            <div>
                                <details className="description-font" id="details12">
                                    <summary>Read More</summary>
                                    <h6>RULES:</h6>
                                    <ol>
                                        <li>Entry fee: Rs 150.</li>
                                        <li>A registration desk will be set up specifically for gaming.</li>
                                        <li>Winners will be awarded medals.</li>
                                        <li>There are no restrictions on the number of gamers per college.</li>
                                        <li>However, if the number of participants exceeds the maximum capacity, registration will be
                                            closed.</li>
                                        <li>The decision of the organizers will be final and binding.</li>
                                    </ol>
                                    <h6>FIFA CS</h6>
                                    <ul>
                                        <li>Location: Classroom 317</li>
                                        <li>Participants: 1</li>
                                    </ul>
                                    <h6>Participants: 3-5</h6>
                                    <ul>
                                        <li>Location: BCA Lab</li>
                                        <li>Participants can bring their own gears</li>
                                    </ul>
                                </details>
                            </div>
                    </div>

                    <div class="card border-success mb-3 card-margin">
                        <img src={process.env.PUBLIC_URL + '/images/Events/debate.jpg'} class="card-img-top" alt="Block n Tackle" />
                            <div>
                                <h5 class="card-title event-font">BLOCK N TACKLE</h5>
                                <p class="card-text description-font mb-3">
                                    Rise to the Challenge: Block and Tackle Competition. Participants will engage in thought-provoking
                                    discussions, presenting and defending their viewpoints with clarity and rigor. Unleash your potential
                                    and be part of a competition that provides you an opportunity to showcase your diction.
                                </p>
                            </div>
                            <div>
                                <h6 class="event-font">Contact Event Coordinators</h6>
                                <p class="description-font"><strong>SHREYA</strong><span class="text-primary"
                                    style={{ textDecoration: "underline", marginLeft: "20px" }}>9146904632</span>
                                </p>
                                <p class="description-font"><strong>OLENCIA</strong><span class="text-primary"
                                    style={{ textDecoration: "underline", marginLeft: "20px" }}>9545371426</span>
                                </p>
                                <details className="description-font" id="details13">
                                    <summary>Read More</summary>
                                    <h6>RULES:</h6>
                                    <ol>
                                        <li>The participants will be given a topic based on technology</li>
                                        <li>The participants will be given a time of 10 mins to prepare for the topic</li>
                                        <li>The participant will have to block (for the topic) or tackle (against the topic) at regular
                                            intervals when the judges say block or tackle</li>
                                        <li>The judging will be based on the fluency and speed, ability to speak for and against the topic,
                                            and the content and knowledge of the topic</li>
                                        <li>The time limit for each participant will be 3 and a half minute</li>
                                    </ol>
                                </details>
                            </div>
                    </div>

                    <div class="card border-success mb-3 card-margin">
                        <img src={process.env.PUBLIC_URL + '/images/Events/penalty.jpg'} class="card-img-top" alt="Penalty Shootout" />
                            <div>
                                <h5 class="card-title event-font">PENALTY SHOOT OUT</h5>
                                <h6 class="event-font">Contact Event Coordinator</h6>
                                <p class="description-font"><strong>SAMEER</strong><span class="text-primary"
                                    style={{ textDecoration: "underline", marginLeft: "20px" }}>8177871108</span>
                                </p>
                                <p class="description-font"><strong>NATHAN</strong><span class="text-primary"
                                    style={{ textDecoration: "underline", marginLeft: "20px" }}>72629 00319</span>
                                </p>
                            </div>
                            <div>
                                <details className="description-font" id="details14">
                                    <summary>Read More</summary>
                                    <h6>RULES:</h6>
                                    <ol>
                                        <li>Each team will get 2 shots.</li>
                                        <li>A maximum of 2 sudden deaths will be taken followed by a toss to decide the winner.</li>
                                        <li>For the sudden death, the order of the penalty takers can change in the team.</li>
                                        <li>Both players will have to shoot; however, the goalkeeper may stay throughout or change.</li>
                                    </ol>
                                </details>
                            </div>
                    </div>
                    <div class="card border-success mb-3 card-margin">
                        <img src={process.env.PUBLIC_URL + '/images/Events/Shark Tank.jpg'} class="card-img-top" alt="Shark Tank" />
                            <div>
                                <h5 class="card-title event-font">SHARK TANK</h5>
                                <p class="card-text description-font mb-3">
                                    Dive into the excitement of our college Shark Tank! Witness students pitch their creative ideas to a
                                    panel of judges, competing for a chance to turn their dreams into reality. Get ready for innovation,
                                    passion, and entrepreneurial spirit.
                                </p>
                            </div>
                            <div>
                                <h6 class="event-font">Contact Event Coordinator</h6>
                                <p class="description-font"><strong>SUJEET</strong><span class="text-primary"
                                    style={{ textDecoration: "underline", marginLeft: "20px" }}>70576 66514</span>
                                </p>
                                <details className="description-font" id="details15">
                                    <summary>Read More</summary>
                                    <h6>RULES:</h6>
                                    <ol>
                                        <li>Maximum 2 participants per team</li>
                                        <li>Time limit is 10 min per team. Exceeding the time results in negative marking</li>
                                        <li>Presentation should be submitted to the event coordinator during the registration time.</li>
                                        <li>Judges' decisions are final and binding.</li>
                                    </ol>
                                    <h6>JUDGING CRITERIA:</h6>
                                    <ul>
                                        <li>Creativity</li>
                                        <li>Innovation</li>
                                        <li>Confidence in presentation</li>
                                    </ul>
                                </details>
                            </div>
                    </div>

                    <div class="card border-success mb-3 card-margin">
                        <img src={process.env.PUBLIC_URL + '/images/Events/Surprise.jpg'} class="card-img-top" alt="Surprise Event" />
                            <div>
                                <h5 class="card-title event-font">SURPRISE EVENT</h5>
                                <p class="card-text description-font mb-3">
                                    Experience the thrill of the unknown at our surprise event! Join us for an evening filled with mystery,
                                    excitement, and unforgettable moments. Unveil surprises, embrace spontaneity, and create memories that
                                    will last a lifetime. Don't miss out on this one-of-a-kind event!
                                </p>
                            </div>
                            <div>
                                <h6 class="event-font">Contact Event Coordinator</h6>
                                <p class="description-font"><strong>CASEY</strong><span class="text-primary"
                                    style={{ textDecoration: "underline", marginLeft: "20px" }}>8767039564</span>
                                </p>
                            </div>
                    </div>
                </div>
                <div class="mt-5">
                    <a href="http://127.0.0.1:8000/api/events/register/1/">
                        <button class="Btn mb-3">
                            <strong>REGISTER</strong>
                        </button>
                    </a>
                    <a href="./techlipse_brochure.pdf" target="_blank">
                        <button class="Btn">
                            <strong>BROCHURE</strong>
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
}