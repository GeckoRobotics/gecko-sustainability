import { Layout } from '.'
import GoogleForm from '../components/Form'

const Poll = () => {
  return (
    <Layout>
      <div className='relative flex items-center justify-center h-screen overflow-hidden bg-gray-50'>
        Poll
        <GoogleForm />
      </div>
    </Layout>
  )
}
export default Poll
