import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import carousel_images from '../components/images_links'

export default function Home() {
  const [foodData,setFoodData]=useState([]);
  const [foodCategory,setFoodCategory]=useState([]);
  const loadData=async()=>{
      const response=await fetch("http://localhost:4000/foodData",{
        method:"POST"
      });

      let data =await response.json();
      setFoodData(data[0]);
      setFoodCategory(data[1]);
  }

  useEffect(()=>{
    loadData()
  },[]);


  const [search,setSearch]=useState("");

  return (
    <div>
        <Navbar/>
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ maxHeight: "500px" }}>
                <div className="carousel-inner">
                    <div class="carousel-caption d-none d-md-block" style={{ zIndex: "10" }}>
                        <div class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" 
                            value={search} onChange={(e)=>setSearch(e.target.value)}
                            />
                            
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src={carousel_images.pic1} className="d-block w-100" alt="..." style={{ maxHeight: "500px", objectFit: "cover", filter: "brightness(30%)" }} />

                    </div>
                    <div className="carousel-item">
                        <img src={carousel_images.pic2} className="d-block w-100" alt="..." style={{ maxHeight: "500px", objectFit: "cover", filter: "brightness(30%)" }} />

                    </div>
                    <div className="carousel-item">
                        <img src={carousel_images.pic3} className="d-block w-100" alt="..." style={{ maxHeight: "500px", objectFit: "cover", filter: "brightness(30%)" }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden"></span>
                </button>
            </div>

        </div>
        <div className='container'>
          {
            foodCategory ?

            foodCategory.map(data=>{
              return(
                
              <div className='row mb-3'>
                <div key={data._id} className='fs-3 m-3' >{data.CategoryName}</div>
                <hr/>

                {
                  foodData ?
                  foodData.filter(in_data=>{
                    return (in_data.CategoryName===data.CategoryName) && (in_data.name.toLowerCase().includes(search.toLowerCase()))
                  }).map(data=>{
                    return (
                      <div className='col-12 col-md-6 col-lg-3'>
                        <Cards foodItem={data} options={data.options[0]} />
                      </div>
                    )
                  }):""
                }

              </div>
                
              )
            }):""
          }
        </div>
        <Footer/>
      
    </div>
  )
}
