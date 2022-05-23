import React from 'react'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { Container, Table } from 'react-bootstrap'
const Myoffer = () => {
  const offerFields=[
    {JDnumber:"01", UserId:"001user", CandidateID:"0007"},
    {JDnumber:"01", UserId:"001user", CandidateID:"0007"}
  ]
  return (
    <div>
      <NavbarMenu />
      <Sidebar />
      <Container style={{marginTop:'8rem'}}>
        <h2 className='text-center'>My Offer</h2>
        </Container>
      <div className='jd-wraper' >
            <Container  className='table-data' fluid>
                <Table responsive className='data-table' hover >
                  <thead>
                    <tr>
                      <th>JD number</th>
                      <th>User ID</th>
                      <th>Candidate ID</th>
                      <th>Client ID</th>
                      <th>Offer candidate name</th>
                      <th>Offered designation</th>
                      <th>Candidate new work location</th>
                      <th>Offered ctc</th>
                      <th>Sign up rate</th>
                      <th>Base invoice value</th>
                      <th>Offer accepted</th>
                      <th>DOJ</th>
                      <th>Resigned</th>
                      <th>User incentives (will be calculated by formula if %)</th>
                      <th>Joined</th>
                      <th>User comments/remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {offerFields.map((list) =>{return(<>
                    
                    <tr>
                      <td>{list.JDnumber}</td>
                      <td>{list.UserId}</td>
                      <td>{list.CandidateID}</td>
                    </tr>
                    </>)})}
                  </tbody>
                </Table>
                
                </Container>
                </div>
    </div>
  )
}

export default Myoffer