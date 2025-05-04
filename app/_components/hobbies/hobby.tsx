

const Hobby = ({ emoji, text }: {emoji: any, text: string}) => {
    return (
      <div className="hover:-translate-y-4 transition-all  duration-500">
        <div className="flex flex-col items-center gap-2 relative">
          <div className="bg-white h-[60px] w-[60px] flex items-center rounded-lg justify-center hover:scale-105 transform transition-all duration-500 text-3xl border-4 hover:border-purple-600">
            {emoji}
          </div>
          <p className="text-black">{text}</p>
        </div>
        <div className="w-[100px] h-[200px] absolute top-[50px] -z-10"></div>
      </div>
    );
  };
  
  export default Hobby;