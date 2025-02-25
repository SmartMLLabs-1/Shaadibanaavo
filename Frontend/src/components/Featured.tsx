import { NewspaperSection } from '@/components/NewsPaperSection';

export const Featured = () => {
  return (
    <div className="container flex flex-col max-w-7xl w-full py-14">
      <div className="flex flex-col justify-center gap-y-8">
        <div className="text-xs tracking-[4px] flex items-center justify-center">
          AS FEATURED IN
        </div>

        {/* Newspaper logos */}
        <NewspaperSection />

        {/* Text info */}
        <div className="flex flex-col items-center justify-center flex-1 feature:flex-row mt-10">
          <div className="flex border-t-4 flex-grow w-[80%] feature:w-[20%] border-slate-600 mx-10"></div>
          <div className="text-4xl py-3 text-center">All you need is on us</div>
          <div className="flex border-t-4 flex-grow w-[80%] feature:w-[20%] border-slate-600 mx-10"></div>
        </div>

        {/* Text description */}
        <div className="flex items-center justify-center text-center text-slate-500 font-light px-[20%] tracking-wide">
          We will take care of everything for you — from event planning and curation to design and production
        </div>

        {/* Card section */}
        <div className="flex flex-col items-center justify-center overflow-hidden gap-5 p-4">
          <div className="grid grid-cols-1 feature:grid-cols-3 gap-5 feature:gap-8 w-full max-w-7xl">
            {[
              { title: "Photography", image: "https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D" },
              { title: "Planning", image: "https://images.unsplash.com/photo-1587271636175-90d58cdad458?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
              { title: "Shopping", image: "https://images.unsplash.com/photo-1601482438629-346a273776af?q=80&w=3111&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
              { title: "Decor", image: "https://plus.unsplash.com/premium_photo-1661893944387-1347f1b01f59?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFuJTIwd2VkZGluZyUyMGRlY29yfGVufDB8fDB8fHww" },
              { title: "Memory", image: "https://images.unsplash.com/photo-1493728695749-5a3603bd6908?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D" },
              { title: "Entertainment", image: "https://images.unsplash.com/photo-1717011969223-0217a302ec6f?q=80&w=3086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
            ].map((card, index) => (
              card.title === "Photography" ?
                (
                  <div key={index} className="relative w-full aspect-[4/5] overflow-hidden group">
                    <div className="absolute inset-0">
                      <img
                        src={card.image}
                        alt={`${card.title} image`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30
                    transition-opacity duration-300 group-hover:bg-opacity-70" />
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                      <h2 className="text-3xl invisible group-hover:visible feature:text-4xl font-serif mb-2">
                        Coming Soon...
                      </h2>
                      <h2 className="text-3xl group-hover:invisible feature:text-4xl font-serif mb-2">
                        {card.title}
                      </h2>
                      <a href="#" className="text-sm uppercase group-hover:invisible tracking-wider hover:underline">
                        Learn More
                      </a>
                    </div>
                  </div>
                ) : (
                  <div key={index} className="relative w-full aspect-[4/5] overflow-hidden group">
                    <div className="absolute inset-0">
                      <img
                        src={card.image}
                        alt={`${card.title} image`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30
                  transition-opacity duration-300 group-hover:bg-opacity-70" />
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                      <h2 className="text-3xl feature:text-4xl font-serif mb-2">
                        {card.title}
                      </h2>
                      <a href="#" className="text-sm uppercase tracking-wider hover:underline">
                        Learn More
                      </a>
                    </div>
                  </div>
                )
            ))}
          </div>
        </div>

        {/* <Stories /> */}


      </div >
    </div >
  );
};
