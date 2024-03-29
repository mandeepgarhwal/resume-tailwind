import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit'
import React from 'react'
import foodzap from "./foodzaps_logo.jpeg"
import explearn from "./Experiential-Learning.png"
import lms from "./lms.webp"
import dazzle from "./dazzle.png"
import mmi from "./mmi.jpg"
import phd from "./india-china.jpeg"
import cine from "./cinema.jpg"
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from 'react'

export default function Projects() {
  useEffect(() => {
    toast("Entering danger zone!", {
      position: "top-center"
    });
  

  }, [ ])
  
  return (
    <div className='bg-red-200 pt-5 sm:pl-10'>
      <MDBContainer fluid  className=' -ml-4  sm:mx-0'>
        <MDBRow center className='my-5'>
          <MDBCol size={5}>
            <div>
              <MDBCard style={{ maxWidth: '540px', minWidth: "170px" }} className="min-h-[442px] sm:min-h-[210px]">
                <MDBRow className='g-0'>
                  <MDBCol md='4'>
                    <MDBCardImage src={foodzap} alt='...' fluid className='w-full h-full' />
                  </MDBCol>
                  <MDBCol md='8'>
                    <MDBCardBody>
                      <MDBCardTitle className='text-xs sm:text-xl font-bold'>Food Zap</MDBCardTitle>
                      <MDBCardText className='text-xs sm:text-base'>
                        A food ordering app with focus on user experience and adaptability to user tastes. Next slide will contain Few principles to be followed in app design which demonstrates focus on user experience
                      </MDBCardText>
                      <MDBCardText>
                        <small className='text-muted'>2022</small>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </div>
          </MDBCol>
          <MDBCol size={5}>
            <div >
              <MDBCard style={{ maxWidth: '540px', minWidth: "170px" }} className="min-h-[442px] sm:min-h-[210px]" >
                <MDBRow className='g-0'>
                  <MDBCol md='4'>
                    <MDBCardImage src={explearn} alt='...' fluid className='w-full h-full' />
                  </MDBCol>
                  <MDBCol md='8'>
                    <MDBCardBody>
                      <MDBCardTitle className='text-xs sm:text-xl font-bold'>Experiencial Learning</MDBCardTitle>
                      <MDBCardText className='text-xs sm:text-base'>
                        I am proposing rearrangement of current
                        popular learning environment to correct the prevailing order of
                        type of learning to take it closer to optimum
                        by use of a set of principles known as
                        principles of experience learning.
                      </MDBCardText>
                      <MDBCardText>
                        <small className='text-muted'>2021</small>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow around className='my-5'>
          <MDBCol size={5}>
            <div>
              <MDBCard style={{ maxWidth: '540px', minWidth: "170px" }} className="min-h-[442px] sm:min-h-[210px]">
                <MDBRow className='g-0'>
                  <MDBCol md='4'>
                    <MDBCardImage src= {lms} alt='...' fluid  className='w-full h-full'/>
                  </MDBCol>
                  <MDBCol md='8'>
                    <MDBCardBody>
                      <MDBCardTitle className='text-xs sm:text-xl font-bold'> Learning Management system</MDBCardTitle>
                      <MDBCardText className='text-xs sm:text-base'>
                        It is proposed to be a online AI enabled learning managemant system which will supplement kearning oucomes of the students by providing use knowledge and practice to him and also geenrate helpful indicators for his teachers
                      </MDBCardText>
                      <MDBCardText>
                        <small className='text-muted'>2020</small>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </div>
          </MDBCol>
          <MDBCol size={5}>
            <div>
              <MDBCard style={{ maxWidth: '540px', minWidth: "170px" }} className="min-h-[442px] sm:min-h-[210px]">
                <MDBRow className='g-0'>
                  <MDBCol md='4'>
                    <MDBCardImage src= {dazzle} alt='...' fluid className='w-full h-full'/>
                  </MDBCol>
                  <MDBCol md='8'>
                    <MDBCardBody>
                      <MDBCardTitle className='text-xs sm:text-xl font-bold'>Dazzle classes</MDBCardTitle>
                      <MDBCardText className='text-xs sm:text-base'>
                        Dazzle Classes is spearheaded by a young dynamic team of professionals from the Medical & Engineering background and has wide experience in the field of Education & Career Counseling. Dazzle Classes is setup with a vision.
                      </MDBCardText>
                      <MDBCardText>
                        <small className='text-muted'>2011</small>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow between className='my-5'>
          <MDBCol size={5}>
            <div>
              <MDBCard style={{ maxWidth: '540px', minWidth: "170px" }} className="min-h-[442px] sm:min-h-[210px]">
                <MDBRow className='g-0'>
                  <MDBCol md='4'>
                    <MDBCardImage src= {mmi} alt='...' fluid className='w-full h-full'/>
                  </MDBCol>
                  <MDBCol md='8'>
                    <MDBCardBody>
                      <MDBCardTitle className='text-xs sm:text-xl font-bold'>Man and Machine Interface</MDBCardTitle>
                      <MDBCardText className='text-xs sm:text-base'>
                        This projects aims to bridge the gap between man and machines he use by making their communication simple and effortless by mapping brain activity using invasive and non invasive techinques and give him ability to control machines through it.
                      </MDBCardText>
                      <MDBCardText>
                        <small className='text-muted'>2012</small>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </div>
          </MDBCol>
          <MDBCol size={5}>
            <div>
              <MDBCard style={{ maxWidth: '540px', minWidth: "170px" }} className="min-h-[442px] sm:min-h-[210px]">
                <MDBRow className='g-0'>
                  <MDBCol md='4'>
                    <MDBCardImage src= {phd} alt='...' fluid className='w-full h-full'/>
                  </MDBCol>
                  <MDBCol md='8'>
                    <MDBCardBody>
                      <MDBCardTitle className='text-xs sm:text-xl font-bold -mt-1'>India and china: Historical Reverberations</MDBCardTitle>
                      <MDBCardText className='text-xs sm:text-base'>
                        This is as thesis on India and China relation by taking both not as countries only but rather as civilisations to better understand 20 centuries on interactions far earlier then Treaty of Westphalia. 
                      </MDBCardText>
                      <MDBCardText>
                        <small className='text-muted'>2011-13</small>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow center className='mt-5'>
          <MDBCol size={5}>
            <div>
              <MDBCard style={{ maxWidth: '540px', minWidth: "170px" }}>
                <MDBRow className='g-0'>
                  <MDBCol md='4'>
                    <MDBCardImage src= {cine} alt='...' fluid className='h-full w-full'/>
                  </MDBCol>
                  <MDBCol md='8'>
                    <MDBCardBody>
                      <MDBCardTitle className='text-xs sm:text-xl font-bold'>Cinema and India: Fate intertwined</MDBCardTitle>
                      <MDBCardText className='text-xs sm:text-base'>
                        This project is in form of book exploring evolution of indian cinema since independence in context with changes in indian society and explore how they affected each other sometimes for better and sometime for worse.
                      </MDBCardText>
                      <MDBCardText>
                        <small className='text-muted'>2014-15</small>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </div>
          </MDBCol>

        </MDBRow>


      </MDBContainer>


    </div>
  )
}
