import Link from 'next/link'
import { Layout } from '.'
import GoogleForm from '../components/Form'

const Poll = () => {
  return (
    <Layout>
      <div className='relative flex items-center justify-center h-screen bg-gray-50'>
        <Link
          href={
            'https://docs.google.com/forms/d/e/1FAIpQLSes8_d_Kdhv5u8ehkDHmPYD9XoTLa15z4F3CVIboO1WiSZ20Q/viewform'
          }>
          <a
            rel='noopener noreferrer'
            target='_blank'
            className='text-5xl hover:text-gecko_brand-500  mt-8 font-extrabold tracking-tight text-gray-900 font-poppins text-[70px] '>
            Take the poll
          </a>
        </Link>
        {/* <iframe src='https://docs.google.com/forms/d/1qB6wR1fx1V1tY_-FbTmvPx1CztuVCoD6Zn3Lc7nDK34/edit#responses'></iframe> */}
      </div>
    </Layout>
  )
}
export default Poll
