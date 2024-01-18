import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Foter from './components/Foter';
import TaskfbPost from './components/TaskfbPost';
import Car from './components/Car';
import { person } from './utils';
import Block from './components/block';
import Counting from './components/Counting';
import ImageCard from './components/ImageCard';
import Cartask4 from './components/Cartask4';
import ProductCard from './components/ProductCard';
import InputTask from './components/InputTask';
import { useState } from 'react';
import UpparCase from './components/UpparCase';
import Task from './components/Task';
import Zee from './components/Zee';
import Aone from './components/Aone';
import Atwo from './components/Atwo';
import Athree from './components/Athree';
import Aeleven from './components/Aeleven';
import Afour from './Afour';
import Afive from './components/Afive';
import Asix from './components/Asix';
import Afiften from './components/Afiften';
import Atwelve from './Atwelve';
import Athirten from './components/Athirten';
import Afourtin from './Afourtin';
import Anine from './Anine';
import Aseven from './Aseven';
import Aeight from './components/Aeight';
import Testing from './components/testing';
import Htmlpage from './components/Htmlpage';
export function App()

//------------------------one---------------------------------------
// {
//   const array = [1,2,3,4,5,6,7,8,9,10]
//   const color = ["pink", "green","yellow","white","black","pink","green","pink","black"]
//   return (
//     <div className="App" >

//       <header className="App-header">

//       {array.map((number,index) => (
//         <Block color={"red"} number={number} background={color[index]}/>
//       ))}
//         </header>
//     </div>
//   );
// }


//----------------- two -------------------------------------


// {
//     const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     const color = [
//       {  value: "Red" },
//       {  value: "Yellow" },
//       {  value: "Green" },
//       {  value: "Pink" },
//       { value: "Blue" },
//       {  value: "Orange" },
//       {  value: "White" },
//       {  value: "White" }, 
//       {  value: "#Gray" },
//       {  value: "Golden" },
//     ];

//     return (
//       <div style={{ display: "grid",gridTemplateColumns:'repeat(3,1fr)',alignItems:'center',justifyContent:'space-between',backgroundColor:'palegreen' }}>
//         {array.map((value, index) => (
//           <Block number={value} background={color[index].value} />
//         ))}
//       </div>
//     );
//   }



