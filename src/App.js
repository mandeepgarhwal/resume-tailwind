import { Table } from 'flowbite-react';

function App() {
  return (
    <div className="bg-red-200">
      <h1 className=" text-4xl text-fuchsia-950 text-center mb-8">Introduction</h1>
      
      <h2 className="bg-red-600 text-right text-2xl font-serif text-slate-700 mb-4 mx-8 rounded-3xl pr-8"> OBJECTIVE</h2>
      <p className="text-left text-xl font-serif text-slate-900 mb-4 pl-10 pr-8">
        A challenge loving and determined Bachelor-graduate (B.E) in Electronics ready to work both independently and as a member of a team, utilizing the skills acquired during all my study and practical work for growth of my organizationand at the same time do work which allow me freedom to think differently.
      </p>
      <h2 className="bg-red-600 text-right text-2xl font-serif text-slate-700 mb-4 mx-8 rounded-3xl pr-8"> CURRENT STATUS</h2>
      <p className="text-left text-xl font-serif text-slate-900 mb-4 pl-10 pr-8">
        Taking doubts of students, preparing notes and working on projects in various fields at Potentia academy, Bathinda.
      </p>
      <h2 className="bg-red-600 text-right text-2xl font-serif text-slate-700 mb-4 mx-8 rounded-3xl pr-8"> WORK EXPERIENCE</h2>
      <div>
        <ul className="text-left text-xl font-serif text-slate-900 mb-4 pl-14 list-disc">
          <li> Working in IITIAN classes, Bathinda from march onwards. </li>
          <li> Working on online platform “kicstrt” based on AI from March 2020 to 2022. </li>
          <li> Teaching students at my own center from September 2020 till 2023.</li>
          <li> Working as Sr. physics faculty at Bansal classes, Bathinda center till Feb 2020.</li>
          <li> Worked as coaching expert at Alpha coaching, RPS Hansi from 02 March 2017 toFeb. 2019</li>
          <li> Worked as physics faculty at VigyanDhara from 10 August 2015 to Feb 2017.</li>
          <li> Worked as physics faculty at Alpha coaching,RPSMahendragarh from 21 March 2014 to 10 August 2015</li>
          <li> Worked as physics faculty at RED Coaching center, Jhajjar fromMay 2012 to Feb 2014.</li>
          <li> Worked as physics faculty cum center head in DAZZLE CLASSES” Hisar. From Feb 2011 to March 2012</li>
          <li> Published my own biotech magazine “BIOIMPULSE” while pursuing my engineering.</li>
        </ul>
      </div>
      <h2 className="bg-red-600 text-right text-2xl font-serif text-slate-700 mb-4 mx-8 rounded-3xl pr-8"> EDUCATIONAL QUALIFICATION </h2>
      <div className="md:px-12">
      <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell className='bg-red-200'>Year</Table.HeadCell>
          <Table.HeadCell className='bg-red-200' >Degree</Table.HeadCell>
          <Table.HeadCell className='bg-red-200' >Institution</Table.HeadCell>
          <Table.HeadCell className='bg-red-200' >Board/University</Table.HeadCell>
          <Table.HeadCell className='bg-red-200' >Percentage</Table.HeadCell>

        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="bg-red-200 whitespace-nowrap text-xl font-serif text-slate-900 dark:text-white">
              {"2018"}
            </Table.Cell>
            <Table.Cell className='bg-red-200 text-xl font-serif text-slate-900' >UGC-NET (Pol. Sc.)</Table.Cell>
            <Table.Cell className='bg-red-200 text-xl font-serif text-slate-900' >UGC</Table.Cell>
            <Table.Cell className='bg-red-200 text-xl font-serif text-slate-900' >UGC</Table.Cell>
            <Table.Cell className='bg-red-200 text-xl font-serif text-slate-900' >59%</Table.Cell>

          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="bg-red-200 whitespace-nowrap text-xl font-serif text-slate-900 dark:text-white">
              2018
            </Table.Cell>
            <Table.Cell className='bg-red-200 text-xl font-serif text-slate-900' >M.A.(Pol. Sc.)</Table.Cell>
            <Table.Cell className='bg-red-200 text-xl font-serif text-slate-900' >Distance Eduction</Table.Cell>
            <Table.Cell className='bg-red-200 text-xl font-serif text-slate-900' >Kurukshetra University</Table.Cell>
            <Table.Cell className='bg-red-200 text-xl font-serif text-slate-900' >55%</Table.Cell>

          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="bg-red-200 whitespace-nowrap text-xl font-serif text-slate-900 dark:text-white">2011</Table.Cell>
            <Table.Cell className='bg-red-200 text-xl font-serif text-slate-900' >M.Sc. (Phy)</Table.Cell>
            <Table.Cell className='bg-red-200 text-xl font-serif text-slate-900' >Bundelkhand University</Table.Cell>
            <Table.Cell className='bg-red-200 text-xl font-serif text-slate-900' >Bundelkhand University</Table.Cell>
            <Table.Cell className='bg-red-200 text-xl font-serif text-slate-900' >70%</Table.Cell>

          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="bg-red-200 whitespace-nowrap text-xl font-serif text-slate-900 dark:text-white">2009</Table.Cell>
            <Table.Cell className='bg-red-200 text-xl font-serif text-slate-900' >B.E. (ECE)</Table.Cell>
            <Table.Cell className='bg-red-200 text-xl font-serif text-slate-900' >UIET</Table.Cell>
            <Table.Cell className='bg-red-200 text-xl font-serif text-slate-900' >Punjab University</Table.Cell>
            <Table.Cell className='bg-red-200 text-xl font-serif text-slate-900' >61%</Table.Cell>

          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className= "bg-red-200 whitespace-nowrap text-xl font-serif text-slate-900 dark:text-white">2003</Table.Cell>
            <Table.Cell className='bg-red-200 text-xl font-serif text-slate-900' >AISSCE</Table.Cell>
            <Table.Cell className='bg-red-200 text-xl font-serif text-slate-900' >Vishvas senior secondary school, Hisar</Table.Cell>
            <Table.Cell className='bg-red-200 text-xl font-serif text-slate-900' >CBSE</Table.Cell>
            <Table.Cell className='bg-red-200 text-xl font-serif text-slate-900' >67%</Table.Cell>

          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className= "bg-red-200 whitespace-nowrap text-xl font-serif text-slate-900 dark:text-white">2001</Table.Cell>
            <Table.Cell className='bg-red-200 text-xl font-serif text-slate-900' >AISSE</Table.Cell>
            <Table.Cell className='bg-red-200 text-xl font-serif text-slate-900' >Vishvas senior secondary school, Hisar</Table.Cell>
            <Table.Cell className='bg-red-200 text-xl font-serif text-slate-900' >CBSE</Table.Cell>
            <Table.Cell className='bg-red-200 text-xl font-serif text-slate-900' >54%</Table.Cell>

          </Table.Row>
        </Table.Body>
      </Table>
    </div>
      {/* <table className= "table" style={{width: "100%"}} >
        <thead>
          <tr >
            <th scope= "col" style={{backgroundColor: 'rgb(254 202 202)'}}>Year</th>
            <th scope= "col" style={{backgroundColor: 'rgb(254 202 202)'}}>Degree</th>
            <th scope= "col" style={{backgroundColor: 'rgb(254 202 202)'}}>Institution</th>
            <th scope= "col" style={{backgroundColor: 'rgb(254 202 202)'}}>Board/University</th>
            <th scope= "col" style={{backgroundColor: 'rgb(254 202 202)'}}>Percentage</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" style={{backgroundColor: 'rgb(254 202 202)'}}>      2018	</th>
            <td style={{backgroundColor: 'rgb(254 202 202)'}} >NET(Pol.Sc.)	</td>
            <td style={{backgroundColor: 'rgb(254 202 202)'}} >UGC	</td>
            <td  style={{backgroundColor: 'rgb(254 202 202)'}}>UGC	</td>
            <td  style={{backgroundColor: 'rgb(254 202 202)'}}>59%</td>
          </tr>
          <tr>
            <th scope="row" style={{backgroundColor: 'rgb(254 202 202)'}}>2018	</th>
            <td style={{backgroundColor: 'rgb(254 202 202)'}}>M.A.	</td>
            <td style={{backgroundColor: 'rgb(254 202 202)'}}>Distance Eduction	</td>
            <td style={{backgroundColor: 'rgb(254 202 202)'}}>Kurukshetra university	</td>
            <td style={{backgroundColor: 'rgb(254 202 202)'}}>55%</td>
          </tr>
          <tr>
            <th scope="row" style={{backgroundColor: 'rgb(254 202 202)'}}>      2011	</th>
            <td style={{backgroundColor: 'rgb(254 202 202)'}}>M.Sc.(phy.)	</td>
            <td style={{backgroundColor: 'rgb(254 202 202)'}}>Bundelkhand university	</td>
            <td style={{backgroundColor: 'rgb(254 202 202)'}}>Bundelkhand university	</td>
            <td style={{backgroundColor: 'rgb(254 202 202)'}}>	70%</td>
          </tr>
          <tr>
            <th style={{backgroundColor: 'rgb(254 202 202)'}}>      2009	</th>
            <td style={{backgroundColor: 'rgb(254 202 202)'}}>BE(ECE)	</td>
            <td style={{backgroundColor: 'rgb(254 202 202)'}}>UIET	</td>
            <td style={{backgroundColor: 'rgb(254 202 202)'}}>61%</td>
            <td style={{backgroundColor: 'rgb(254 202 202)'}}>2009</td>
          </tr>
          <tr>
            <th style={{backgroundColor: 'rgb(254 202 202)'}} scope="row">      2003	</th>
            <td style={{backgroundColor: 'rgb(254 202 202)'}}>AISSCE	</td>
            <td style={{backgroundColor: 'rgb(254 202 202)'}}>Vishvas senior secondary school, Hisar	</td>
            <td style={{backgroundColor: 'rgb(254 202 202)'}}>CBSE	</td>
            <td style={{backgroundColor: 'rgb(254 202 202)'}}>67 %</td>
          </tr>
          <tr>
            <th style={{backgroundColor: 'rgb(254 202 202)'}} scope="row">      2001	</th>
            <td style={{backgroundColor: 'rgb(254 202 202)'}}>AISSE	</td>
            <td style={{backgroundColor: 'rgb(254 202 202)'}}>Vishvas senior secondary school, Hisar	</td>
            <td style={{backgroundColor: 'rgb(254 202 202)'}}>CBSE	</td>
            <td style={{backgroundColor: 'rgb(254 202 202)'}}>54 %</td>
          </tr>
        </tbody>
      </table> */}
      </div>
      <h2 className="bg-red-600 text-right text-2xl font-serif text-slate-700 mb-4 mx-8 rounded-3xl pr-8"> SUMMER INTERNSHIP AND PROFESSIONAL COURSES</h2>
      <div>
        <ul className="text-left text-xl font-serif text-slate-900 mb-4 pl-14 list-disc">
          <li>Done certificate course in Fundamental of digital marketing from Google.</li>
          <li>       Done online certificate course in Python programming.</li>
          <li> 	Done the Robotics Workshop conducted by NEXT SAPIENS.</li>
          <li> 	Done a 45 days training in robotics from NEXT SAPIENS. </li>
          <li> 	Done sixweek training in VLSI from SCL (Semiconductor Complex Limited), Mohali. </li>
          <li> 	Done six week course in “AVR programming and architecture”</li>
        </ul>
      </div>
      <h2 className="bg-red-600 text-right text-2xl font-serif text-slate-700 mb-4 mx-8 rounded-3xl pr-8"> EXTRACURRICULAR ACTIVITIES</h2>
      <div>
        <ul className="text-left text-xl font-serif text-slate-900 mb-4 pl-14 list-disc">
          <li> Run my own ITI as a partner at kaimari road hisar</li>
          <li> 	Participated in robotics competition titled”rail track inspector” at IIT Kharagpur.</li>
          <li> 	Won electronics quiz at jnangni06 at GKV Haridwar and entered the final round of GK quiz and paper presentation contest at same fest.</li>
          <li>  Won several participation prizes in many other Quizzes, Olympiad & Socio-cultural activities at National level. </li>
          <li>  Participated in Robotics Event (Robowars) in IIT Delhi Fest in 2007.</li>
          <li> 	Taught several students unable to bear tuition expense.</li>
          <li> 	Published my own magazine in the field of biotechnology named “Bioimpulse” with circulation of about 5000 and its 3 issues are published till date.</li>
          <li> 	A founding member and first CTO (Chief Technical Officer) of Engineers without Border Punjab University chapter.</li>
          <li> 	Published a paper titled “A review of evolutionary robotics” in CHASCON 2009 held at Punjab University, Chandigarh.</li>
          <li> 	Worked in YOUTH UNITED, a  registered NGO as executive member for more than a year and worked on many projects, 
      among them prominent being the educational campaign, in it we taught poor children  in government schools and in 
      slums by visiting schools in their locality free of cost </li>
        </ul>
      </div>
      <h2 className="bg-red-600 text-right text-2xl font-serif text-slate-700 mb-4 mx-8 rounded-3xl pr-8"> TECHNICAL SKILLS</h2>
      <div>
        <ul className="text-left text-xl font-serif text-slate-900 mb-4 pl-14 list-disc">
          <li>Bootstrap, tailwindCSS, React, Node, Express frameworks</li>
          <li>HTML, CSS, Java Script, python programming languages</li>
          <li>   MS-DOS, Windows</li>
          <li>	C Language.</li>
          <li> 	AVR Programming in assembly language</li>
          <li> 	Designing mechanical models for various types of robotics projects. </li>
        </ul>
      </div>
      <h2 className="bg-red-600 text-right text-2xl font-serif text-slate-700 mb-4 mx-8 rounded-3xl pr-8"> INTERESTS</h2>
      <div>
        <ul className="text-left text-xl font-serif text-slate-900 mb-4 pl-14 list-disc">
          <li>  Listening to music, Playing football and Badminton and cricket.</li>
          <li>	Reading books, newspaper and magazines etc.</li>
          <li>  Currently working on a testing platform for IIT JEE</li>
          <li>	Involved in other project in field of experiential learning, alternative eduction, Food delivery etc.</li>

        </ul>
      </div>
      <h2 className="bg-red-600 text-right text-2xl font-serif text-slate-700 mb-4 mx-8 rounded-3xl pr-8"> LANGUAGES KNOWN</h2>
      <div>
        <ul className="text-left text-xl font-serif text-slate-900 mb-4 pl-14 list-disc">
          <li>  English</li>
          <li>	Hindi</li>
          

        </ul>
      </div>
    </div>
  );
}

export default App;
