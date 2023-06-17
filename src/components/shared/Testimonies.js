import { getUsernameFromEmail } from "../Utiles";

function Testimonies(props) {
  const comment = props.comment;
  return (
    <div className="flex gap-7 flex-col p-7 mx-auto lg:m-0 rounded-lg shadow-xl w-[300px]">
      <img src="/test/user.png" alt="user" className="h-16 w-16 rounded-full mx-auto" />
      <p className="text-wrapper text-lg text-center h-32 text-[#737373]">
        {comment.comment}
      </p>
      <div className="flex flex-row gap-1 items-center mx-auto">
        <img src="/test/star.png" alt="star" className={`w-5 h-5`}/>
        <img src="/test/star.png" alt="star" className={`w-5 h-5 ${comment.rating<2 && "hidden"}`}/>
        <img src="/test/star.png" alt="star" className={`w-5 h-5 ${comment.rating<3 && "hidden"}`}/>
        <img src="/test/star.png" alt="star" className={`w-5 h-5 ${comment.rating<4 && "hidden"}`}/>
        <img src="/test/star.png" alt="star" className={`w-5 h-5 ${comment.rating<5 && "hidden"}`}/>
      </div>
      <p className="text-lg text-center text-[#23A6F0]">{getUsernameFromEmail(comment.id)}</p>
    </div>
  );
}

export default Testimonies;
