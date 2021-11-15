import React from 'react';

const image = `https://media.istockphoto.com/vectors/set-of-rustic-realistic-feathers-of-different-birds-owls-peacocks-vector-id1022255880`

const Main = () => {
  return (
    <main className={main}>
      <section className={section}>
        <h2 className={h2}>Project <span className={span}>Owlfeather</span></h2>
        <figure>
          <img className={img} src={image} alt="feathers" />
          <figcaption className={caption}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non quam et erat suscipit commodo ut congue mi. Duis dictum ac mi vel condimentum. </figcaption>
        </figure>
        <p className={p}>Consequuntur, vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt repudiandae qui assumenda ducimus deleniti illo maiores cum, rem nihil sit accusantium consequatur unde, ratione laboriosam voluptas quidem! Aenean maximus diam a suscipit sagittis. </p>
        <p className={p}>Proin velit est, tempus eget ligula ut, feugiat gravida arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras nisi magna, tincidunt in ullamcorper efficitur, hendrerit ut neque. Duis sit amet dapibus nulla, sed venenatis ligula. Nunc id sollicitudin nisl. Vivamus id tincidunt risus, sit amet faucibus est. Vestibulum ultricies sapien sit amet metus congue semper. Praesent imperdiet ornare nulla, et mollis nisi aliquam et. </p>
      </section>
    </main>
  )
}

const main = `
  p-4
  text-gray-800
  lg:max-w-screen-lg
`
const section = `
  bg-white
  p-6
  rounded-xl
  shadow-lg
  sm:p-12
  lg:px-24
`

const h2 = `
  text-3xl
  font-extralight
  text-center
  sm:text-left
  sm:text-5xl
  my-4
  lg:my-10
`

const span = `
font-semibold
text-blue-400
`

const img = `
  rounded-lg
  max-h-96
  w-full
  my-4
  filter
  invert
  grayscale
  object-cover
`

const caption = `
  text-sm
  text-gray-500
  italic
  m-4
  lg:m-8
`

const p = `
  my-6
  text-justify
  sm:text-lg
  lg:text-xl
`

export default Main;
