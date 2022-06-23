import Link from 'next/link'
import { Layout } from '.'

const Responsibility = () => {
  return (
    <Layout>
      <div>
        <div className='relative flex justify-center h-screen bg-gray-50'>
          <div className='mt-8 '>
            <span className='mb-12 text-6xl font-poppins text-gecko_brand-600_base'>
              Links
            </span>
            <ul className='mt-8'>
              <li>
                <Link
                  href={
                    'https://www.forbes.com/sites/forbesbusinesscouncil/2020/11/18/the-growing-importance-of-social-responsibility-in-business/?sh=1d3ab02283b6'
                  }>
                  <a
                    rel='noopener noreferrer'
                    target='_blank'
                    className='hover:text-gecko_brand-500 '>
                    Forbes Council Post: The Growing Importance Of Social Responsibility
                    In Business{' '}
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href={
                    'https://www.forbes.com/sites/afdhelaziz/2020/03/07/the-power-of-purpose-the-business-case-for-purpose-all-the-data-you-were-looking-for-pt-2/?sh=2d59dc9c3cf7'
                  }>
                  <a
                    rel='noopener noreferrer'
                    target='_blank'
                    className='hover:text-gecko_brand-500 '>
                    The Power Of Purpose: The Business Case For Purpose{' '}
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Responsibility
