import React from 'react'
import { Fragment } from 'react'

function SearchSession() {
  return (
    <Fragment>
        <div className="section1-search">
        <form>
          <input
            type="search"
            placeholder="Search.."
            name="Search"
            id="search"
          />
        </form>

        <div className="location-jobs">
          <form action="/">
            <input
              type="location"
              name="location"
              placeholder="Location"
              id="country"
            />
          </form>
          <form action="/">
            <label name="job-type" placeholder="Job Type"></label>
            <select name="job-type" placeholder="Job Type" id="jobs">
              <option value="Frontend dev">Job Type</option>
              <option value="Frontend dev">Backend Dev</option>
              <option value="Frontend dev">Dev OPS</option>
              <option value="Frontend dev">Data Science</option>
              <option value="Frontend dev">Machine Learning</option>
            </select>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default SearchSession