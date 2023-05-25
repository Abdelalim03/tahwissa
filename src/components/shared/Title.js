const Title = ( {first , second}) => {
    return ( 
        <div className=" flex flex-col justify-center items-center  ">
        <p className="lg:text-[30px] text-[20px] font-bold"> {first}</p>
        <p className="lg:text-[30px] text-[20px] font-bold"> {second} </p>
        <img className="lg:w-48 w-40 pt-[1%]" src='/sections/addPointForm/Line.png' />
        </div>
     );
}
 
export default Title;