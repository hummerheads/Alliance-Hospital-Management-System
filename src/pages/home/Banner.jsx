const Banner = () => {
  return (
    <div>
      <div className="w-full relative">
        <video className="w-full h-auto" autoPlay loop muted playsInline>
          <source src="banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className=" absolute bottom-10 w-full">
          <div className="flex gap-5">
            <div className="w-1/6 py-5 rounded-xl mx-auto bg-white">
              <img
                className="mx-auto w-20 h-20"
                src="/icons/appointment.png"
                alt=""
              />
              <p className="text-center">Book Appointment</p>
            </div>
            <div className="w-1/6 py-5 rounded-xl mx-auto bg-white">
              <img
                className="mx-auto w-20 h-20"
                src="/icons/medicine.png"
                alt=""
              />
              <p className="text-center">Buy Medicine</p>
            </div>
            <div className="w-1/6 py-5 rounded-xl mx-auto bg-white">
              <img
                className="mx-auto w-20 h-20 "
                src="/icons/doctor.png"
                alt=""
              />
              <p className="text-center">Find Doctors</p>
            </div>
            <div className="w-1/6 py-5 rounded-xl mx-auto bg-white">
              <img
                className="mx-auto w-20 h-20"
                src="/icons/health.png"
                alt=""
              />
              <p className="text-center">Health Package</p>
            </div>
            <div className="w-1/6 py-5 rounded-xl mx-auto bg-white">
              <img
                className="mx-auto w-20 h-20"
                src="/icons/record.png"
                alt=""
              />
              <p className="text-center">View Health Record</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-white">
        <div>
            <h1></h1>
            <p></p>
        </div>
       
      </div>
    </div>
  );
};

export default Banner;
