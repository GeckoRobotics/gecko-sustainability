import { Layout } from '.'

const MaterialTrash = () => {
  return (
    <Layout>
      <div className='relative flex items-center justify-center h-screen bg-gray-50'>
        <span>
          Office Generation The Pittsburgh office generates approximately 300 lbs of trash
          on a daily basis This is in-line with the national average National office
          average: 1 lb of trash per 100 ft2 With the PGH office at ~50% capacity, the
          ballpark estimate would be 350 lbs R&D, Engineering Generation Numbers from the
          move: 3000 lbs of materials (old parts, scrap, general trash) 1000 lbs of
          e-waste (monitors, computers, cables, etc.)
        </span>
        <span>
          Material Trash Building-wide waste management is handled by Nova Place. Trash 3
          compactors under the building, each pulled once a month Goes directly to
          landfill Recycling Pulled twice a month Issues with cross contamination across
          the building Composting Previously attempted to implement it but failed due to
          cross contamination issues Food Waste Reduction Food ordering has been balanced
          to a good approximate headcount less food leftovers Served Food: Put in the
          leftovers fridge for anyone to take (free food!) Unserved food: Donated to 412
          Food Rescue
        </span>
      </div>
    </Layout>
  )
}
export default MaterialTrash
