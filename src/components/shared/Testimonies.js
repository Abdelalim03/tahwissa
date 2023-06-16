function Testimonies() {
  return (
    <div className="flex gap-7 flex-col p-7 mx-auto lg:m-0 rounded-lg shadow-xl w-[300px]">
      <img src="/test/user.png" alt="user" className="h-16 w-16 rounded-full mx-auto" />
      <p className="text-lg text-center text-[#737373]">
        Destinize membantu saya Mencari spot tempat wisata baru di Indonesia
        dengan Mudah
      </p>
      <div className="flex flex-row gap-1 items-center mx-auto">
        <img src="/test/star.png" alt="star" className="w-5 h-5"/>
        <img src="/test/star.png" alt="star" className="w-5 h-5"/>
        <img src="/test/star.png" alt="star" className="w-5 h-5"/>
        <img src="/test/star.png" alt="star" className="w-5 h-5"/>
        <img src="/test/star.png" alt="star" className="w-5 h-5"/>
      </div>
      <p className="text-lg text-center text-[#23A6F0]">User Name</p>
    </div>
  );
}

export default Testimonies;
