import Image from 'next/image'
import * as Global from '../assets/global.png'
import * as Responsibility from '../assets/responsibility.jpeg'
import * as SocialResponsibility from '../assets/social-responsibility.png'
import * as Improvement from '../assets/improvement.png'
import * as Res from '../assets/responsibility.jpg'
import Link from 'next/link'

const posts = [
  {
    title: 'Global',
    href: '/global',
    category: { name: 'Global', href: '/global', color: 'bg-indigo-100 text-indigo-800' },
    description: 'Local, sustainable, environmental initiatives',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Paul York',
      href: '#',
      imageUrl: Global,
    },
    readingTime: '6 min',
  },
  {
    title: 'Responsibility',
    href: '/responsibility',
    category: {
      name: 'Responsibility',
      href: '/responsibility',
      color: 'bg-pink-100 text-pink-800',
    },
    description: 'What part can you play?',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    author: {
      name: 'Dessie Ryan',
      href: '#',
      imageUrl: Res,
    },
    readingTime: '4 min',
  },
  {
    title: 'Improvement',
    href: '/improvement',
    category: {
      name: 'Improvement',
      href: '/improvement',
      color: 'bg-green-100 text-green-800',
    },
    description: 'Make our future better',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    author: {
      name: 'Easer Collins',
      href: '#',
      imageUrl: Improvement,
    },
    readingTime: '11 min',
  },
  {
    title: 'Tracking',
    href: '/tracking',
    category: {
      name: 'Tracking',
      href: '/tracking',
      color: 'bg-green-100 text-green-800',
    },
    description: 'Track, compete, share',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    author: {
      name: 'Easer Collins',
      href: '#',
      imageUrl: SocialResponsibility,
    },
    readingTime: '11 min',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className='h-full px-4 pt-16 pb-20 bg-gray-50 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
      <div className='relative max-w-lg mx-auto lg:max-w-7xl'>
        <div>
          <h2
            style={{ lineHeight: 0 }}
            className=' font-extrabold tracking-tight text-gray-900 font-poppins text-[85px]'>
            G.R.I.T.
          </h2>
          {/* <p className='mt-3 text-xl text-gray-500 sm:mt-4'>
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa
            dictumst amet. Sapien tortor lacus arcu.
          </p> */}
        </div>
        <div className='grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-4 lg:max-w-none'>
          {posts.map((post) => (
            <div
              key={post.title}
              className='flex flex-col overflow-hidden rounded-lg shadow-lg'>
              <div className='flex-shrink-0'>
                <Link href={post.category.href}>
                  <Image
                    className='object-cover w-full h-32 cursor-pointer'
                    src={post.author.imageUrl}
                    alt=''
                    height={'158px'}
                    width={'305px'}
                  />
                </Link>
              </div>
              <div className='flex flex-col justify-between flex-1 p-6 bg-white'>
                <div className='flex-1'>
                  <p className='text-sm font-medium text-gecko_brand-600_base'>
                    <Link href={post.category.href}>
                      <a href={post.category.href} className='hover:underline'>
                        {post.category.name}
                      </a>
                    </Link>
                  </p>
                  <a href={post.href} className='block mt-2'>
                    <p className='text-xl font-semibold text-gray-900'>{post.title}</p>
                    <p className='mt-3 text-base text-gray-500'>{post.description}</p>
                  </a>
                </div>
                <div className='flex items-center mt-6'>
                  <div className='flex-shrink-0'>
                    <span className='sr-only'>{post.author.name}</span>
                    {/* <Image
                        className='w-10 h-10 rounded-full'
                        src={post.author.imageUrl}
                        alt=''
                      /> */}
                  </div>
                  {/* <div className='ml-3'>
                    <p className='text-sm font-medium text-gray-900'>
                      <a href={post.author.href} className='hover:underline'>
                        {post.author.name}
                      </a>
                    </p>
                    <div className='flex space-x-1 text-sm text-gray-500'>
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden='true'>&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className='grid gap-16 pt-12 mt-12 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-12'>
          {posts.map((post) => (
            <div key={post.title}>
              <div>
                <a href={post.category.href} className='inline-block'>
                  <span
                    className={classNames(
                      post.category.color,
                      'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
                    )}>
                    {post.category.name}
                  </span>
                </a>
              </div>
              <a href={post.href} className='block mt-4'>
                <p className='text-xl font-semibold text-gray-900'>{post.title}</p>
                <p className='mt-3 text-base text-gray-500'>{post.description}</p>
              </a>
              <div className='flex items-center mt-6'>
                <div className='flex-shrink-0'>
                  <a href={post.author.href}>
                    <span className='sr-only'>{post.author.name}</span>
                    <img
                      className='w-10 h-10 rounded-full'
                      src={post.author.imageUrl}
                      alt=''
                    />
                  </a>
                </div>
                <div className='ml-3'>
                  <p className='text-sm font-medium text-gray-900'>
                    <a href={post.author.href}>{post.author.name}</a>
                  </p>
                  <div className='flex space-x-1 text-sm text-gray-500'>
                    <time dateTime={post.datetime}>{post.date}</time>
                    <span aria-hidden='true'>&middot;</span>
                    <span>{post.readingTime} read</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
      <div className='text-center '>
        <h2
          // style={{ lineHeight: 0 }}
          className=' mt-8 font-extrabold tracking-tight text-gray-900 font-poppins text-[70px]'>
          Short-Term Actions
        </h2>{' '}
        <span></span>
        <ul>
          <li>Deploy signage around cross-contamination </li>
          <li>Reduce single-use waste by using coffee mugs and the dishwashers</li>{' '}
          <li>Standardize operating procedure to minimize water waste</li>
          <li>
            {' '}
            Consider changing the standard note regarding ‘individually package and label
            components
          </li>{' '}
          <li>
            {' '}
            Hold a ‘Sustainability Challenge’ Month - team with lowest carbon footprint
            wins a prize
          </li>
        </ul>
        <h2
          // style={{ lineHeight: 0 }}
          className=' mt-8 font-extrabold tracking-tight text-gray-900 font-poppins text-[70px]'>
          Long-Term Vision
        </h2>{' '}
        <ul>
          <li>Setup compost plan/process at Nova to address remaining food waste </li>
          <li>Add logging/reporting to existing flow-meter in base station</li>{' '}
          <li>Possibly automated on/off for water (tied to driving/inspection)</li>
          <li> Implement sustainable travel policies</li>{' '}
        </ul>
      </div>
    </div>
  )
}
