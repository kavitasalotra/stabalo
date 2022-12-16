import groq from 'groq'
import sanityClient from '../../../utils/client';

const Post = ({}) => {

  return (
    <article>

    </article>
  )
}

const query = groq`*[_type == "blog" && slug.current == $slug][0]{

}`

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    groq`*[_type == "blog" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const blog = await client.fetch(query, { slug })
  return {
    props: {
      blog
    }
  }
}
export default Post