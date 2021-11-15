import React from 'react';

const image = `https://media.istockphoto.com/vectors/set-of-rustic-realistic-feathers-of-different-birds-owls-peacocks-vector-id1022255880`

const Main = () => {
  return (
    <main className={main}>
      <section className={section}>
        <h2 className={h2}>Project <span className={span}>Owlfeather</span></h2>
        <img className={img} src={image} alt="feathers" />
        <p className={caption}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non quam et erat suscipit commodo ut congue mi. Duis dictum ac mi vel condimentum. </p>
        <p className={p}>Aenean maximus diam a suscipit sagittis. Proin velit est, tempus eget ligula ut, feugiat gravida arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras nisi magna, tincidunt in ullamcorper efficitur, hendrerit ut neque. Duis sit amet dapibus nulla, sed venenatis ligula. Nunc id sollicitudin nisl. Vivamus id tincidunt risus, sit amet faucibus est. Vestibulum ultricies sapien sit amet metus congue semper. Praesent imperdiet ornare nulla, et mollis nisi aliquam et. Sed id ligula eros. Cras semper finibus ante eget imperdiet. Aliquam in mauris lacus. Nulla eu ex vitae tortor iaculis tincidunt ac vitae arcu. Proin dignissim facilisis tempor.</p>
      <p className={p}>Laudantium repellat dicta dolorem voluptates dolores alias incidunt ipsa nam pariatur illo aspernatur, necessitatibus minima atque, ut dolorum voluptas! Consequuntur, vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt repudiandae qui assumenda ducimus deleniti illo maiores cum, rem nihil sit accusantium consequatur unde, ratione laboriosam voluptas quidem! Totam, ullam? Impedit quisquam aliquid sint nemo aperiam quod, obcaecati consectetur consequuntur? Aut et reprehenderit quia ab impedit dolorum possimus dignissimos minus explicabo accusamus.</p>
      </section>
    </main>
  )
}

const main = `
  p-4
  text-gray-800
`
const section = `
  bg-white
  p-6
  rounded-xl
  shadow-lg
`

const h2 = `
  text-4xl
  font-extralight
  text-center
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
`

const p = `
  my-6
  text-justify
`

export default Main;
