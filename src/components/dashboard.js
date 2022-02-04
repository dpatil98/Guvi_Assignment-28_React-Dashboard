
import { Chart } from 'react-chartjs-2';
import '../css/dashboard.css'
import { GraphicalRepresentation } from './mainDashboard';


export function Dashboard()
{

return(

    <div className='dashboard-container'>
        <Sidebar/>
        <GraphicalRepresentation/>
    </div>


);

}



function Sidebar()
{
  return(
    
    <div className='sidebar-container'>
      <ul>
        <li>Product</li>
        <li>Users</li>
      </ul>
    </div>
  )
}