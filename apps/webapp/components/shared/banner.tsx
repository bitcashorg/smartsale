import React from 'react'

export function Banner() {
  return (
    <section className="w-full py-6 narrow-container">
        <div className="inline-flex flex-col items-center justify-start gap-[37px]">
          <div className="font-['Futura PT'] heading text-center text-4xl font-medium leading-[42.35px] text-neutral-50">
            Driving Global AI And Crypto Advancement
            <br />
            Through Strategic Tokenomics
          </div>
          <div className="h-[2.37px] w-[118.61px] bg-[#ff51ed]"></div>
          <div className="font-['Futura PT'] self-stretch text-center text-[15px]font-normal text-[#7e8097]">
            <span className="leading-snug">Through our </span>
            <span className="font-bold leading-snug text-white">
              unique tokenomics
            </span>
            <span className="leading-snug">
              , including a dynamic burn and mint model, we ensure that our
              tokens reflect true economic value, promoting stability and growth
              within our ecosystem. Our global-first approach ensures that we
              cater to a worldwide audience, providing tools and resources that
              are accessible to innovators around the globe.
            </span>
            <span className="font-bold leading-snug text-white">
              {' '}
              Join us at Bitlauncher
            </span>
            <span className="leading-snug">
              {' '}
              as we pave the way for a new era of technological advancement and
              community empowerment in the AI and crypto space.
            </span>
          </div>
        </div>
      
    </section>
  )
}
