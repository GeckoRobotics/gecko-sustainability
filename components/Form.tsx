import React from 'react'
import { googleFormsToJson } from 'react-google-forms-hooks'
const GoogleForm = () => {
  React.useEffect(() => {
    const getData = async () => {
      // can use both full and shortened form url
      const result = await googleFormsToJson(
        'https://docs.google.com/forms/d/e/1FAIpQLSes8_d_Kdhv5u8ehkDHmPYD9XoTLa15z4F3CVIboO1WiSZ20Q/viewform'
      )

      console.log(result.fields)
    }

    getData()
  }, [])
  return <div></div>
}

export default GoogleForm
