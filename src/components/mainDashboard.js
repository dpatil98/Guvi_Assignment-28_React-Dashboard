import '../css/mainDashboard.css'
import { lazy, Suspense } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
} from 'chart.js';

import { Line ,Doughnut} from 'react-chartjs-2';
import { ProgressBar } from 'react-bootstrap';
import { Bank } from 'react-bootstrap-icons';
import { PiggyBank } from 'react-bootstrap-icons';
import { ChatLeftText } from 'react-bootstrap-icons';
import { Clipboard } from 'react-bootstrap-icons';



ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export function GraphicalRepresentation()
{

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(153, 102, 255, 0.8)',
              'rgba(255, 159, 64, 0.8)',
            ],
            borderColor: [
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
            ],
            borderWidth: 5,
           
          },
        ],
      };
    const dataLine = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(25, 99, 132, 0.8)',
            ],
            borderColor: [
              'rgba(55, 55, 55, 1)',
            ],
            borderWidth: 3,
           
          },
        ],
      };


    const cardData = [{
                        "cardtype":"revenue",
                        "title":"EARNINGS (MONTHLY)",
                        "earnings":"40000",
                        "icon":"PiggyBank"
                      },
                      {
                        "cardtype":"revenue",
                        "title":"EARNINGS (ANNUAL)",
                        "earnings":"215000",
                        "icon":"Bank"
                      },
                      {
                        "cardtype":"progress",
                        "title":"TASKS",
                        "earnings":"50%",
                        "icon":"ChatLeftText"
                      },
                      {
                        "cardtype":"number",
                        "title":"PENDING REQUESTS",
                        "earnings":"18",
                        "icon":"Clipboard"
                      },]

return(

    <div className='gl-container'>
        <div className='section-title'>
           <h4>Dashboard</h4>
        </div>      
        <div className='cards-container'>
        {cardData.map((card)=><Card cardData={card}/>) }
        </div>
        <div className='charts-container'>
           <div className='chart-body'>
            <div className='chart-title'>
              <h6>Earning Overview</h6>
            </div>
            <div>
              <Line
                options={{ maintainAspectRatio:false,}}
                data={dataLine}
                // width={1000}
                height={400}
                
              />
            </div>
           
           </div>
           <div className='chart-body-pie'>
            <div className='chart-title'>
              <h6>Revenue Sources</h6>
            </div>
              <div>
                <Doughnut data={data} 
                width={500}
                height={400}
                options={{
                    maintainAspectRatio:false,
                    layout: {
                      padding: 20
                    }
                }}/>
                </div>
              </div>
        </div>
       
    </div>


);

}


function Card({cardData})
{const now = 50;



  switch (cardData.cardtype) {
    case "revenue":{

                    return (
                        <div className='carda-body'>
                          <div>
                            <p>{cardData.title}</p>
                            <h3>${cardData.earnings}</h3>    
                          </div>   
                          <div><PiggyBank color="royalblue" size={30} /></div>
                        </div>
                      );
                 break;
               }

    case "progress":{

                return (
                  <div className='carda-body'>
                    <div>
                      <p>{cardData.title}</p>
                      <h3>{cardData.earnings}<ProgressBar  now={now} /></h3>    
                    </div>   
                    <div>< Clipboard color="royalblue" size={30} /></div>
                  </div>
                );
                break;
              }

    case "number":{
                return (
                  <div className='carda-body'>
                    <div>
                      <p>{cardData.title}</p>
                      <h3>{cardData.earnings}</h3>    
                    </div>   
                    
      
                    <div>< ChatLeftText color="royalblue" size={30} /></div>
                  </div>
                );

                break;
              }           
         
  
    default:
            {
              return (
                <div className='carda-body'>
                  <div>
                    <p>Card-title</p>
                    <h3>Card-data</h3>    
                  </div>   
                  <div>Card-icon</div>
                </div>
              );
            }
      break;
  }

  
}