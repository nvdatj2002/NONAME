import React from 'react';



export default function Home() {
    return (
        <div>
            <nav class="nav-ba">
                <div class="logo">
                    <h5 class="ale"><span>Ale</span> Hotel</h5>
                </div>
                <div class="menu">
                    <ul>
                        <li class="item-menu">
                            <a href="#" class="title-item-menu">Home</a>
                        </li>
                        <li class="item-menu">
                            <a href="#" class="title-item-menu">About</a>
                        </li>
                        <li class="item-menu">
                            <a href="#" class="title-item-menu">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
             <section class="showcase">
                <div class="mark">
                    <div class="container">
                        <h1 class="title-showcase"><span>Enjoy</span> Your Stay</h1>
                        <p class="showcase-decs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, eveniet. Eaque libero possimus exercitationem esse praesentium itaque sint doloremque culpa vitae tempora aut maxime ipsam ut neque, velit animi, delectus rerum. Quasi, excepturi provident vero blanditiis impedit repellendus! Quos sit accusantium necessitatibus dicta eaque molestiae porro possimus temporibus voluptatibus. A!</p>
                    </div>

                    <button class="btn btn-primary">
                        About Your Hotel
                    </button>
                </div>
            </section>
             <section class="history">
                <div class="history-image">
                    <img src="https://kphv.cz/wp-content/uploads/1246280_16061017110043391702.jpg" alt=""/>
                </div>
                <div class="history-content">
                    <h1 class="history-content-title">
                        <span>The History</span> Of Our Hotel
                    </h1>
                    <p class="history-content-decs">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora hic mollitia quia quos, reprehenderit labore consequatur quisquam dolorem a quaerat aliquam repellat officiis eaque nihil ipsum praesentium at numquam molestiae veritatis nesciunt. Ullam corporis cum sed similique cupiditate cumque eaque atque magni quasi inventore tempore aliquam in reiciendis nisi omnis temporibus molestiae totam, optio provident nam dolorum et dolorem. Dolores iste delectus ut debitis reiciendis laudantium iusto quae recusandae architecto nisi. Similique sunt, sequi cupiditate earum consectetur quos excepturi, numquam aliquam assumenda asperiores iure! Provident qui ullam iusto non labore exercitationem nihil unde atque? Reprehenderit quaerat vero nulla sunt. Nemo?

                    </p>
                    <button class="btn-light">Read more</button>
                </div>
            </section>
            <section class="facculiti">
                <div class="facculiti-item">
                    <i class="facculiti-item-icon fas fa-hotel fa-3x"></i>
                    <h1 class="facculiti-item-title">
                        Gread Location
                    </h1>
                    <p class="facculiti-item-decs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic deserunt veniam minima. Sit ad magnam vitae quos ab nulla aliquam!</p>
                </div>
                <div id="facculiti2" class="facculiti-item">
                    <i class="facculiti-item-icon fas fa-hotel fa-3x"></i>
                    <h1 class="facculiti-item-title">
                        Gread Location
                    </h1>
                    <p class="facculiti-item-decs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic deserunt veniam minima. Sit ad magnam vitae quos ab nulla aliquam!</p>
                </div>
                <div class="facculiti-item">
                    <i class="facculiti-item-icon fas fa-hotel fa-3x"></i>
                    <h1 class="facculiti-item-title">
                        Gread Location
                    </h1>
                    <p class="facculiti-item-decs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic deserunt veniam minima. Sit ad magnam vitae quos ab nulla aliquam!</p>
                </div>
            </section>
            <section class="customer-review">
                <div class="mark">
                    <div class="container2">
                        <h1 class="customer-review-title">
                            What Our <span> Guess Say</span>
                        </h1>
                        <div class="customer-review-item">
                            <div class="customer-review-item-avt">
                                <img src='https://cdn.phongthuyvuong.com/ptv/uploads/images/2021_02_03_tuong-mat-tron-noi-gi-ve-tinh-cach-cua-ban-01-min.jpg'></img>
                            </div>
                            <div class="customer-review-item-content">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque nulla eaque, fugit ipsam expedita explicabo temporibus assumenda architecto totam nemo accusantium distinctio commodi illo aut veritatis incidunt suscipit rem sit?</p>
                            </div>
                        </div>
                        <div class="customer-review-item">
                            <div class="customer-review-item-avt">
                            <img src='https://cdn.phongthuyvuong.com/ptv/uploads/images/2021_02_03_tuong-mat-tron-noi-gi-ve-tinh-cach-cua-ban-01-min.jpg'></img>
                            </div>
                            <div class="customer-review-item-content">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque nulla eaque, fugit ipsam expedita explicabo temporibus assumenda architecto totam nemo accusantium distinctio commodi illo aut veritatis incidunt suscipit rem sit?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <main>
                <footer>
                    <p class="footer-decs">
                        Ale Hotel @2022 All Right Reserved
                    </p>
                </footer>
            </main> 
        </div>
    );
        
}