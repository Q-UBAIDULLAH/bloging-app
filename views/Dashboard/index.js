import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cards from "../../component/Card"
import "../../App.css";
function Dashboard() {
  const navigate = useNavigate()
  const [getdata, setdata] = useState([]);
  const getproduct = () => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => setdata(res.products)
      )

  }

  useEffect(() => {
    getproduct()
    console.log(getdata)
  }, [])
  if (!getdata.length) {
    return <div>Loading.......</div>
  }
  return (



    <div style={{ backgroundColor: "#bfbfbf" }}>
      <h2>Dashboard</h2>
      {getdata.map(function (item) {

        return <Cards message={item} />

      })}

      <h1>dashboard page</h1>
      <button onClick={() => navigate('cu')} >ContactUS</button>
      <button onClick={() => navigate('au')}>AboutUs</button>
      <div>

      </div>

      <div className="footer">

        <div>

          <h1>RESOURCES</h1>
          <p>Documentation</p>
          <p>Application</p>
          <p>System</p>
          <p>System</p>
        </div>
        <div>
          <h1>PRICING</h1>
          <p>Overview</p>
          <p>Premium Plans</p>
          <p>System</p>
          <p>Faq</p>
        </div>
        <div>
          <h1>SOCIAL</h1>
          <p>Pricing</p>
          <p>Premium Plans</p>
          <p>System</p>
          <p>Plans</p>
        </div>
        <div>
          <h1>SOCIAL</h1>
          <p>Pricing</p>
          <p>Premium Plans</p>
          <p>System</p>
          <p>Plans</p>
        </div>
        <div>
<h1>ACTIVITY</h1>
<p>Pricing</p>
<p>Premium Plans</p>
<p>System</p>
<p>Plans</p>
</div>
</div>
</div>


  )
}
export default Dashboard;