import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import htmlpic from "./unnamed.png"
import csspic from "./css3.png"
import pythonpic from "./python.webp"
import javapic from "./js.webp"
import reactpic from "./react.jpg"
import nodepic from "./node.png"
import expresspic from "./express-js.png"
import tailwindpic from "./tailwind.png"
import dartpic from "./Dart.png"

export default function Technologies() {
  return (
    <div style={{ minHeight: "100vh" }} className='bg-red-200 flex flex-wrap justify-around '>


      <span className='m-10'>
        <Card className="w-80 sm:w-96">
          <CardHeader floated={false} className="drop-shadow-xl hover:rounded-full h-64 sm:h-80">
            <img src={htmlpic} className= "w-full h-full" alt="" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              HTML
            </Typography>
            <Tooltip 
            content="HTML is the standard markup language for Web pages. With HTML you can create your own Website.">
              <Typography
                as="a"
                href="https://www.w3schools.com/html/"
                variant="lead"
                color="blue"
                textGradient
              >
                Know more
              </Typography>
            </Tooltip>
          </CardBody>

        </Card>
      </span>
      <span className='m-10'>
      <Card className="w-80 sm:w-96">
          <CardHeader floated={false} className="drop-shadow-xl hover:rounded-full h-64 sm:h-80">
            <img src={csspic} alt="" className= " h-full"/>
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              CSS
            </Typography>
            <Tooltip 
            content="CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed">
              <Typography
                as="a"
                href="https://www.w3schools.com/css/"
                variant="lead"
                color="blue"
                textGradient
              >
                Know more
              </Typography>
            </Tooltip>
          </CardBody>

        </Card>
      </span>
      <span className='m-10'>
      <Card className="w-80 sm:w-96">
          <CardHeader floated={false} className="drop-shadow-xl hover:rounded-full h-64 sm:h-80">
            <img src={javapic} alt="" className= " h-full" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Java Script
            </Typography>
            <Tooltip 
            content="JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web.">
              <Typography
                as="a"
                href="https://www.w3schools.com/js/"
                variant="lead"
                color="blue"
                textGradient
              >
                Know more
              </Typography>
            </Tooltip>
          </CardBody>

        </Card>
      </span>
      <span className='m-10'>
      <Card className="w-80 sm:w-96">
          <CardHeader floated={false} className="drop-shadow-xl hover:rounded-full h-64 sm:h-80">
            <img src={pythonpic} alt="" className= " h-full"/>
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Python
            </Typography>
            <Tooltip 
            content="Python is a programming language that lets you work quickly and integrate systems more effectively.">
              <Typography
                as="a"
                href="https://www.python.org/"
                variant="lead"
                color="blue"
                textGradient
              >
                Know more
              </Typography>
            </Tooltip>
          </CardBody>

        </Card>
      </span>
      <span className='m-10'>
      <Card className="w-80 sm:w-96">
          <CardHeader floated={false} className="drop-shadow-xl hover:rounded-full h-64 sm:h-80">
            <img src={reactpic} alt="" className= "w-full h-full"/>
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              React JS
            </Typography>
            <Tooltip 
            content="The library for web and native user interfaces">
              <Typography
                as="a"
                href="https://react.dev/"
                variant="lead"
                color="blue"
                textGradient
              >
                Know more
              </Typography>
            </Tooltip>
          </CardBody>

        </Card>
      </span>
      <span className='m-10'>
      <Card className="w-80 sm:w-96">
          <CardHeader floated={false} className="drop-shadow-xl hover:rounded-full h-64 sm:h-80">
            <img src={nodepic} alt="" className= "w-full h-full"/>
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Node JS
            </Typography>
            <Tooltip 
            content="Node.js is an open source server environment.">
              <Typography
                as="a"
                href="https://nodejs.org/en"
                variant="lead"
                color="blue"
                textGradient
              >
                Know more
              </Typography>
            </Tooltip>
          </CardBody>

        </Card>
      </span>
      <span className='m-10'>
      <Card className="w-80 sm:w-96">
          <CardHeader floated={false} className="drop-shadow-xl hover:rounded-full h-64 sm:h-80">
            <img src={expresspic} alt="" className= "w-full h-full"/>
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Express JS
            </Typography>
            <Tooltip 
            content="Fast, unopinionated, minimalist web framework for Node.js">
              <Typography
                as="a"
                href="https://expressjs.com/"
                variant="lead"
                color="blue"
                textGradient
              >
                Know more
              </Typography>
            </Tooltip>
          </CardBody>

        </Card>
      </span>
      <span className='m-10'>
      <Card className="w-80 sm:w-96">
          <CardHeader floated={false} className="drop-shadow-xl hover:rounded-full h-64 sm:h-80">
            <img src={tailwindpic} alt="" className= "w-full h-full"/>
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Tailwind CSS
            </Typography>
            <Tooltip 
            content="Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.">
              <Typography
                as="a"
                href="https://tailwindcss.com/"
                variant="lead"
                color="blue"
                textGradient
              >
                Know more
              </Typography>
            </Tooltip>
          </CardBody>

        </Card>
      </span>
      <span className='m-10'>
      <Card className="w-80 sm:w-96">
          <CardHeader floated={false} className="drop-shadow-xl hover:rounded-full h-64 sm:h-80">
            <img src={dartpic} alt="" className= "w-full h-full"/>
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Dart
            </Typography>
            <Tooltip 
            content="An approachable, portable, and productive language for high-quality apps on any platform">
              <Typography
                as="a"
                href="https://dart.dev/"
                variant="lead"
                color="blue"
                textGradient
              >
                Know more
              </Typography>
            </Tooltip>
          </CardBody>

        </Card>
      </span>
    </div>
  )
}
