import React from 'react'
import './Dashboard.css'
function Dashboard() {
  return (
    <>
      <div class="container text-center ">
        <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-4 mt-4">

          <div class="col">
            <div class="p-3 border border-dark-subtle border-3 rounded bg-transparent ">
              <p><i class="bi bi-person"></i> STUDENTS  <br />
                <h4>149</h4>
              </p>
            </div>
          </div>

          <div class="col">
            <div class="p-3 border border-dark-subtle border-3 rounded bg-transparent" >
              <p><i class="bi bi-check-circle-fill"></i> STUDENTS ATTENDANCE <br />
                <h4>2/149</h4>
              </p>
            </div>
          </div>
          <div class="col">
            <div class="p-3 border border-dark-subtle border-3 rounded bg-transparent" >
              <p class="text-bs-dark"><i class="bi bi-people"></i> EMPLOYEES <br />
                <h4>87</h4>
              </p>
            </div>
          </div>
          <div class="col">
            <div class="p-3 border border-dark-subtle border-3 rounded bg-transparent" >
              <p><i class="bi bi-person-vcard-fill"></i> EMPLOYEE ATTENDANCE <br />
                <h4>2/82</h4>
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Dashboard