function Loading() {
  return (
    <div className="w-screen h-screen flex text-6xl my-auto items-center justify-center space-x-16">
      <div className="">
        <p className="font-semibold tracking-tighter text-neutral-500 animate-pulse">
          Astronomy
          <br />
          Picture
          <br />
          of the
          <br />
          Day
        </p>
        <div className="flex justify-center">
          <div className="absolute bottom-8 mx-auto">
            <div className="animate-bounce flex space-x-2">
              <div className=" h-4 w-4 rounded-full bg-neutral-300"></div>
              <div className=" h-4 w-4 rounded-full bg-neutral-300"></div>
              <div className=" h-4 w-4 rounded-full bg-neutral-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
