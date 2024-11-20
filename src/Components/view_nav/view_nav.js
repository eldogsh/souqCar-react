import'./view_nav.css'
import strings from '../../localization/localization';
function ViewNav(props) {
    const activeFilter=()=>{
      var element = document.getElementById("filter");
    element.classList.add("activeFilter");
    }
    return (
        <>
           <div className=" theme  border-0 p-2 mb-3 ">
            <div className="row m-2">
              <div className="col-lg-6" style={{alignSelf: "center"}}>
                <div className="row">
                  <i className="fa-solid fa-car mb-1 col text-primary"></i>
                  <div
                    className="col-sm-6 col-12 mb-2  px-5  "
          
                  >
                    <div className=' w-100 p-1 filter ' >
                    <div className="d-flex justify-content-center w-100" style={{textAlign:"center"}} onClick={()=>{activeFilter()}}>
                      <i
                        className="fa-solid fa-filter text-primary mx-1 mt-1"
                        
                      ></i>
                      <span  >فلتره</span>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 " style={{textAlign:"end",borderRadius:"5px"}}>
                <span>{strings.order}</span>
                <select
                className='m-1 p-1'
                  name="cars"
                  id="cars"
                  style={{width: "50%", backgroundColor: "rgb(206, 224, 248)"}}
                  onClick={(el)=>props.order(el.target.value)}
                >
                  {strings.orderList.map((item , index) => (
                <option value={index}>{item}</option>
              ))}
                </select>

               
              </div>
            </div>
          </div> 
        </>
    )
}
export default ViewNav