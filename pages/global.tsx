import { Layout } from '.'
// @ts-ignore
import file from '../assets/no-plastic-bags.pdf'

const Global = () => {
  return (
    <Layout>
      <div className='relative flex items-center justify-center h-screen overflow-hidden bg-gray-50'>
        {/* Global */}
        <iframe
          style={{ width: '563px', height: '666px' }}
          src={file}
          //@ts-ignore
          type='application/pdf'
          title='title'
        />
      </div>
    </Layout>
  )
}
export default Global
