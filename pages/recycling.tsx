import { Layout } from '.'
// @ts-ignore
import file from '../assets/no-plastic-bags.pdf'
// @ts-ignore

import file2 from '../assets/recycling-right.pdf'
// @ts-ignore

import file3 from '../assets/recycling-toolkit.pdf'

const Recycling = () => {
  return (
    <Layout>
      <div className='relative flex items-center justify-center h-screen overflow-hidden bg-gray-50'>
        <div className='relative flex items-center justify-center h-screen overflow-hidden bg-gray-50'>
          {/* Global */}
          <iframe
            style={{ width: '563px', height: '666px' }}
            src={file}
            //@ts-ignore
            type='application/pdf'
            title='title'
          />
          <iframe
            style={{ width: '563px', height: '666px' }}
            src={file2}
            //@ts-ignore
            type='application/pdf'
            title='title'
          />
          <iframe
            style={{ width: '563px', height: '666px' }}
            src={file3}
            //@ts-ignore
            type='application/pdf'
            title='title'
          />
        </div>
      </div>
    </Layout>
  )
}
export default Recycling