//----------------------------------Task One Header footer------------------------
{
   const arr = [
      {
         Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCbmSfemii3dps00qLZfnVBoxNLD5Q8VRCnK7DYJe8D7iN73s_Gz5KAt4mza-LCemniDs&usqp=CAU'
         , label: 'The image of Sunset behind the trees',
         description: 'The image of Sunset behind the trees',
         // background_color:'grey'
      },
      {
         Image: 'https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg?cs=srgb&dl=pexels-pixabay-326058.jpg&fm=jpg'
         , label: 'The image of Mountain who reflect in River',
         description: ' The image of Mountain who reflect in River',
         // background_color:'silver'
      },
      {
         Image: ' https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'
         , label: 'Image of Mountain',
         description: 'Image of Mountain',
         // background_color:'white'
      }
   ];

   const Cartas = [
      {
         img: 'https://img.freepik.com/free-photo/sports-car-races-through-dark-blurred-motion-generative-ai_188544-12490.jpg',
         carName: 'Mehran',
         description:'2018 Modal Card avliable',
      },
      {
         img: 'data:image/jpeg;base64,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',
         carName: 'Mehran',
         description:'2018 Modal Card avliable',
      },

      {
         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK2AjfBpDCiYfbjfqZm1cZySLUe49m_YyCpg&usqp=CAU',
         carName: 'Mehran',
         description:'2018 Modal Card avliable',
      },
      {
         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYRz6vjJxEnn3_5QhO6KWjht9H4wwLtA9olw&usqp=CAU',
         carName: 'Mehran',
         description:'2018 Modal Card avliable',
      },

   ];

   const Productarr = [
      {
         leptopCompanyName : 'Del',
         leptopImg : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTPORmZttjtvnZFdpVEv5qhRLVgIcRsYtnw&usqp=CAU',
         leptopName : 'Rs 100 (1 % off)',
         cart: 'Add to Cart',
         like: 'Like',
      },
   ];


   const [value, setValue] = useState(
       {
          namee : "AbdulRehman",
          age : "21",
          gender : "Male"
      }
  )

   return (
      <>

         {/* <Navbar title = "AbdulRehman" Pricing = "PriceLsit"/>
   <Body/>
   <Foter/> */}

         {/* <br></br> */}

         {/* <TaskfbPost userName = "AbdulRehman" message="I live it" picture={"https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"} /> */}

         {/* <br></br> */}

         {/* <div className="App">
      <div className="App-header">
      {arr.map((obj)=>(
                    <ImageCard image={obj.Image}
                     label={obj.label} 
                    description={obj.description} 
                    color={obj.color}
                    />
                    ))}
      </div>
    </div> */}

         {/* <br></br> */}

         {/* {
           Cartas.map((obj) => (
              <Cartask4  img = {obj.img}
              carName = {obj.carName}
               description = {obj.description}
              />
           )) 
         } */}

         {/* <br></br> */}
         {/* {
            Productarr.map((obj) => (
               <ProductCard leptopCompanyName = {obj.leptopCompanyName}
               leptopImg = {obj.leptopImg}
               leptopName = {obj.leptopName}
               cart = {obj.cart}
               like = {obj.like}
               />
            ))
            } */}

         {/* <br></br> */}

         {/* <Counting/> */}

         {/* <br></br> */}
         {/* <InputTask/> */}

         {/* <input value={value.namee}
          onChange = {(e) => setValue({...value,namee:e.target.value})}>
         </input> 
         <input value={value.age}
          onChange = {(e) => setValue({...value,age:e.target.value})}>
         </input>
         <input value={value.gender}
          onChange = {(e) => setValue({...value,gender:e.target.value})}>
         </input>
         <p>my Name is { value.namee}</p>
         <p>my Age is { value.age}</p>
         <p>my Gender is { value.gender}</p> */}


         {/* <br></br> */}
         {/* uppar case
         <div className="container">
         <UpparCase heading="Convert To Uppar case"/>
         </div> */}

         {/* <br></br> */}
         {/* <div className="container">
            
         <Task/>


         <Zee/>
         </div> */}
         
          {/* <h1 style={{color:"white", textAlign:"center", border:"2px solid",backgroundColor:"green", padding:"8px"}}>Revers String</h1> */}
         {/* <Aone/> */}
         {/* <h1 style={{color:"white", textAlign:"center", border:"2px solid",backgroundColor:"green", padding:"8px"}}>Palindrom</h1> */}
         {/* <Atwo/> */}
         {/* <h1 style={{color:"white", textAlign:"center", border:"2px solid",backgroundColor:"green", padding:"8px"}}>Factorial</h1> */}
         {/* <Athree/> */}
         {/* <h1 style={{color:"white", textAlign:"center", border:"2px solid",backgroundColor:"green", padding:"8px"}}>4</h1> */}
         {/* <Afour/> */}
         {/* <h1 style={{color:"white", textAlign:"center", border:"2px solid",backgroundColor:"green", padding:"8px"}}>5</h1> */}
         {/* <Afive/> */}
         {/* <h1 style={{color:"white", textAlign:"center", border:"2px solid",backgroundColor:"green", padding:"8px"}}>6</h1> */}
         {/* <Asix/> */}
         {/* <h1 style={{color:"white", textAlign:"center", border:"2px solid",backgroundColor:"green", padding:"8px"}}>7</h1> */}
         {/* <Aseven/> */}
         {/* <h1 style={{color:"white", textAlign:"center", border:"2px solid",backgroundColor:"green", padding:"8px"}}>8</h1> */}
         {/* <Aeight/> */}
         {/* <h1 style={{color:"white", textAlign:"center", border:"2px solid",backgroundColor:"green", padding:"8px"}}>9</h1> */}
         {/* <Anine/> */}
         {/* <h1 style={{color:"white", textAlign:"center", border:"2px solid",backgroundColor:"green", padding:"8px"}}>11</h1> */}
         {/* <Aeleven/> */}
         {/* <h1 style={{color:"white", textAlign:"center", border:"2px solid",backgroundColor:"green", padding:"8px"}}>12</h1> */}
         {/* <Atwelve/> */}
         {/* <h1 style={{color:"white", textAlign:"center", border:"2px solid",backgroundColor:"green", padding:"8px"}}>13</h1> */}
         {/* <Athirten/> */}
         {/* <h1 style={{color:"white", textAlign:"center", border:"2px solid",backgroundColor:"green", padding:"8px"}}>14</h1> */}
         {/* <Afourtin/> */}
         
         {/* <Afiften/> */}


         {/* <Testing/> */}

         <Htmlpage/>

      </>
   );
}

export default App