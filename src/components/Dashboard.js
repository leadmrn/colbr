import React from "react";

function Dashboard(){
  return(
    <div className="Dashboard">
      <h1>Bravo {localStorage.getItem('user')} vous êtes inscrit.e !</h1>
    </div>
  )
}

export default Dashboard;