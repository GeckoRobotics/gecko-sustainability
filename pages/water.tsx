import { Layout } from '.'

const Water = () => {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center h-screen bg-gray-50'>
        Water
        <span className='mt-8 font-extrabold tracking-tight text-gray-900 font-poppins text-8xl'>
          Operations
        </span>
        Consume <b>~4,900 gallons per job</b> <br />
        This adds up to over <b> 1.25 million gallons</b> for the 260 jobs in 2021! <br />{' '}
        Equivalent to <b> 75,000 eight minute showers</b> or about{' '}
        <b>two olympic swimming pools</b> <br />
        <span className='mt-8 font-extrabold tracking-tight text-gray-900 font-poppins text-8xl'>
          Office{' '}
        </span>{' '}
        Consume <b>~50,000 gallons</b> annually based on similar Nova Place offices
        <br /> Accurate metrics will be available at the end of the year. <br />{' '}
        <span className='mt-8 font-extrabold tracking-tight text-gray-900 font-poppins text-8xl'>
          Suggestions{' '}
        </span>{' '}
        <br /> Standardize inspection procedure to limit unnecessary water usage Add flow
        measurement and recording capabilities to Base Station Design future robots to use
        less water
      </div>
    </Layout>
  )
}
export default Water
