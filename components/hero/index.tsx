import Link from 'next/link'
import { AnimatedText } from '../framer/animated-text'
import MovingSticker from '../framer/moving-sticker'

export default function Hero() {
  return (
    <section className="flex flex-col px-4 flex-grow pt-5">
      <article className="h-[calc(100svh-90px)] relative pb-[90px] grid place-content-center">
        <div className="pointer-events-none xl:opacity-100 opacity-30 select-none  overflow-hidden inset-0">
          <div className="absolute left-56 max-xl:left-10 -z-10 top-20">
            <MovingSticker
              tiltIntensity={10}
              intensity={5}
              transitionSpeed={0.15}
            >
              <img src="/stickers/1.webp" width={120} alt="Sticker" />
            </MovingSticker>
          </div>
          <div className="absolute bottom-56 left-72 max-xl:bottom-12 max-xl:left-20">
            <MovingSticker
              tiltIntensity={5}
              intensity={8}
              transitionSpeed={0.1}
            >
              <img src="/stickers/2.webp" width={150} alt="Sticker" />
            </MovingSticker>
          </div>
          <div className="absolute bottom-64 max-xl:bottom-52 right-40 max-xl:right-10">
            <MovingSticker
              tiltIntensity={3}
              intensity={13}
              transitionSpeed={0.2}
            >
              <img src="/stickers/3.webp" width={130} alt="Sticker" />
            </MovingSticker>
          </div>
          <div className="absolute top-24 right-72 max-xl:top-11 max-xl:right-12">
            <MovingSticker
              tiltIntensity={7}
              intensity={2}
              transitionSpeed={0.5}
            >
              <img src="/stickers/4.webp" width={150} alt="Sticker" />
            </MovingSticker>
          </div>
          <div className="absolute top-16 mx-auto left-[50%] translate-x-[-50%]">
            <MovingSticker
              tiltIntensity={15}
              intensity={5}
              transitionSpeed={0.2}
            >
              <img src="/stickers/5.webp" width={70} alt="Sticker" />
            </MovingSticker>
          </div>
          <div className="absolute bottom-24 mx-auto left-[50%] translate-x-[-50%]">
            <MovingSticker
              tiltIntensity={9}
              intensity={2}
              transitionSpeed={0.1}
            >
              <img src="/stickers/6.webp" width={80} alt="Sticker" />
            </MovingSticker>
          </div>
          <div className="absolute top-72 left-96">
            <MovingSticker
              tiltIntensity={3}
              intensity={13}
              transitionSpeed={0.15}
            >
              <img src="/stickers/10.webp" width={100} alt="Sticker" />
            </MovingSticker>
          </div>
          <div className="absolute top-72 right-20">
            <MovingSticker
              tiltIntensity={18}
              intensity={7}
              transitionSpeed={0.3}
            >
              <img src="/stickers/8.webp" width={100} alt="Sticker" />
            </MovingSticker>
          </div>
        </div>
        <AnimatedText
          className="text-center relative font-larken max-w-[10ch] mx-auto text-[80px] leading-[80px] tracking-tighter"
          once
          el="h1"
          text="Explora el mundo de la moda"
        />
        <p className="font-hellix relative text-center mt-5 max-w-[30ch] opacity-80 mx-auto">
          366 Clothing, lugar donde encontrarás las mejores outfits para ti.
        </p>
        <Link
          href="/products"
          className="p-2 px-4 block rounded-full relative w-fit mx-auto mt-5 hover:bg-yellow-100 bg-yellow-50 text-black hover:scale-110 transition-all"
        >
          Ver catálogo
        </Link>
      </article>
    </section>
  )
}
