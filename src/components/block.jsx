// differt colour wala code

// const Block = (props) => {
//     const array = [1,2,3,4,5,6,7,8,9,10]
    
//     console.log(props,"props")
//     return(
        
//         <div style={{
//             width:"300px",
//             border:"3px solid black",
//             background:props.background,
//             color: props.color,
//         }}>
//             {array.map((num) => (
//                 <p>{props.number} * {num} = {props.number * num}</p>
                
//             ))}
//         </div>
//     );
//     }
// export default Block;

// Two

// const Block=(props) => {
//     let array =[1,2,3,4,5,6,7,8,9,10]
//    let newarray= array.map((_,index)=>(
//         <p>
//             {props.number}x{index+1}={props.number*(index+1)}
//         </p>
//     ))
//     return <div style = {
//         {
//         color : props.color,
//         background : props.background,
//         border:'5px solid black',
//         padding:'100px',
//         fontWeight:'bold',
//         fontSize:'25px'
        
//         }
//     }>
//         {newarray}
//     </div>
// }

// export default Block;