import { motion, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-black min-h-screen text-white pt-20">
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 origin-left bg-red-600"
        style={{ scaleX: scrollYProgress }}
      />
      <p className="w-80 mx-auto text-xl leading-8">
        Tempor commodo non laborum tempor amet fugiat esse qui exercitation
        tempor ipsum. Mollit occaecat proident amet elit exercitation. Sunt do
        ut dolor in quis est deserunt mollit reprehenderit in enim. Cupidatat
        est consectetur nostrud duis culpa proident laboris. Aute aute non irure
        ea. Aliqua et culpa ullamco eu ullamco.Amet fugiat Lorem voluptate
        incididunt nisi aliqua exercitation ipsum aliqua est id. Nulla in dolor
        dolor et. Elit pariatur consequat Lorem aute mollit culpa sit. Laborum
        sint esse fugiat consectetur dolore et occaecat qui velit reprehenderit
        deserunt.Dolor officia sit officia irure Lorem qui ex eiusmod dolore
        duis consequat voluptate reprehenderit. Ipsum qui do sunt cillum
        reprehenderit fugiat culpa deserunt. Deserunt adipisicing aliqua mollit
        ut. Non proident amet est occaecat eu deserunt sit enim duis Lorem
        aliqua.Aliquip cupidatat nulla ipsum do officia consectetur quis.
        Laborum et consectetur labore exercitation ea magna dolor est. Quis
        adipisicing aliqua nisi aliqua elit non ad. Id est ipsum fugiat ea
        consectetur Lorem incididunt amet. Eu incididunt nisi exercitation
        pariatur enim dolore reprehenderit. Occaecat ut proident voluptate id in
        id nisi.Nulla mollit tempor ut aliqua nisi commodo eu ex enim excepteur
        officia eu est. Sit aliqua est pariatur veniam culpa cillum nulla labore
        Lorem esse cillum. Exercitation dolor sunt consectetur magna nulla
        irure.Duis excepteur veniam anim nisi nostrud magna reprehenderit culpa
        voluptate. Tempor nostrud veniam fugiat sunt laboris. Velit sint nisi
        tempor sint nisi ea sit. Labore minim enim est commodo magna id
        cupidatat quis.
      </p>
    </div>
  );
}
