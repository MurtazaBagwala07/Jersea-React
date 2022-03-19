import './Home.css';
import '../css/main.css';

export function Home(){
    return(
        <div>
            <header>
        <nav class="ecom-nav-container">
            <p class="ecom-nav-title">Jersea Store</p>
            <div class="ecom-nav-searchbar">
                <input class="ecom-nav-searchbar-input" type="text" placeholder="Search"/>
                <button class="search-btn"><i class="fa fa-search"></i></button>
            </div>
           
            <div class="ecom-nav-action-btns">
                <button class="ecom-nav-action-btn nav-btn-login">Login</button>
                <div class="ecom-nav-action-btn badge">
                    <i class="fas fa-shopping-cart ecom-nav-icon"></i>
                    <span class="badge-number">6</span>
                </div>
             
                <div class="ecom-nav-action-btn badge">
                    <i class="fas fa-heart ecom-nav-icon"></i>
                    <span class="badge-number">6</span>
                </div>
            </div>
        </nav>
    </header>
    <main class="main-content">
        <div class="grid4-container">
            <div class="grid4-title">Wear jerseys of the best clubs</div>
            <div class="grid-4">
                <div class="grid-4-item">
                    <img class="grid-4-image" src="https://imageio.forbes.com/specials-images/imageserve/5fd148842c66ab6967c0b012/Real-Madrid-v-Borussia-Moenchengladbach--Group-B---UEFA-Champions-League/960x0.jpg?fit=bounds&format=jpg&width=960" alt="realmadrid-img" />
                    <span class="grid-4-image-caption">Real-Madrid</span>
                </div>
                <div class="grid-4-item">
                    <img class="grid-4-image" src="https://imageio.forbes.com/specials-images/imageserve/5fd148842c66ab6967c0b012/Real-Madrid-v-Borussia-Moenchengladbach--Group-B---UEFA-Champions-League/960x0.jpg?fit=bounds&format=jpg&width=960" alt="realmadrid-img" />
                    <span class="grid-4-image-caption">Real-Madrid</span>
                </div>
                <div class="grid-4-item">
                    <img class="grid-4-image" src="https://imageio.forbes.com/specials-images/imageserve/5fd148842c66ab6967c0b012/Real-Madrid-v-Borussia-Moenchengladbach--Group-B---UEFA-Champions-League/960x0.jpg?fit=bounds&format=jpg&width=960" alt="realmadrid-img" />
                    <span class="grid-4-image-caption">Real-Madrid</span>
                </div>
                <div class="grid-4-item">
                    <img class="grid-4-image" src="https://imageio.forbes.com/specials-images/imageserve/5fd148842c66ab6967c0b012/Real-Madrid-v-Borussia-Moenchengladbach--Group-B---UEFA-Champions-League/960x0.jpg?fit=bounds&format=jpg&width=960" alt="realmadrid-img" />
                    <span class="grid-4-image-caption">Real-Madrid</span>
                </div>
            </div>
        </div>
        <div class="grid1-container">
            <div class="grid1-title">Real Madrid 2017-18 Special Edition
                <button class="grid-1-shopbtn">Buy Now</button>
            </div>
            <div class="grid-1">
            </div>
        </div>
        <div class="grid-2">
            <div class="grid-2-item-container">
                <div class="grid-2-img">
                    <img class="grid-2-img-resp" src="https://www.soccerbible.com/media/111918/inter-milan-2021-soccerbible_0001_fc-internazionale-milano-2020-21-home-kit-2_96418.jpg" alt="" />
                </div>
                <div class="grid-2-item">
                    <div class="grid-2-title">
                        New arrivals
                    </div>
                    <div class="grid-2-description">
                        Inter Milan 2020-21 Home kit
                    </div>
                    <button class="grid-2-shopbtn">Shop Now</button>
                </div>
            </div>
            <div class="grid-2-item-container">
                <div class="grid-2-img">
                    <img class="grid-2-img-resp" src="https://3.bp.blogspot.com/-nBAW2b3uIg0/Xzqj5VGvxlI/AAAAAAACcg8/1nauYg0_FakOAt5JkncrQBoVPIzjhaccgCLcBGAsYHQ/s1600/betis-20-21-kit-5.jpg" alt="" />
                </div>
                <div class="grid-2-item">
                    <div class="grid-2-title">
                        New arrivals
                    </div>
                    <div class="grid-2-description">
                        Real Betis 2020-21 Home kit
                    </div>
                    <button class="grid-2-shopbtn">Shop Now</button>
                </div>
            </div>
        </div>
    </main>
        </div>
    )
}