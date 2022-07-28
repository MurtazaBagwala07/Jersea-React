import './Home.css';
import '../css/main.css';
import { useData } from '../../hooks';
import {useNavigate} from 'react-router-dom'

export function Home(){
    const {state,dispatch} = useData();
    const navigate = useNavigate();
    

    const categoryHandler=(cat)=>{
        const newFilter = {
            'Laliga':false,
            'Premier League':false,
            'Serie-A':false,
            'Ligue-1':false,
        }
        dispatch({type:'FILTER_DATA' , payload:{filterName:'categories',filterValue:newFilter}})
        dispatch({type:'FILTER_DATA' , payload:{filterName:'categories',filterValue:{...state.filter.categories,[cat.categoryName]:true}}})
        navigate('/products')

    }

    return(
        <main className="main-content">
            <div className="grid1-container">
                <div className="grid1-title">
                    <button onClick={()=>navigate('/products')} className="grid-1-shopbtn">Explore Now</button>
                </div>
                <div className="grid-1">
                </div>
            </div>
            
            <div className="grid4-container">
                <div className="grid4-title">We serve jerseys from all around Europe</div>
                <div className="grid-4">
                    {
                        state.category.map((cat)=>{
                            return(
                                <div onClick={()=>categoryHandler(cat)} class="grid-4-item">
                                <img class="grid-4-image" src={cat.img} alt="img" />
                                <button class="grid-4-image-caption">{cat.categoryName}</button>
                            </div>
                            )
                        })
                    }
                    
                </div>
            </div>
            
        </main>
    )
}