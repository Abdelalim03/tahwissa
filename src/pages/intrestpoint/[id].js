import Title from "@/components/shared/Title";
import { useRouter } from "next/router";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

const singlepoint = () => {
  const router = useRouter();
  const { id } = router.query;
  const images = ["/test/test2.jpg","/test/test1.jpg", "/test/test3.jpg"];
  SwiperCore.use([Navigation]);

  return (
    <div className="example py-24  min-h-screen overflow-auto">
      <Title first={"Point Details"} />
      <div className="container p-10 w-fit shadow-xl rounded-lg flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col-reverse lg:flex-row gap-10 w-full">
          <div className="flex flex-col w-fit p-7 mx-auto lg:m-0rounded-lg shadow-xl">
            <Swiper
              navigation={true}
              className="rounded-lg w-[250px] h-[200px] lg:w-[350px]"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    className="h-full w-full"
                    src={image}
                    alt={`Image ${index}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="pt-6 flex flex-col gap-5">
              <p className="text-2xl font-bold text-secondColor">
                borj legya w smata - Tipaza
              </p>
              <p className="text-xl font-medium"> Categroy: Lieu</p>
              <p className="text-xl font-medium">Themes: Nature, Histore</p>
              <div className="flex flex-row items-center gap-3">
                <p className="text-xl font-medium">Come by:</p>
                <img
                  src="/transport/bus.png"
                  alt="transport"
                  className={`h-5 w-5`}
                />
                <img
                  src="/transport/tram.png"
                  alt="transport"
                  className={`h-5 w-5`}
                />
                <img
                  src="/transport/metro.png"
                  alt="transport"
                  className={`h-5 w-5`}
                />
                <img
                  src="/transport/train.png"
                  alt="transport"
                  className={`h-5 w-5`}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url('/background/sea.jpg')`,
              backgroundSize: "cover",
            }}
            className="link rounded-lg flex justify-center items-center bg-slate-400 lg:w-[750px]"
          >
            <a
              href="https://www.youtube.com/watch?v=GFgiatqPJ5I"
              className="tooltip bg-mainColor relative h-[60px] w-[60px] rounded-full flex justify-center items-center"
              target="_blank"
            >
              <img src="/background/play.png" alt="play" className="" />
              <span className="tooltiptext font-semibold">About Algeria</span>
            </a>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url('/background/rochets.jpg')`,
            backgroundSize: "cover",
          }}
          className="flex flex-col w-full px-4 gap-4 py-5 lg:py-10 rounded-lg backdrop-blur-lg"
        >
          <p className="text-white text-xl lg:text-3xl font-bold">
            {" "}
            The Point of Intrest Description{" "}
          </p>
          <p className="text-white text-lg lg:text-2xl font-semibold">
            {" "}
            This is some description{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default singlepoint;
