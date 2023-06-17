import Title from "@/components/shared/Title";
import { useRouter } from "next/router";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import EventCard from "@/components/shared/EventCard";
import Testimonies from "@/components/shared/Testimonies";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/components/AuthContext";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-daisyui";

function Singlepoint() {
  const router = useRouter();
  const { singlepoint } = router.query;
  const { authTokens, user } = useAuth();

  const [pointdetails, setpointdetails] = useState({});
  const [pointsimgs, setpointimgs] = useState([]);
  const [pointTranspotations, setpointTransportations] = useState([]);
  const [pointevents, setpointevents] = useState([]);
  const [pointComments, setpointComments] = useState([]);

  useEffect(() => {
    if (singlepoint) {
      fetch(`http://127.0.0.1:8000/points-of-interest/${singlepoint.replace(/_/g, ' ')}/`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setpointdetails(data);
        })
        .catch((err) => console.log(err));
    }
  }, [singlepoint]);

  useEffect(() => {
    if (singlepoint) {
      fetch(`http://127.0.0.1:8000/photos/?point_of_interest=${singlepoint.replace(/_/g, ' ')}`)
        .then((response) => response.json())
        .then((data) => {
          setpointimgs(data);
        })
        .catch((err) => console.log(err));
    }
  }, [singlepoint]);

  useEffect(() => {
    if (singlepoint) {
      fetch(
        `http://127.0.0.1:8000/point-of-interest-transportations/?point_of_interest=${singlepoint.replace(/_/g, ' ')}`
      )
        .then((response) => response.json())
        .then((data) => {
          setpointTransportations(data);
        })
        .catch((err) => console.log(err));
    }
  }, [singlepoint]);

  useEffect(() => {
    if (singlepoint) {
      fetch(`http://127.0.0.1:8000/events/?point_of_interest=${singlepoint.replace(/_/g, ' ')}`)
        .then((response) => response.json())
        .then((data) => {
          setpointevents(data);
        })
        .catch((err) => console.log(err));
    }
  }, [singlepoint]);

  useEffect(() => {
    if (singlepoint) {
      fetch(`http://127.0.0.1:8000/events/?point_of_interest=${singlepoint.replace(/_/g, ' ')}`)
        .then((response) => response.json())
        .then((data) => {
          setpointevents(data);
        })
        .catch((err) => console.log(err));
    }
  }, [singlepoint]);

  useEffect(() => {
    if (singlepoint) {
      fetch(`http://127.0.0.1:8000/comments/?point_of_interest=${singlepoint.replace(/_/g, ' ')}`)
        .then((response) => response.json())
        .then((data) => {
          let list = data.slice(0, 3);
          setpointComments(list);
        })
        .catch((err) => console.log(err));
    }
  }, [singlepoint]);

  SwiperCore.use([Navigation]);

  const [inputs, setInputs] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [color, setColor] = useState("");

  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  const handleSubmit = async () => {
    console.log(
      JSON.stringify({
        id: `${user.email}-${singlepoint}`,
        comment: inputs.comment,
        rating: parseInt(inputs.rating),
        tourist: user.user_id,
        point_of_interest: singlepoint,
      })
    );
    const response = await fetch("http://127.0.0.1:8000/comments/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authTokens.access}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: `${user.email}-${singlepoint.replace(/_/g, ' ')}`,
        comment: inputs.comment,
        rating: parseInt(inputs.rating),
        tourist: user.user_id,
        point_of_interest: singlepoint.replace(/_/g, ' '),
      }),
    });
    if (response.ok) {
      setSnackbarMessage("Comment Saved Successfully!");
      setShowSnackbar(true);
      setColor("bg-green-300");
    } else {
      if (response.status === 401) {
        setSnackbarMessage("Unauthorised to comment, Sign in!");
        setShowSnackbar(true);
        setColor("bg-red-300");
      } else if (response.status === 403) {
        setSnackbarMessage("You can only comment one time!");
        setShowSnackbar(true);
        setColor("bg-red-300");
      } else {
        setSnackbarMessage("An error occured!");
        setShowSnackbar(true);
        setColor("bg-red-300");
      }
    }
    setInputs({ comment: "", rating: "" });
  };

  return (
    <div className=" py-24  min-h-screen overflow-auto">
      <Title first={"Point Details"} />
      <div className="container mb-5 p-10 w-fit shadow-xl rounded-lg flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col-reverse lg:flex-row gap-10 w-full">
          <div className="flex flex-col w-fit p-7 mx-auto lg:m-0 rounded-lg shadow-xl">
            <Swiper
              navigation={true}
              className="rounded-lg w-[250px] h-[200px] lg:w-[350px]"
            >
              {pointsimgs.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    className="h-full w-full"
                    src={`http://127.0.0.1:8000${image.image}`}
                    alt={`Image ${index}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="pt-6 flex flex-col gap-3">
              <p className="text-2xl font-bold text-secondColor">
                {pointdetails.name}
              </p>
              <p className="text-xl font-medium">
                {" "}
                Categroy: {pointdetails.category}
              </p>
              <p className="text-xl font-medium">
                Themes: {pointdetails.theme}
              </p>
              <div className="flex flex-row items-center gap-3">
                {/*<p className="text-xl font-medium">Come by:</p>
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
              />*/}
                <p className="text-xl font-medium">Opening: </p>
                <span className="text-xl font-medium">
                  {pointdetails.openhour}
                </span>
              </div>
              <div className="flex flex-row items-center gap-3">
                <p className="text-xl font-medium">Closing: </p>
                <span className="text-xl font-medium">
                  {pointdetails.closehour}
                </span>
              </div>
            </div>
          </div>
          {/* <div
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
          </div> */}
          <iframe
            src="https://www.youtube.com/embed/GFgiatqPJ5I"
            className="link rounded-lg flex justify-center items-center bg-slate-400 lg:w-[750px]"
          ></iframe>
        </div>
        <div className="w-full">
          <div
            style={{
              backgroundImage: `url('/background/rochets.jpg')`,
              backgroundSize: "cover",
            }}
            className="flex flex-col w-full px-4 gap-4 py-5 lg:py-10 rounded-t-lg backdrop-blur-lg"
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
          <div
            style={{
              backgroundImage: `url('/background/tran_bg.jpg')`,
              backgroundSize: "cover",
            }}
            className="w-full rounded-b-lg"
          >
            <div className="flex justify-center items-center p-6 h-full rounded-b-lg bg-gray-400 bg-opacity-30 backdrop-blur-lg">
              <div className="flex flex-row gap-5 lg:gap-16">
                {pointTranspotations.map((transport) => (
                  <img
                    src={`/transport/${transport.transportation}.png`}
                    alt="transport"
                    className={`w-11 h-11 lg:h-20 lg:w-20`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        
      </div>
      <Title first={"Point Events"} />
      <div className="container mb-5 p-10 w-fit shadow-xl rounded-lg flex flex-col lg:grid lg:grid-cols-3 gap-10">
        {pointevents.map((event) => (
          <Link href={`http://localhost:3000/interestpoints/sidi/events:${event.name.replace(/\s/g, '_')}`}>
            <EventCard event={event}/>
          </Link>
        ))}
      </div>

      <Title first={"Testimonies"} />
      <div className="container mb-5 p-10 w-fit rounded-lg flex flex-col lg:flex-row gap-10">
        {pointComments.map((comment) => (
          <Testimonies comment={comment} />
        ))}
      </div>
      <Title first={"Add Comment"} />
      <div className="container w-full py-10 px-16 shadow-xl rounded-lg flex flex-col gap-5">
        <input
          type="text"
          className="resize-none p-2 border-[1px] border-[rgba(0, 0, 0, 0.3)] rounded-sm"
          name="comment"
          placeholder="Add your comment here"
          value={inputs.comment || ""}
          maxLength={200}
          onChange={handleChange}
        ></input>
        <input
          type="number"
          className="resize-none p-2 border-[1px] border-[rgba(0, 0, 0, 0.3)] rounded-sm"
          name="rating"
          placeholder="From 1 to 5 stars, enter you rating here"
          value={inputs.rating || ""}
          onChange={handleChange}
          max={"5"}
          min={"1"}
        ></input>
        <div className="w-full flex flex-row-reverse">
          <button
            onClick={handleSubmit}
            className="submit-button rounded-lg p-2 w-fit flex justify-center items-center gap-2 cursor-pointer hover:scale-110 bg-[#EE462F] text-white"
          >
            <img
              alt="submit"
              src="/sections/addPointForm/submit.png"
              className="w-3 h-3"
            />
            <span>Submit</span>
          </button>
        </div>
      </div>
      {showSnackbar && (
        <div
          className={`fixed bottom-10 right-2 lg:right-10 ${color} flex flex-row gap-3 items-center p-4 shadow-md rounded-md`}
        >
          <div>{snackbarMessage}</div>
          <button onClick={handleSnackbarClose}>
            <AiFillCloseCircle />
          </button>
        </div>
      )}
    </div>
  );
}

export default Singlepoint;
