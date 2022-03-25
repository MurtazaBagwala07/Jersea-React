import './Home.css';
import '../css/main.css';
import { Link } from 'react-router-dom';

export function Home(){
    return(
        <main className="main-content">
            <div className="grid4-container">
                <div className="grid4-title">Wear jerseys of the best clubs</div>
                <div className="grid-4">
                    <div class="grid-4-item">
                        <img class="grid-4-image" src="https://imageio.forbes.com/specials-images/imageserve/5fd148842c66ab6967c0b012/Real-Madrid-v-Borussia-Moenchengladbach--Group-B---UEFA-Champions-League/960x0.jpg?fit=bounds&format=jpg&width=960" alt="realmadrid-img" />
                        <span class="grid-4-image-caption">Real-Madrid</span>
                    </div>
                    <div className="grid-4-item">
                        <img className="grid-4-image" src="https://imageio.forbes.com/specials-images/imageserve/5fd148842c66ab6967c0b012/Real-Madrid-v-Borussia-Moenchengladbach--Group-B---UEFA-Champions-League/960x0.jpg?fit=bounds&format=jpg&width=960" alt="realmadrid-img" />
                        <span className="grid-4-image-caption">Real-Madrid</span>
                    </div>
                    <div className="grid-4-item">
                        <Link to='/products'>
                        <img className="grid-4-image" src="https://imageio.forbes.com/specials-images/imageserve/5fd148842c66ab6967c0b012/Real-Madrid-v-Borussia-Moenchengladbach--Group-B---UEFA-Champions-League/960x0.jpg?fit=bounds&format=jpg&width=960" alt="realmadrid-img" />
                        <span className="grid-4-image-caption">Real-Madrid</span>
                        </Link>
                    </div>
                    <div className="grid-4-item">
                        <img className="grid-4-image" src="https://imageio.forbes.com/specials-images/imageserve/5fd148842c66ab6967c0b012/Real-Madrid-v-Borussia-Moenchengladbach--Group-B---UEFA-Champions-League/960x0.jpg?fit=bounds&format=jpg&width=960" alt="realmadrid-img" />
                        <span className="grid-4-image-caption">Real-Madrid</span>
                    </div>
                </div>
            </div>
            <div className="grid1-container">
                <div className="grid1-title">Real Madrid 2017-18 Special Edition
                    <button className="grid-1-shopbtn">Buy Now</button>
                </div>
                <div className="grid-1">
                </div>
            </div>
            <div className="grid-2">
                <div className="grid-2-item-container">
                    <div className="grid-2-img">
                        <img className="grid-2-img-resp" src="https://www.soccerbible.com/media/111918/inter-milan-2021-soccerbible_0001_fc-internazionale-milano-2020-21-home-kit-2_96418.jpg" alt="" />
                    </div>
                    <div className="grid-2-item">
                        <div className="grid-2-title">
                            New arrivals
                        </div>
                        <div className="grid-2-description">
                            Inter Milan 2020-21 Home kit
                        </div>
                        <button className="grid-2-shopbtn">Shop Now</button>
                    </div>
                </div>
                <div className="grid-2-item-container">
                    <div className="grid-2-img">
                        <img className="grid-2-img-resp" src="https://3.bp.blogspot.com/-nBAW2b3uIg0/Xzqj5VGvxlI/AAAAAAACcg8/1nauYg0_FakOAt5JkncrQBoVPIzjhaccgCLcBGAsYHQ/s1600/betis-20-21-kit-5.jpg" alt="" />
                    </div>
                    <div className="grid-2-item">
                        <div className="grid-2-title">
                            New arrivals
                        </div>
                        <div className="grid-2-description">
                            Real Betis 2020-21 Home kit
                        </div>
                        <button className="grid-2-shopbtn">Shop Now</button>
                    </div>
                </div>
            </div>
        </main>
    )
}